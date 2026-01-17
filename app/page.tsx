import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Veridex
          </div>
          <div className="flex gap-4">
            <Link href="/pricing">
              <Button variant="ghost" className="text-white hover:text-emerald-400">Pricing</Button>
            </Link>
            <Link href="/checkout">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            The Proof Layer for<br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Content & AI
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Cryptographic proof of authenticity for creators, enterprises, and platforms. 
            Verify content ownership, prove AI governance, and build trust at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-700">
        <h2 className="text-3xl font-bold text-center mb-12">Why Veridex?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Cryptographic Proof',
              description: 'SHA-256 hashing, ECDSA signatures, and blockchain anchoring for immutable proof'
            },
            {
              title: 'Court Admissible',
              description: 'Legal framework for proof admissibility in court proceedings and legal disputes'
            },
            {
              title: 'Enterprise Ready',
              description: 'Multi-tenant architecture, SOC 2 compliance, and 99.99% uptime SLA'
            },
            {
              title: 'Creator Friendly',
              description: 'Simple API, affordable pricing, and instant proof generation'
            },
            {
              title: 'AI Governance',
              description: 'Verify AI-generated content origin and track attribution'
            },
            {
              title: 'Insurance Backed',
              description: 'Proof-based insurance products for content liability'
            }
          ].map((feature, i) => (
            <Card key={i} className="bg-slate-800 border-slate-700 p-6 hover:border-emerald-500 transition">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 mb-3" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-300 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-700 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Trust?</h2>
        <p className="text-slate-300 mb-8">Join thousands of creators and enterprises using Veridex</p>
        <Link href="/checkout">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Get Started Now
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 Veridex. All rights reserved. | Built by EYEspAI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
