
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
  // Initialize scroll animations - improved method
  useEffect(() => {
    // Force re-evaluation of scroll positions immediately and after load
    const checkVisibility = () => {
      console.log("Checking visibility and triggering scroll events");
      window.dispatchEvent(new CustomEvent('scroll'));
    };
    
    // Check on mount
    checkVisibility();
    
    // Check after a short delay for late-loading elements
    const timeoutId = setTimeout(checkVisibility, 100);
    
    // Also check after images and other resources might have loaded
    window.addEventListener('load', checkVisibility);
    
    // Set a more frequent interval for checking during scrolling
    const intervalId = setInterval(checkVisibility, 200);
    
    // Add a scroll event listener to check on actual scroll
    const scrollHandler = () => {
      console.log("User scrolled - triggering IntersectionObserver checks");
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      window.removeEventListener('load', checkVisibility);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <PageTransition />
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ServiceHighlights 
        title="Services for Healthcare Professionals" 
        subtitle="We help you find moonlighting opportunities that match your skills and schedule"
        services={servicesForProfessionals}
      />
      <HowItWorksSection />
      <JobListingsPreview
        title="Recent Job Opportunities"
        subtitle="Browse through the latest healthcare positions available on our platform"
        listings={sampleJobs}
        viewAllLink="#jobs"
      />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
