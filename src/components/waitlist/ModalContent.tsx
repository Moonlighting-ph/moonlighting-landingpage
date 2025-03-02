
import React from 'react';
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ModalContentProps {
  type: 'waitlist' | 'demo';
  children: React.ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ type, children }) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl">
          {type === 'waitlist' ? 'Join Our Waitlist' : 'Book a Demo'}
        </DialogTitle>
        <DialogDescription>
          {type === 'waitlist' 
            ? 'Be the first to know when we launch. Fill out the form below to join our waitlist.'
            : 'Interested in learning more? Schedule a personalized demo with our team.'}
        </DialogDescription>
      </DialogHeader>
      
      {children}
    </>
  );
};

export default ModalContent;
