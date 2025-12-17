# Hugging Face AI Chatbot Setup Guide

## Overview
Your portfolio now includes an AI-powered chatbot that answers questions about you using Hugging Face's free inference API. The chatbot **IS trained/configured with your personal information** - it has access to your skills, projects, experience, and background embedded directly in the API context.

**Important: The chatbot uses your static portfolio data, not real-time information. All your details (skills, projects, contact info) are hardcoded in the knowledge base.**

## Features
- 🤖 Free AI chatbot powered by Mistral-7B-Instruct
- 💬 Floating chat button in bottom-right corner
- 🎨 Modern glass-morphism design matching portfolio theme
- 🔊 Sound effects on interactions
- ⚡ Real-time responses
- 📱 Responsive design
- 🎯 Context-aware: Only answers questions about you

## Setup Instructions

### Step 1: Get Your Hugging Face API Token

1. **Go to Hugging Face**: Visit [https://huggingface.co](https://huggingface.co)

2. **Sign Up/Login**: Create a free account or login if you already have one

3. **Generate API Token**:
   - Click your profile picture (top-right)
   - Go to **Settings** → **Access Tokens**
   - Or directly visit: [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

4. **Create New Token**:
   - Click **"New token"** button
   - **Name**: "Portfolio Chatbot"
   - **Role**: Select **"Read"** (free tier)
   - Click **"Generate a token"**

5. **Copy Token**: Copy the generated token (starts with `hf_...`)

### Step 2: Add Token to Environment Variables

1. Open `.env.local` file in your project root

2. Find the `HUGGINGFACE_API_KEY` variable

3. Replace `your_huggingface_api_key_here` with your actual token:
   ```env
   HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

4. Save the file

### Step 3: Restart Development Server

```bash
# Stop the current dev server (Ctrl+C)
# Start it again
npm run dev
```

## How to Use

### For Visitors
1. Click the **floating chat button** (purple/blue gradient) in the bottom-right corner
2. Type a question about you (e.g., "What are Tanjil's skills?", "Tell me about his projects")
3. Press Enter or click Send
4. The AI will respond with information from your portfolio

### Example Questions
- "What are Tanjil's skills?"
- "Tell me about his projects"
- "What technologies does he know?"
- "What is his educational background?"
- "How can I contact Tanjil?"
- "What competitive programming platforms does he use?"

## Technical Details

### Model Used
- **Model**: `mistralai/Mistral-7B-Instruct-v0.2`
- **Provider**: Hugging Face Inference API (Free)
- **Response Time**: 2-5 seconds
- **Max Tokens**: 300 tokens per response

### Context Knowledge Base
The chatbot has access to:
- Your personal information (name, title, location, education)
- Skills (Frontend, Backend, Database, Tools)
- Projects (Healthcare Management API, Gadgeto E-commerce)
- Competitive programming profiles (Codeforces, LeetCode)
- Social links (GitHub, LinkedIn)
- Contact information

### Privacy & Limitations
- ✅ Only answers questions about you
- ✅ Redirects off-topic questions
- ✅ No personal data stored
- ✅ Completely free to use
- ❌ Doesn't have real-time data (uses static portfolio content)
- ❌ Cannot perform actions or send emails

## Files Created

1. **`app/api/chat/route.ts`**
   - API endpoint for chatbot
   - Handles Hugging Face API calls
   - Contains your knowledge base context

2. **`component/chat/AIChatbot.tsx`**
   - Chat UI component
   - Floating chat button
   - Message history
   - Loading states

3. **`app/layout.tsx`** (modified)
   - Added AIChatbot component globally

4. **`.env.local`** (modified)
   - Added HUGGINGFACE_API_KEY variable

## Customization

### Change AI Model
Edit `app/api/chat/route.ts`:
```typescript
model: "mistralai/Mistral-7B-Instruct-v0.2", // Change to another model
```

Popular free alternatives:
- `google/flan-t5-xxl`
- `bigscience/bloom`
- `meta-llama/Llama-2-7b-chat-hf`

### Update Knowledge Base
Edit the `CONTEXT` variable in `app/api/chat/route.ts` to add/modify information about yourself.

### Change Chat Position
Edit `component/chat/AIChatbot.tsx`:
```tsx
// Floating button
className="fixed bottom-6 right-6 ..." // Change bottom-6/right-6

// Chat window
className="fixed bottom-24 right-6 ..." // Change position
```

### Change Colors
Edit the gradient colors in `AIChatbot.tsx`:
```tsx
from-purple-600 to-blue-600 // Change to your preferred colors
```

## Troubleshooting

### "Failed to send message"
- **Check API Key**: Ensure `HUGGINGFACE_API_KEY` is correctly set in `.env.local`
- **Restart Server**: Stop and restart `npm run dev`
- **Check Token**: Verify your token at [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

### Slow Responses
- **Normal**: First response can take 5-10 seconds (model loading)
- **Free Tier**: Hugging Face free tier has rate limits
- **Alternative**: Consider using a smaller/faster model

### "Rate limit exceeded"
- **Wait**: Hugging Face free tier has usage limits
- **Upgrade**: Consider Hugging Face Pro for higher limits
- **Alternative**: Switch to a different free model

### Chat Not Appearing
- **Check Console**: Open browser DevTools → Console for errors
- **Verify Import**: Ensure `AIChatbot` is imported in `layout.tsx`
- **Clear Cache**: Hard refresh (Ctrl+Shift+R)

## API Rate Limits (Free Tier)

Hugging Face free tier includes:
- ✅ Unlimited API calls (with rate limiting)
- ✅ All open-source models
- ⚠️ Slower inference speed
- ⚠️ May queue during high traffic

If you need faster responses:
- Upgrade to **Hugging Face Pro** ($9/month)
- Or deploy your own model

## Security Notes

- ✅ API key is stored in `.env.local` (not committed to Git)
- ✅ All requests go through your Next.js API route
- ✅ API key is never exposed to the browser
- ✅ Rate limiting handled by Hugging Face

## Cost Analysis

**Completely Free!** 🎉
- Hugging Face Inference API: Free tier
- No credit card required
- No usage charges

## Support

If you encounter issues:
1. Check this guide's troubleshooting section
2. Visit Hugging Face docs: [https://huggingface.co/docs/api-inference](https://huggingface.co/docs/api-inference)
3. Check model status: [https://status.huggingface.co](https://status.huggingface.co)

---

**Enjoy your AI-powered portfolio chatbot! 🚀**
