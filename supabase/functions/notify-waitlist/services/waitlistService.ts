
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.33.1";
import { Resend } from "npm:resend@2.0.0";
import { getUserEmailTemplate } from "../templates/userEmailTemplate.ts";
import { getAdminEmailTemplate } from "../templates/adminEmailTemplate.ts";

interface WaitlistRequest {
  email: string;
  name: string;
  type: string;
  phone?: string;
  profession?: string;
}

interface EmailResponse {
  userEmailData: any;
  adminEmailData: any;
}

export async function processWaitlistRegistration(request: WaitlistRequest): Promise<EmailResponse> {
  const { email, name, type, phone, profession } = request;
  
  // Initialize Supabase and Resend clients
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  const resendApiKey = Deno.env.get("RESEND_API_KEY") || "";

  if (!supabaseUrl || !supabaseKey || !resendApiKey) {
    throw new Error("Required environment variables are missing");
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const resend = new Resend(resendApiKey);

  // Send email to user
  const { data: userEmailData, error: userEmailError } = await resend.emails.send({
    from: "Moonlighting.ph <no-reply@moonlighting.ph>",
    to: [email],
    subject: "Welcome to Moonlighting.ph Waitlist!",
    html: getUserEmailTemplate(name, profession),
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
    html: getAdminEmailTemplate(name, email, profession, phone, type),
    reply_to: email,
  });

  if (adminEmailError) {
    console.error("Error sending admin email:", adminEmailError);
    throw adminEmailError;
  }

  console.log("Emails sent successfully:", { userEmailData, adminEmailData });

  return { userEmailData, adminEmailData };
}
