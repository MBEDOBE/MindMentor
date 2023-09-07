// This is just a dummy server connection code to make the backend directory visible on github

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Define your API routes here
app.get('/', (req, res) => {
  res.send('Hello, MindMentor App!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
