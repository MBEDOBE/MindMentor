// Server connection
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// To have environment variuables in .env files
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

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
db.once("open", () =>
  console.log("Connected to MongoDB(Mindmentor Database) Successfully")
);

// Define your API routes here
app.get("/", (req, res) => {
  res.send("Hello, MindMentor App!");
});

//Require the API routes/files
const UsersRouter = require("./routes/users");

//Use the API/files
app.use("/users", UsersRouter);

// initial() function to create 3 important rows in roles collection
const Role = db.role;
function initial() {
	Role.estimateDocumentCount((err, count) => {
		if (!err && count === 0) {
			new Role({
				name: "user"
			}).save(err => {
				if (err) {
					console.log("error", err);
				}

				console.log("added 'user' to the role collection");
			});

			new Role({
				name: "moderator"
			}).save(err => {
				if (err) {
					console.log("eror", err);
				}

				console.log("added 'moderator' tp roles colection");
			});

			new Role({
				name: "admin"
			}).save(err => {
				if (err) {
					console.log("error", err);
				}

				console.log("added 'admin' to roles collection");
			});
		}
	});
}

//routes

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// Starting the server
app.listen(port, () => {
  console.log(`Server is actively running on port ${port}`);
});
