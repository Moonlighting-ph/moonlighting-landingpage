
import React from 'react';
import { Briefcase, GraduationCap, DollarSign } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const FeatureSection = () => {
  const features = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Varied Opportunities",
      description: "Access a wide range of opportunities across different healthcare settings",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400",
      alt: "Medical professionals in various settings"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Professional Growth",
      description: "Expand your skills by working in diverse healthcare environments",
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=400",
      alt: "Healthcare professional learning"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Financial Freedom",
      description: "Supplement your income with additional work opportunities",
      image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=400",
      alt: "Financial growth concept"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-accent/30 relative">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Healthcare Professionals</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of healthcare professionals who use our platform to find flexible work opportunities
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={150 * index}>
              <div 
                className="bg-card dark:bg-gray-800/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-card/80 dark:hover:bg-gray-800 backdrop-blur-sm group"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
