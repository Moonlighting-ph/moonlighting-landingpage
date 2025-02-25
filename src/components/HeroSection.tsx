
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-float delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 md:pt-20 flex flex-col items-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-in">
          <Shield className="h-4 w-4 mr-2" />
          <span>Verified Healthcare Professionals</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight max-w-4xl mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">On-Demand</span> Healthcare Professionals When You Need Them
        </h1>
        
        <p className="text-xl text-center text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Connecting hospitals, clinics, and households with verified healthcare professionals for temporary staffing needs
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold text-lg">
            Find a Professional
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg">
            Join as a Professional
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="glass-card rounded-xl p-6 card-hover">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
            <p className="text-muted-foreground">Real-time PRC verification and background checks for every healthcare professional</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 card-hover">
            <Heart className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Healthcare</h3>
            <p className="text-muted-foreground">Access to skilled doctors, nurses, and caregivers for all your medical needs</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 card-hover">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-muted-foreground">Our escrow system ensures both clients and professionals are protected</p>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
