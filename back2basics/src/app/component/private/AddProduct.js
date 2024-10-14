"use client";
import { useState, useEffect } from "react";
import ImageUpload from "../common/ImageUpload";
import Image from "next/image";
import { px } from "framer-motion";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const handleImageUpload = (url) => {
    setimageUrl(url);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setname(value);
        break;
      case "description":
        setdescription(value);
        break;
      case "imageUrl":
        setimageUrl(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/products/add`, {
        // Adjust the URL as needed
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          imageUrl,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        // Optionally, reset form fields
        setname("");
        setdescription("");
        setimageUrl("");
      } else {
        alert(data.message || "Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add product");
    }
  };
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Admin Panel</h1>

      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Product Name"
        required
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Product
      </button>
    </div>
  );
};

export default AdminProducts;
