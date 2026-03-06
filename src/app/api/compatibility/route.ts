import { NextResponse } from 'next/server';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

// Initialize Genkit
const ai = genkit({
  plugins: [googleAI()],
});

export async function POST(req: Request) {
  try {
    const { carModel, question, locale } = await req.json();

    if (!carModel || !question || !locale) {
      return NextResponse.json(
        { error: 'Missing required fields: carModel, question, locale' },
        { status: 400 }
      );
    }

    // Load the prompt from the dotprompt file
    const compatibilityPrompt = ai.prompt('compatibility');

    // Generate a response by calling the prompt with variables
    const response = await compatibilityPrompt({
      carModel,
      question,
      locale,
    });

    // In a newer Genkit API, output() might be parsed JSON if schema is defined in dotprompt
    // Assuming output() returns the object { answer, confidence }
    return NextResponse.json(response.output());

  } catch (error: any) {
    console.error('Error generating compatibility response:', error);
    return NextResponse.json(
      { error: 'Failed to generate compatibility check' },
      { status: 500 }
    );
  }
}
