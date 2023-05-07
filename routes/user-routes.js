const express = require("express");
const router = express.Router();

const userController = require("../controllers/user-controller");
const verifyAuth = require("../middleware/auth");
const verifyAdmin = require("../middleware/admin-auth");

//router to handle user signup
router.post("/signup", userController.signup);

// router to handle user login
router.post("/login", userController.login);

// router to handle user profile
router.get("/user", verifyAuth, userController.getUser);

// router to handle user profile update
router.put("/user", verifyAuth, userController.updateUser);

// get all users
router.get("/all", verifyAdmin, userController.getAllUsers);

module.exports = router;
