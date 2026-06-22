import { google } from '@ai-sdk/google';
import { formatStreamPart, generateText, type CoreMessage, type LanguageModel } from 'ai';

export const runtime = 'edge';

const MAX_REQUEST_BYTES = 24_000;
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2_000;
const SUPPORTED_ROLES = new Set(['system', 'user', 'assistant']);

const systemPrompt = `
You are the official AI Assistant for letsgroww, a premium digital agency specializing in custom software development, AI automation services, and high-conversion web design.

Your goals:
1. Help users understand our services (AI Automation, Web Development, Digital Marketing, Branding).
2. Answer questions about pricing (Packages start at ₹34,999/mo).
3. Guide users to book a consultation or go to the /contact page.
4. Keep answers concise, professional, friendly, and persuasive. Use short paragraphs.
5. If the user asks something outside your knowledge, politely redirect them to book a call or contact the team.

When asked to "Email Transcript" or if the user provides their email, thank them and say the team will follow up shortly.
`;

function createJsonError(message: string, status: number) {
  return Response.json(
    { error: message },
    {
      status,
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  );
}

function normalizeMessages(value: unknown): CoreMessage[] {
  if (!Array.isArray(value)) {
    throw new Error('Invalid chat payload');
  }

  return value.slice(-MAX_MESSAGES).flatMap((message) => {
    if (!message || typeof message !== 'object') {
      return [];
    }

    const { role, content } = message as { role?: unknown; content?: unknown };

    if (typeof role !== 'string' || !SUPPORTED_ROLES.has(role) || typeof content !== 'string') {
      return [];
    }

    const trimmedContent = content.trim().slice(0, MAX_MESSAGE_LENGTH);

    if (!trimmedContent) {
      return [];
    }

    return [{ role: role as CoreMessage['role'], content: trimmedContent } as CoreMessage];
  });
}

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
    return "letsgroww helps with AI automation, custom websites, web apps, digital marketing, branding, video production, and business consulting. If you share what you want to build or improve, we can point you toward the right service and next step.";
  }

  if (/(book|call|consultation|contact|meeting|talk|demo)/.test(userMessage)) {
    return "The fastest next step is to book a consultation or use the contact page. Share your business goal, timeline, and contact details, and the letsgroww team will follow up shortly.";
  }

  if (/(portfolio|work|case|example|client)/.test(userMessage)) {
    return "You can explore letsgroww's portfolio from the Portfolio page. We focus on premium websites, custom software, AI workflows, dashboards, and growth-focused digital experiences.";
  }

  return "Thanks for reaching out. letsgroww can help with premium web design, custom software, AI automation, digital marketing, branding, and growth consulting. What are you trying to build or scale right now?";
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
      'Cache-Control': 'no-store',
      'x-letsgroww-chat-mode': mode,
    },
  });
}

function createFallbackResponse(messages: CoreMessage[] = [], mode = 'fallback') {
  return createChatResponse(createFallbackMessage(messages), mode);
}

export async function POST(req: Request) {
  let messages: CoreMessage[] = [];

  const contentLength = Number(req.headers.get('content-length') ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return createJsonError('Chat request is too large.', 413);
  }

  try {
    const body: { messages?: unknown } = await req.json();
    messages = normalizeMessages(body.messages);
  } catch {
    return createJsonError('Invalid chat payload.', 400);
  }

  try {
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.warn("Chat API fallback active: GOOGLE_GENERATIVE_AI_API_KEY is missing.");
      return createFallbackResponse(messages, 'missing-google-key');
    }

    const model = google('models/gemini-2.5-flash') as unknown as LanguageModel;

    const result = await generateText({
      model,
      system: systemPrompt,
      messages,
    });

    return createChatResponse(result.text, 'gemini');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Chat API Error:", message.slice(0, 300));
    return createFallbackResponse(messages, 'chat-error');
  }
}
