
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface Registration {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  message: string | null;
  type: string;
  notified: boolean;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Create a Supabase client with the service role key
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY") ?? "");
    
    // Get new registrations that haven't been notified yet
    const { data: newRegistrations, error } = await supabaseAdmin
      .from("registrations")
      .select("*")
      .eq("notified", false)
      .order("created_at", { ascending: false });
    
    if (error) {
      throw error;
    }
    
    console.log(`Found ${newRegistrations?.length || 0} new registrations`);
    
    if (!newRegistrations || newRegistrations.length === 0) {
      return new Response(JSON.stringify({ message: "No new registrations found" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }
    
    // Send email notification for each new registration
    const notifications = [];
    
    for (const registration of newRegistrations as Registration[]) {
      // Send email notification using Resend API
      try {
        const emailRes = await resend.emails.send({
          from: "Moonlighting.ph <onboarding@resend.dev>",
          to: ["cess.ventures209@gmail.com"],
          subject: `New Waitlist Registration: ${registration.name}`,
          html: `
            <h1>New Waitlist Registration</h1>
            <p><strong>Name:</strong> ${registration.name}</p>
            <p><strong>Email:</strong> ${registration.email}</p>
            <p><strong>Phone:</strong> ${registration.phone || 'Not provided'}</p>
            <p><strong>Type:</strong> ${registration.type}</p>
            <p><strong>Message:</strong> ${registration.message || 'None'}</p>
            <p><strong>Registered at:</strong> ${new Date(registration.created_at).toLocaleString()}</p>
          `,
        });
        
        console.log("Email sent successfully:", emailRes);
        
        // Update the registration as notified
        const { error: updateError } = await supabaseAdmin
          .from("registrations")
          .update({ notified: true })
          .eq("id", registration.id);
          
        if (updateError) {
          throw updateError;
        }
        
        notifications.push({
          id: registration.id,
          email: registration.email,
          success: true,
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        notifications.push({
          id: registration.id,
          email: registration.email,
          success: false,
          error: emailError.message,
        });
      }
    }
    
    return new Response(JSON.stringify({ 
      message: "Email notifications processed", 
      notifications 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in notify-waitlist function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
