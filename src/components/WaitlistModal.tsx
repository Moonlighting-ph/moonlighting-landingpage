
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { waitlistService, WaitlistFormData } from "@/services/waitlistService";

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

  const handleFormSubmit = async (formData: Omit<WaitlistFormData, 'type'>) => {
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form with data:", { ...formData, type });
      
      const { success, emailExists } = await waitlistService.processWaitlistSubmission({
        ...formData,
        type
      });
      
      if (emailExists) {
        setEmailError('This email is already on our waitlist. We\'ll notify you when we launch.');
        return;
      }
      
      if (success) {
        // Close modal on success
        onOpenChange(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailBlur = async (email: string) => {
    if (!email) return;
    
    try {
      const { exists, error } = await waitlistService.checkExistingEmail(email);
      
      if (error) {
        console.error('Error checking email:', error);
        return;
      }
      
      if (exists) {
        setEmailError('This email is already on our waitlist. We\'ll notify you when we launch.');
      } else {
        setEmailError('');
      }
    } catch (error) {
      console.error('Error checking email on blur:', error);
    }
  };

  const handleEmailChange = () => {
    if (emailError) {
      setEmailError('');
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
              onEmailBlur={handleEmailBlur}
              onEmailChange={handleEmailChange}
            />
          )}
        </ModalContent>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
