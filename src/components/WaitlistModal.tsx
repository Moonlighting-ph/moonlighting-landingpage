
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

import WaitlistForm from './waitlist/WaitlistForm';
import DemoSection from './waitlist/DemoSection';
import ModalContent from './waitlist/ModalContent';

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'waitlist' | 'demo';
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ open, onOpenChange, type }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleFormSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    profession: string;
  }) => {
    setIsSubmitting(true);
    setEmailError('');

    try {
      console.log("Submitting form with data:", { ...formData, type });
      
      // Check if email already exists in registrations table
      const { data: existingRegistration, error: searchError } = await supabase
        .from('registrations')
        .select('email')
        .eq('email', formData.email.trim().toLowerCase())
        .maybeSingle();
      
      if (searchError) {
        console.error('Error checking for existing email:', searchError);
        throw searchError;
      }
      
      if (existingRegistration) {
        console.log('Email already exists in registrations:', existingRegistration);
        setEmailError('This email is already waitlisted. Check your email inbox for your credentials.');
        setIsSubmitting(false);
        return;
      }
      
      // Submit data to Supabase
      const { error } = await supabase
        .from('registrations')
        .insert([
          { 
            name: formData.name, 
            email: formData.email.trim().toLowerCase(), 
            phone: formData.phone, 
            profession: formData.profession,
            type
          }
        ]);

      if (error) {
        console.error('Supabase insert error:', error);
        throw error;
      }
      
      // Try to trigger the edge function directly
      try {
        console.log("Invoking notify-waitlist function");
        const { error: functionError, data } = await supabase.functions.invoke('notify-waitlist', {
          body: { 
            email: formData.email.trim().toLowerCase(), 
            name: formData.name, 
            type, 
            phone: formData.phone, 
            profession: formData.profession 
          }
        });
        
        console.log("Function response:", data);
        
        if (functionError) {
          console.error('Error invoking notification function:', functionError);
          // We don't throw this error as we still want to show success to the user
        }
      } catch (functionError) {
        console.error('Error triggering notification:', functionError);
        // We don't throw this error as we still want to show success to the user
      }
      
      // Success message
      toast({
        title: "Success!",
        description: type === 'waitlist' 
          ? "You've been added to our waitlist. We'll contact you soon." 
          : "Your demo request has been received. We'll be in touch shortly.",
      });

      // Close modal
      onOpenChange(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px] rounded-2xl p-8 bg-card/95 backdrop-blur-md border border-primary/10 shadow-xl">
        <ModalContent type={type}>
          {type === 'demo' ? (
            <DemoSection />
          ) : (
            <WaitlistForm 
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
              emailError={emailError}
            />
          )}
        </ModalContent>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
