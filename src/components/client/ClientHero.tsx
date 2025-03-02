
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, Star, DollarSign, Clock, Check, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedTextCycler from '@/components/AnimatedTextCycler';

const ClientHero = () => {
  const facilities = [
    "Hospital", "Clinic", "Care Home", "Medical Center",
    "Rehab Center", "Emergency Room", "Dental Clinic", "Wellness Center"
  ];
  
  const locations = [
    "Manila", "Cebu", "Davao", "Quezon City",
    "Makati", "Taguig", "Pasig", "Baguio"
  ];
  
  const professionals = [
    "Nurses", "Doctors", "Surgeons", "Therapists",
    "Specialists", "Anesthesiologists", "Radiologists", "Pediatricians"
  ];

  return (
    <section className="relative min-h-screen pt-20 pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-float delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 md:pt-20 flex flex-col items-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-in">
          <Building className="h-4 w-4 mr-2" />
          <span>For Medical Providers</span>
        </div>
        
        <div className="text-center max-w-4xl mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="mb-6 text-center relative z-10">
            <AnimatedTextCycler 
              textGroups={[facilities, locations, professionals]}
              staticTexts={["Our", "in", "needs qualified", "now"]}
              className="font-bold text-2xl md:text-3xl lg:text-4xl"
              customStyles={{
                containerClass: "text-cycler-container p-2",
                staticTextClass: "text-gray-900 dark:text-white",
                middleElementClass: "px-4 py-1 bg-secondary/70 text-gray-900 dark:text-white font-bold rounded-full border border-secondary/30 shadow-sm"
              }}
            />
          </div>
          
          <p className="text-xl text-center text-gray-800 dark:text-gray-200 max-w-2xl mx-auto mt-6 font-medium">
            Access a network of pre-vetted, on-demand medical professionals for your hospital, clinic, or home care needs. Get matched with the right professionals quickly.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <a 
            href="https://calendly.com/cessventures/product-demo-moonlighting-ph" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg group">
              <span>Book a Demo</span>
              <ArrowRight className="ml-2 h-5 w-5 opacity-100 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <Link to="/">
            <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg group">
              <span>I'm a medical professional</span>
              <ArrowRight className="ml-2 h-5 w-5 opacity-100 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="apple-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <Shield className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Pre-vetted Pros</h3>
            <p className="text-muted-foreground">All healthcare workers are thoroughly vetted.</p>
          </div>

          <div className="apple-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <Clock className="h-8 w-8 text-primary mb-3 group-hover:rotate-12 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Quick Staffing</h3>
            <p className="text-muted-foreground">Fill staffing gaps within hours, not days.</p>
          </div>

          <div className="apple-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <Check className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Quality Care</h3>
            <p className="text-muted-foreground">Access skilled, rated healthcare pros.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHero;
