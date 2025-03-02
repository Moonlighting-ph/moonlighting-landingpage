
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/sections/HeroSection';
import FeatureSection from '@/components/sections/FeatureSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ServiceHighlights from '@/components/ServiceHighlights';
import JobListingsPreview from '@/components/JobListingsPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import FooterSection from '@/components/sections/FooterSection';
import { servicesForProfessionals } from '@/data/serviceData';
import { sampleJobs } from '@/data/jobListingsData';

const Index = () => {
  // Initialize scroll animations
  useEffect(() => {
    // Force re-evaluation of scroll positions on page load
    const checkVisibility = () => {
      window.dispatchEvent(new CustomEvent('scroll'));
    };
    
    // Check once on load
    checkVisibility();
    
    // Check again after a short delay to catch any late-loading elements
    const timeoutId = setTimeout(checkVisibility, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <PageTransition />
      <Navbar />
      <HeroSection />
      <FeatureSection />
      
      {/* Hide ServiceHighlights section */}
      <div className="hidden">
        <ServiceHighlights 
          title="Services for Healthcare Professionals" 
          subtitle="We help you find moonlighting opportunities that match your skills and schedule"
          services={servicesForProfessionals}
        />
      </div>
      
      <HowItWorksSection />
      
      {/* Hide job listings section with CSS instead of removing */}
      <div className="hidden">
        <JobListingsPreview
          title="Recent Job Opportunities"
          subtitle="Browse through the latest healthcare positions available on our platform"
          listings={sampleJobs}
          viewAllLink="#jobs"
        />
      </div>
      
      {/* Hide testimonials section with CSS instead of removing */}
      <div className="hidden">
        <TestimonialsSection />
      </div>
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
