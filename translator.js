import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  organization: "org-r7uy3xYBORwSwG16Rq0lWe70",
  apiKey: process.env.OPENAI_API_KEY,
});

export async function translate(code, fileContent) {
  const command = `This task is important to my career. Only ouptut the translation. Translate the following text into ${code}:\n`;

  const prompt = command + fileContent;

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
    // model: "gpt-4",
  });

  //   console.log(chatCompletion.choices);
  return chatCompletion.choices[0].message.content;
}
