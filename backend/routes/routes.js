const express = require("express");
// Initialize router
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Import Controllers
const { imageController } = require("../controllers/imageController");

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/userControllers");
const {
  createProperty,
  deleteProperty,
  updateProperty,
  getAllProperties,
  getPropertyById,
  getPropertiesByLocation,
  getPropertiesByUserId,
  getPropertiesByPriceRange,
} = require("../controllers/propertyController");

// Set up Multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
// Initialize multer upload middleware
const upload = multer({ storage: storage });

// API route to get image by filename
router.get("/images/:filename", imageController);

// Get all users
router.route("/users").get(getUsers);
// Create a new user
router.route("/users").post(createUser);
// Update an existing user
router.route("/users/:userId").put(updateUser);
// Delete a user
router.route("/users/:userId").delete(deleteUser);
// Get a user by ID
router.route("/users/:userId").get(getUserById);
// Get properties by user ID
router.route("/users/:userId/properties").get(getPropertiesByUserId);

// Create a new property
router.route("/properties").post(upload.array("images"), createProperty);
// Delete a property by ID
router.route("/properties/:propertyId").delete(deleteProperty);
// Update a property by ID
router
  .route("/properties/:propertyId")
  .put(upload.array("images"), updateProperty);
// Get all properties
router.route("/properties").get(getAllProperties);
// Get a property by ID
router.route("/properties/:propertyId").get(getPropertyById);
// Get properties by location
router.route("/properties/location/:location").get(getPropertiesByLocation);
// Get properties by price range
router
  .route("/properties/price/:minPrice/:maxPrice")
  .get(getPropertiesByPriceRange);

module.exports = { router };
