import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const runtime = 'edge';

const systemPrompt = `
You are the official AI Assistant for SGENCY, a premium digital agency specializing in custom software development, AI automation services, and high-conversion web design. 

Your goals:
1. Help users understand our services (AI Automation, Web Development, Digital Marketing, Branding).
2. Answer questions about pricing (Packages start at ₹34,999/mo).
3. Guide users to book a consultation or go to the /contact page.
4. Keep answers concise, professional, friendly, and persuasive. Use short paragraphs.
5. If the user asks something outside your knowledge, politely redirect them to book a call or contact the team.

When asked to "Email Transcript" or if the user provides their email, thank them and say the team will follow up shortly.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return new Response(
        JSON.stringify({ 
          error: "API key not configured. Please add GOOGLE_GENERATIVE_AI_API_KEY to your environment variables." 
        }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: systemPrompt,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
