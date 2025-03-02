
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'
import { Resend } from 'https://esm.sh/resend@1.0.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
    })
  }
  
  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )
    
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'))
    
    // Get the request body
    let body = {}
    if (req.method === 'POST') {
      try {
        body = await req.json()
        console.log('Received notification request:', body)
      } catch (e) {
        console.log('No request body or invalid JSON')
      }
    }
    
    // Query for unnotified registrations if no specific entry was provided
    let registrations
    if (Object.keys(body).length === 0) {
      const { data, error } = await supabaseAdmin
        .from('registrations')
        .select('*')
        .eq('notified', false)
        .limit(10)
      
      if (error) {
        console.error('Error fetching registrations:', error)
        throw error
      }
      
      registrations = data
    } else {
      // Use the provided registration from the request body
      registrations = [body]
    }
    
    console.log(`Found ${registrations.length} registrations to notify about`)
    
    if (registrations.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No new registrations to notify about' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    }
    
    // Process each registration
    const results = await Promise.all(
      registrations.map(async (registration) => {
        try {
          console.log(`Sending notification for ${registration.email}`)
          
          const type = registration.type || 'waitlist'
          const subject = type === 'waitlist' 
            ? 'New Waitlist Registration' 
            : 'New Demo Request'
          
          // Send email notification
          const { data: emailData, error: emailError } = await resend.emails.send({
            from: 'Moonlighting PH <notifications@moonlighting.ph>',
            to: ['cess.ventures209@gmail.com'],
            subject: subject,
            html: `
              <h1>${subject}</h1>
              <p><strong>Name:</strong> ${registration.name}</p>
              <p><strong>Email:</strong> ${registration.email}</p>
              <p><strong>Phone:</strong> ${registration.phone || 'Not provided'}</p>
              <p><strong>Type:</strong> ${registration.type}</p>
              <p><strong>Message:</strong> ${registration.message || 'No message provided'}</p>
            `,
          })
          
          if (emailError) {
            throw emailError
          }
          
          console.log('Email sent successfully:', emailData)
          
          // Mark as notified in the database if it's an existing record
          if (registration.id) {
            const { error: updateError } = await supabaseAdmin
              .from('registrations')
              .update({ notified: true })
              .eq('id', registration.id)
            
            if (updateError) {
              console.error('Error updating registration:', updateError)
            }
          }
          
          return { email: registration.email, success: true }
        } catch (error) {
          console.error(`Error processing registration ${registration.email}:`, error)
          return { email: registration.email, success: false, error: error.message }
        }
      })
    )
    
    const successful = results.filter((r) => r.success).length
    const failed = results.filter((r) => !r.success).length
    
    return new Response(
      JSON.stringify({
        message: `Processed ${results.length} registrations: ${successful} successful, ${failed} failed`,
        results,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Function error:', error)
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
