
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const ProviderCTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/0 z-0"></div>
      <div className="absolute right-0 top-1/4 w-1/3 h-2/3 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600')] bg-cover bg-center rounded-l-3xl opacity-20 blur-sm"></div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <Reveal>
          <div 
            className="max-w-4xl mx-auto bg-card dark:bg-gray-800/90 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 md:p-10 shadow-xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamlessly Connect with On-Demand Medical Professionals</h2>
              <p className="text-xl text-muted-foreground">
                Moonlighting.ph helps understaffed hospitals connect with pre-vetted, on-demand medical professionals.
              </p>
            </div>
            
            <Reveal delay={200} direction="up">
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a 
                  href="https://calendly.com/cessventures/product-demo-moonlighting-ph" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg group">
                    <span>Book a Demo</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  className="rounded-full px-8 py-6 font-semibold text-lg group"
                  onClick={() => window.location.href = "https://calendly.com/cessventures/product-demo-moonlighting-ph"}
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProviderCTA;
