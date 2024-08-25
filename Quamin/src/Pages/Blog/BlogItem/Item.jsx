import React, { useEffect, useState } from "react";
import "./Item.css";
import "../../../index.css";
import { Link } from "react-router-dom";

const Item = () => {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000");
      const data = await res.json();
      setItems(data.items); // Assuming 'data.items' contains the blog entries
    };

    fetchData();
  }, []);

  const categories = ["All", "Lifestyle", "Technology", "AI"];

  return (
    <div className="Section-Item container">
      <h1 className="Item-Heading">Take a look at some of our best blogs</h1>

      <div className="Blog-Category">
        {categories.map((category) => (
          <p
            key={category}
            className={`category-item ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </p>
        ))}
      </div>

      <div className="Blog-Cards">
        {items
          .filter(
            (data) =>
              activeCategory === "All" || data.category === activeCategory
          )
          .map((data, index) => (
            <Link key={index} to={`/blog/${data._id}`}>
              <div className="Indv-Blog-Cards">
                <img
                  src={data.image}
                  alt={data.description}
                  className="IndvBlogImg"
                />
                <h1 className="blog-card-heading">{data.title}</h1>
                <p className="blog-card-author">By {data.author}</p>
                <p className="blog-card-category">{data.category}</p>
                <p className="blog-card-desc">{data.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Item;
