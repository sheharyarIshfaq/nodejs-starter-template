const mongoose = require("mongoose");
const USER_ROLE = require("../types/user-role");

// Create a schema for users
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: [USER_ROLE.ADMIN, USER_ROLE.USER],
      default: USER_ROLE.USER,
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Create a model for users
const User = mongoose.model("User", userSchema);

module.exports = User;
