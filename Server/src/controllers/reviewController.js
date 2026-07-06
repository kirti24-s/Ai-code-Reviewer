import { generateCodeReview } from "../services/aiService.js";

export const reviewController = async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code || !String(code).trim()) {
      return res.status(400).json({
        success: false,
        message: "Code is required for review",
      });
    }

    const review = await generateCodeReview(code, language || "JavaScript");

    return res.status(200).json({
      success: true,
      review,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to generate code review",
    });
  }
};
