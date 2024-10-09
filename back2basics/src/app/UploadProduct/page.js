"use client";
import React, { useState } from "react";
// import "@uploadthing/react/styles.css";
import ImageUpload from "../component/common/ImageUpload";
const UploadProduct = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  // Callback function to handle the uploaded image URL
  const handleImageUpload = (url) => {
    setUploadedImageUrl(url);
  };
  return (
    <div className="h-[100vh]">
      <ImageUpload onImageUpload={handleImageUpload} />
      {uploadedImageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img
            src={uploadedImageUrl}
            alt="Uploaded"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadProduct;
