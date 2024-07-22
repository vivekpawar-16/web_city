const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

// Use the provided MongoDB URI
const dbConnString = process.env.DB_CONN || 'mongodb://0.0.0.0:27017/City_management'; // Replace 'your_database_name' with the name of your database

// Connect to the database
(async () => {
  try {
    await mongoose.connect(dbConnString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB Connection Succeeded");
  } catch (err) {
    console.error("DB Connection Error: ", err);
  }
})();

// Create schema - this is like a blueprint
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: "This field is required.",
    },
    password: {
      type: String,
      required: "This field is required.",
    },
    email: {
      type: String,
    },
    locality: {
      type: String,
    },
    complainCount: {
      type: Number,
    },
  },
  { versionKey: false }
);

const authoritySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: "This field is required.",
    },
    password: {
      type: String,
      required: "This field is required.",
    },
    email: {
      type: String,
    },
    registeredArea: {
      type: String,
    },
  },
  { versionKey: false }
);

const complainSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userName: {
      type: String,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    locality: {
      type: String,
    },
    location: {
      // detailed
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  { versionKey: false }
);

mongoose.model("Users", userSchema);
mongoose.model("Authorities", authoritySchema);
mongoose.model("Complaints", complainSchema);
