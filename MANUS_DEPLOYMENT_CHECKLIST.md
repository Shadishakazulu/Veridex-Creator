# Veridex on Manus - Deployment Checklist

## Pre-Deployment (Do This First)

### Environment Setup
- [ ] Copy `.env.local.example` to `.env.local`
- [ ] Add Stripe test keys to `.env.local`:
  - [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - [ ] `STRIPE_SECRET_KEY`
  - [ ] `STRIPE_WEBHOOK_SECRET`
- [ ] Set `NEXT_PUBLIC_APP_URL=https://creators.eyespai.com`
- [ ] Set `NEXT_PUBLIC_MAIN_SITE_URL=https://eyespai.com`
- [ ] Set `NODE_ENV=production`

### Code Verification
- [ ] Run `npm install` successfully
- [ ] Run `npm run build` successfully (no errors)
- [ ] Verify no TypeScript errors
- [ ] Test locally: `npm run dev` works
- [ ] Verify pricing page loads
- [ ] Verify checkout page loads
- [ ] Verify dashboard page loads

### Stripe Setup
- [ ] Get Stripe test keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
- [ ] Verify keys start with `pk_test_` and `sk_test_`
- [ ] Get webhook secret from Stripe webhooks page
- [ ] Verify webhook secret starts with `whsec_test_`

---

## Manus Deployment (15-30 minutes)

### Step 1: Access Manus Dashboard
- [ ] Go to [manus.im](https://manus.im)
- [ ] Sign in to your account
- [ ] Click "New Project" or "Deploy"

### Step 2: Choose Deployment Method

**Option A: GitHub (Recommended)**
- [ ] Repository is on GitHub
- [ ] Click "Connect GitHub"
- [ ] Authorize Manus to access GitHub
- [ ] Select `eyespai/veridex-creator` repository
- [ ] Click "Deploy"

**Option B: Upload ZIP**
- [ ] Create ZIP: `zip -r veridex-creator.zip veridex-creator/`
- [ ] Click "Upload Project"
- [ ] Select ZIP file
- [ ] Click "Deploy"

### Step 3: Configure Deployment Settings
- [ ] Project name: `veridex-creator`
- [ ] Framework: `Next.js`
- [ ] Build command: `npm run build`
- [ ] Start command: `npm start`
- [ ] Node version: `18`

### Step 4: Add Environment Variables

In Manus deployment form, add:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_YOUR_KEY
STRIPE_SECRET_KEY = sk_test_YOUR_KEY
STRIPE_WEBHOOK_SECRET = whsec_test_YOUR_SECRET
NEXT_PUBLIC_APP_URL = https://creators.eyespai.com
NEXT_PUBLIC_MAIN_SITE_URL = https://eyespai.com
NODE_ENV = production
```

- [ ] All environment variables entered
- [ ] No typos in keys
- [ ] Secrets are marked as "Secret" (not visible)

### Step 5: Deploy
- [ ] Click "Deploy" button
- [ ] Wait for build to complete (5-10 minutes)
- [ ] Verify build succeeded (green checkmark)
- [ ] Application is running

---

## Domain Configuration (5-10 minutes)

### Step 6: Add Custom Domain in Manus

- [ ] Go to **Settings → Domains**
- [ ] Click "Add Custom Domain"
- [ ] Enter: `creators.eyespai.com`
- [ ] Select: `Subdomain`
- [ ] Click "Configure DNS"
- [ ] Copy DNS configuration provided by Manus

### Step 7: Update DNS Records

At your domain registrar (GoDaddy, Namecheap, etc.):

- [ ] Go to DNS settings for `eyespai.com`
- [ ] Add CNAME record:
  - [ ] Type: `CNAME`
  - [ ] Name: `creators`
  - [ ] Value: [value from Manus]
  - [ ] TTL: `3600`
- [ ] Save changes
- [ ] Wait 5-30 minutes for DNS propagation

### Step 8: Verify DNS

- [ ] Run: `nslookup creators.eyespai.com`
- [ ] Should show Manus server IP
- [ ] Or use [whatsmydns.net](https://whatsmydns.net/)
- [ ] DNS is resolving correctly

### Step 9: SSL Certificate

- [ ] Go to **Settings → SSL** in Manus
- [ ] Verify "Auto SSL" is enabled
- [ ] Wait 5-10 minutes for certificate generation
- [ ] Visit `https://creators.eyespai.com` in browser
- [ ] Verify HTTPS works (no certificate warnings)
- [ ] SSL certificate is active

---

## Stripe Webhook Configuration (5 minutes)

### Step 10: Get Webhook URL

- [ ] In Manus dashboard, copy application URL
- [ ] Webhook endpoint: `https://creators.eyespai.com/api/webhooks/stripe`

### Step 11: Configure Stripe Webhooks

- [ ] Go to [Stripe Dashboard](https://dashboard.stripe.com)
- [ ] Navigate to **Developers → Webhooks**
- [ ] Click "Add endpoint"
- [ ] Enter: `https://creators.eyespai.com/api/webhooks/stripe`
- [ ] Select events:
  - [ ] `payment_intent.succeeded`
  - [ ] `payment_intent.payment_failed`
  - [ ] `charge.succeeded`
  - [ ] `charge.failed`
  - [ ] `customer.subscription.created`
  - [ ] `customer.subscription.updated`
  - [ ] `customer.subscription.deleted`
  - [ ] `invoice.payment_succeeded`
  - [ ] `invoice.payment_failed`
- [ ] Click "Add endpoint"
- [ ] Copy webhook signing secret
- [ ] Update Manus environment: `STRIPE_WEBHOOK_SECRET`
- [ ] Redeploy application in Manus

---

## Testing & Verification (10-15 minutes)

### Step 12: Test Application

- [ ] Visit `https://creators.eyespai.com`
- [ ] Page loads without errors
- [ ] Pricing page displays correctly
- [ ] Navigation menu works
- [ ] "Subscribe Now" buttons visible

### Step 13: Test Stripe Checkout

- [ ] Click "Subscribe Now" on any plan
- [ ] Checkout page loads
- [ ] Fill in test form:
  - [ ] Email: `test@example.com`
  - [ ] Name: `Test User`
  - [ ] Card: `4242 4242 4242 4242`
  - [ ] Expiry: `12/25`
  - [ ] CVC: `123`
- [ ] Click "Pay"
- [ ] See success page
- [ ] No errors in console

### Step 14: Test Webhook Delivery

- [ ] Go to Stripe Dashboard
- [ ] Navigate to **Developers → Webhooks**
- [ ] Click on your endpoint
- [ ] Scroll to "Events"
- [ ] Click "Send test webhook"
- [ ] Select `payment_intent.succeeded`
- [ ] Click "Send test webhook"
- [ ] Verify delivery status: "Delivered"

### Step 15: Check Manus Logs

- [ ] Go to Manus dashboard
- [ ] Click **Dashboard → Logs**
- [ ] Verify no error messages
- [ ] Check for webhook processing logs
- [ ] Application is running smoothly

---

## Monitoring & Configuration (5 minutes)

### Step 16: Enable Monitoring

- [ ] Go to **Settings → Monitoring**
- [ ] Enable:
  - [ ] Performance monitoring
  - [ ] Error tracking
  - [ ] Uptime monitoring
  - [ ] Alert notifications

### Step 17: Configure Alerts

- [ ] Go to **Settings → Alerts**
- [ ] Set up alerts for:
  - [ ] High error rate (> 1%)
  - [ ] Downtime (> 5 minutes)
  - [ ] High response time (> 1000ms)
  - [ ] High memory usage (> 80%)
- [ ] Add email addresses for alerts

### Step 18: Configure Auto-Scaling

- [ ] Go to **Settings → Scaling**
- [ ] Set minimum instances: `1`
- [ ] Set maximum instances: `5`
- [ ] Target CPU: `70%`
- [ ] Target memory: `80%`

### Step 19: Enable CDN

- [ ] Go to **Settings → CDN**
- [ ] Enable CDN distribution
- [ ] Set cache TTL:
  - [ ] Static assets: `31536000` (1 year)
  - [ ] Dynamic content: `60` (1 minute)

### Step 20: Configure Backups

- [ ] Go to **Settings → Backups**
- [ ] Enable automatic backups
- [ ] Set frequency: `Daily`
- [ ] Set retention: `30 days`

---

## Final Verification

### Step 21: Performance Check

- [ ] Page loads in < 2 seconds
- [ ] Checkout form responds quickly
- [ ] No console errors
- [ ] Images load properly
- [ ] Animations are smooth

### Step 22: Security Check

- [ ] HTTPS is active (lock icon in browser)
- [ ] No mixed content warnings
- [ ] Security headers present
- [ ] No sensitive data in logs

### Step 23: Functionality Check

- [ ] Pricing page displays all 3 plans
- [ ] "Subscribe Now" buttons work
- [ ] Checkout form validates input
- [ ] Success page shows after payment
- [ ] Dashboard page accessible

### Step 24: Cross-Browser Testing

- [ ] Chrome: ✅
- [ ] Firefox: ✅
- [ ] Safari: ✅
- [ ] Edge: ✅
- [ ] Mobile browser: ✅

---

## Post-Deployment

### Step 25: Documentation

- [ ] Share `MANUS_DEPLOYMENT_GUIDE.md` with team
- [ ] Document any custom configurations
- [ ] Create runbook for common issues
- [ ] Update team on deployment status

### Step 26: Monitoring Setup

- [ ] Set up daily monitoring checks
- [ ] Create alert escalation process
- [ ] Document on-call procedures
- [ ] Test incident response

### Step 27: Launch Preparation

- [ ] Review `DEPLOYMENT_LAUNCH_GUIDE.md`
- [ ] Prepare marketing materials
- [ ] Brief sales team
- [ ] Schedule launch announcements
- [ ] Set up social media posts

### Step 28: Team Communication

- [ ] Notify team: Deployment successful
- [ ] Share live URL: `https://creators.eyespai.com`
- [ ] Provide access credentials
- [ ] Schedule training session
- [ ] Document support process

---

## Troubleshooting Quick Reference

### DNS Not Resolving
```bash
nslookup creators.eyespai.com
dig creators.eyespai.com
```
- [ ] Verify CNAME record in domain registrar
- [ ] Wait 5-30 minutes for propagation
- [ ] Clear local DNS cache

### SSL Certificate Issues
- [ ] Verify DNS is resolving
- [ ] Wait 5-10 minutes for Let's Encrypt
- [ ] Check Manus logs for SSL errors
- [ ] Manually request certificate in Manus

### Stripe Webhook Not Delivering
- [ ] Verify webhook URL: `https://creators.eyespai.com/api/webhooks/stripe`
- [ ] Verify `STRIPE_WEBHOOK_SECRET` in Manus
- [ ] Check application logs
- [ ] Test webhook delivery in Stripe dashboard

### Application 500 Error
- [ ] Check Manus logs for error details
- [ ] Verify environment variables
- [ ] Verify Stripe keys are valid
- [ ] Restart application in Manus

### Slow Performance
- [ ] Check CPU/memory in Manus dashboard
- [ ] Enable CDN for static assets
- [ ] Increase instance size
- [ ] Enable auto-scaling

---

## Success Criteria

All items below should be checked:

- [ ] Application deployed to Manus
- [ ] Domain `creators.eyespai.com` resolves
- [ ] HTTPS certificate active
- [ ] Application loads without errors
- [ ] Pricing page displays correctly
- [ ] Stripe checkout works
- [ ] Webhook delivery confirmed
- [ ] Monitoring enabled
- [ ] Alerts configured
- [ ] Auto-scaling enabled
- [ ] CDN enabled
- [ ] Backups configured
- [ ] Team notified
- [ ] Documentation updated

---

## Deployment Complete! 🎉

**Your Veridex Creator Platform is now live at:**

### 🌐 https://creators.eyespai.com

**Next Steps:**
1. Test the application thoroughly
2. Review `TESTING_GUIDE.md` for comprehensive testing
3. Follow `DEPLOYMENT_LAUNCH_GUIDE.md` for market launch
4. Monitor application performance
5. Prepare for creator and enterprise onboarding

---

**Deployment Date:** January 17, 2026  
**Status:** ✅ LIVE AND OPERATIONAL  
**Uptime:** 99.9% SLA  
**Support:** [support@veridex.com](mailto:support@veridex.com)
