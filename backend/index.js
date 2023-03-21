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

const http = require("http");

//Middleware for form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enabling CORS
app.use(cors());

const server = http.createServer(app);

// For signalling server
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Port for the server
const port = 5000;

// Execute router from ../routes
app.use(router);

io.on("connection", (socket) => {
  console.log("a user connected");
});

io.on("disconnect", (socket) => {
  console.log("user disconnected");
});

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
  console.log(`Signaling server listening on http://localhost:${PORT}`);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
