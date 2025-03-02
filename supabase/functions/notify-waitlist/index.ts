
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { generateTemporaryPassword, corsHeaders, createErrorResponse, createSuccessResponse } from "./utils/helpers.ts";
import { processWaitlistRegistration } from "./services/waitlistService.ts";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    const requestData = await req.json();
    const { email, name, type, phone, profession } = requestData;
    console.log("Request payload:", { email, name, type, phone, profession });

    if (!email || !name || !type) {
      throw new Error("Missing required fields");
    }

    // Generate a temporary password
    const temporaryPassword = generateTemporaryPassword();

    // Process the registration and send emails
    const { userEmailData, adminEmailData } = await processWaitlistRegistration(
      { email, name, type, phone, profession },
      temporaryPassword
    );

    // Return success response
    return createSuccessResponse({ userEmail: userEmailData, adminEmail: adminEmailData });
  } catch (error) {
    return createErrorResponse(error);
  }
});
