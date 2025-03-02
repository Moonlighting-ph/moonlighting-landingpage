
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'waitlist' | 'demo';
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ open, onOpenChange, type }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting form with data:", { name, email, phone, profession, type });
      
      // Submit data to Supabase
      const { error } = await supabase
        .from('registrations')
        .insert([
          { 
            name, 
            email, 
            phone, 
            profession,
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
          body: { email, name, type, phone, profession }
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

      // Reset form and close modal
      setName('');
      setEmail('');
      setPhone('');
      setProfession('');
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
        
        {type === 'demo' ? (
          <div className="py-4">
            <a 
              href="https://calendly.com/cessventures/product-demo-moonlighting-ph" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button 
                className="w-full rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
              >
                Book via Calendly
              </Button>
            </a>
          </div>
        ) : (
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="rounded-xl"
                />
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
            
            <DialogFooter>
              <Button 
                type="submit" 
                className="w-full rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
