"use client";
import { useState } from "react";
import ImageUpload from "../common/ImageUpload";
import Image from "next/image";

const UpdateProduct = () => {
  const [searchName, setSearchName] = useState("");
  const [product, setProduct] = useState(null);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/products/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: searchName }), // Send product name in the request body
      });

      const data = await response.json();

      if (response.ok) {
        setProduct(data.product);
        setDescription(data.product.description);
        setImageUrl(data.product.imageUrl);
      } else {
        alert(data.message || "Failed to fetch product");
        setProduct(null);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      alert("Failed to fetch product");
    }
  };

  const handleImageUpload = (url) => {
    setImageUrl(url);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "description":
        setDescription(value);
        break;
      case "imageUrl":
        setImageUrl(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!product) {
      alert("Please search for a product first");
      return;
    }

    try {
      const response = await fetch(
        `${apiUrl}/api/products/update/${product.name}`,
        {
          // Adjust URL as needed
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description,
            imageUrl,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        // Optionally, reset form fields or search name
        setSearchName("");
        setProduct(null);
        setDescription("");
        setImageUrl("");
      } else {
        alert(data.message || "Failed to update product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to update product");
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Update Product</h1>

      <div className="mb-4">
        <input
          type="text"
          value={searchName}
          onChange={handleSearchChange}
          placeholder="Search Product Name"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>

      {product && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={product.name}
            disabled
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          <textarea
            name="description"
            value={description}
            onChange={handleInputChange}
            placeholder="Product Description"
            required
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={handleInputChange}
            placeholder="Image URL"
            required
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ImageUpload onImageUpload={handleImageUpload} />
          {imageUrl && (
            <div>
              <h2>Uploaded Image:</h2>
              <Image
                src={imageUrl}
                alt="Uploaded"
                width={300}
                height={300}
                className="w-[300px] h-[300px]"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Product
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateProduct;
