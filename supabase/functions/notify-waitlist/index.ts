
import { serve } from "https://deno.land/std@0.200.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
  name: string;
  type: string;
  phone?: string;
  profession?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("notify-waitlist function invoked");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, type, phone, profession }: WaitlistRequest = await req.json();
    
    console.log("Received notification request:", { email, name, type, phone, profession });

    if (!email || !name || !type) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create a Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Email content for waitlist
    let emailHtml = "";
    let emailSubject = "";
    
    if (type === "waitlist") {
      emailSubject = "Welcome to the Moonlighting.ph Waitlist!";
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Moonlighting.ph!</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f9fafb;
              color: #111827;
              line-height: 1.6;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo {
              margin-bottom: 20px;
            }
            .logo img {
              height: 50px;
            }
            h1 {
              color: #2563eb;
              font-size: 28px;
              margin-bottom: 15px;
              font-weight: 700;
            }
            .card {
              background-color: white;
              border-radius: 16px;
              padding: 40px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              margin-bottom: 30px;
            }
            .highlight {
              background-color: #f0f9ff;
              border-left: 4px solid #2563eb;
              padding: 15px;
              margin: 20px 0;
              border-radius: 0 8px 8px 0;
            }
            .button {
              display: inline-block;
              background-color: #2563eb;
              color: white;
              text-decoration: none;
              padding: 12px 30px;
              border-radius: 50px;
              font-weight: 600;
              margin: 20px 0;
              text-align: center;
            }
            .footer {
              text-align: center;
              color: #6b7280;
              font-size: 14px;
              margin-top: 30px;
            }
            .social {
              margin: 20px 0;
            }
            .social a {
              display: inline-block;
              margin: 0 10px;
              text-decoration: none;
            }
            .badge {
              display: inline-block;
              background-color: #e0e7ff;
              color: #4f46e5;
              padding: 5px 12px;
              border-radius: 50px;
              font-size: 14px;
              font-weight: 500;
              margin-right: 10px;
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
      `;
    } else if (type === "demo") {
      emailSubject = "Your Moonlighting.ph Demo Request";
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Demo Request Received</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f9fafb;
              color: #111827;
              line-height: 1.6;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo {
              margin-bottom: 20px;
            }
            .logo img {
              height: 50px;
            }
            h1 {
              color: #2563eb;
              font-size: 28px;
              margin-bottom: 15px;
              font-weight: 700;
            }
            .card {
              background-color: white;
              border-radius: 16px;
              padding: 40px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              margin-bottom: 30px;
            }
            .highlight {
              background-color: #f0f9ff;
              border-left: 4px solid #2563eb;
              padding: 15px;
              margin: 20px 0;
              border-radius: 0 8px 8px 0;
            }
            .button {
              display: inline-block;
              background-color: #2563eb;
              color: white;
              text-decoration: none;
              padding: 12px 30px;
              border-radius: 50px;
              font-weight: 600;
              margin: 20px 0;
              text-align: center;
            }
            .footer {
              text-align: center;
              color: #6b7280;
              font-size: 14px;
              margin-top: 30px;
            }
            .social {
              margin: 20px 0;
            }
            .social a {
              display: inline-block;
              margin: 0 10px;
              text-decoration: none;
            }
            .calendar {
              text-align: center;
              margin: 30px 0;
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
              <h1>Demo Request Received</h1>
              <p>Hello ${name},</p>
              <p>Thank you for your interest in Moonlighting.ph. We've received your request for a demo.</p>
              
              <div class="highlight">
                <p>Our team will reach out to you shortly to schedule a personalized demonstration of our platform.</p>
              </div>
              
              <div class="calendar">
                <p><strong>Want to skip the wait?</strong></p>
                <a href="https://calendly.com/cessventures/product-demo-moonlighting-ph" class="button">Book via Calendly Now</a>
              </div>
              
              <p>During the demo, we'll show you:</p>
              
              <ul>
                <li>How our platform connects healthcare providers with facilities</li>
                <li>The process for finding and applying to shifts</li>
                <li>Features designed specifically for ${profession || 'healthcare professionals'}</li>
                <li>How we ensure a smooth experience for all parties</li>
              </ul>
              
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
      `;
    }

    console.log("Preparing to send email to:", email);
    console.log("Email subject:", emailSubject);

    // Send confirmation email to user
    try {
      const emailResponse = await resend.emails.send({
        from: "Moonlighting.ph <hello@moonlighting.ph>",
        to: [email],
        subject: emailSubject,
        html: emailHtml,
      });
      
      console.log("Email sent successfully to user:", emailResponse);
      
      // Send notification to specified admin email
      try {
        const adminResponse = await resend.emails.send({
          from: "Moonlighting.ph <hello@moonlighting.ph>",
          to: ["cess.ventures209@gmail.com"], // Admin email
          subject: `New ${type} registration: ${name}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Registration</title>
              <style>
                body {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f9fafb;
                  color: #111827;
                  line-height: 1.6;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 40px 20px;
                }
                h1 {
                  color: #2563eb;
                  font-size: 24px;
                  margin-bottom: 15px;
                  font-weight: 600;
                }
                .card {
                  background-color: white;
                  border-radius: 16px;
                  padding: 30px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                }
                .info-item {
                  margin-bottom: 15px;
                  padding-bottom: 15px;
                  border-bottom: 1px solid #e5e7eb;
                }
                .info-item:last-child {
                  border-bottom: none;
                }
                .label {
                  font-weight: 600;
                  color: #4b5563;
                  display: block;
                  margin-bottom: 5px;
                }
                .value {
                  font-size: 16px;
                }
                .tag {
                  display: inline-block;
                  background-color: #e0e7ff;
                  color: #4f46e5;
                  padding: 4px 10px;
                  border-radius: 50px;
                  font-size: 14px;
                  font-weight: 500;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="card">
                  <h1>New ${type === 'waitlist' ? 'Waitlist' : 'Demo'} Registration</h1>
                  
                  <div class="info-item">
                    <span class="label">Name</span>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="info-item">
                    <span class="label">Email</span>
                    <div class="value">${email}</div>
                  </div>
                  
                  <div class="info-item">
                    <span class="label">Phone</span>
                    <div class="value">${phone || 'Not provided'}</div>
                  </div>
                  
                  <div class="info-item">
                    <span class="label">Profession</span>
                    <div class="value">
                      <span class="tag">${profession || 'Not specified'}</span>
                    </div>
                  </div>
                  
                  <div class="info-item">
                    <span class="label">Registration Type</span>
                    <div class="value">
                      <span class="tag">${type}</span>
                    </div>
                  </div>
                  
                  <div class="info-item">
                    <span class="label">Time of Registration</span>
                    <div class="value">${new Date().toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </body>
            </html>
          `,
        });
        
        console.log("Admin notification sent to cess.ventures209@gmail.com:", adminResponse);
      } catch (adminEmailError) {
        console.error("Error sending admin notification:", adminEmailError);
      }
      
      return new Response(
        JSON.stringify({ success: true, message: "Notification sent successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    } catch (emailError: any) {
      console.error("Error sending email:", emailError);
      console.error("Error details:", JSON.stringify(emailError, null, 2));
      
      return new Response(
        JSON.stringify({ 
          error: "Failed to send email notification",
          details: emailError.message,
          code: emailError.statusCode
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
  } catch (error: any) {
    console.error("Error in notify-waitlist function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
