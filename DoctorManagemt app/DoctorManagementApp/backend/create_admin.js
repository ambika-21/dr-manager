import mongoose from "mongoose";
import { User } from "./models/userSchema.js";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
config({ path: path.resolve(__dirname, ".env") });

const createAdmin = async () => {
  try {
    await dbConnection();
    
    const existingAdmin = await User.findOne({ email: "admin123@gmail.com" });
    if (existingAdmin) {
      console.log("Admin already exists!");
      process.exit(0);
    }
    
    const admin = await User.create({
      firstName: "Admin",
      lastName: "User",
      email: "admin123@gmail.com",
      phone: "12345678901",
      nic: "1234567890123",
      dob: "1990-01-01",
      gender: "Male",
      password: "87654321",
      role: "Admin",
    });
    
    console.log("Admin created successfully!");
    console.log("Email: admin123@gmail.com");
    console.log("Password: 87654321");
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
