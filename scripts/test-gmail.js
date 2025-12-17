// Test Gmail SMTP Configuration
// Run: node scripts/test-gmail.js

const nodemailer = require('nodemailer');

async function testGmail() {
  console.log('🔐 Testing Gmail SMTP Configuration...\n');
  
  const user = 'tanjimohiuddin@gmail.com';
  const pass = 'kjkiamfpvcksrknz'; // From your .env.local
  
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user,
        pass: pass,
      },
    });

    console.log('✅ Transporter created');
    console.log(`📧 Gmail Account: ${user}`);
    console.log(`🔑 App Password: ${pass.substring(0, 4)}****${pass.substring(pass.length - 4)}\n`);

    // Verify connection
    console.log('🔍 Verifying connection...');
    await transporter.verify();
    console.log('✅ Gmail SMTP connection verified!\n');

    // Send test email
    console.log('📤 Sending test email...');
    const info = await transporter.sendMail({
      from: `"Portfolio Test" <${user}>`,
      to: user,
      subject: '✅ Gmail SMTP Test - Success!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #10b981;">✅ Success!</h1>
          <p>Your Gmail SMTP configuration is working correctly.</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p><strong>Tested at:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>From:</strong> ${user}</p>
          <p>Your contact form will now send emails directly to this inbox.</p>
        </div>
      `,
    });

    console.log('✅ Test email sent successfully!\n');
    console.log('📨 Message ID:', info.messageId);
    console.log('📬 Check your inbox:', user);
    console.log('\n🎉 Gmail SMTP is configured correctly!\n');

  } catch (error) {
    console.error('\n❌ Gmail SMTP Error:', error.message);
    console.error('\n📋 Troubleshooting Steps:\n');
    
    if (error.message.includes('Username and Password not accepted')) {
      console.error('❌ Invalid App Password\n');
      console.error('Solutions:');
      console.error('1. Make sure 2-Step Verification is ENABLED on your Gmail');
      console.error('   → Go to: https://myaccount.google.com/security');
      console.error('');
      console.error('2. Create a NEW App Password:');
      console.error('   → Go to: https://myaccount.google.com/apppasswords');
      console.error('   → Select: Mail → Other (Custom name)');
      console.error('   → Name: "Portfolio Contact"');
      console.error('   → Copy the 16-character password (no spaces!)');
      console.error('');
      console.error('3. Update .env.local with the NEW password:');
      console.error('   GMAIL_APP_PASSWORD=your_new_password_here');
      console.error('');
      console.error('4. Restart your dev server');
    } else if (error.code === 'EAUTH') {
      console.error('❌ Authentication failed');
      console.error('Check that your App Password is correct and has no spaces');
    } else {
      console.error('Check your internet connection and Gmail settings');
    }
    
    console.error('\n');
  }
}

testGmail();
