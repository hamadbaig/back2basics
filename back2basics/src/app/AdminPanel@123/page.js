"use client";
import { useState } from "react";
import CreateProduct from "../component/private/AddProduct";
import UpdateProduct from "../component/private/updateProduct";
import CreateBlog from "../component/private/addBlog";
import UpdateBlog from "../component/private/updatBlog";
import DeleteBlog from "../component/private/deleteBlog";
import DeleteProduct from "../component/private/deleteProduct";
const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "createProduct":
        return <CreateProduct />;
      case "updateProduct":
        return <UpdateProduct />;

      case "addBlog":
        return <CreateBlog />;
      case "updateBlog":
        return <UpdateBlog />;
      case "deleteBlog":
        return <DeleteBlog />;
      case "deleteProduct":
        return <DeleteProduct />;
      default:
        return <div>Select an option to manage products</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-1/4 bg-gray-100 p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <button
          onClick={() => setActiveComponent("createProduct")}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Product
        </button>
        <button
          onClick={() => setActiveComponent("updateProduct")}
          className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Update Product
        </button>
        <button
          onClick={() => setActiveComponent("deleteProduct")}
          className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete Product
        </button>
        <button
          onClick={() => setActiveComponent("addBlog")}
          className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Add Blog
        </button>
        <button
          onClick={() => setActiveComponent("updateBlog")}
          className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Update Blog
        </button>
        <button
          onClick={() => setActiveComponent("deleteBlog")}
          className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete Blog
        </button>
      </div>

      {/* Main Content */}
      <div className="md:w-3/4 p-4 bg-white border-l border-gray-200">
        {renderComponent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
