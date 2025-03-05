
// CORS headers for all responses
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Create error response
export function createErrorResponse(error: Error) {
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

// Create success response
export function createSuccessResponse(data: any) {
  return new Response(
    JSON.stringify({ 
      success: true, 
      message: "Notification sent successfully",
      ...data
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    }
  );
}
