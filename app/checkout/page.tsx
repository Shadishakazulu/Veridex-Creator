'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Checkout failed');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (err) {
      setError('Failed to start checkout. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="text-slate-400 hover:text-white mb-8 inline-block">
          ← Back
        </Link>

        <Card className="bg-slate-800 border-slate-700 p-8">
          <h1 className="text-3xl font-bold mb-2">Subscribe to Creator Pro</h1>
          <p className="text-slate-300 mb-8">$29/month - 1,000 proofs per month + priority support</p>

          <form onSubmit={handleCheckout} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="you@example.com"
              />
            </div>

            {error && (
              <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 text-red-200">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Continue to Payment'}
            </Button>

            <p className="text-sm text-slate-400 text-center">
              Secure payment powered by Stripe
            </p>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-700">
            <h3 className="font-semibold mb-4">What's Included:</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>✓ 1,000 proofs per month</li>
              <li>✓ Advanced verification</li>
              <li>✓ Priority email support</li>
              <li>✓ API access</li>
              <li>✓ Custom branding</li>
              <li>✓ Analytics dashboard</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
