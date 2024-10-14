"use client";
import { useState, useEffect } from "react";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/products/getAllProducts`; // API endpoint for fetching products
  const deleteApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/products/deleteProduct`; // API endpoint for deleting a product

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  // Delete product by ID
  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${deleteApiUrl}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete product");

      // Update the state by removing the deleted product from the list
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
      alert("Product deleted successfully");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Delete Product</h1>
      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Select a Product to Delete</h2>
        <ul className="list-disc pl-5">
          {products.map((product) => (
            <li
              key={product._id}
              className="cursor-pointer text-blue-500 hover:underline flex justify-between items-center"
            >
              {product.name}
              <button
                onClick={() => handleDeleteProduct(product._id)}
                className="text-red-500 ml-4 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeleteProduct;
