
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, Star, DollarSign, Clock, Check, Building, ArrowRight, Moon, UserCheck, Clock4, Clipboard, Award, FileCheck, HeartPulse, Stethoscope, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedTextCycler from '@/components/AnimatedTextCycler';
import ServiceHighlights from '@/components/ServiceHighlights';
import JobListingsPreview from '@/components/JobListingsPreview';
import PageTransition from '@/components/PageTransition';

// Set dark mode by default
const setDarkMode = () => {
  document.documentElement.classList.add('dark');
  localStorage.theme = 'dark';
};

const ClientHero = () => {
  // Text options for the animated cycler
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
    <section className="pt-32 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-float delay-700"></div>
      </div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-in">
              <Building className="h-4 w-4 mr-2" />
              <span>For Medical Providers</span>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <AnimatedTextCycler 
                textGroups={[facilities, locations, professionals]}
                staticTexts={["Our", "in", "needs qualified", "now"]}
                className="mb-6"
              />
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Access a network of pre-vetted, on-demand medical professionals for your hospital, clinic, or home care needs. Get matched with the right professionals quickly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold text-lg group">
                <span>Book a Demo</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link to="/">
                <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg group">
                  <span>I'm a medical professional</span>
                  <ArrowRight className="ml-2 h-5 w-5 text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="space-y-6">
              <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <Shield className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Pre-vetted Pros</h3>
                <p className="text-muted-foreground">All healthcare workers are thoroughly vetted.</p>
              </div>
              <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <Clock className="h-8 w-8 text-primary mb-3 group-hover:rotate-12 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Quick Staffing</h3>
                <p className="text-muted-foreground">Fill staffing gaps within hours, not days.</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <DollarSign className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Cost-Effective</h3>
                <p className="text-muted-foreground">Reduce costs with transparent pricing.</p>
              </div>
              <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <Check className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Quality Care</h3>
                <p className="text-muted-foreground">Access skilled, rated healthcare pros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// New Service Highlights for Medical Providers
const servicesForProviders = [
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "All Provider Types",
    description: "We serve hospitals, clinics, urgent care centers, and home healthcare services"
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Quality Assurance",
    description: "Every professional is pre-vetted with credential verification"
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "On-Demand Staffing",
    description: "Fill urgent staffing gaps quickly with qualified professionals"
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    title: "Compliance Simplified",
    description: "All professionals meet regulatory and credentialing requirements"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Specialized Talent",
    description: "Access niche specialists for specific department needs"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Rated Professionals",
    description: "See ratings and reviews from other medical providers"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Cost Control",
    description: "Save on recruitment costs and optimize staffing expenses"
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: "Quality Care",
    description: "Maintain high standards of patient care with qualified professionals"
  }
];

// Sample professionals data for medical providers
const sampleProfessionals = [
  {
    id: "pro1",
    title: "Critical Care Nurse",
    company: "Available Now",
    logo: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=200&h=200&fit=crop",
    location: "Metro Manila",
    type: "Full-time / Part-time",
    description: "ICU/CCU certified nurse with 5+ years of experience in critical care units. Available for immediate placement."
  },
  {
    id: "pro2",
    title: "General Practitioner",
    company: "Available from August",
    logo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&fit=crop",
    location: "Cebu & Surrounding Areas",
    type: "Locum / Part-time",
    description: "Board-certified general practitioner with 8 years experience. Specializes in primary care and preventive medicine."
  },
  {
    id: "pro3",
    title: "Anesthesiologist",
    company: "Available Weekends",
    logo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&fit=crop",
    location: "Metro Manila, Luzon",
    type: "Per Diem / On-call",
    description: "Experienced anesthesiologist available for weekend procedures and emergency on-call coverage."
  },
  {
    id: "pro4",
    title: "Pediatric Specialist",
    company: "Available Now",
    logo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&fit=crop",
    location: "Nationwide",
    type: "Telehealth / In-person",
    description: "Board-certified pediatrician with specialty in developmental disorders. Available for telehealth and in-person consultations."
  }
];

const ProviderFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/30 relative">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1631815588090-d4bfec5b3583?q=80&w=1200')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Purpose-Built for Medical Providers</h2>
          <p className="text-xl text-muted-foreground">
            Our platform helps hospitals, clinics, and care facilities find the right healthcare professionals quickly and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-card/80 backdrop-blur-sm group">
            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Hospitals</h3>
            <p className="text-muted-foreground">
              Fill staffing gaps during peak times and maintain quality care with on-demand staff.
            </p>
            <div className="w-full h-32 mt-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=400" 
                alt="Hospital building" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-card/80 backdrop-blur-sm group">
            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Clinics</h3>
            <p className="text-muted-foreground">
              Access specialized healthcare professionals without the overhead of full-time hiring.
            </p>
            <div className="w-full h-32 mt-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400" 
                alt="Medical professional at clinic" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-card/80 backdrop-blur-sm group">
            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Home Care</h3>
            <p className="text-muted-foreground">
              Connect with qualified caregivers, nurses, and other professionals for in-home patient care.
            </p>
            <div className="w-full h-32 mt-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400" 
                alt="Home healthcare" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepsSection = () => {
  const steps = [
    {
      icon: <UserCheck className="h-10 w-10 text-primary" />,
      title: "Create Your Account",
      description: "Sign up and set up your healthcare facility profile with your specific needs"
    },
    {
      icon: <Clipboard className="h-10 w-10 text-primary" />,
      title: "Post Your Requirements",
      description: "Specify the roles, qualifications, and schedules you need to fill"
    },
    {
      icon: <Clock4 className="h-10 w-10 text-primary" />,
      title: "Get Matched Quickly",
      description: "Our algorithm matches you with qualified, available healthcare professionals"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Clock className="h-4 w-4 mr-2" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Our streamlined process makes it easy to find the right healthcare professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute h-0.5 bg-primary/30 top-24 left-[20%] right-[20%] z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative z-10 flex flex-col items-center text-center bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="absolute top-20 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary shadow-inner group-hover:scale-110 transition-all">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProviderCTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/0 z-0"></div>
      <div className="absolute right-0 top-1/4 w-1/3 h-2/3 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600')] bg-cover bg-center rounded-l-3xl opacity-20 blur-sm"></div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamlessly Connect with On-Demand Medical Professionals</h2>
            <p className="text-xl text-muted-foreground">
              Moonlighting.ph helps understaffed hospitals connect with pre-vetted, on-demand medical professionals.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold text-lg group">
              <span>Book a Demo</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg group">
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-5 w-5 text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientFooter = () => {
  return (
    <footer className="bg-card pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4 group">
              <Moon className="h-6 w-6 text-primary mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-display font-bold">moonlighting.ph</span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Connecting healthcare professionals with medical providers that need them.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Medical Providers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">How It Works</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Healthcare Staffing</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Pricing</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">About Us</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Careers</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Blog</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/50 after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Dispute Resolution</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} moonlighting.ph. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const ClientLanding = () => {
  // Enable dark mode when the component mounts
  useEffect(() => {
    setDarkMode();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageTransition />
      <Navbar />
      <ClientHero />
      <ProviderFeatures />
      <ServiceHighlights 
        title="Solutions for Medical Providers" 
        subtitle="We help you find qualified healthcare professionals on-demand"
        services={servicesForProviders}
        forClients={true}
      />
      <StepsSection />
      <JobListingsPreview
        title="Available Healthcare Professionals"
        subtitle="Browse our network of pre-vetted, on-demand medical professionals"
        listings={sampleProfessionals}
        viewAllLink="#professionals"
        forClients={true}
      />
      <ProviderCTA />
      <ClientFooter />
    </div>
  );
};

export default ClientLanding;
