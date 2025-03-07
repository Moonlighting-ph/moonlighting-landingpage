
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, Star, DollarSign, Clock, Check, Building } from 'lucide-react';
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
    "Specialists", "MedTechs", "Radiologists", "Pediatricians"
  ];

  return (
    <section className="relative min-h-screen pt-20 pb-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl animate-float delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl animate-float delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 md:pt-20 flex flex-col items-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/80 dark:bg-blue-900/80 text-white text-sm font-medium mb-6 animate-fade-in">
          <Building className="h-4 w-4 mr-2" />
          <span>For Medical Providers</span>
        </div>
        
        <div className="text-center max-w-4xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="mb-10 text-center relative z-10">
            <AnimatedTextCycler 
              textGroups={[facilities, locations, professionals]}
              staticTexts={["Our", "in", "needs qualified", "now"]}
              className="font-bold"
            />
          </div>
          
          <p className="text-xl text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-8 font-medium">
            Access a network of pre-vetted, on-demand medical professionals for your hospital, clinic, or home care needs. Get matched with the right professionals quickly.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <a 
            href="mailto:hello@moonlighting.ph" 
          >
            <Button className="rounded-full px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg">
              <span>Contact Us</span>
            </Button>
          </a>
          <Link to="/">
            <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
              <span>I'm a medical professional</span>
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100 dark:border-gray-700">
            <Shield className="h-8 w-8 text-blue-600 dark:text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Pre-vetted Pros</h3>
            <p className="text-gray-700 dark:text-gray-300">All healthcare workers are thoroughly vetted.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100 dark:border-gray-700">
            <Clock className="h-8 w-8 text-blue-600 dark:text-blue-500 mb-3 group-hover:rotate-12 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Quick Staffing</h3>
            <p className="text-gray-700 dark:text-gray-300">Fill staffing gaps within hours, not days.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100 dark:border-gray-700">
            <Check className="h-8 w-8 text-blue-600 dark:text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Quality Care</h3>
            <p className="text-gray-700 dark:text-gray-300">Access skilled, rated healthcare pros.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHero;
