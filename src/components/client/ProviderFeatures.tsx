
import React from 'react';
import { Building, Heart, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProviderFeatures = () => {
  const titleRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    animationClass: 'opacity-0 animate-fade-in'
  });

  return (
    <section className="py-16 md:py-24 bg-accent/30 relative">
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('https://images.unsplash.com/photo-1631815588090-d4bfec5b3583?q=80&w=1200')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Purpose-Built for Medical Providers</h2>
          <p className="text-xl text-muted-foreground">
            Our platform helps hospitals, clinics, and care facilities find the right healthcare professionals quickly and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Building className="h-8 w-8 text-primary" />,
              title: "For Hospitals",
              description: "Fill staffing gaps during peak times and maintain quality care with on-demand staff.",
              image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=400",
              alt: "Hospital building"
            },
            {
              icon: <Heart className="h-8 w-8 text-primary" />,
              title: "For Clinics",
              description: "Access specialized healthcare professionals without the overhead of full-time hiring.",
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400",
              alt: "Medical professional at clinic"
            },
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              title: "For Home Care",
              description: "Connect with qualified caregivers, nurses, and other professionals for in-home patient care.",
              image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400",
              alt: "Home healthcare"
            }
          ].map((feature, index) => {
            const featureRef = useScrollAnimation<HTMLDivElement>({
              threshold: 0.1,
              rootMargin: '0px 0px -100px 0px',
              animationClass: `opacity-0 animate-fade-in delay-${index * 200}`
            });
            
            return (
              <div 
                key={feature.title}
                ref={featureRef}
                className="apple-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
                <div className="w-full h-32 mt-4 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProviderFeatures;
