const express = require("express");
const connectDB = require("./db.js");
const itemModel = require("./Models/item.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// GET endpoint to retrieve items
app.get("/", async (req, res) => {
  const response = await itemModel.find();
  return res.json({ items: response });
});

// POST endpoint to save a new item
app.post("/api/items", async (req, res) => {
  try {
    // Create a new item using the data received in the request body
    const newItem = new itemModel(req.body);

    // Save the new item to the database
    const savedItem = await newItem.save();

    // Respond with the saved item and a 201 status code (created)
    return res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error saving item:", error);
    // Respond with a 500 status code for an internal server error
    return res.status(500).json({ message: "Error saving item" });
  }
});

app.delete("/api/items/:id", async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the request parameters
    const deletedItem = await itemModel.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res
      .status(200)
      .json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).json({ message: "Error deleting item" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
