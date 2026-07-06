import express from "express";
import { reviewController } from "../controllers/reviewController.js";

const router = express.Router();

// POST /api/review
router.post("/", reviewController);

export default router;
