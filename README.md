# Veridex Creator Platform

Proof layer for content and AI. Cryptographic proof of authenticity for creators, enterprises, and platforms.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.local.example` to `.env.local` and add your Stripe keys.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Features

- **Pricing Page** - Three-tier subscription model
- **Checkout** - Stripe payment integration
- **Success/Cancel Pages** - Post-payment flow
- **Webhook Handler** - Stripe event processing
- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Modern UI with Tailwind CSS

## Deployment

Deploy to Manus with `MANUS_DEPLOYMENT_GUIDE.md`

## Documentation

- `MANUS_DEPLOYMENT_GUIDE.md` - Deployment instructions
- `MANUS_DEPLOYMENT_CHECKLIST.md` - Deployment checklist
- `STRIPE_SETUP.md` - Stripe configuration
- `TESTING_GUIDE.md` - Testing procedures
- `MASTER_INDEX.md` - Complete documentation index
