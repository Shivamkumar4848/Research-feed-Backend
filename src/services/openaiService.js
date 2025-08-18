import OpenAI from "openai";
import { config } from "../config.js";

const client = new OpenAI({
  apiKey: config.openaiKey,
});

export async function getSummary(abstract) {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Summarize the following medical abstract in under 80 words in a simple, clinically friendly tone:\n\n${abstract}`,
  });

  return response.output[0].content[0].text;
}
