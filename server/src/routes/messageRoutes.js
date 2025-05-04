import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/messageControllers.js";

const router = express.Router();

// Get all users for the sidebar (excluding the logged-in user)
router.get("/users", protectRoute, getUsersForSidebar);

// Get messages between the logged-in user and another user
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;