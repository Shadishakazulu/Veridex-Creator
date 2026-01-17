

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AlertCircle className="h-20 w-20 text-amber-400 mx-auto mb-6" />
        
        <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
        <p className="text-xl text-slate-300 mb-8">
          Your payment was cancelled. No charges have been made to your account.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8 text-left">
          <h2 className="font-semibold mb-4">What Happened?</h2>
          <p className="text-slate-300">
            You cancelled the checkout process. You can try again anytime by visiting our pricing page.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Back to Home
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
