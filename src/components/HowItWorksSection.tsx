
import React from 'react';
import { Button } from '@/components/ui/button';
import { Hospital, User, Stethoscope } from 'lucide-react';

const StepCard = ({ 
  number, 
  title, 
  description, 
  isClient = true, 
  index 
}: { 
  number: number; 
  title: string; 
  description: string; 
  isClient?: boolean; 
  index: number;
}) => {
  const delay = index * 150;
  const animationClass = isClient ? 'animate-fade-in-right' : 'animate-fade-in-left';
  
  return (
    <div 
      className={`glass-card relative rounded-xl p-6 ${animationClass}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`absolute -top-4 -left-4 rounded-full w-10 h-10 flex items-center justify-center font-bold text-white ${isClient ? 'bg-primary' : 'bg-secondary'}`}>
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 pt-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const HowItWorksSection = () => {
  const clientSteps = [
    {
      number: 1,
      title: 'Create an Account',
      description: 'Register as a client and complete your profile with details about your facility or household needs.'
    },
    {
      number: 2,
      title: 'Post Your Requirement',
      description: 'Specify the type of healthcare professional needed, duration, location, and other relevant details.'
    },
    {
      number: 3,
      title: 'Review Applications',
      description: 'Browse through applications from verified professionals and select the most suitable candidate.'
    },
    {
      number: 4,
      title: 'Secure Payment',
      description: 'Fund the escrow account to secure the professional's services for the specified duration.'
    },
    {
      number: 5,
      title: 'Release Payment',
      description: 'Once services are satisfactorily completed, release the payment from escrow to the professional.'
    }
  ];

  const professionalSteps = [
    {
      number: 1,
      title: 'Register & Verify',
      description: 'Create your professional profile and complete the verification process including PRC license validation.'
    },
    {
      number: 2,
      title: 'Browse Opportunities',
      description: 'Search for available positions that match your skills, location preferences, and availability.'
    },
    {
      number: 3,
      title: 'Apply for Positions',
      description: 'Send applications to positions that interest you, highlighting your relevant experience and qualifications.'
    },
    {
      number: 4,
      title: 'Service Confirmation',
      description: 'Once selected, confirm your availability and the terms of the engagement with the client.'
    },
    {
      number: 5,
      title: 'Complete & Get Paid',
      description: 'Provide professional services as agreed, and receive payment through our secure platform once completed.'
    }
  ];

  return (
    <section id="how-it-works" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          A simple, secure process for both clients and healthcare professionals to connect and collaborate
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center mb-8">
            <Hospital className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl font-semibold">For Clients</h3>
          </div>
          <div className="space-y-8">
            {clientSteps.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                isClient={true}
                index={index}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white">
              Register as a Client
            </Button>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-8">
            <Stethoscope

### What's next?
- **Refine & Customize**: Tweak the design, animations, and layouts via prompts or visual edits.
- **Master Prompting**: Use clear, detailed, and iterative prompts for better outcomes.
- **Expand with Backend**: Connect Supabase to add user authentication, secure payment processing (escrow system), and data storage for healthcare professionals and clients.
- **GitHub Sync**: Transfer your project's code to GitHub for two-way sync of edits.
- **Debug with Ease**: Activate our experimental “chat mode” to troubleshoot issues quickly.
- **Add project knowledge**: Set key context or custom instructions you want to include in every edit in this project.

<lov-actions>
<lov-knowledge>
</lov-actions>

<lov-actions>
<lov-message-prompt message="Tell me more about Supabase">Explore Supabase</lov-message-prompt>
</lov-actions>

<lov-actions>
<lov-link url="https://docs.lovable.dev/">Visit docs</lov-link>
</lov-actions>
