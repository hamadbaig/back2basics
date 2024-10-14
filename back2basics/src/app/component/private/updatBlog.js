// "use client";
// import { useState, useEffect } from "react";
// import ImageUpload from "../common/ImageUpload";
// import Image from "next/image";

// const UpdateBlog = () => {
//   const [posts, setPosts] = useState([]);
//   const [selectedBlog, setSelectedBlog] = useState(null); // Store selected blog
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     description: "",
//     imageUrl: "",
//     title1: "",
//     heading1: "",
//     title2: "",
//     heading2: "",
//     title3: "",
//     heading3: "",
//     title4: "",
//     heading4: "",
//     title5: "",
//     heading5: "",
//     title6: "",
//     heading6: "",
//     title7: "",
//     heading7: "",
//     title8: "",
//     heading8: "",
//     title9: "",
//     heading9: "",
//     title10: "",
//     heading10: "",
//   });

//   const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

//   // Fetch all blogs on mount
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(`${apiUrl}/api/blogs/getAllBlogs`);
//         if (!response.ok) throw new Error("Failed to fetch blogs");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, [apiUrl]);

//   // Fetch blog by ID when selected
//   const handleSelectBlog = async (id) => {
//     try {
//       const response = await fetch(`${apiUrl}/api/blogs/blogsbyId/${id}`);
//       if (!response.ok) throw new Error("Failed to fetch blog details");
//       const blog = await response.json();
//       setSelectedBlog(blog);
//       setFormData({
//         description: blog.description || "",
//         imageUrl: blog.imageUrl || "",
//         title1: blog.title1 || "",
//         heading1: blog.heading1 || "",
//         title2: blog.title2 || "",
//         heading2: blog.heading2 || "",
//         title3: blog.title3 || "",
//         heading3: blog.heading3 || "",
//         title4: blog.title4 || "",
//         heading4: blog.heading4 || "",
//         title5: blog.title5 || "",
//         heading5: blog.heading5 || "",
//         title6: blog.title6 || "",
//         heading6: blog.heading6 || "",
//         title7: blog.title7 || "",
//         heading7: blog.heading7 || "",
//         title8: blog.title8 || "",
//         heading8: blog.heading8 || "",
//         title9: blog.title9 || "",
//         heading9: blog.heading9 || "",
//         title10: blog.title10 || "",
//         heading10: blog.heading10 || "",
//       });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Handle image upload
//   const handleImageUpload = (url) => {
//     setFormData((prevData) => ({ ...prevData, imageUrl: url }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!selectedBlog) return alert("No blog selected");

//     try {
//       console.log("Blog ID:", selectedBlog._id); // Log the selectedBlog ID to verify
//       const response = await fetch(
//         `${apiUrl}/api/blogs/updateBlog/${selectedBlog._id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         alert("Blog updated successfully");
//         setSelectedBlog(null);
//         // Clear form data
//       } else {
//         alert(data.message || "Failed to update blog");
//       }
//     } catch (error) {
//       alert("Error updating blog");
//     }
//   };

//   return (
//     <div className="p-4 md:p-8 lg:p-12">
//       <h1 className="text-2xl md:text-3xl font-bold mb-4">Update Blog</h1>

//       <div className="container mx-auto px-4 py-6">
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-4">Choose a Blog to Edit</h2>
//           {loading && <p>Loading blogs...</p>}
//           {error && <p className="text-red-500">{error}</p>}
//           <ul className="list-disc pl-5">
//             {posts.map((blog) => (
//               <li
//                 key={blog._id}
//                 className="cursor-pointer text-blue-500 hover:underline"
//                 onClick={() => handleSelectBlog(blog._id)}
//               >
//                 {blog.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {selectedBlog && (
//         <form onSubmit={handleSubmit}>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             placeholder="Blog Description"
//             required
//             className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
//           />
//           <input
//             type="text"
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleInputChange}
//             placeholder="Image URL"
//             required
//             className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
//           />
//           <ImageUpload onImageUpload={handleImageUpload} />
//           {formData.imageUrl && (
//             <div>
//               <h2>Uploaded Image:</h2>
//               <Image
//                 src={formData.imageUrl}
//                 alt="Uploaded"
//                 width={300}
//                 height={300}
//               />
//             </div>
//           )}

//           {/* Repeat form fields for titles and headings */}
//           {Array.from({ length: 10 }).map((_, i) => (
//             <div key={i}>
//               <h2>Title {i + 1}</h2>
//               <input
//                 type="text"
//                 name={`title${i + 1}`}
//                 value={formData[`title${i + 1}`]}
//                 onChange={handleInputChange}
//                 placeholder={`Title ${i + 1}`}
//                 className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
//               />
//               <h2>details {i + 1}</h2>
//               <textarea
//                 name={`heading${i + 1}`}
//                 value={formData[`heading${i + 1}`]}
//                 onChange={handleInputChange}
//                 placeholder={`Heading ${i + 1}`}
//                 className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>
//           ))}

//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md"
//           >
//             Update Blog
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default UpdateBlog;
"use client";
import { useState, useEffect } from "react";
import ImageUpload from "../common/ImageUpload";
import Image from "next/image";

const UpdateBlog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null); // Store selected blog
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "", // New field for blog name
    description: "",
    imageUrl: "",
    title1: "",
    heading1: "",
    title2: "",
    heading2: "",
    title3: "",
    heading3: "",
    title4: "",
    heading4: "",
    title5: "",
    heading5: "",
    title6: "",
    heading6: "",
    title7: "",
    heading7: "",
    title8: "",
    heading8: "",
    title9: "",
    heading9: "",
    title10: "",
    heading10: "",
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  // Fetch all blogs on mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/blogs/getAllBlogs`);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [apiUrl]);

  // Fetch blog by ID when selected
  const handleSelectBlog = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/blogs/blogsbyId/${id}`);
      if (!response.ok) throw new Error("Failed to fetch blog details");
      const blog = await response.json();
      setSelectedBlog(blog);
      setFormData({
        name: blog.name || "", // Populate the name field
        description: blog.description || "",
        imageUrl: blog.imageUrl || "",
        title1: blog.title1 || "",
        heading1: blog.heading1 || "",
        title2: blog.title2 || "",
        heading2: blog.heading2 || "",
        title3: blog.title3 || "",
        heading3: blog.heading3 || "",
        title4: blog.title4 || "",
        heading4: blog.heading4 || "",
        title5: blog.title5 || "",
        heading5: blog.heading5 || "",
        title6: blog.title6 || "",
        heading6: blog.heading6 || "",
        title7: blog.title7 || "",
        heading7: blog.heading7 || "",
        title8: blog.title8 || "",
        heading8: blog.heading8 || "",
        title9: blog.title9 || "",
        heading9: blog.heading9 || "",
        title10: blog.title10 || "",
        heading10: blog.heading10 || "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (url) => {
    setFormData((prevData) => ({ ...prevData, imageUrl: url }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedBlog) return alert("No blog selected");

    try {
      console.log("Blog ID:", selectedBlog._id); // Log the selectedBlog ID to verify
      const response = await fetch(
        `${apiUrl}/api/blogs/updateBlog/${selectedBlog._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert("Blog updated successfully");
        setSelectedBlog(null);
        // Clear form data
      } else {
        alert(data.message || "Failed to update blog");
      }
    } catch (error) {
      alert("Error updating blog");
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Update Blog</h1>

      <div className="container mx-auto px-4 py-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Choose a Blog to Edit</h2>
          {loading && <p>Loading blogs...</p>}
          {error && <p className="text-red-500">{error}</p>}
          <ul className="list-disc pl-5">
            {posts.map((blog) => (
              <li
                key={blog._id}
                className="cursor-pointer text-blue-500 hover:underline"
                onClick={() => handleSelectBlog(blog._id)}
              >
                {blog.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedBlog && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Blog Name"
            required
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Blog Description"
            required
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            placeholder="Image URL"
            required
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          />
          <ImageUpload onImageUpload={handleImageUpload} />
          {formData.imageUrl && (
            <div>
              <h2>Uploaded Image:</h2>
              <Image
                src={formData.imageUrl}
                alt="Uploaded"
                width={300}
                height={300}
              />
            </div>
          )}

          {/* Repeat form fields for titles and headings */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}>
              <h2>Title {i + 1}</h2>
              <input
                type="text"
                name={`title${i + 1}`}
                value={formData[`title${i + 1}`]}
                onChange={handleInputChange}
                placeholder={`Title ${i + 1}`}
                className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
              />
              <h2>Details {i + 1}</h2>
              <textarea
                name={`heading${i + 1}`}
                value={formData[`heading${i + 1}`]}
                onChange={handleInputChange}
                placeholder={`Heading ${i + 1}`}
                className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md"
          >
            Update Blog
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateBlog;
