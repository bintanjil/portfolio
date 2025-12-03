# GitHub Activity Tracking - Setup Guide

## Issue: Showing 0 Contributions / Incorrect Streak

The GitHub API has limitations when using public endpoints without authentication. To get **accurate contribution data**, you need to add a GitHub Personal Access Token.

## Solution: Add GitHub Token

### Step 1: Create a GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Portfolio Activity Tracker`
4. Set expiration: Choose your preferred duration
5. Select scopes: **Only check `read:user`**
6. Click **"Generate token"**
7. **IMPORTANT**: Copy the token immediately (you won't see it again)

### Step 2: Add Token to Your Project

1. Open or create `.env.local` in your project root
2. Add this line:
   ```
   GITHUB_TOKEN=ghp_your_token_here
   ```
3. Save the file

### Step 3: Restart the Dev Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## What This Fixes

### Without Token (Current State):
- ❌ Only shows last ~90 days of activity
- ❌ Inaccurate contribution counts
- ❌ Incorrect streak calculations
- ❌ Limited heatmap data

### With Token:
- ✅ Full year of contributions
- ✅ Accurate contribution counts
- ✅ Correct current and max streak
- ✅ Complete contribution heatmap
- ✅ Monthly activity charts with real data

## How the API Works Now

The updated `/api/github` route automatically:
1. **With Token**: Uses GitHub GraphQL API for accurate data
2. **Without Token**: Falls back to public events API (limited to 90 days)

The API will show `usingToken: true` in the response when using authenticated data.

## Security Note

- The token is stored in `.env.local` (git-ignored by default)
- Never commit your `.env.local` file
- Token only needs `read:user` scope (minimal permissions)
- Token is only used server-side in the API route

## Testing

After adding the token, visit:
- http://localhost:3000/api/github - Check the API response
- http://localhost:3000/activity - View your activity dashboard

You should see:
- Accurate contribution counts
- Current streak (consecutive days with contributions)
- Max streak (longest streak ever)
- Full contribution heatmap

## Alternative: Use Sample Data

If you don't want to add a token, you can modify the components to use fallback/demo data, but it won't reflect your actual GitHub activity.
