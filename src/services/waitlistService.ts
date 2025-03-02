
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export interface WaitlistFormData {
  name: string;
  email: string;
  phone: string;
  profession: string;
  type: 'waitlist' | 'demo';
}

export const waitlistService = {
  /**
   * Check if an email already exists in the registrations table
   * @param email The email to check
   * @returns Object with exists boolean and any error
   */
  async checkExistingEmail(email: string): Promise<{ exists: boolean; error: Error | null }> {
    try {
      const { data: existingRegistration, error: searchError } = await supabase
        .from('registrations')
        .select('email')
        .eq('email', email.trim().toLowerCase())
        .maybeSingle();
      
      if (searchError) {
        console.error('Error checking for existing email:', searchError);
        return { exists: false, error: searchError };
      }
      
      return { 
        exists: !!existingRegistration, 
        error: null 
      };
    } catch (error) {
      console.error('Error in checkExistingEmail:', error);
      return { 
        exists: false, 
        error: error instanceof Error ? error : new Error('Unknown error') 
      };
    }
  },

  /**
   * Submit registration data to Supabase
   * @param formData The form data to submit
   * @returns Object with success boolean and any error
   */
  async submitRegistration(formData: WaitlistFormData): Promise<{ success: boolean; error: Error | null }> {
    try {
      // Submit data to Supabase
      const { error } = await supabase
        .from('registrations')
        .insert([
          { 
            name: formData.name, 
            email: formData.email.trim().toLowerCase(), 
            phone: formData.phone, 
            profession: formData.profession,
            type: formData.type
          }
        ]);

      if (error) {
        console.error('Supabase insert error:', error);
        return { success: false, error };
      }
      
      return { success: true, error: null };
    } catch (error) {
      console.error('Error in submitRegistration:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error : new Error('Unknown error') 
      };
    }
  },

  /**
   * Notify the waitlist system about a new registration
   * @param formData The form data to process
   * @returns Object with success boolean and any error
   */
  async notifyWaitlist(formData: WaitlistFormData): Promise<{ success: boolean; error: Error | null }> {
    try {
      console.log("Invoking notify-waitlist function");
      const { error: functionError, data } = await supabase.functions.invoke('notify-waitlist', {
        body: { 
          email: formData.email.trim().toLowerCase(), 
          name: formData.name, 
          type: formData.type, 
          phone: formData.phone, 
          profession: formData.profession 
        }
      });
      
      console.log("Function response:", data);
      
      if (functionError) {
        console.error('Error invoking notification function:', functionError);
        // We don't consider this a critical error as the registration was successful
        return { success: true, error: functionError };
      }
      
      return { success: true, error: null };
    } catch (error) {
      console.error('Error in notifyWaitlist:', error);
      // We don't consider this a critical error as the registration was successful
      return { 
        success: true, 
        error: error instanceof Error ? error : new Error('Unknown error') 
      };
    }
  },

  /**
   * Process a waitlist registration form submission
   * @param formData The form data to process
   * @returns Object indicating if the process was successful
   */
  async processWaitlistSubmission(formData: WaitlistFormData): Promise<{ success: boolean; emailExists: boolean }> {
    // Check if email already exists
    const { exists, error: checkError } = await this.checkExistingEmail(formData.email);
    
    if (checkError) {
      toast({
        title: "Error checking email",
        description: "We couldn't verify your email. Please try again.",
        variant: "destructive",
      });
      return { success: false, emailExists: false };
    }
    
    if (exists) {
      return { success: false, emailExists: true };
    }
    
    // Submit registration
    const { success, error: submitError } = await this.submitRegistration(formData);
    
    if (!success) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      return { success: false, emailExists: false };
    }
    
    // Try to notify the waitlist system (but don't fail if it doesn't work)
    await this.notifyWaitlist(formData);
    
    // Success message
    toast({
      title: "Success!",
      description: formData.type === 'waitlist' 
        ? "You've been added to our waitlist. We'll contact you soon." 
        : "Your demo request has been received. We'll be in touch shortly.",
    });
    
    return { success: true, emailExists: false };
  }
};
