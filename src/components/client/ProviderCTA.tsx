
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';

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
              <div className="flex flex-col md:flex-row gap-6 justify-center" style={{ animationDelay: '300ms' }}>
                <a 
                  href="mailto:hello@moonlighting.ph" 
                >
                  <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg group">
                    <span>Contact Us</span>
                  </Button>
                </a>
                <Link to="/">
                  <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                    <span>I'm a medical professional</span>
                  </Button>
                </Link>
              </div>

              
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProviderCTA;
