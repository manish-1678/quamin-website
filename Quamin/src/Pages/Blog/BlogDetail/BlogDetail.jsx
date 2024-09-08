import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./BlogDetail.css";
import "../../../index.css";

const BlogDetail = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000");
      const data = await res.json();
      setItems(data.items); // Set the items from the response
    };

    fetchData();
  }, []);

  const blog = items.find((post) => post._id === id); // Assuming you use `_id` from MongoDB

  if (!blog) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="Section-Indv-Blog container">
      <Navbar />
      <h1 className="Indv-Blog-Heading">{blog.title}</h1>
      <div className="centre-align">
        <img src={blog.image} alt={blog.title} className="Indv-Blog-Img" />
      </div>
      <p className="Indv-Blog-Author">{blog.author}</p>
      {/* Rendering content with HTML tags using dangerouslySetInnerHTML */}
      <div
        className="Indv-Blog-Content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <p className="Indv-Blog-Content">
        {new Date(blog.date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default BlogDetail;
