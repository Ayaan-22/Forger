import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (userId, res) => {
  try {
    // Generate the token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d", // Token validity: 30 days
    });

    // Set the token as an HTTP-only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
      sameSite: "strict", // Prevent CSRF attacks
    });

    return token; // Return the token for further use if needed
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};
