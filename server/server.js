// Server connections

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// To have environment variuables in .env files
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB using Mongoose
const uri = process.env.ATLASURI;
mongoose.connect(uri, {
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

//Require the API routes/files
const UsersRouter = require("./routes/users");
//Use the API/files
app.use("/users", UsersRouter);

// Starting the server
app.listen(port, () => {
  console.log(`Server is actively running on port ${port}`);
});
