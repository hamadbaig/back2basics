// "use client";
// import { useState, useEffect } from "react";
// import ImageUpload from "../common/ImageUpload";
// import Image from "next/image";
// import { px } from "framer-motion";
// const AddBlog = () => {
//   const [products, setProducts] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [name, setname] = useState("");
//   const [description, setdescription] = useState("");
//   const [imageUrl, setimageUrl] = useState("");
//   const handleImageUpload = (url) => {
//     setimageUrl(url);
//   };
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     switch (name) {
//       case "name":
//         setname(value);
//         break;
//       case "description":
//         setdescription(value);
//         break;
//       case "imageUrl":
//         setimageUrl(value);
//         break;
//       default:
//         break;
//     }
//   };
//   const handleSubmit = async (event) => {

//     event.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8000/api/blogs/add", {
//         // Adjust the URL as needed
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           description,
//           imageUrl,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message);
//         // Optionally, reset form fields
//         setname("");
//         setdescription("");
//         setimageUrl("");
//       } else {
//         alert(data.message || "Failed to add product");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to add product");
//     }
//   };
//   return (
//     <div className="p-4 md:p-8 lg:p-12">
//       <h1 className="text-2xl md:text-3xl font-bold mb-4">Admin Panel</h1>

//       <input
//         type="text"
//         name="name"
//         value={name}
//         onChange={handleInputChange}
//         placeholder="Blog Name"
//         required
//         className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <textarea
//         name="description"
//         value={description}
//         onChange={handleInputChange}
//         placeholder="Blog Description"
//         required
//         className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         type="text"
//         name="imageUrl"
//         value={imageUrl}
//         onChange={handleInputChange}
//         placeholder="Image URL"
//         required
//         className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <ImageUpload onImageUpload={handleImageUpload} />
//       {imageUrl && (
//         <div>
//           <h2>Uploaded Image:</h2>
//           <Image
//             src={imageUrl}
//             alt="Uploaded"
//             width={300}
//             height={300}
//             className="w-[300px] h-[300px]"
//           />
//         </div>
//       )}
//       <button
//         type="submit"
//         onClick={handleSubmit}
//         className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         Add Blog
//       </button>
//     </div>
//   );
// };

// export default AddBlog;
"use client";
import { useState } from "react";
import ImageUpload from "../common/ImageUpload";
import Image from "next/image";

const AddBlog = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [titles, setTitles] = useState({
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

  const handleImageUpload = (url) => {
    setimageUrl(url);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("title") || name.startsWith("heading")) {
      setTitles({ ...titles, [name]: value });
    } else {
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
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/blogs/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          imageUrl,
          ...titles,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        // Optionally reset form fields
        setname("");
        setdescription("");
        setimageUrl("");
        setTitles({
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
      } else {
        alert(data.message || "Failed to add blog");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add blog");
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
        placeholder="Blog Name"
        required
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="description"
        value={description}
        onChange={handleInputChange}
        placeholder="Blog Description"
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

      {/* Title and Heading inputs */}
      {[...Array(10)].map((_, index) => (
        <div key={index}>
          <input
            type="text"
            name={`title${index + 1}`}
            value={titles[`title${index + 1}`]}
            onChange={handleInputChange}
            placeholder={`Title ${index + 1}`}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name={`heading${index + 1}`}
            value={titles[`heading${index + 1}`]}
            onChange={handleInputChange}
            placeholder={`Heading ${index + 1}`}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Blog
      </button>
    </div>
  );
};

export default AddBlog;
