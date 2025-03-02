
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://example.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'waitlist' | 'demo';
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ open, onOpenChange, type }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert data into supabase table
      const { error } = await supabase
        .from(type === 'waitlist' ? 'waitlist' : 'demo_requests')
        .insert([
          { 
            name, 
            email, 
            phone, 
            message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

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
      setMessage('');
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
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea 
                id="message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={type === 'waitlist' 
                  ? "Tell us about yourself and why you're interested in joining..."
                  : "What specific features or aspects are you interested in learning more about?"}
                className="resize-none rounded-xl min-h-[100px]"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="submit" 
              className="w-full rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : type === 'waitlist' ? "Join Waitlist" : "Request Demo"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
