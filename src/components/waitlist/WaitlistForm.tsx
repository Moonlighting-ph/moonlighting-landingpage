
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle } from 'lucide-react';

interface WaitlistFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    profession: string;
  }) => Promise<void>;
  isSubmitting: boolean;
  emailError: string;
  onEmailBlur: (email: string) => Promise<void>;
  onEmailChange: () => void;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ 
  onSubmit, 
  isSubmitting,
  emailError,
  onEmailBlur,
  onEmailChange
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [formatError, setFormatError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email format before submission
    if (!validateEmail(email)) {
      setFormatError('Please enter a valid email address');
      return;
    }
    
    await onSubmit({
      name,
      email,
      phone,
      profession
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setFormatError(''); // Clear format error when typing
    onEmailChange(); // Clear any existing backend error when the user types
  };

  const handleEmailBlur = async () => {
    if (email) {
      // Check format first
      if (!validateEmail(email)) {
        setFormatError('Please enter a valid email address');
        return;
      } else {
        setFormatError('');
      }
      
      // If format is valid, check for duplicates
      await onEmailBlur(email);
    }
  };

  // Display either format error or backend error
  const displayError = formatError || emailError;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="rounded-xl"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            placeholder="your.email@example.com"
            required
            className={`rounded-xl ${displayError ? 'border-destructive' : ''}`}
          />
          {displayError && (
            <div className="flex items-center gap-2 mt-1 text-destructive text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{displayError}</span>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+63 XXX XXX XXXX"
            className="rounded-xl"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="profession">Profession</Label>
          <Select 
            value={profession} 
            onValueChange={setProfession}
            required
          >
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="Select your profession" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="nurse">Nurse</SelectItem>
              <SelectItem value="medtech">Medical Technologist</SelectItem>
              <SelectItem value="radiologist">Radiologist</SelectItem>
              <SelectItem value="therapist">Therapist</SelectItem>
              <SelectItem value="pharmacist">Pharmacist</SelectItem>
              <SelectItem value="dentist">Dentist</SelectItem>
              <SelectItem value="other">Other Healthcare Professional</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
        disabled={isSubmitting || !!displayError}
      >
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  );
};

export default WaitlistForm;
