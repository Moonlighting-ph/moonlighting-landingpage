
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.33.1";
import { Resend } from "npm:resend@2.0.0";

// Generate a random password
function generateTemporaryPassword(length = 10) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const resendApiKey = Deno.env.get("RESEND_API_KEY") || "";

    if (!supabaseUrl || !supabaseKey || !resendApiKey) {
      throw new Error("Required environment variables are missing");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const resend = new Resend(resendApiKey);

    // Parse request body
    const { email, name, type, phone, profession } = await req.json();
    console.log("Request payload:", { email, name, type, phone, profession });

    if (!email || !name || !type) {
      throw new Error("Missing required fields");
    }

    // Generate a temporary password
    const temporaryPassword = generateTemporaryPassword();

    // Store credentials in the waitlist_credentials table
    const { error: credentialsError } = await supabase
      .from('waitlist_credentials')
      .insert([
        { 
          email, 
          password: temporaryPassword,
          name,
          profession
        }
      ]);

    if (credentialsError) {
      console.error('Error storing credentials:', credentialsError);
      // Continue with the process even if storing credentials fails
      // We'll still send the email notification
    }

    // Format the profession for display
    const formattedProfession = profession ? profession.charAt(0).toUpperCase() + profession.slice(1) : "Not specified";

    // Send email to user
    const { data: userEmailData, error: userEmailError } = await resend.emails.send({
      from: "Moonlighting.ph <no-reply@moonlighting.ph>",
      to: [email],
      subject: "Welcome to Moonlighting.ph Waitlist!",
      html: `
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
              <p>Thank you for joining our waitlist. We're excited to have you as a <span class="badge">${profession || 'healthcare professional'}</span> interested in our platform.</p>
              
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
              
              <div class="credentials">
                <p><strong>Your temporary login credentials:</strong></p>
                <p>Username: ${email}</p>
                <p>Password: ${temporaryPassword}</p>
                <p><small>Please keep these credentials safe. You'll need them to log in once we launch.</small></p>
              </div>
              
              <a href="https://moonlighting.ph" class="button">Visit Our Website</a>
              
              <p>If you have any questions in the meantime, feel free to reply to this email.</p>
              
              <p>Best regards,<br>The Moonlighting.ph Team</p>
            </div>
            
            <div class="footer">
              <p>© 2024 Moonlighting.ph. All rights reserved.</p>
              <p>Philippines</p>
            </div>
          </div>
        </body>
        </html>
      `,
      reply_to: "hello@moonlighting.ph",
    });

    if (userEmailError) {
      console.error("Error sending user email:", userEmailError);
      throw userEmailError;
    }

    // Send notification to admin
    const { data: adminEmailData, error: adminEmailError } = await resend.emails.send({
      from: "Moonlighting.ph <no-reply@moonlighting.ph>",
      to: ["cess.ventures209@gmail.com"],
      subject: `New Waitlist Registration: ${name}`,
      html: `
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
              <p><span class="label">Temporary Password:</span> ${temporaryPassword}</p>
            </div>
            
            <p>You can reply directly to this email to contact ${name}.</p>
            
            <div class="footer">
              <p>© 2024 Moonlighting.ph Admin Notification</p>
            </div>
          </div>
        </body>
        </html>
      `,
      reply_to: email,
    });

    if (adminEmailError) {
      console.error("Error sending admin email:", adminEmailError);
      throw adminEmailError;
    }

    console.log("Emails sent successfully:", { userEmailData, adminEmailData });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Notification sent successfully",
        userEmail: userEmailData,
        adminEmail: adminEmailData
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        }
      }
    );
  } catch (error) {
    console.error("Error in notify-waitlist function:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "An unknown error occurred" 
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        }
      }
    );
  }
});
