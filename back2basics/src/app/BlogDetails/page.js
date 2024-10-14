"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const response = await fetch(`${apiUrl}/api/blogs/blogsbyId/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch blog");
          }
          const data = await response.json();
          setBlog(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // No ID provided
      }
    };

    fetchBlog();
  }, [id, apiUrl]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!blog) return <div className="text-center py-10">No blog found</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl mx-auto">
        <Image
          width={1000}
          height={600}
          className="w-full h-64 object-cover"
          src={blog.imageUrl}
          alt={blog.name}
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{blog.name}</h1>
          <p className="text-gray-700 text-lg mb-6">{blog.description}</p>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">{blog.title1}</h2>
            <p className="text-gray-600">{blog.heading1}</p>

            {blog.title2 && (
              <div>
                <h3 className="text-xl font-semibold mt-4">{blog.title2}</h3>
                <p className="text-gray-600">{blog.heading2}</p>
              </div>
            )}

            {blog.title3 && (
              <div>
                <h3 className="text-xl font-semibold mt-4">{blog.title3}</h3>
                <p className="text-gray-600">{blog.heading3}</p>
              </div>
            )}

            {blog.title4 && (
              <div>
                <h3 className="text-xl font-semibold mt-4">{blog.title4}</h3>
                <p className="text-gray-600">{blog.heading4}</p>
              </div>
            )}

            {blog.title5 && (
              <div>
                <h3 className="text-xl font-semibold mt-4">{blog.title5}</h3>
                <p className="text-gray-600">{blog.heading5}</p>
              </div>
            )}

            <h2 className="text-2xl font-semibold mt-6">{blog.title6}</h2>
            <p className="text-gray-600">{blog.heading6}</p>

            {blog.title7 && (
              <div>
                <h3 className="text-xl font-semibold mt-4">{blog.title7}</h3>
                <p className="text-gray-600">{blog.heading7}</p>
              </div>
            )}

            {blog.title8 && (
              <div>
                <h3 className="text-xl font-semibold mt-4">{blog.title8}</h3>
                <p className="text-gray-600">{blog.heading8}</p>
              </div>
            )}

            {blog.title9 && (
              <div>
                <h3 className="text-xl font-semibold mt-4">{blog.title9}</h3>
                <p className="text-gray-600">{blog.heading9}</p>
              </div>
            )}

            <h2 className="text-2xl font-semibold mt-6">{blog.title10}</h2>
            <p className="text-gray-600">{blog.heading10}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogDetailsWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogDetails />
    </Suspense>
  );
};

export default BlogDetailsWrapper;
