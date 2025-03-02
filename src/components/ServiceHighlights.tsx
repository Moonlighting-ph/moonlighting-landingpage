
import React from 'react';
import { Clock, Shield, Award, Star, Heart, DollarSign, CheckCircle, Briefcase } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceHighlightsProps {
  title: string;
  subtitle: string;
  services: ServiceItem[];
  forClients?: boolean;
}

const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({ 
  title, 
  subtitle, 
  services,
  forClients = false
}) => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      {/* Background gradient blobs */}
      <div className="absolute -z-10 opacity-30 blur-3xl w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 via-primary/10 to-transparent -top-[400px] -right-[400px]"></div>
      <div className="absolute -z-10 opacity-30 blur-3xl w-[600px] h-[600px] rounded-full bg-gradient-to-br from-secondary/5 via-secondary/10 to-transparent -bottom-[300px] -left-[300px]"></div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-muted-foreground">{subtitle}</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={100 * index}>
              <div
                className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/5 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className={`w-14 h-14 rounded-full ${forClients ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
