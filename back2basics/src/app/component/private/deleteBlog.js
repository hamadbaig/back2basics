"use client";
import { useState, useEffect } from "react";

const DeleteBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  // Fetch all blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/blogs/getAllBlogs`);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [apiUrl]);

  // Delete blog by ID
  const handleDeleteBlog = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${apiUrl}/api/blogs/deleteblog/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete blog");

      // Update the state by removing the deleted blog from the list
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      alert("Blog deleted successfully");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Delete Blog</h1>
      {loading && <p>Loading blogs...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Select a Blog to Delete</h2>
        <ul className="list-disc pl-5">
          {blogs.map((blog) => (
            <li
              key={blog._id}
              className="cursor-pointer text-blue-500 hover:underline flex justify-between items-center"
            >
              {blog.name}
              <button
                onClick={() => handleDeleteBlog(blog._id)}
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

export default DeleteBlog;
