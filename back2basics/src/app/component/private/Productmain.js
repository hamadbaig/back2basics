"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // Fetch product data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/getAllProducts`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {products.map((product, index) => (
        <div
          key={product._id || index}
          className={`flex flex-col-reverse ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } gap-4 justify-center items-center p-6 md:p-12 bg-white rounded-lg shadow-md`}
        >
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
          </div>
          <div className="md:w-1/3">
            <Image
              width={100}
              height={100}
              src={product.imageUrl}
              alt={product.name}
              className="rounded-lg"
              layout="responsive"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
