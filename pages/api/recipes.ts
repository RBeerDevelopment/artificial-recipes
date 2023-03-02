import { OpenAIStream, OpenAIStreamPayload } from "#/utils/open-ai-stream";
import { Console } from "console";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY");
}

export default async function handler(req: NextRequest) {
  const { ingredients } = (await req.json()) as { ingredients: string[] };

  if (!ingredients) {
    return new Response("Missing ingredients", { status: 400 });
  }

  const prompt = `Act as a homecook who only has a limited number of ingredients and wants to cook for two people. 
    Use the ingredients to give me two very different recipe, that is made up of those ingredients and may contain up to five more ingredients. 
    Do not include steps, but only the name of the dish, the required ingredients and their amounts.
    The ingredients are: ${ingredients.join(", ")}`;

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.5,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 2000,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
}
