import React, { useEffect, useState } from "react";
import "./Item.css";
import "../../../index.css";
import { Link } from "react-router-dom";

const Item = () => {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleItemsCount, setVisibleItemsCount] = useState(6); // Initial number of items to show

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000");
        const data = await res.json();
        setItems(data.items); // Assuming 'data.items' contains the blog entries
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const categories = ["All", "Lifestyle", "Technology", "AI"];

  const loadMoreItems = () => {
    setVisibleItemsCount((prevCount) => prevCount + 6); // Show 6 more items each time
  };

  const filteredItems = items
    .filter(
      (data) => activeCategory === "All" || data.category === activeCategory
    )
    .reverse();

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
            onClick={() => {
              setActiveCategory(category);
              setVisibleItemsCount(6); // Reset visible items count when category changes
            }}
          >
            {category}
          </p>
        ))}
      </div>

      <div className="Blog-Cards">
        {filteredItems.slice(0, visibleItemsCount).map((data, index) => (
          <Link key={index} to={`/blog/${data._id}`}>
            <div className="Indv-Blog-Cards">
              <img
                src={data.image}
                alt={data.description}
                className="IndvBlogImg"
              />
              <h1 className="blog-card-heading">{data.title}</h1>
              <p className="blog-card-date">
                {new Date(data.date).toLocaleDateString()}
              </p>
              <p className="blog-card-author">By {data.author}</p>
              <p className="blog-card-category">{data.category}</p>
              <p className="blog-card-desc">{data.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {visibleItemsCount < filteredItems.length && (
        <div className="load-more-container">
          <button onClick={loadMoreItems} className="btn load-more-btn">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
