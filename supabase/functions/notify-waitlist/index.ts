
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.21.0";
import { Resend } from "npm:resend@2.0.0";

// Configure CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Initialize Resend with the API key
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Interface for the waitlist registration data
interface WaitlistRegistration {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  type: "waitlist" | "demo";
  created_at?: string;
}

serve(async (req) => {
  console.log("Notify-waitlist function invoked");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const adminClient = createClient(supabaseUrl, supabaseKey);

    let registration: WaitlistRegistration;
    let registrationData;

    // Handle both direct API calls (from form submission) and database trigger cases
    if (req.method === "POST") {
      // This is a direct API call from the form
      try {
        registrationData = await req.json();
        console.log("Received direct payload:", registrationData);
        registration = {
          name: registrationData.name,
          email: registrationData.email,
          phone: registrationData.phone,
          message: registrationData.message,
          type: registrationData.type,
        };
      } catch (e) {
        console.error("Error parsing request body:", e);
        return new Response(
          JSON.stringify({ error: "Invalid JSON in request body" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    } else {
      // This might be triggered by a database event
      try {
        const body = await req.json();
        console.log("Received webhook payload:", body);
        
        if (body.record) {
          // If it's coming from a database webhook
          registration = body.record as WaitlistRegistration;
        } else if (body.id) {
          // If it contains just the ID, fetch the full record
          const { data, error } = await adminClient
            .from("registrations")
            .select("*")
            .eq("id", body.id)
            .single();

          if (error || !data) {
            console.error("Error fetching registration:", error);
            throw new Error("Registration not found");
          }

          registration = data as WaitlistRegistration;
        } else {
          // If the whole registration is in the body
          registration = body as WaitlistRegistration;
        }
      } catch (e) {
        console.error("Error processing request:", e);
        return new Response(
          JSON.stringify({ error: "Invalid request format" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    console.log("Processed registration data:", registration);

    if (!registration || !registration.email || !registration.name) {
      return new Response(
        JSON.stringify({ error: "Missing required registration data" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Send notification email to admin using Resend's default onboarding domain
    const adminEmailResult = await resend.emails.send({
      from: "Moonlighting.ph <onboarding@resend.dev>",
      to: ["cess.ventures209@gmail.com"],
      subject: `New ${registration.type} Registration: ${registration.name}`,
      html: `
        <h1>New ${registration.type} Registration</h1>
        <p><strong>Name:</strong> ${registration.name}</p>
        <p><strong>Email:</strong> ${registration.email}</p>
        <p><strong>Phone:</strong> ${registration.phone || "Not provided"}</p>
        <p><strong>Type:</strong> ${registration.type}</p>
        <p><strong>Message:</strong> ${registration.message || "Not provided"}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Admin email sent:", adminEmailResult);

    // Send confirmation email to user using Resend's default onboarding domain
    const userEmailResult = await resend.emails.send({
      from: "Moonlighting.ph <onboarding@resend.dev>",
      to: [registration.email],
      subject: registration.type === "waitlist"
        ? "Thank you for joining the Moonlighting.ph waitlist!"
        : "Thank you for your demo request!",
      html: `
        <h1>Hello ${registration.name},</h1>
        <p>
          ${
            registration.type === "waitlist"
              ? "Thank you for joining the Moonlighting.ph waitlist. We're excited to have you on board!"
              : "Thank you for your demo request. We'll be in touch shortly to schedule a time."
          }
        </p>
        <p>We'll keep you updated on our progress and let you know when we're ready to launch.</p>
        <p>Best regards,<br>The Moonlighting.ph Team</p>
      `,
    });

    console.log("User email sent:", userEmailResult);

    return new Response(
      JSON.stringify({
        message: "Notification emails sent successfully",
        adminEmail: adminEmailResult,
        userEmail: userEmailResult,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in notify-waitlist function:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send notification",
        details: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
