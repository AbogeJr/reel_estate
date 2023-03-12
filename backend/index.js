const express = require("express");
const { dbConn } = require("./config");
const cors = require("cors");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("./controllers/userControllers");
const multer = require("multer");
const {
  createProperty,
  deleteProperty,
  updateProperty,
  getAllProperties,
  getPropertyById,
  getPropertiesByLocation,
  getPropertiesByPriceRange,
} = require("./controllers/propertyController");

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

// Set up Multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Settng up Routes
// User Routes
router.route("/users").get(getUsers).post(createUser);
router.route("users/:id").put(updateUser).delete(deleteUser);
// Property Routes
router
  .route("/properties")
  .get(getAllProperties)
  .post(upload.array("images"), createProperty);
router
  .route("properties/:id")
  .get(getPropertyById)
  .delete(deleteProperty)
  .put(upload.array("images"), updateProperty);
router.route("properties/:location").get(getPropertiesByLocation);
router.route("properties/:minPrice/:maxPrice").get(getPropertiesByPriceRange);
router.routr;
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
