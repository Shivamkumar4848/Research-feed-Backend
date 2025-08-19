import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  openaiKey: process.env.OPENAI_API_KEY,
};
