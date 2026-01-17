# 🎯 STRIPE ACCOUNT SETUP GUIDE FOR VERIDEX

**Purpose:** Create a brand new Stripe account specifically for the Veridex Creator Platform  
**Time Required:** 15-20 minutes  
**Difficulty:** Easy  

---

## 📋 STEP-BY-STEP SETUP

### Step 1: Create Stripe Account (5 minutes)

1. Go to **[stripe.com](https://stripe.com)**
2. Click **"Start now"** button (top right)
3. Enter your email address
4. Click **"Sign up"**
5. Create a strong password
6. Click **"Create account"**

### Step 2: Complete Account Information (5 minutes)

1. **Business Information:**
   - Business name: `Veridex` or `EYEspAI Veridex`
   - Business type: `SaaS / Software as a Service`
   - Country: Select your country
   - Business website: `https://creators.eyespai.com` (or leave blank for now)

2. **Personal Information:**
   - Full name: Your name
   - Email: Your business email
   - Phone: Your business phone

3. Click **"Next"**

### Step 3: Verify Email (2 minutes)

1. Check your email for Stripe verification link
2. Click the link to verify
3. Return to Stripe dashboard

### Step 4: Access API Keys (2 minutes)

1. In Stripe Dashboard, click **"Developers"** (left sidebar)
2. Click **"API keys"**
3. You should see two tabs: **"Standard keys"** and **"Restricted keys"**
4. Make sure you're in **"Standard keys"** tab

### Step 5: Copy Your Test Keys (1 minute)

You'll see four keys in test mode:

```
Publishable key (starts with pk_test_)
Secret key (starts with sk_test_)
Restricted API key (starts with rk_test_)
API key (starts with sk_test_) - Legacy
```

**Copy these two:**
- ✅ **Publishable Key** (pk_test_...)
- ✅ **Secret Key** (sk_test_...)

**IMPORTANT:** Keep these secret! Never commit to GitHub or share publicly.

---

## 🔧 CONFIGURE PRODUCTS & PRICING

### Create Product 1: Free Plan

1. In Stripe Dashboard, click **"Products"** (left sidebar)
2. Click **"+ Add product"**
3. Fill in:
   - **Name:** `Veridex Free`
   - **Description:** `Free plan for creators`
   - **Type:** `Service`
   - **Pricing model:** `Recurring`
4. Click **"Add product"**

### Create Product 2: Professional Plan

1. Click **"+ Add product"**
2. Fill in:
   - **Name:** `Veridex Professional`
   - **Description:** `Professional plan - $29/month`
   - **Type:** `Service`
   - **Pricing model:** `Recurring`
3. Add price:
   - **Price:** `29.00`
   - **Currency:** `USD`
   - **Billing period:** `Monthly`
4. Click **"Add product"**

### Create Product 3: Studio Plan

1. Click **"+ Add product"**
2. Fill in:
   - **Name:** `Veridex Studio`
   - **Description:** `Studio plan - $99/month`
   - **Type:** `Service`
   - **Pricing model:** `Recurring`
3. Add price:
   - **Price:** `99.00`
   - **Currency:** `USD`
   - **Billing period:** `Monthly`
4. Click **"Add product"**

---

## 🔗 CONFIGURE WEBHOOKS

### Add Webhook Endpoint

1. In Stripe Dashboard, click **"Developers"** (left sidebar)
2. Click **"Webhooks"**
3. Click **"+ Add an endpoint"**
4. Enter endpoint URL:
   ```
   https://creators.eyespai.com/api/webhooks
   ```
5. Click **"Select events"**

### Select Events to Listen For

Check these events:

- ✅ `checkout.session.completed`
- ✅ `checkout.session.expired`
- ✅ `customer.subscription.created`
- ✅ `customer.subscription.updated`
- ✅ `customer.subscription.deleted`
- ✅ `invoice.payment_succeeded`
- ✅ `invoice.payment_failed`
- ✅ `charge.succeeded`
- ✅ `charge.failed`

Click **"Add events"**

### Copy Webhook Secret

1. After creating the webhook, click on it to view details
2. You'll see: **"Signing secret"** (starts with `whsec_test_`)
3. Click **"Reveal"** to show the full secret
4. Copy it - you'll need this for your application

---

## 📝 YOUR STRIPE CREDENTIALS

Save these credentials securely (use a password manager):

```
Account Name: Veridex
Account Email: [your email]

TEST MODE KEYS:
Publishable Key: pk_test_[your key]
Secret Key: sk_test_[your key]
Webhook Secret: whsec_test_[your secret]

PRODUCTS:
- Veridex Free (Free)
- Veridex Professional ($29/month)
- Veridex Studio ($99/month)

WEBHOOK ENDPOINT:
https://creators.eyespai.com/api/webhooks
```

---

## 🧪 TEST YOUR SETUP

### Test Card Numbers (Use in Test Mode)

**Successful Payment:**
```
Card Number: 4242 4242 4242 4242
Expiry: 12/25
CVC: 123
```

**Failed Payment:**
```
Card Number: 4000 0000 0000 0002
Expiry: 12/25
CVC: 123
```

**Requires Authentication:**
```
Card Number: 4000 0025 0000 3155
Expiry: 12/25
CVC: 123
```

### Test Payment Flow

1. Go to `https://creators.eyespai.com/checkout`
2. Enter test email
3. Click "Continue to Payment"
4. Use test card: `4242 4242 4242 4242`
5. Fill in expiry and CVC
6. Click "Pay"
7. You should see success page

### Verify in Stripe Dashboard

1. Go to Stripe Dashboard
2. Click **"Payments"** (left sidebar)
3. You should see your test payment listed
4. Click on it to see details

---

## 🔐 SECURITY BEST PRACTICES

### DO ✅
- ✅ Keep secret keys in environment variables
- ✅ Use `.env.local` file (not committed to Git)
- ✅ Rotate keys regularly
- ✅ Use restricted API keys for frontend
- ✅ Monitor webhook activity
- ✅ Enable 2FA on Stripe account

### DON'T ❌
- ❌ Commit keys to GitHub
- ❌ Share keys in Slack/email
- ❌ Use same keys across environments
- ❌ Hardcode keys in code
- ❌ Use production keys in development
- ❌ Share webhook secrets

---

## 📊 PRODUCTION MIGRATION

When ready to go live:

1. **Create Production Keys:**
   - Go to Stripe Dashboard
   - Click "Developers" → "API keys"
   - Click toggle to switch to **"Live"** mode
   - Copy production keys (start with `pk_live_YOUR_PUBLISHABLE_KEY` and `sk_live_YOUR_SECRET_KEY`)

2. **Update Environment Variables:**
   - Replace test keys with production keys
   - Update webhook secret to production

3. **Create Production Products:**
   - Repeat product creation steps in live mode
   - Set actual prices

4. **Update Webhook Endpoint:**
   - Change to production URL
   - Verify SSL certificate

5. **Enable Payments:**
   - Stripe will verify your business
   - Takes 24-48 hours typically
   - You'll receive email when approved

---

## 📞 SUPPORT

- **Stripe Documentation:** https://stripe.com/docs
- **Stripe Support:** https://support.stripe.com
- **Stripe Community:** https://stripe.com/community

---

## ✅ CHECKLIST

- [ ] Created Stripe account
- [ ] Verified email
- [ ] Copied test keys
- [ ] Created 3 products
- [ ] Added webhook endpoint
- [ ] Copied webhook secret
- [ ] Tested with test card
- [ ] Verified payment in dashboard
- [ ] Saved credentials securely

---

**Once you complete these steps, share your test keys with me and I'll configure Veridex and deploy it live!**
