// Server connection
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
;
// To have environment variuables in .env files
//require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Connect to MongoDB using Mongoose
//const uri = process.env.ATLASURI;
//mongoose.connect(uri, {
 // useNewUrlParser: true,
 // useUnifiedTopology: true,
//});

//const db = mongoose.connection;
//db.on("error", (error) => console.error("MongoDB connection error:", error));
//db.once("open", () =>
 // console.log("Connected to MongoDB(Mindmentor Database) Successfully")
//);
//
const db = require("./models");
const url = "mongodb://localhost:27017/mindmentor_db"
db.mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
	  console.log("Connected to MongoDB(Mindmentor Database) Successfully");
	  initial();
  })

  .catch(err => {
	  console.error("Connection error", err);
	  process.exit();
  });

app.get("/", (req, res) => {
  res.send("Hello, MindMentor App!");
});

//Require the API routes/files
const UsersRouter = require("./routes/users");

//Use the API/files
app.use("/users", UsersRouter);

const Role = db.role;

//routes

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// Starting the server
app.listen(port, () => {
  console.log(`Server is actively running on port ${port}`);
});

function initial() {
  Role.estimatedDocumentCount()
    .then(count => {
      if (count === 0) {
        return Promise.all([
          new Role({ name: "user" }).save(),
          new Role({ name: "moderator" }).save(),
          new Role({ name: "admin" }).save()
        ]);
      }
    })
    .then(results => {
      if (results) {
        console.log("Roles added successfully");
      } else {
        console.log("Roles already exist");
      }
    })
    .catch(err => {
      console.error("Error initializing roles:", err);
    });
}

