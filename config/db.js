const mongoose = require("mongoose");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");

// Get the MONGO_URI from the environment variables
const { MONGO_URI } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI)
    .then(async () => {
      // If connection is successful then log a message
      console.log("Successfully connected to database");
      const user = await User.findOne({ email: process.env.ADMIN_EMAIL });
      if (!user) {
        const hashedPassword = await bcrypt.hash(
          process.env.ADMIN_PASSWORD,
          10
        );
        await User.create({
          firstName: "Admin",
          lastName: "User",
          email: process.env.ADMIN_EMAIL,
          password: hashedPassword,
          phoneNumber: "1234567890",
          address: "123 Main St",
          role: "admin",
        });
      }
    })
    .catch((error) => {
      // If connection fails then log a message and exit the process
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
