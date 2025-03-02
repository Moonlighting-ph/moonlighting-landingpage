
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.13.1';
import { Resend } from "npm:resend@1.0.0";

// Initialize the Resend client with your API key
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// CORS headers to allow cross-origin requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Handler function for incoming requests
const handler = async (req: Request): Promise<Response> => {
  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Create a Supabase client
  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // Get the JSON body from the request
    const body = await req.json();
    console.log("Received request body:", body);

    // Destructure the necessary fields from the body
    const { record, waitlist_type } = body;
    
    // Extract the email
    const email = record?.email;

    // Log to help with debugging
    console.log("Email:", email);
    console.log("Waitlist type:", waitlist_type);

    // Validate the email
    if (!email) {
      console.error("Error: Missing email in request");
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { 
          status: 400, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        }
      );
    }

    // Send notification email to admin
    try {
      const adminNotification = await resend.emails.send({
        from: "Moonlighting PH <no-reply@moonlighting.ph>", // Use your verified domain
        to: "info@moonlighting.ph", // Admin email
        subject: "New Waitlist Signup",
        html: `
          <h1>New Waitlist Registration</h1>
          <p>Email: ${email}</p>
          <p>Type: ${waitlist_type || "Standard waitlist"}</p>
        `,
      });
      console.log("Admin notification sent:", adminNotification);
    } catch (adminEmailError) {
      console.error("Error sending admin notification:", adminEmailError);
    }

    // Send confirmation email to user
    try {
      const userConfirmation = await resend.emails.send({
        from: "Moonlighting PH <no-reply@moonlighting.ph>", // Use your verified domain
        to: email,
        subject: "Welcome to Moonlighting PH Waitlist",
        html: `
          <h1>Thank you for joining our waitlist!</h1>
          <p>We're excited to have you join the Moonlighting PH community.</p>
          <p>We'll notify you as soon as we launch or when early access becomes available.</p>
          <p>Best regards,<br>The Moonlighting PH Team</p>
        `,
      });
      console.log("User confirmation sent:", userConfirmation);
    } catch (userEmailError) {
      console.error("Error sending user confirmation:", userEmailError);
    }

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Waitlist notification emails sent successfully" 
      }),
      { 
        status: 200, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      }
    );
  } catch (error) {
    // Log the error for debugging
    console.error("Error in notify-waitlist function:", error);
    
    // Return error response
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      }
    );
  }
};

// Start serving the handler function
serve(handler);
