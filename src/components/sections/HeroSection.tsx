
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Star, DollarSign, Briefcase, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedTextCycler from '@/components/AnimatedTextCycler';
import WaitlistModal from '@/components/WaitlistModal';

const HeroSection = () => {
  // Text options for the animated cycler
  const professions = [
    "Nurse", "Doctor", "Pediatrician", "Surgeon",
    "Anesthesiologist", "Cardiologist", "Radiologist", "Therapist"
  ];
  
  const locations = [
    "Manila", "Cebu", "Davao", "Quezon City",
    "Makati", "Taguig", "Pasig", "Baguio"
  ];
  
  const schedules = [
    "Weekend", "Night Shift", "Day Shift", "On-Call",
    "Flexible", "Part-Time", "Full-Time", "24-Hour"
  ];

  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  return (
    <section className="relative min-h-screen pt-20 pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-float delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 md:pt-20 flex flex-col items-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-in">
          <Stethoscope className="h-4 w-4 mr-2" />
          <span>For Healthcare Professionals</span>
        </div>
        
        <div className="text-center max-w-4xl mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <AnimatedTextCycler 
            textGroups={[professions, locations, schedules]}
            staticTexts={["I'm a", "in", "looking for", "work"]}
            className="mb-6 text-center"
            customStyles={{
              middleElementClass: "relative mx-2 inline-block rounded-full px-4 py-1 bg-secondary/70 text-gray-900 dark:text-secondary border border-secondary/20 font-medium transition-all duration-300 opacity-100 transform translate-y-0 shadow-sm"
            }}
          />
          
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mt-6">
            Connect with hospitals, clinics, and care facilities that need your expertise. 
            Take control of your schedule and supplement your income.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <Button 
            className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg group"
            onClick={() => setShowWaitlistModal(true)}
          >
            <span>Join Waitlist</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 opacity-100" />
          </Button>
          <Link to="/client">
            <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg group">
              <span>I'm a medical provider</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform opacity-100" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <Clock className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-muted-foreground">Choose when and where you work based on your availability</p>
          </div>

          <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <DollarSign className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Competitive Pay</h3>
            <p className="text-muted-foreground">Earn competitive rates for your expertise and qualifications</p>
          </div>

          <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <Shield className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Secure Process</h3>
            <p className="text-muted-foreground">Our platform ensures you get paid promptly for your services</p>
          </div>
        </div>
      </div>
      
      {/* Waitlist Modal */}
      <WaitlistModal 
        open={showWaitlistModal} 
        onOpenChange={setShowWaitlistModal}
        type="waitlist"
      />
    </section>
  );
};

export default HeroSection;
