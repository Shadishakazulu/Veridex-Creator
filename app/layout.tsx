import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Veridex - Proof Layer for Content & AI | EYEspAI',
  description: 'Cryptographic proof of authenticity for creators, enterprises, and platforms. Verify content ownership, prove AI governance, and build trust at scale.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Veridex - Proof Layer for Content & AI',
    description: 'Cryptographic proof of authenticity for creators, enterprises, and platforms',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0a1628] text-[#e0e7ff]">
        {children}
      </body>
    </html>
  );
}
