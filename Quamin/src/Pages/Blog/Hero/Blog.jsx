import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import "./Blog.css";
import Item from "../BlogItem/Item";
import "../../../index.css";
import Story from "../OurStory/Story";

const Blog = () => {
  return (
    <div>
      <div className="blog-hero container">
        <Navbar />
        <div className="blog-heading">
          <h1>Read Our Stories</h1>
          <p>Great minds have great ideas to share.</p>
        </div>
      </div>

      <Story />

      <Item />

      <div className="Blog-Subscribe">
        <h1>Subscribe to our newsletter to get timely updates</h1>
        <div className="Sub-Section">
          <input
            placeholder="Enter your email"
            className="Email-Input-Field"
          ></input>
          <button className="Subscribe-Button">Subscribe</button>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
