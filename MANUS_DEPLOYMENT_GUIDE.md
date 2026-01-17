# Veridex Creator Platform - Manus Deployment Guide

## Overview

This guide walks you through deploying the Veridex Creator Platform to Manus with the subdomain `creators.eyespai.com`.

**Deployment Time:** 15-30 minutes  
**Difficulty:** Easy  
**Requirements:** Manus account with domain access

---

## Prerequisites

- ✅ Manus account (with admin access)
- ✅ Access to eyespai.com domain management
- ✅ Stripe test keys (from Stripe Dashboard)
- ✅ All code files ready in `/home/ubuntu/veridex-creator/`

---

## Step 1: Prepare the Project

### 1.1 Verify Project Structure

```bash
cd /home/ubuntu/veridex-creator
ls -la
```

You should see:
- `app/` - Next.js application
- `components/` - React components
- `lib/` - Utilities and configuration
- `public/` - Static assets
- `package.json` - Dependencies
- `next.config.js` - Next.js configuration
- `manus.config.json` - Manus configuration
- `.env.local.example` - Environment template

### 1.2 Create Environment File

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Stripe test keys:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_test_YOUR_SECRET_HERE
NEXT_PUBLIC_APP_URL=https://creators.eyespai.com
NEXT_PUBLIC_MAIN_SITE_URL=https://eyespai.com
NODE_ENV=production
```

### 1.3 Verify Build

```bash
npm install
npm run build
```

This should complete without errors.

---

## Step 2: Deploy to Manus

### 2.1 Access Manus Dashboard

1. Go to [manus.im](https://manus.im)
2. Sign in to your account
3. Click "New Project" or "Deploy"

### 2.2 Connect GitHub (Recommended)

**Option A: GitHub Integration (Recommended)**

1. Click "Connect GitHub"
2. Authorize Manus to access your GitHub account
3. Select the repository containing Veridex code
4. Click "Deploy"

**Option B: Upload ZIP File**

1. Create ZIP file of project:
   ```bash
   cd /home/ubuntu
   zip -r veridex-creator.zip veridex-creator/
   ```

2. In Manus dashboard, click "Upload Project"
3. Select the ZIP file
4. Click "Deploy"

### 2.3 Configure Deployment Settings

In the Manus deployment form:

**Project Name:** `veridex-creator`

**Framework:** `Next.js`

**Build Command:** `npm run build`

**Start Command:** `npm start`

**Node Version:** `18`

**Environment Variables:**
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
STRIPE_WEBHOOK_SECRET=whsec_test_YOUR_SECRET
NEXT_PUBLIC_APP_URL=https://creators.eyespai.com
NEXT_PUBLIC_MAIN_SITE_URL=https://eyespai.com
NODE_ENV=production
```

### 2.4 Configure Custom Domain

1. In Manus dashboard, go to **Settings → Domains**
2. Click "Add Custom Domain"
3. Enter: `creators.eyespai.com`
4. Select domain type: `Subdomain`
5. Click "Configure DNS"

---

## Step 3: Configure DNS Records

### 3.1 Get DNS Configuration from Manus

Manus will provide you with DNS records to add. Typically:

```
Type: CNAME
Name: creators
Value: your-app-id.manus.space
TTL: 3600
```

### 3.2 Update DNS at Your Domain Registrar

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings for `eyespai.com`
3. Add the CNAME record provided by Manus
4. Save changes

**Example (GoDaddy):**
- Go to DNS Management
- Add record:
  - Type: CNAME
  - Name: creators
  - Value: [value from Manus]
  - TTL: 3600

### 3.3 Verify DNS Propagation

```bash
# Check DNS propagation (may take 5-30 minutes)
nslookup creators.eyespai.com
dig creators.eyespai.com
```

Or use online tool: [whatsmydns.net](https://whatsmydns.net/)

---

## Step 4: Configure SSL Certificate

### 4.1 Manus Automatic SSL

Manus automatically provisions SSL certificates via Let's Encrypt.

1. In Manus dashboard, go to **Settings → SSL**
2. Verify "Auto SSL" is enabled
3. Certificate will be generated automatically
4. Takes 5-30 minutes to activate

### 4.2 Verify HTTPS

Once DNS propagates:

```bash
curl -I https://creators.eyespai.com
```

You should see:
```
HTTP/2 200
```

---

## Step 5: Configure Stripe Webhooks

### 5.1 Get Webhook URL

In Manus dashboard:
1. Go to **Settings → Webhooks** or **API**
2. Copy your application URL: `https://creators.eyespai.com`
3. Webhook endpoint: `https://creators.eyespai.com/api/webhooks/stripe`

### 5.2 Update Stripe Dashboard

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers → Webhooks**
3. Click **Add endpoint**
4. Enter endpoint URL: `https://creators.eyespai.com/api/webhooks/stripe`
5. Select events:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `charge.succeeded`
   - `charge.failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
6. Click **Add endpoint**
7. Copy webhook signing secret
8. Update in Manus environment variables: `STRIPE_WEBHOOK_SECRET`

---

## Step 6: Verify Deployment

### 6.1 Check Application Status

1. In Manus dashboard, go to **Dashboard**
2. Verify status shows "Running" (green)
3. Check recent logs for errors

### 6.2 Test Application

Visit: `https://creators.eyespai.com`

You should see:
- ✅ Veridex branding
- ✅ Pricing page
- ✅ "Subscribe Now" buttons
- ✅ Navigation menu

### 6.3 Test Stripe Integration

1. Click "Subscribe Now" on any plan
2. Fill in checkout form:
   - Email: `test@example.com`
   - Name: `Test User`
   - Card: `4242 4242 4242 4242`
   - Expiry: `12/25`
   - CVC: `123`
3. Click "Pay"
4. Should see success page

### 6.4 Test Webhook Delivery

1. In Stripe Dashboard, go to **Developers → Webhooks**
2. Click on your endpoint
3. Scroll to "Events"
4. Click "Send test webhook"
5. Select `payment_intent.succeeded`
6. Click "Send test webhook"
7. Verify delivery status shows "Delivered"

---

## Step 7: Configure Monitoring & Logging

### 7.1 Enable Monitoring

In Manus dashboard:

1. Go to **Settings → Monitoring**
2. Enable:
   - ✅ Performance monitoring
   - ✅ Error tracking
   - ✅ Uptime monitoring
   - ✅ Alert notifications

### 7.2 Set Up Alerts

1. Go to **Settings → Alerts**
2. Configure alerts for:
   - High error rate (> 1%)
   - Downtime (> 5 minutes)
   - High response time (> 1000ms)
   - High memory usage (> 80%)

### 7.3 View Logs

1. Go to **Dashboard → Logs**
2. View real-time application logs
3. Filter by error level
4. Search by keyword

---

## Step 8: Configure Backups & Scaling

### 8.1 Enable Automatic Backups

1. Go to **Settings → Backups**
2. Enable automatic backups
3. Set frequency: Daily
4. Retention: 30 days

### 8.2 Configure Auto-Scaling

1. Go to **Settings → Scaling**
2. Set minimum instances: 1
3. Set maximum instances: 5
4. Target CPU: 70%
5. Target memory: 80%

### 8.3 Configure CDN

1. Go to **Settings → CDN**
2. Enable CDN distribution
3. Set cache TTL:
   - Static assets: 31536000 (1 year)
   - Dynamic content: 60 (1 minute)

---

## Step 9: Set Up Custom Domain Email (Optional)

If you want email from `support@creators.eyespai.com`:

1. Go to **Settings → Email**
2. Configure email forwarding
3. Add MX records to DNS
4. Verify email domain

---

## Troubleshooting

### Issue: DNS Not Resolving

**Solution:**
1. Verify CNAME record in domain registrar
2. Wait 5-30 minutes for propagation
3. Clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)
4. Test with: `nslookup creators.eyespai.com`

### Issue: SSL Certificate Not Activating

**Solution:**
1. Verify DNS is resolving correctly
2. Wait 5-10 minutes for Let's Encrypt to issue certificate
3. Check Manus logs for SSL errors
4. Manually request certificate in Manus settings

### Issue: Stripe Webhooks Not Delivering

**Solution:**
1. Verify webhook URL is correct: `https://creators.eyespai.com/api/webhooks/stripe`
2. Verify `STRIPE_WEBHOOK_SECRET` matches Stripe dashboard
3. Check application logs for webhook errors
4. Test webhook delivery in Stripe dashboard

### Issue: Application Returning 500 Error

**Solution:**
1. Check Manus logs for error details
2. Verify environment variables are set correctly
3. Verify Stripe keys are valid
4. Restart application in Manus dashboard

### Issue: Slow Performance

**Solution:**
1. Check CPU and memory usage in Manus dashboard
2. Enable CDN for static assets
3. Increase instance size or enable auto-scaling
4. Check database query performance
5. Enable caching

---

## Post-Deployment Checklist

- [ ] DNS configured and resolving
- [ ] SSL certificate active (HTTPS working)
- [ ] Application loading without errors
- [ ] Pricing page displaying correctly
- [ ] Stripe checkout working
- [ ] Webhook delivery confirmed
- [ ] Monitoring and alerts enabled
- [ ] Backups configured
- [ ] Auto-scaling configured
- [ ] CDN enabled
- [ ] Custom domain email configured (optional)
- [ ] Performance tested
- [ ] Security headers verified

---

## Next Steps

### 1. Test Payment Flow

Follow the **TESTING_GUIDE.md** to test:
- ✅ Successful payments
- ✅ Failed payments
- ✅ Webhook delivery
- ✅ Dashboard functionality

### 2. Set Up Analytics

1. In Manus dashboard, go to **Analytics**
2. View traffic and performance metrics
3. Set up custom events
4. Create dashboards

### 3. Configure Alerts

1. Set up email alerts for:
   - High error rates
   - Downtime
   - Performance degradation
   - Failed webhooks

### 4. Prepare for Launch

1. Review **DEPLOYMENT_LAUNCH_GUIDE.md**
2. Set up marketing campaign
3. Prepare press release
4. Schedule social media posts
5. Brief sales team

---

## Support & Resources

### Manus Documentation
- [Manus Docs](https://docs.manus.im)
- [Manus Support](https://support.manus.im)
- [Manus Community](https://community.manus.im)

### Stripe Documentation
- [Stripe Docs](https://stripe.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Stripe Support](https://support.stripe.com)

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

## Deployment Summary

**Platform:** Manus  
**Domain:** creators.eyespai.com  
**Framework:** Next.js 14  
**Runtime:** Node.js 18  
**SSL:** Automatic (Let's Encrypt)  
**Uptime SLA:** 99.9%  
**Auto-scaling:** Enabled  
**CDN:** Enabled  
**Monitoring:** Enabled  
**Backups:** Daily  

**Deployment Status:** ✅ READY FOR PRODUCTION

---

**Document Version:** 1.0  
**Last Updated:** January 17, 2026  
**Status:** Ready for Deployment
