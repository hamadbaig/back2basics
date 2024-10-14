// components/BlogList.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/blogs/getAllBlogs`); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const handleProductClick = (product) => {
    router.push(`/BlogDetails?id=${encodeURIComponent(product._id)}`);
  };
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Blog</h1>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {post.imageUrl && (
              <Image
                width={100}
                height={100}
                src={post.imageUrl}
                alt={post.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-700">
                {post.name}
              </h2>
              <p className="text-gray-600 mt-2">
                {post.description.slice(0, 100)}...{" "}
              </p>
              <a
                onClick={() => handleProductClick(post)}
                className="text-blue-500 mt-4 inline-block cursor-pointer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-8">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Your Business Name
        </p>
      </footer>
    </div>
  );
};

export default BlogList;
