
export const getAdminEmailTemplate = (name: string, email: string, profession: string | undefined, phone: string | undefined, type: string) => {
  const formattedProfession = profession ? profession.charAt(0).toUpperCase() + profession.slice(1) : "Not specified";
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Waitlist Registration</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .container {
          background-color: #ffffff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          margin-bottom: 30px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 15px;
        }
        h1 {
          color: #4f46e5;
          margin-bottom: 5px;
          font-size: 24px;
        }
        .subtitle {
          color: #6b7280;
          font-size: 16px;
          margin-top: 0;
        }
        .registration-details {
          background-color: #f3f4f6;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }
        .registration-details p {
          margin: 10px 0;
          font-size: 15px;
        }
        .label {
          font-weight: bold;
          min-width: 120px;
          display: inline-block;
        }
        .footer {
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }
        .button {
          display: inline-block;
          background-color: #4f46e5;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          margin: 20px 0;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Waitlist Registration</h1>
          <p class="subtitle">A new user has joined the Moonlighting.ph waitlist</p>
        </div>
        
        <div class="registration-details">
          <p><span class="label">Name:</span> ${name}</p>
          <p><span class="label">Email:</span> ${email}</p>
          <p><span class="label">Profession:</span> ${formattedProfession}</p>
          ${phone ? `<p><span class="label">Phone:</span> ${phone}</p>` : ''}
          <p><span class="label">Registration Type:</span> ${type}</p>
          <p><span class="label">Timestamp:</span> ${new Date().toLocaleString()}</p>
        </div>
        
        <p>You can reply directly to this email to contact ${name}.</p>
        
        <div class="footer">
          <p>© 2024 Moonlighting.ph Admin Notification</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
