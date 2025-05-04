import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    // Retrieve token from cookies or Authorization header
    const token = req.cookies.jwt || 
                  (req.headers.authorization && req.headers.authorization.startsWith("Bearer") 
                    ? req.headers.authorization.split(" ")[1] 
                    : null);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Invalid or missing token" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Unauthorized: Token has expired" });
      }
      throw error; // Re-throw other errors
    }

    // Fetch user from the database
    try {
      const user = await User.findById(decoded.userId).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      req.user = user;
      next();
    } catch (error) {
      console.error("Database error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error in protectRoute middleware:", error.message);
    }
    res.status(500).json({ message: "Internal server error" });
  }
};