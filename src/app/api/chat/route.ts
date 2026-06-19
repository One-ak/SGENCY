import { google } from '@ai-sdk/google';
import { formatStreamPart, generateText, type CoreMessage } from 'ai';

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

function getLatestUserMessage(messages: CoreMessage[] = []) {
  const latestUserMessage = [...messages].reverse().find((message) => message.role === 'user');

  if (!latestUserMessage) {
    return '';
  }

  if (typeof latestUserMessage.content === 'string') {
    return latestUserMessage.content.toLowerCase();
  }

  return latestUserMessage.content
    .map((part) => ('text' in part ? part.text : ''))
    .join(' ')
    .toLowerCase();
}

function createFallbackMessage(messages: CoreMessage[] = []) {
  const userMessage = getLatestUserMessage(messages);

  if (/(price|pricing|package|cost|budget|rate|plan)/.test(userMessage)) {
    return "Our packages start at ₹34,999/month. Popular options include growth retainers, website builds, AI automation projects, and custom software. Tell me your goal and budget range, and the team can recommend the best fit on a consultation.";
  }

  if (/(service|offer|do you|website|web|software|app|automation|ai|marketing|brand|video|consult)/.test(userMessage)) {
    return "SGENCY helps with AI automation, custom websites, web apps, digital marketing, branding, video production, and business consulting. If you share what you want to build or improve, we can point you toward the right service and next step.";
  }

  if (/(book|call|consultation|contact|meeting|talk|demo)/.test(userMessage)) {
    return "The fastest next step is to book a consultation or use the contact page. Share your business goal, timeline, and contact details, and the SGENCY team will follow up shortly.";
  }

  if (/(portfolio|work|case|example|client)/.test(userMessage)) {
    return "You can explore SGENCY's portfolio from the Portfolio page. We focus on premium websites, custom software, AI workflows, dashboards, and growth-focused digital experiences.";
  }

  return "Thanks for reaching out. SGENCY can help with premium web design, custom software, AI automation, digital marketing, branding, and growth consulting. What are you trying to build or scale right now?";
}

function createChatResponse(message: string, mode = 'fallback') {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(formatStreamPart('text', message)));
      controller.close();
    },
  });

  return new Response(stream, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'x-sgency-chat-mode': mode,
    },
  });
}

function createFallbackResponse(messages: CoreMessage[] = [], mode = 'fallback') {
  return createChatResponse(createFallbackMessage(messages), mode);
}

export async function POST(req: Request) {
  let messages: CoreMessage[] = [];

  try {
    const body: { messages?: CoreMessage[] } = await req.json();
    messages = body.messages ?? [];

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.warn("Chat API fallback active: GOOGLE_GENERATIVE_AI_API_KEY is missing.");
      return createFallbackResponse(messages, 'missing-google-key');
    }

    const result = await generateText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages,
    });

    return createChatResponse(result.text, 'gemini');
  } catch (error) {
    console.error("Chat API Error:", error);
    return createFallbackResponse(messages, 'chat-error');
  }
}
