import React, { useEffect, useState } from "react";
import "./Admin.css";
import "../../index.css";
import Title from "../../Components/Title/Title";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "", // This will store the image data in Base64
    category: "",
    author: "",
    content: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        const data = await response.json();
        setItems(data.items);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  // Function to convert a file to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setFormData({ ...formData, image: base64 });
    }
  };

  // This handles text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved:", result);
        setMessage("Data saved successfully!");

        // Reset the form fields
        setFormData({
          title: "",
          description: "",
          image: "",
          category: "",
          author: "",
          content: "",
          date: "",
        });

        // Fetch the items again to update the UI
        const fetchItems = async () => {
          const response = await fetch("http://localhost:3000/");
          const data = await response.json();
          setItems(data.items);
        };
        fetchItems();
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error saving data.");
      }
    } catch (error) {
      console.error("Error connecting to the server:", error);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Item deleted:", result);
        setMessage("Item deleted successfully!");

        // Fetch items again
        const fetchItems = async () => {
          const response = await fetch("http://localhost:3000/");
          const data = await response.json();
          setItems(data.items);
        };
        fetchItems();
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error deleting item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      setError("Unable to connect to the server.");
    }
  };

  return (
    <div>
      <Title subTitle="ADMIN" title="Add a Blog" />

      {/* Form for adding new blogs */}
      <form onSubmit={handleSubmit} className="Admin-Form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            placeholder="Enter Category"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            placeholder="Enter Author name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Uploaded preview"
              style={{ width: "100px", marginTop: "10px" }}
            />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="1"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Short text related to your blog"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows="24"
            value={formData.content}
            onChange={handleChange}
            required
            placeholder="Write your heart out here!"
          />
        </div>
        <div>
          <button type="submit" disabled={loading} className="btn">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Title subTitle="ADMIN" title="Remove a Blog" />
      <div className="Blog-Cards container">
        {items.map((item) => (
          <div key={item._id} className="Indv-Blog-Cards">
            <div className="IndvBlogImgDiv">
              <img
                src={item.image}
                alt={item.description}
                className="IndvBlogImg"
              />
            </div>
            <h1 className="blog-card-heading">{item.title}</h1>
            <p className="blog-card-desc">
              {new Date(item.date).toLocaleDateString()}
            </p>
            <p className="blog-card-author">By {item.author}</p>
            <p className="blog-card-category">{item.category}</p>
            <p className="blog-card-desc">{item.description}</p>

            <button
              onClick={() => handleDelete(item._id)}
              className="btn delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
