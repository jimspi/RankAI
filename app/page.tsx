'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      localStorage.setItem('optimizationResults', JSON.stringify(data));
      router.push('/results');
    } catch (error) {
      alert('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Get Your Business Recommended by AI Search Engines
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ChatGPT, Perplexity & Claude are replacing Google. Make sure they recommend YOU. RankAI gives you the exact language and structure that AI models want to see and cite.
            </p>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter your website URL or describe your business..."
                  className="w-full p-4 border border-gray-300 rounded-lg mb-4 h-32 resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                >
                  {loading ? 'Optimizing...' : 'Optimize for AI Search'}
                </button>
              </div>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">AI-Optimized Content</h3>
              <p className="text-gray-600">Get content snippets structured for AI engines to cite and recommend your business</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-lg mb-2">Beat Competitors</h3>
              <p className="text-gray-600">Position your service to rank higher in AI recommendations than alternatives</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Instant Results</h3>
              <p className="text-gray-600">Get actionable optimization suggestions in seconds, ready to implement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
