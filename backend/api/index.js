const express = require("express");
const { dbConn } = require("./config");
const cors = require("cors");
// const { getPost, setPost, deletePost, updatePost } = require("./controllers");
const { getUsers, createUser } = require("./userControllers");
// dotenv.config();

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

// Initialize router
const router = express.Router();

// Settng up Routes
// router.route("/").get(getPost).post(setPost);
// router.route("/:id").put(updatePost).delete(deletePost);
router.route("/").get(getUsers).post(createUser);

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
