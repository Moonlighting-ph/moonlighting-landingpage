
import React from 'react';
import Navbar from '@/components/Navbar';
import { Shield, Building, ArrowRight, UserCheck, Clock4, Clipboard, Award, HeartPulse, Stethoscope, Zap } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ServiceHighlights from '@/components/ServiceHighlights';
import JobListingsPreview from '@/components/JobListingsPreview';
import { 
  ClientHero, 
  ProviderFeatures, 
  StepsSection, 
  ProviderCTA, 
  ClientFooter 
} from '@/components/client';

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
    icon: <Clipboard className="h-8 w-8 text-primary" />,
    title: "Compliance Simplified",
    description: "All professionals meet regulatory and credentialing requirements"
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Specialized Talent",
    description: "Access niche specialists for specific department needs"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Rated Professionals",
    description: "See ratings and reviews from other medical providers"
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Cost Control",
    description: "Save on recruitment costs and optimize staffing expenses"
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: "Quality Care",
    description: "Maintain high standards of patient care with qualified professionals"
  }
];

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

const ClientLanding = () => {
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
      <div className="hidden">
        <JobListingsPreview
          title="Available Healthcare Professionals"
          subtitle="Browse our network of pre-vetted, on-demand medical professionals"
          listings={sampleProfessionals}
          viewAllLink="#professionals"
          forClients={true}
        />
      </div>
      <ProviderCTA />
      <ClientFooter />
    </div>
  );
};

export default ClientLanding;
