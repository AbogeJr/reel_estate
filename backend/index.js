// Import libs
const express = require("express");
const { dbConn } = require("./config");
const cors = require("cors");
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

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
