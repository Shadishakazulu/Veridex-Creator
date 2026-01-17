

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <CheckCircle2 className="h-20 w-20 text-emerald-400 mx-auto mb-6" />
        
        <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-xl text-slate-300 mb-8">
          Welcome to Veridex Creator Pro. Your subscription is now active.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8 text-left">
          <h2 className="font-semibold mb-4">What's Next?</h2>
          <ul className="space-y-3 text-slate-300">
            <li>✓ Check your email for confirmation</li>
            <li>✓ Access your dashboard to generate proofs</li>
            <li>✓ Read the documentation to get started</li>
            <li>✓ Contact support if you have questions</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Back to Home
            </Button>
          </Link>
          <a href="https://dashboard.veridex.com">
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              Go to Dashboard
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
