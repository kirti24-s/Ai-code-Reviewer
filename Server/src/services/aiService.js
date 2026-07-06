import { OPENROUTER_API_URL, MODEL } from "../config/openRouter.js";

export const generateAIResponse = async (message) => {
  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,

        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        model: MODEL,

        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    // Check if OpenRouter returned an error
    if (!response.ok) {
      const error = await response.text();

      throw new Error(error);
    }

    const data = await response.json();

    return data.choices[0].message.content;
  } catch (error) {
    console.error("AI Service Error:", error.message);

    throw error;
  }
};

export const generateCodeReview = async (code, language = "JavaScript") => {
  try {
    const prompt = `You are a code reviewer. Review the following ${language} code and provide clear, concise suggestions, corrections, and improvements. If there are issues, explain why and how to fix them.\n\n${code}`;

    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 1000,
        temperature: 0.2,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const data = await response.json();

    return data.choices[0].message.content;
  } catch (error) {
    console.error("AI Service Error:", error.message);
    throw error;
  }
};

