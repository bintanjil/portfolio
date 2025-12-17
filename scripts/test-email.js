// Test Resend Email Configuration
// Run: node scripts/test-email.js

const { Resend } = require('resend');

async function testEmail() {
  const resend = new Resend('re_44Ea6ukE_4KbFSEB9Z1rSBM7RYphVX73s');

  try {
    console.log('🚀 Sending test email...\n');
    
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'tanjimohiuddin@gmail.com',
      subject: 'Test Email from Portfolio',
      html: `
        <h1>✅ Email Configuration Test</h1>
        <p>If you're seeing this, your Resend integration is working correctly!</p>
        <hr />
        <p><strong>From:</strong> Portfolio Test Script</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log('✅ Email sent successfully!');
    console.log('📧 Email ID:', data.id);
    console.log('\n📊 Check your inbox at: tanjimohiuddin@gmail.com');
    console.log('📊 Also check spam folder');
    console.log('📊 View logs at: https://resend.com/logs\n');
    
  } catch (error) {
    console.error('❌ Error sending email:');
    console.error(error);
    
    if (error.message.includes('verify')) {
      console.log('\n⚠️  Solution:');
      console.log('1. Go to: https://resend.com/settings/emails');
      console.log('2. Add and verify: tanjimohiuddin@gmail.com');
      console.log('3. Run this script again\n');
    }
  }
}

testEmail();
