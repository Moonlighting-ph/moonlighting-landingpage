
import React from 'react';
import { Button } from "@/components/ui/button";

const DemoSection: React.FC = () => {
  return (
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
  );
};

export default DemoSection;
