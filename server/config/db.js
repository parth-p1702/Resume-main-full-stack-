// server/config/db.js
const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URL);
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add these options to prevent connection issues
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });
    console.log("Connected to database");
    console.log("MongoDB Connected successfully");
    console.log(`Host: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
    
    // List all collections to verify
    const collections = await conn.connection.db.listCollections().toArray();
    console.log("Available collections:", collections.map(c => c.name));
    
    return conn;
  } catch (error) {
    console.log(error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = mongoDB;
