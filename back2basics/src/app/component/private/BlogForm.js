import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogForm = ({ match }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const isEdit = match.params.id;

  useEffect(() => {
    if (isEdit) {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(`${apiUrl}/api/blogs/${isEdit}`);
          const { title, content, summary, imageUrl } = response.data;
          setTitle(title);
          setContent(content);
          setSummary(summary);
          setImageUrl(imageUrl);
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      };

      fetchBlog();
    }
  }, [isEdit]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const blogData = { title, content, summary, imageUrl };

    try {
      if (isEdit) {
        await axios.put(`${apiUrl}/api/blogs/${isEdit}`, blogData);
      } else {
        await axios.post("${apiUrl}/api/blogs", blogData);
      }
      alert("Blog saved successfully");
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog");
    }
  };

  return (
    <div>
      <h1>{isEdit ? "Edit Blog" : "Create Blog"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Summary:</label>
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BlogForm;
