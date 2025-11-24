import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to prevent immediate crash, check in function
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateImageDescription = async (base64Data: string, mimeType: string): Promise<string> => {
  if (!ai) {
    throw new Error("API Key is missing. Cannot communicate with Gemini.");
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: mimeType
            }
          },
          {
            text: "Analyze this image and provide a creative, punchy, and professional description (max 2 sentences) suitable for a design studio portfolio website. Focus on style, composition, and mood."
          }
        ]
      }
    });

    return response.text || "No description generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate description.");
  }
};