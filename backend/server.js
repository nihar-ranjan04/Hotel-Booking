import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebHooks from "./controllers/clerkWebHooks.js";

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors()); // Enable CORS

//Middleware
app.use(express.json()); // Parse JSON bodies
app.use(clerkMiddleware());

//API to listen to clerk webhooks
app.use("/api/clerk",clerkWebHooks)

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at PORT : ${PORT}`);
});
