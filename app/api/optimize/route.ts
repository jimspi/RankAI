import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { input } = await request.json();

    if (!input) {
      return NextResponse.json(
        { error: 'Input is required' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert in optimizing businesses for AI search engines like ChatGPT, Perplexity, and Google AI Overviews. Provide actionable, specific recommendations.',
        },
        {
          role: 'user',
          content: `Analyze this business and provide comprehensive AI search optimization recommendations:

Business: ${input}

Provide the following in a structured format:

1. AI-CITATION-OPTIMIZED SNIPPETS (3-5 short, factual statements that AI models will want to cite)
2. KEY FACTS FOR LLM EXTRACTION (structured data points that answer common questions)
3. COMPETITIVE POSITIONING (how to phrase your value prop so AI recommends you over competitors)
4. SCHEMA MARKUP SUGGESTIONS (specific structured data to implement)
5. ANSWER ENGINE KEYWORDS (phrases to target for AI-generated answers)

Make all recommendations specific and immediately actionable.`,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({
      success: true,
      optimization: result,
      input: input,
    });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate optimization', details: error.message },
      { status: 500 }
    );
  }
}
