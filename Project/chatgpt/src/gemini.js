const api = "AIzaSyBr_EhcJXdGXyhTBHnzbnh_AJmTWT_zpUE";
import { GoogleGenAI } from '@google/genai';

export default async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: api,
  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-1.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let answer = "";
  for await (const chunk of response) {
    answer += chunk.text;
  }
  return answer;
}