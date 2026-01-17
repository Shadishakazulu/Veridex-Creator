import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Veridex - Proof Layer for Content & AI',
  description: 'Cryptographic proof of authenticity for creators, enterprises, and platforms',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
