# Gmail Setup Guide for Contact Form

## 📧 You're now using Gmail SMTP (Direct Email Delivery)

Your contact form now sends emails directly to **tanjimohiuddin@gmail.com** using Gmail's SMTP server.

---

## 🔐 IMPORTANT: Create Gmail App Password

Gmail requires an "App Password" (not your regular password) for security.

### Step-by-Step Instructions:

#### 1. **Enable 2-Step Verification** (Required)
   - Go to: https://myaccount.google.com/security
   - Find "2-Step Verification"
   - Click "Get Started" and follow instructions
   - ⚠️ **Without 2-Step Verification, you cannot create App Passwords**

#### 2. **Create App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → 2-Step Verification → App passwords
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Name it: **"Portfolio Contact Form"**
   - Click **Generate**
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

#### 3. **Add to Environment Variables**
   - Open `.env.local`
   - Replace `your_app_password_here` with your app password
   - Remove spaces: `abcdefghijklmnop`
   
   ```env
   GMAIL_USER=tanjimohiuddin@gmail.com
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   ```

#### 4. **Restart Development Server**
   ```bash
   npm run dev
   ```

---

## ✅ Advantages of Gmail SMTP

- ✅ **No third-party service** required
- ✅ **Direct delivery** to your inbox
- ✅ **No spam folder** issues
- ✅ **Free** (Gmail limit: 500 emails/day)
- ✅ **Reliable** and trusted
- ✅ **Attachments** supported

---

## 🧪 Test Your Setup

After adding the App Password, run:

```bash
node scripts/test-email.js
```

Or submit a test message through your contact form.

---

## 📝 What Changed

### Before (Resend):
- Required Resend account
- Email verification needed
- Often went to spam
- 100 emails/day limit

### After (Gmail SMTP):
- Uses your Gmail account
- Direct to inbox
- No spam issues
- 500 emails/day limit

---

## ⚠️ Troubleshooting

### Error: "Invalid login"
**Solution**: Make sure you:
1. Enabled 2-Step Verification
2. Created an App Password (not regular password)
3. Removed spaces from the password
4. Restarted the dev server

### Error: "Less secure app access"
**Solution**: Use App Password, not regular password. Google no longer supports "less secure apps."

### No email received
**Solution**: 
1. Check your Gmail inbox
2. Check spam folder
3. Check the terminal for error messages
4. Verify the App Password is correct

---

## 🔒 Security Notes

- ✅ App Passwords are safer than using your main password
- ✅ You can revoke App Passwords anytime
- ✅ Each app gets its own password
- ✅ Your main password stays secure

---

## 📬 Email Template

Your contact form emails now include:
- Beautiful HTML formatting
- Color-coded sections
- Direct reply-to address
- Timestamp
- File attachments (if included)

---

## 🚀 Ready to Use!

Once you add the App Password:
1. Restart your dev server
2. Test the contact form
3. Check **tanjimohiuddin@gmail.com** for the email
4. Reply directly to the sender!

---

**Need Help?**
- Gmail App Passwords: https://support.google.com/accounts/answer/185833
- Contact Form API: `/app/api/contact/route.ts`
