// Server connection
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// To have environment variuables in .env files
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB using Mongoose
//in the .env file input,LOCALURI="mongodb://0.0.0.0:27017/mindmentor"
// const uri = process.env.LOCALURI;
const uri = "mongodb://localhost:27017/mindmentor_db";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () =>
  console.log('Connected to MongoDB(Mindmentor Database) Successfully')
);

// Define your API routes here
app.get('/', (req, res) => {
  res.send('Hello, MindMentor App!');
});

//Import/require the API routes/files
const UsersRoutes = require('./routes/auth.routes');

// Call/use the API/files
app.use('/api/auth', UsersRoutes);

// Starting the server
app.listen(port, () => {
  console.log(`Server is actively running on port ${port}`);
});
