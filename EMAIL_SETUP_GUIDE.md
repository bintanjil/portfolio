# Email Setup Guide for Contact Form

## Current Issue
Emails are not being received when the contact form is submitted.

## Setup Steps

### 1. Verify Your Resend Account

Go to [Resend Dashboard](https://resend.com/dashboard) and check:

#### a) **Verify Your Domain or Email**
- Resend requires you to verify either:
  - **Your own domain** (recommended for production)
  - **Your email address** (for testing)

#### b) **For Testing with Personal Email:**
1. Go to https://resend.com/domains
2. Click "Add Domain" or use the default `onboarding@resend.dev`
3. **Important**: With `onboarding@resend.dev`, you can ONLY send to **verified email addresses**
4. Go to https://resend.com/settings/emails
5. Add and verify **tanjimohiuddin@gmail.com**
6. Check your email for verification link

#### c) **For Production (Custom Domain):**
1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Add your domain (e.g., `tanjil-portfolio.com`)
4. Add the DNS records they provide to your domain registrar
5. Wait for verification (usually takes 5-30 minutes)

### 2. Update Your API Route

The current configuration uses `onboarding@resend.dev` which only works with verified emails.

**Current configuration** in `app/api/contact/route.ts`:
```typescript
from: "Portfolio Contact <onboarding@resend.dev>",
to: "tanjimohiuddin@gmail.com",
```

### 3. Test Email Delivery

#### Option A: Use Resend Test Mode
```bash
# In your terminal
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer re_44Ea6ukE_4KbFSEB9Z1rSBM7RYphVX73s" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "onboarding@resend.dev",
    "to": "tanjimohiuddin@gmail.com",
    "subject": "Test Email",
    "html": "<p>This is a test email</p>"
  }'
```

#### Option B: Check Resend Logs
1. Go to https://resend.com/logs
2. Check if emails are being sent
3. Look for error messages

### 4. Common Issues & Solutions

#### Issue: "You can only send to verified addresses"
**Solution**: 
- Verify `tanjimohiuddin@gmail.com` in Resend settings
- OR use your own verified domain

#### Issue: No API Key
**Solution**: 
- Check `.env.local` has `RESEND_API_KEY`
- Restart your dev server: `npm run dev`

#### Issue: Emails go to Spam
**Solution**: 
- Use a custom domain with SPF/DKIM records
- Check Resend logs for delivery status

### 5. Alternative Email Solutions

If Resend doesn't work, you can use:

#### Option A: EmailJS (Free, No Backend Required)
```bash
npm install @emailjs/browser
```

#### Option B: SendGrid (Free tier: 100 emails/day)
```bash
npm install @sendgrid/mail
```

#### Option C: Nodemailer with Gmail
```bash
npm install nodemailer
```

## Quick Fix for Testing

If you need emails working immediately:

1. **Verify your email in Resend**:
   - Go to https://resend.com/settings/emails
   - Add `tanjimohiuddin@gmail.com`
   - Click verification link in your email

2. **Restart your dev server**:
   ```bash
   npm run dev
   ```

3. **Test the contact form** on your site

## Check Current Status

Run this in your browser console after submitting the form:
```javascript
// Check if the API is receiving requests
fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Test',
    email: 'test@example.com',
    subject: 'Test',
    message: 'Test message'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

## Current Configuration

- **API Key**: `re_44Ea6ukE_4KbFSEB9Z1rSBM7RYphVX73s`
- **From Email**: `onboarding@resend.dev`
- **To Email**: `tanjimohiuddin@gmail.com`
- **API Route**: `/app/api/contact/route.ts`

## Next Steps

1. ✅ Verify `tanjimohiuddin@gmail.com` in Resend
2. ✅ Check Resend logs for errors
3. ✅ Test with the curl command above
4. ✅ Check spam folder
5. ✅ Restart dev server

## Support

- Resend Docs: https://resend.com/docs
- Resend Support: support@resend.com
