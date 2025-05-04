import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js"; // Import the socket server
import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json({ limit: "10mb" })); // Increase JSON payload limit to 10MB
app.use(cookieParser()); // To parse cookies from the request headers

// CORS configuration
const allowedOrigins = [process.env.CLIENT_URL, "https://example.com"];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Catch-all route for invalid endpoints
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server only if the database connection is successful
(async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");

    server.listen(port, () => {
      console.log("Server is running on PORT:", port);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process with failure
  }
})();

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("HTTP server closed");
  });
  await mongoose.connection.close();
  console.log("Database connection closed");
  process.exit(0);
});
