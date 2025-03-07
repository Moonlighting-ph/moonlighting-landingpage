
import React from 'react';
import { UserCheck, Clipboard, Clock4, Clock } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';

const StepsSection = () => {
  const steps = [
    {
      icon: <UserCheck className="h-10 w-10 text-primary" />,
      title: "Create Your Account",
      description: "Sign up and set up your healthcare facility profile with your specific needs"
    },
    {
      icon: <Clipboard className="h-10 w-10 text-primary" />,
      title: "Post Your Requirements",
      description: "Specify the roles, qualifications, and schedules you need to fill"
    },
    {
      icon: <Clock4 className="h-10 w-10 text-primary" />,
      title: "Get Matched Quickly",
      description: "Our algorithm matches you with qualified, available healthcare professionals"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Clock className="h-4 w-4 mr-2" />
              <span>Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Our streamlined process makes it easy to find the right healthcare professionals
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute h-0.5 bg-primary/30 top-24 left-[20%] right-[20%] z-0"></div>
          
          {steps.map((step, index) => (
            <Reveal key={index} delay={200 * index} direction="up">
              <div 
                className="relative z-10 flex flex-col items-center text-center apple-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                
                <div className="step-number group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 mt-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
