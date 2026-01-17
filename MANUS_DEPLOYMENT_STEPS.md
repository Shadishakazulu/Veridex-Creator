# 🚀 DEPLOY VERIDEX TO MANUS - STEP BY STEP

**Status:** Ready for Deployment  
**Application:** Veridex Creator Platform  
**Subdomain:** creators.eyespai.com  
**Stripe:** Live Mode (Real Payments)  

---

## 📋 DEPLOYMENT STEPS (5 minutes)

### Step 1: Go to Manus Dashboard

1. Open [manus.im](https://manus.im)
2. Sign in to your account
3. Click **"New Project"** button

### Step 2: Upload Project Files

1. Click **"Upload ZIP"** or **"GitHub"**
2. If uploading ZIP:
   - Download the `/home/ubuntu/veridex-creator/` folder as ZIP
   - Upload to Manus
3. If using GitHub:
   - Push code to your GitHub repository
   - Connect GitHub to Manus
   - Select the repository

### Step 3: Configure Project

1. **Project Name:** `Veridex Creator Platform`
2. **Framework:** Select **"Next.js"**
3. **Build Command:** `npm run build`
4. **Start Command:** `npm start`
5. **Install Command:** `npm install`

### Step 4: Add Environment Variables

In Manus → Settings → Secrets, add these:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_PUBLISHABLE_KEY
STRIPE_SECRET_KEY=sk_live_YOUR_SECRET_KEY
NEXT_PUBLIC_APP_URL=https://creators.eyespai.com
NEXT_PUBLIC_MAIN_SITE_URL=https://eyespai.com
NODE_ENV=production
```

### Step 5: Configure Subdomain

1. In Manus: **Settings → Domains**
2. Click **"Add Custom Domain"**
3. Enter: `creators.eyespai.com`
4. Copy the **CNAME record** shown
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add CNAME record:
   - **Name:** `creators`
   - **Value:** [CNAME from Manus]
7. Wait 5-30 minutes for DNS propagation

### Step 6: Deploy

1. In Manus: Click **"Deploy"** button
2. Watch the build progress
3. Wait for SSL certificate (5-10 minutes)
4. Verify deployment at `https://creators.eyespai.com`

### Step 7: Configure Webhooks (Optional but Recommended)

1. Get webhook URL from Manus logs: `https://creators.eyespai.com/api/webhooks`
2. Go to Stripe Dashboard → Developers → Webhooks
3. Click **"Add Endpoint"**
4. Enter URL: `https://creators.eyespai.com/api/webhooks`
5. Select events:
   - checkout.session.completed
   - customer.subscription.created
   - customer.subscription.updated
   - customer.subscription.deleted
   - invoice.payment_succeeded
   - invoice.payment_failed
6. Copy the **Signing Secret** (whsec_live_...)
7. Update Manus environment: `STRIPE_WEBHOOK_SECRET=[your secret]`

---

## ✅ VERIFICATION CHECKLIST

After deployment, verify:

- [ ] Site loads at https://creators.eyespai.com
- [ ] HTTPS works (green lock icon)
- [ ] Home page displays correctly
- [ ] Pricing page shows 3 tiers
- [ ] Checkout button works
- [ ] Stripe payment form loads
- [ ] Success page accessible
- [ ] No console errors

---

## 🧪 TEST PAYMENT FLOW

1. Go to `https://creators.eyespai.com/pricing`
2. Click on a plan
3. Enter email address
4. Click "Continue to Payment"
5. Use test card:
   - **Card:** 4242 4242 4242 4242
   - **Expiry:** 12/25
   - **CVC:** 123
6. Click "Pay"
7. Verify success page loads
8. Check Stripe Dashboard for payment

---

## 🆘 TROUBLESHOOTING

### Build Fails
- Check Node.js version (need 18+)
- Verify all dependencies installed
- Check TypeScript errors

### Pages Not Loading
- Check Manus logs for errors
- Verify environment variables set
- Check network tab in browser

### Stripe Not Working
- Verify API keys in environment
- Check webhook configuration
- Review Stripe logs

### DNS Not Resolving
- Wait 5-30 minutes for propagation
- Check CNAME record is correct
- Verify domain registrar settings

---

## 📞 SUPPORT

- **Manus Help:** https://help.manus.im
- **Stripe Help:** https://support.stripe.com
- **Documentation:** See README.md

---

**You're ready to deploy! Follow these steps and Veridex will be live in 15-50 minutes.**
