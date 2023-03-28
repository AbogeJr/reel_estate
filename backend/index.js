// Import libs
const express = require("express");
// Function for connecting to database
const { dbConn } = require("./config");
// Cross Origin Requests
const cors = require("cors");
// Importing routes
const { router } = require("./routes/routes");
// Connect to database
dbConn();
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

app.listen(process.env.PORT || 3000);
// app.listen(port, () => {
//   console.log(`Server listening on http://localhost:${port}`);
// });
