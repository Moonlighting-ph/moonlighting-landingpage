
export const getUserEmailTemplate = (name: string, email: string, temporaryPassword: string, profession: string | undefined) => {
  const formattedProfession = profession || 'healthcare professional';
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Moonlighting.ph</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f7fa;
        }
        .container {
          background-color: #ffffff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          margin-bottom: 15px;
        }
        .card {
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
        }
        h1 {
          color: #2563eb;
          margin-bottom: 15px;
          font-size: 24px;
        }
        h2 {
          font-size: 22px;
        }
        .content {
          margin-bottom: 30px;
        }
        .credentials {
          background-color: #f3f4f6;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid #2563eb;
        }
        .credentials p {
          margin: 5px 0;
          font-size: 15px;
        }
        .highlight {
          background-color: #f3f4f6;
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
          border-left: 4px solid #2563eb;
        }
        .badge {
          background-color: #2563eb;
          color: white;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 14px;
          display: inline-block;
        }
        ul {
          margin: 20px 0;
          padding-left: 20px;
        }
        li {
          margin-bottom: 10px;
        }
        .button {
          display: inline-block;
          background-color: #2563eb;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          margin: 20px 0;
          text-align: center;
        }
        .footer {
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">
            <!-- Logo would go here -->
            <h2 style="color: #2563eb; margin: 0;">Moonlighting.ph</h2>
          </div>
        </div>
        
        <div class="card">
          <h1>Welcome to Moonlighting.ph!</h1>
          <p>Hello ${name},</p>
          <p>Thank you for joining our waitlist. We're excited to have you as a <span class="badge">${formattedProfession}</span> interested in our platform.</p>
          
          <div class="credentials">
            <p><strong>Your temporary login credentials:</strong></p>
            <p>Username: ${email}</p>
            <p>Password: ${temporaryPassword}</p>
            <p><small>Please keep these credentials safe. You'll need them to log in once we launch.</small></p>
          </div>

          <div class="highlight">
            <p><strong>Moonlighting.ph</strong> is building a platform to help healthcare professionals like you find the perfect moonlighting opportunities that match your skills and schedule.</p>
          </div>
          
          <p>We're working hard to create an exceptional experience for healthcare professionals in the Philippines. Here's what you can look forward to:</p>
          
          <ul>
            <li>Access to a wide range of moonlighting opportunities</li>
            <li>Flexible scheduling that works with your existing commitments</li>
            <li>Competitive compensation rates</li>
            <li>Simple application and onboarding process</li>
            <li>Dedicated support team</li>
          </ul>
          
          <p>We'll keep you updated as we get closer to launch, and you'll be among the first to know when we're ready to go live.</p>
          
          <a href="https://moonlighting.ph" class="button">Visit Our Website</a>
          
          <p>If you have any questions in the meantime, feel free to reply to this email.</p>
          
          <p>Best regards,<br>The Moonlighting.ph Team</p>
        </div>
        
        <div class="footer">
          <p>© 2025 Moonlighting.ph. All rights reserved.</p>
          <p>Philippines</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
