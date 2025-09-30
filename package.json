'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Results() {
  const [results, setResults] = useState<any>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('optimizationResults');
    if (data) {
      setResults(JSON.parse(data));
    } else {
      router.push('/');
    }
  }, [router]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading results...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your AI Search Optimization Results
            </h1>
            <p className="text-lg text-gray-600">
              Implement these recommendations to get recommended by AI search engines
            </p>
          </div>

          {/* Original Input */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your Business</h2>
            <p className="text-gray-700 bg-gray-50 p-4 rounded">{results.input}</p>
          </div>

          {/* Optimization Results */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="relative">
              <button
                onClick={() => copyToClipboard(results.optimization, 'full')}
                className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm"
              >
                {copied === 'full' ? '✓ Copied!' : 'Copy All'}
              </button>
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                  {results.optimization}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Want Monthly AI Search Monitoring?</h2>
            <p className="text-lg mb-6 opacity-90">
              Track how AI engines recommend your business and get ongoing optimization suggestions
            </p>
            <button
              onClick={() => alert('Waitlist feature coming soon!')}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Join Waitlist
            </button>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => router.push('/')}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              ← Optimize Another Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
