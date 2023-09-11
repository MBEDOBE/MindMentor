// Server connection

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// To have environment variuables in .env files
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB using Mongoose
mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("Connected to MongoDB"));

// Define your API routes here
app.get("/", (req, res) => {
  res.send("Hello, MindMentor App!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
