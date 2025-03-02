
import React, { useState } from 'react';
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
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ 
  onSubmit, 
  isSubmitting,
  emailError 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      name,
      email,
      phone,
      profession
    });
  };

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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="your.email@example.com"
            required
            className={`rounded-xl ${emailError ? 'border-destructive' : ''}`}
          />
          {emailError && (
            <div className="flex items-center gap-2 mt-1 text-destructive text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{emailError}</span>
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
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  );
};

export default WaitlistForm;
