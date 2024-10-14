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
                className="text-blue-500 mt-4 inline-block"
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

// components/BlogList.js
// import React from "react";

// const BlogList = () => {
//   const posts = [
//     {
//       id: "1",
//       title: "The Importance of Lithium-Ion Battery Recycling",
//       summary: `With the rise of electric vehicles, smartphones, and other portable devices, lithium-ion batteries have become an essential part of modern life. However, as more batteries reach the end of their useful life, the question of disposal and recycling becomes increasingly important.`,
//       content: `
// With the rise of electric vehicles, smartphones, and other portable devices, lithium-ion batteries have become an essential part of modern life. However, as more batteries reach the end of their useful life, the question of disposal and recycling becomes increasingly important. This is where companies like "Back 2 Basics Recycle Pvt Ltd" come into play, offering environmentally friendly solutions for battery recycling.

// 1. **The Collection and Sorting Process**

// The first step in recycling lithium-ion batteries is their collection. Batteries are gathered from various sources, including consumer electronics, electric vehicles, and industrial equipment. "Back 2 Basics Recycle Pvt Ltd" partners with manufacturers, retailers, and waste management facilities to ensure the efficient collection of used batteries.

// Once collected, the batteries are sorted by type and size. Different lithium-ion batteries contain varying amounts of valuable materials, such as lithium, cobalt, nickel, and manganese. Sorting is essential because different battery chemistries may require distinct recycling processes. For instance, lithium-cobalt oxide batteries, commonly used in smartphones, are handled differently from lithium-iron phosphate batteries found in electric vehicles.

// Proper sorting ensures that batteries are recycled in the most efficient and environmentally responsible manner. This process reduces the risk of contamination and maximizes the recovery of valuable materials.

// 2. **Dismantling and Separation of Components**

// After sorting, the next step is to dismantle the batteries. This process involves mechanically breaking down the batteries to separate their components. "Back 2 Basics Recycle Pvt Ltd" employs advanced technology and machinery to safely disassemble lithium-ion batteries, ensuring that no harmful chemicals or materials are released into the environment.

// The dismantling process typically begins with the removal of the battery’s outer casing. Once the casing is taken apart, the battery’s internal components, including the electrodes (anode and cathode), separator, and electrolyte, are separated.

// The goal here is to isolate the valuable metals like lithium, cobalt, and nickel from other non-recyclable materials. The process involves shredding the batteries into smaller pieces, which are then sorted into different categories, such as metals, plastics, and chemical compounds. This step is critical to ensure that the metals can be effectively recovered in the next stage.

// 3. **Chemical Treatment and Recovery of Materials**

// After dismantling the batteries and separating the components, the next step is to recover the valuable materials. This is where chemical treatments come into play. *Back 2 Basics Recycle Pvt Ltd* uses cutting-edge technologies to recover important metals like lithium, cobalt, nickel, and manganese, all of which are essential for the production of new batteries.

// One of the most common methods of recovery is hydrometallurgy, a chemical process that involves dissolving the metal compounds in acids or other chemicals to separate them. For example, the metals are leached into a solution, and then selective processes are applied to extract each metal.

// Another method is pyrometallurgy, which involves using high temperatures to melt and separate the metals. However, hydrometallurgy is often preferred due to its efficiency and lower environmental impact.

// Once the metals are extracted, they are purified and processed into forms that can be reused. For example, lithium may be recovered as lithium carbonate or lithium hydroxide, both of which are essential for making new lithium-ion batteries.

// 4. **Reintroduction of Recycled Materials into Production**

// The final step in lithium-ion battery recycling is reintegrating the recovered materials into the production of new batteries. "Back 2 Basics Recycle Pvt Ltd" plays a crucial role in ensuring that the valuable metals extracted from used batteries are transformed back into raw materials for manufacturing new ones.

// Once purified, materials like lithium, cobalt, and nickel are sent to battery manufacturers, who use them to produce new batteries. This process reduces the demand for newly mined materials, helping to preserve natural resources and minimize the environmental impact of mining activities.

// The recycled materials are combined with other raw materials to create the cathodes and anodes for new batteries. By incorporating these recycled materials into new products, the battery manufacturing industry becomes more sustainable and less dependent on limited natural resources.

// Recycling also has an important role to play in lowering the overall cost of batteries. Since many of the valuable materials used in lithium-ion batteries are expensive, recycling helps reduce costs by providing a steady supply of these materials. This, in turn, helps make technologies like electric vehicles more affordable for consumers.

// Lithium-ion battery recycling is a crucial process that not only helps protect the environment but also conserves valuable natural resources. From collection and sorting to dismantling, chemical treatment, and the reintroduction of materials into production, each step plays a vital role in ensuring the efficient recycling of these batteries.

// "Back 2 Basics Recycle Pvt Ltd" is leading the charge in developing innovative recycling methods that make this process more sustainable and cost-effective. By supporting such initiatives, we can all contribute to a cleaner, greener future.

// As the demand for lithium-ion batteries continues to rise, so does the need for responsible recycling solutions. "Back 2 Basics Recycle Pvt Ltd" is committed to making battery recycling easier, more efficient, and environmentally friendly for everyone.
//       `,
//       image: "https://via.placeholder.com/500x300?text=Battery+Recycling",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
//       <header className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">Our Blog</h1>
//       </header>

//       <div className="grid gap-8 lg:grid-cols-2">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             {post.image && (
//               <img
//                 // src={post.image}
//                 src="https://utfs.io/f/bf1ce599-b6a3-4cb1-89c4-2656e5316729-fqvmnn.jpeg"
//                 // alt={post.title}
//                 alt="The Importance of Lithium-Ion Battery Recycling"
//                 className="w-full h-48 object-cover"
//               />
//             )}
//             <div className="p-6">
//               <h2 className="text-xl font-semibold text-gray-700">
//                 {post.title}
//               </h2>
//               <p className="text-gray-600 mt-2">{post.summary}</p>
//               <a
//                 href={`/blog/${post.id}`}
//                 className="text-blue-500 mt-4 inline-block"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       <footer className="text-center mt-8">
//         <p className="text-gray-600">
//           &copy; {new Date().getFullYear()} Your Business Name
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default BlogList;
