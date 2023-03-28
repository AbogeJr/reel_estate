// Import libs
const express = require("express");
// Function for connecting to database
// const { dbConn } = require("./config");
// Cross Origin Requests
const cors = require("cors");
// Importing routes
const { router } = require("./routes/routes");
// Connect to database
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// Initalizing the app
const app = express();

//Middleware for form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enabling CORS
app.use(cors());

// Port for the server
const port = 5000;

// Execute router from ../routes
app.use(router);

const dbConn = () => {
  // MongoDB connection
  mongoose.connect(process.env.MONGO_URI).then(
    (response) => {
      console.log("Connected to DB");
      app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
      });
    },
    (err) => console.log("Some error", err)
  );
};
// Connects to databse then starts server
dbConn();
