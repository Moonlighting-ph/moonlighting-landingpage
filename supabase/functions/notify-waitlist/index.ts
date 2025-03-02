
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #2563eb; margin-bottom: 20px;">Welcome to Moonlighting.ph!</h1>
          <p>Hello ${name},</p>
          <p>Thank you for joining our waitlist. We're excited to have you as a ${profession || 'healthcare professional'} interested in our platform.</p>
          <p>We're building Moonlighting.ph to help healthcare professionals like you find the perfect moonlighting opportunities that match your skills and schedule.</p>
          <p>We'll keep you updated as we get closer to launch and you'll be among the first to know when we're ready to go live.</p>
          <p>If you have any questions in the meantime, feel free to reply to this email.</p>
          <p>Best regards,<br>The Moonlighting.ph Team</p>
        </div>
      `;
    } else if (type === "demo") {
      emailSubject = "Your Moonlighting.ph Demo Request";
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #2563eb; margin-bottom: 20px;">Demo Request Received</h1>
          <p>Hello ${name},</p>
          <p>Thank you for your interest in Moonlighting.ph. We've received your request for a demo.</p>
          <p>Our team will reach out to you shortly to schedule a personalized demonstration of our platform.</p>
          <p>If you have any questions in the meantime, feel free to reply to this email.</p>
          <p>Best regards,<br>The Moonlighting.ph Team</p>
        </div>
      `;
    }

    console.log("Preparing to send email to:", email);
    console.log("Email subject:", emailSubject);

    // Send confirmation email
    try {
      const emailResponse = await resend.emails.send({
        from: "Moonlighting.ph <hello@moonlighting.ph>",
        to: [email],
        subject: emailSubject,
        html: emailHtml,
      });
      
      console.log("Email sent successfully:", emailResponse);
      
      // Send notification to admin
      try {
        const adminResponse = await resend.emails.send({
          from: "Moonlighting.ph <hello@moonlighting.ph>",
          to: ["hello@moonlighting.ph"], // Admin email
          subject: `New ${type} registration: ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
              <h1 style="color: #2563eb; margin-bottom: 20px;">New ${type} Registration</h1>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Profession:</strong> ${profession || 'Not provided'}</p>
            </div>
          `,
        });
        
        console.log("Admin notification sent:", adminResponse);
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
