
import React from 'react';
import { Shield, Heart, Users, DollarSign, MapPin, Stethoscope } from 'lucide-react';

const Feature = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  index: number;
}) => {
  const delay = index * 100;
  
  return (
    <div 
      className="glass-card rounded-xl p-6 card-hover animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Identity Verification',
      description: 'Real-time PRC verification and thorough background checks to ensure only qualified professionals join our platform.'
    },
    {
      icon: Heart,
      title: 'Quality Matching',
      description: 'Our intelligent algorithm matches clients with the most suitable healthcare professionals based on skills and needs.'
    },
    {
      icon: DollarSign,
      title: 'Secure Payments',
      description: 'Our escrow system holds payment until services are completed, protecting both clients and professionals.'
    },
    {
      icon: MapPin,
      title: 'Location-Based',
      description: 'Find healthcare professionals near you for faster response times and more efficient service delivery.'
    },
    {
      icon: Users,
      title: 'Diverse Specialists',
      description: 'Access to a wide range of healthcare professionals including doctors, nurses, caregivers, and more.'
    },
    {
      icon: Stethoscope,
      title: 'Professional Support',
      description: 'Round-the-clock customer service to address any concerns during the engagement process.'
    }
  ];

  return (
    <section id="services" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
          <Stethoscope className="h-4 w-4 mr-2" />
          <span>Our Services</span>
        </div>
        <h2 className="section-title">Comprehensive Healthcare Staffing Solutions</h2>
        <p className="section-subtitle">
          From temporary staffing for hospitals to in-home medical care, we provide verified professionals for all healthcare needs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
