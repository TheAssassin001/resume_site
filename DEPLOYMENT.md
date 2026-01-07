# Talent AI - Deployment Guide

## ✅ Ready for Vercel Deployment!

Your project is now configured for Vercel. Here's what was set up:

### What Changed:
1. **Serverless API Functions** - Backend converted to `/api` folder
2. **Environment Variables** - API URLs work for both local and production
3. **Vercel Config** - `vercel.json` created with proper routing
4. **Build Scripts** - Ready for production deployment

---

## 🚀 Deploy to Vercel (2 methods):

### Method 1: Using Vercel CLI (Command Line)

1. **Login to Vercel:**
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate

2. **Deploy:**
   ```bash
   vercel
   ```
   - Press Enter for all defaults
   - Wait for deployment
   - Get your live URL!

3. **Production Deploy:**
   ```bash
   vercel --prod
   ```

---

### Method 2: Using Vercel Dashboard (Easier)

1. **Sign up at:** https://vercel.com/signup
   - Use GitHub, GitLab, or Email

2. **Import Project:**
   - Click "Add New" → "Project"
   - Choose "Import Git Repository" or "Upload Folder"

3. **Deploy:**
   - Vercel auto-detects Vite
   - Click "Deploy"
   - Done! You'll get a live URL

---

## 📝 Important Notes:

**Data Storage:**
- Current setup uses `/tmp` folder (resets on each deployment)
- For permanent storage, consider upgrading to:
  - **Vercel Postgres** (free tier available)
  - **MongoDB Atlas** (free tier)
  - **Supabase** (free tier)

**Custom Domain:**
- Free `.vercel.app` subdomain included
- Add custom domain in Vercel dashboard

**Environment Variables:**
- Already configured in `.env.production`
- No additional setup needed!

---

## 🧪 Test Locally First:

```bash
npm run build
vercel dev
```

This runs Vercel's serverless functions locally.

---

## 🎯 Next Steps:

1. Run `vercel login`
2. Run `vercel` to deploy
3. Share your live URL!

Your website will be live at: `https://your-project.vercel.app`
