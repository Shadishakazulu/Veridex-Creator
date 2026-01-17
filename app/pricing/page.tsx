

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Creator',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        '10 proofs per month',
        'Basic verification',
        'Email support',
        'Community access',
      ],
      cta: 'Get Started',
      ctaVariant: 'outline' as const,
    },
    {
      name: 'Creator Pro',
      price: '$29',
      period: '/month',
      description: 'For active creators',
      features: [
        '1,000 proofs per month',
        'Advanced verification',
        'Priority email support',
        'API access',
        'Custom branding',
        'Analytics dashboard',
      ],
      cta: 'Subscribe Now',
      ctaVariant: 'default' as const,
      highlighted: true,
    },
    {
      name: 'Studio',
      price: '$99',
      period: '/month',
      description: 'For studios and teams',
      features: [
        'Unlimited proofs',
        'Advanced verification',
        '24/7 phone support',
        'API access',
        'Custom branding',
        'Advanced analytics',
        'Team management',
        'Webhooks',
      ],
      cta: 'Subscribe Now',
      ctaVariant: 'default' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Choose the plan that fits your needs. All plans include our core proof generation technology.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`${
                plan.highlighted
                  ? 'bg-gradient-to-b from-emerald-600 to-emerald-700 border-emerald-500 ring-2 ring-emerald-500'
                  : 'bg-slate-800 border-slate-700'
              } p-8 flex flex-col`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-slate-300">{plan.period}</span>}
              </div>
              <p className="text-sm text-slate-300 mb-6">{plan.description}</p>

              <Link href="/checkout" className="mb-6">
                <Button
                  variant={plan.ctaVariant}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Link>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-700">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {[
            {
              q: 'Can I upgrade or downgrade anytime?',
              a: 'Yes, you can change your plan at any time. Changes take effect at the next billing cycle.'
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards via Stripe, including Visa, Mastercard, American Express, and Discover.'
            },
            {
              q: 'Is there a contract or commitment?',
              a: 'No, all plans are month-to-month. You can cancel anytime with no penalties.'
            },
            {
              q: 'Do you offer discounts for annual billing?',
              a: 'Yes, we offer 10% off when you pay annually. Contact our sales team for enterprise pricing.'
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
