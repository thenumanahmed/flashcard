import { NextResponse } from "next/server";
import OpenAi from "openai";

const systemPrompt = `
   You are a flashcard creator. Your task is to generate educational flashcards based on user-provided topics or concepts. Each flashcard should include a question on one side and an answer on the other. Ensure that the questions are clear, concise, and relevant to the topic. Additionally, provide explanations or context for the answers when applicable to enhance learning. Focus on various subjects such as science, history, language, or mathematics, and provide a variety of difficulty levels. Always aim to make the flashcards engaging and informative. Generate only 10 flashcards

   Return in the following json format:
   {
    "flashcards":[{
            "front":str
            "back":str
        }
        ]
    }
`;
export async function POST(req) {
  // // const openai = new OpenAi();
  // const openai = new OpenAi({
  //   apiKey: process.env.OPENAi_API_KEY,
  // });
  // const data = await req.text();

  // const completion = await openai.chat.completions.create({
  //   messages: [
  //     {
  //       role: "system",
  //       content: systemPrompt,
  //     },
  //     {
  //       role: "user",
  //       content: data,
  //     },
  //   ],
  //   model: "gpt-4o",
  //   response_fomat: { type: "json-object" },
  // });

  // const flashcards = JSON.parse(completion.choices[0].message.content);

  // return NextResponse.json(flashcards.flashcards);
  return NextResponse.json([
    {
      front: "1",
      back: "Jan",
    },
    {
      front: "2",
      back: "Feb",
    },
    {
      front: "3",
      back: "March",
    },
    {
      front: "4",
      back: "April",
    },
  ]);

  return {
    flashcards: [
      {
        front: "1",
        back: "Jan",
      },
      {
        front: "2",
        back: "Feb",
      },
      {
        front: "3",
        back: "March",
      },
      {
        front: "4",
        back: "April",
      },
    ],
  };
}
