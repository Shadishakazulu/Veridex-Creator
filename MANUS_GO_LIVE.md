# 🚀 DEPLOY VERIDEX TO MANUS - LIVE DEPLOYMENT

**Status:** Ready for Deployment  
**Application:** Veridex Creator Platform  
**Subdomain:** creators.eyespai.com  
**Stripe:** Live Mode (Real Payments)  

---

## 📋 QUICK START (5 Steps)

### Step 1: Go to Manus
- Open [manus.im](https://manus.im)
- Sign in
- Click "New Project"

### Step 2: Upload Code
- Click "Upload" or "GitHub"
- Upload `/home/ubuntu/veridex-creator/` folder
- Select Next.js framework

### Step 3: Add Environment Variables
In Manus Settings → Secrets:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_PUBLISHABLE_KEY
STRIPE_SECRET_KEY=sk_live_YOUR_SECRET_KEY
NEXT_PUBLIC_APP_URL=https://creators.eyespai.com
NEXT_PUBLIC_MAIN_SITE_URL=https://eyespai.com
NODE_ENV=production
```

### Step 4: Configure Subdomain
- Manus Settings → Domains
- Add: `creators.eyespai.com`
- Copy CNAME record
- Add to domain registrar
- Wait 5-30 minutes

### Step 5: Deploy
- Click "Deploy"
- Wait for build (5-10 min)
- Wait for SSL (5-10 min)
- Go live!

---

## ✅ VERIFICATION

After deployment:
- [ ] https://creators.eyespai.com loads
- [ ] Home page displays
- [ ] Pricing page shows 3 tiers
- [ ] Checkout works
- [ ] Stripe form loads
- [ ] Success page works

---

## 🧪 TEST PAYMENT

1. Go to pricing page
2. Click plan
3. Enter email
4. Card: 4242 4242 4242 4242
5. Expiry: 12/25
6. CVC: 123
7. Click Pay
8. Verify success page

---

## 📞 SUPPORT

- Manus: https://help.manus.im
- Stripe: https://support.stripe.com

---

**You're ready! Deploy now and Veridex will be live in 15-50 minutes.**
