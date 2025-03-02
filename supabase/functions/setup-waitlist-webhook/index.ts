
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

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
    // Create a Supabase client with the service role key
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );
    
    // Set up a webhook for the registrations table to trigger the notify-waitlist function
    // First check if we have permission to do this
    const { data: rpcTest, error: rpcError } = await supabaseAdmin.rpc(
      'http_set_webhook',
      {
        webhook_name: 'waitlist_notification',
        url: `${Deno.env.get("SUPABASE_URL") ?? ""}/functions/v1/notify-waitlist`,
        events: ['INSERT'],
        table: 'registrations'
      }
    );
    
    let webhookResult = { success: false, message: "Webhook not created", error: null };
    
    if (rpcError) {
      console.log("RPC error, falling back to webhooks REST API:", rpcError);
      webhookResult = {
        success: false,
        message: "Could not create webhook via RPC, please set up the webhook manually",
        error: rpcError
      };
    } else {
      webhookResult = {
        success: true,
        message: "Webhook created successfully using RPC",
        details: rpcTest
      };
    }
    
    return new Response(JSON.stringify({
      message: "Webhook setup complete",
      webhook: webhookResult
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in setup-waitlist-webhook function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
