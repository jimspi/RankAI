# AI Search Optimizer

Optimize your business for AI search engines like ChatGPT, Perplexity, and Google AI Overviews.

## Quick Setup

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local`
   - Add your OpenAI API key:
```
OPENAI_API_KEY=sk-your-key-here
```

3. **Run locally:**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add `OPENAI_API_KEY` in Vercel environment variables (Project Settings → Environment Variables)
4. Deploy!

## How It Works

1. User enters website URL or business description
2. OpenAI API analyzes and generates AI search optimization recommendations
3. Results include citation-optimized snippets, competitive positioning, schema markup suggestions, and more
4. User can copy recommendations and implement them

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- OpenAI API
- Vercel (hosting)

## Cost Note

Uses OpenAI GPT-4 API. Each optimization costs approximately $0.02-0.04 depending on input/output length.
