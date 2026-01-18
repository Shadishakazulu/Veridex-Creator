'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Shield, Lock, Zap, Eye } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0f1f3c] to-[#0a1628] text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 tactical-grid"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-[#00ff41]/20 bg-[#0a1628]/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Eye className="w-8 h-8 text-[#00ff41]" />
            <div className="text-2xl font-bold font-orbitron">
              <span className="gradient-text">VERIDEX</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/pricing">
              <Button 
                variant="ghost" 
                className="text-[#a5b4fc] hover:text-[#00ff41] hover:bg-[#00ff41]/10 border border-transparent hover:border-[#00ff41]/50 font-space-mono uppercase text-sm tracking-wider"
              >
                Pricing
              </Button>
            </Link>
            <Link href="/checkout">
              <Button 
                className="bg-gradient-to-r from-[#00ff41] to-[#10b981] hover:from-[#00ff41] hover:to-[#06b6d4] text-[#0a1628] font-bold font-orbitron uppercase tracking-wider shadow-lg shadow-[#00ff41]/50 hover:shadow-[#00ff41]/80"
              >
                Launch Platform
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center space-y-8">
          {/* Animated Badge */}
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full border border-[#00ff41]/50 bg-[#00ff41]/10 backdrop-blur-sm">
              <span className="text-[#00ff41] font-space-mono text-sm uppercase tracking-widest">
                ⚡ Proof Layer for Content & AI
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl font-bold font-orbitron leading-tight">
            The <span className="gradient-text neon-glow">Proof Layer</span>
            <br />
            for <span className="gradient-text">Content & AI</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#a5b4fc] max-w-3xl mx-auto leading-relaxed font-space-mono">
            Cryptographic proof of authenticity for creators, enterprises, and platforms. 
            Verify content ownership, prove AI governance, and build trust at scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/checkout">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#00ff41] to-[#10b981] hover:from-[#00ff41] hover:to-[#06b6d4] text-[#0a1628] font-bold font-orbitron uppercase tracking-wider shadow-lg shadow-[#00ff41]/50 hover:shadow-[#00ff41]/80 text-base"
              >
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41]/10 font-bold font-orbitron uppercase tracking-wider text-base"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00ff41]/10 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#06b6d4]/10 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold font-orbitron text-center mb-16">
          Why <span className="gradient-text">VERIDEX</span>?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: 'Cryptographic Proof',
              description: 'Military-grade ECDSA signatures and blockchain anchoring for immutable proof'
            },
            {
              icon: Lock,
              title: 'Court Admissible',
              description: 'Legal-grade evidence suitable for court proceedings and legal disputes'
            },
            {
              icon: Zap,
              title: 'Enterprise Ready',
              description: 'SOC 2 compliance, 99.99% uptime SLA, and enterprise architecture'
            },
            {
              icon: Eye,
              title: 'Creator Friendly',
              description: 'Simple API, instant proof generation, and seamless integration'
            }
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="group glass-effect p-6 rounded-lg border border-[#00ff41]/20 hover:border-[#00ff41]/50 hover:shadow-lg hover:shadow-[#00ff41]/20 cursor-pointer"
            >
              <feature.icon className="w-12 h-12 text-[#00ff41] mb-4 group-hover:scale-110 transform" />
              <h3 className="text-lg font-bold font-orbitron text-[#00ff41] mb-2 uppercase">
                {feature.title}
              </h3>
              <p className="text-[#a5b4fc] text-sm font-space-mono">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="glass-effect border border-[#00ff41]/30 rounded-lg p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-orbitron">
            Ready to Build <span className="gradient-text">Trust</span>?
          </h2>
          <p className="text-[#a5b4fc] text-lg font-space-mono">
            Join thousands of creators and enterprises using Veridex to verify content ownership and prove AI governance.
          </p>
          <Link href="/checkout">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#00ff41] to-[#10b981] hover:from-[#00ff41] hover:to-[#06b6d4] text-[#0a1628] font-bold font-orbitron uppercase tracking-wider shadow-lg shadow-[#00ff41]/50 hover:shadow-[#00ff41]/80 text-base"
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#00ff41]/20 bg-[#0a1628]/50 backdrop-blur-md mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-orbitron font-bold text-[#00ff41] uppercase mb-4">Product</h4>
              <ul className="space-y-2 text-[#a5b4fc] text-sm font-space-mono">
                <li><Link href="/pricing" className="hover:text-[#00ff41]">Pricing</Link></li>
                <li><Link href="/" className="hover:text-[#00ff41]">Features</Link></li>
                <li><Link href="/" className="hover:text-[#00ff41]">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-bold text-[#00ff41] uppercase mb-4">Company</h4>
              <ul className="space-y-2 text-[#a5b4fc] text-sm font-space-mono">
                <li><Link href="/" className="hover:text-[#00ff41]">About</Link></li>
                <li><Link href="/" className="hover:text-[#00ff41]">Blog</Link></li>
                <li><Link href="/" className="hover:text-[#00ff41]">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-bold text-[#00ff41] uppercase mb-4">Legal</h4>
              <ul className="space-y-2 text-[#a5b4fc] text-sm font-space-mono">
                <li><Link href="/" className="hover:text-[#00ff41]">Privacy</Link></li>
                <li><Link href="/" className="hover:text-[#00ff41]">Terms</Link></li>
                <li><Link href="/" className="hover:text-[#00ff41]">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-bold text-[#00ff41] uppercase mb-4">Connect</h4>
              <ul className="space-y-2 text-[#a5b4fc] text-sm font-space-mono">
                <li><Link href="/" className="hover:text-[#00ff41]">Twitter</Link></li>
                <li><Link href="/" className="hover:text-[#00ff41]">LinkedIn</Link></li>
                <li><Link href="/" className="hover:text-[#00ff41]">GitHub</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#00ff41]/20 pt-8 text-center text-[#a5b4fc] text-sm font-space-mono">
            <p>© 2026 Veridex. All rights reserved. | Built by EYEspAI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
