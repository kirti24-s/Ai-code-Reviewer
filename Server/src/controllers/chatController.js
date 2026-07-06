import { generateAIResponse } from "../services/aiService.js";

export const chatController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const aiReply = await generateAIResponse(message);

    res.status(200).json({
      success: true,

      userMessage: message,

      aiReply,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};
