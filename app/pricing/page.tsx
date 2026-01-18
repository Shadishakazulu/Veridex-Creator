'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, Eye } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0f1f3c] to-[#0a1628] text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 tactical-grid"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-[#00ff41]/20 bg-[#0a1628]/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Eye className="w-8 h-8 text-[#00ff41]" />
            <div className="text-2xl font-bold font-orbitron">
              <span className="gradient-text">VERIDEX</span>
            </div>
          </Link>
          <Link href="/checkout">
            <Button 
              className="bg-gradient-to-r from-[#00ff41] to-[#10b981] hover:from-[#00ff41] hover:to-[#06b6d4] text-[#0a1628] font-bold font-orbitron uppercase tracking-wider shadow-lg shadow-[#00ff41]/50"
            >
              Launch Platform
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold font-orbitron mb-4">
          <span className="gradient-text">Simple, Transparent</span> Pricing
        </h1>
        <p className="text-xl text-[#a5b4fc] max-w-2xl mx-auto font-space-mono">
          Choose the plan that fits your needs. All plans include our core proof generation technology.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group ${plan.highlighted ? 'md:scale-105' : ''}`}
            >
              {/* Glow Effect */}
              {plan.highlighted && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff41] to-[#06b6d4] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              )}
              
              <Card
                className={`relative ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-[#00ff41]/20 to-[#06b6d4]/10 border-[#00ff41]/50 shadow-lg shadow-[#00ff41]/30'
                    : 'glass-effect border-[#00ff41]/20'
                } p-8 flex flex-col rounded-lg`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#00ff41] to-[#06b6d4] text-[#0a1628] px-4 py-1 rounded-full text-xs font-bold font-orbitron uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold font-orbitron mb-2 text-[#00ff41] uppercase">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  {plan.period && <span className="text-[#a5b4fc] font-space-mono">{plan.period}</span>}
                </div>
                <p className="text-sm text-[#a5b4fc] mb-6 font-space-mono">{plan.description}</p>

                <Link href="/checkout" className="mb-6">
                  <Button
                    className={`w-full font-bold font-orbitron uppercase tracking-wider ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-[#00ff41] to-[#10b981] hover:from-[#00ff41] hover:to-[#06b6d4] text-[#0a1628] shadow-lg shadow-[#00ff41]/50'
                        : 'border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41]/10'
                    }`}
                    variant={plan.ctaVariant}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#00ff41] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#a5b4fc] font-space-mono">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[#00ff41]/20">
        <h2 className="text-4xl font-bold font-orbitron text-center mb-12">
          <span className="gradient-text">Frequently Asked</span> Questions
        </h2>
        
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
            <div key={i} className="glass-effect border border-[#00ff41]/20 hover:border-[#00ff41]/50 rounded-lg p-6 transition">
              <h3 className="font-bold font-orbitron text-[#00ff41] mb-2 uppercase">{item.q}</h3>
              <p className="text-[#a5b4fc] font-space-mono">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#00ff41]/20 bg-[#0a1628]/50 backdrop-blur-md mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-[#a5b4fc] text-sm font-space-mono">
            <p>© 2026 Veridex. All rights reserved. | Built by EYEspAI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
