
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from '@/components/WaitlistModal';

const CTASection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/0 z-0"></div>
      <div className="absolute right-0 top-1/4 w-1/3 h-2/3 bg-[url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600')] bg-cover bg-center rounded-l-3xl opacity-20 blur-sm"></div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-card dark:bg-gray-800/90 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Philippine Hospitals Need Your Skills</h2>
            <p className="text-xl text-muted-foreground">
              Help solve critical staffing shortages while supplementing your income. Moonlighting.ph seamlessly connects you with medical providers across the country.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button 
              className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg group"
              onClick={() => setShowWaitlistModal(true)}
            >
              <span>Join Waitlist</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 opacity-100" />
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 font-semibold text-lg group"
              onClick={() => setShowDemoModal(true)}
            >
              <span>Book a Demo</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform opacity-100" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <WaitlistModal 
        open={showWaitlistModal} 
        onOpenChange={setShowWaitlistModal}
        type="waitlist"
      />
      
      <WaitlistModal 
        open={showDemoModal} 
        onOpenChange={setShowDemoModal}
        type="demo"
      />
    </section>
  );
};

export default CTASection;
