
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, Star, DollarSign, Clock, Check, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientHero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-float delay-700"></div>
      </div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Qualified Healthcare Professionals for Your Facility
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access a network of verified medical professionals for your hospital, clinic, or home care needs. Get matched with the right professionals quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold text-lg">
                Book a Demo
              </Button>
              <Link to="/">
                <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg">
                  I'm a medical professional
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-accent p-6 rounded-xl">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Verified Professionals</h3>
                <p className="text-muted-foreground">All healthcare workers are thoroughly vetted and verified.</p>
              </div>
              <div className="bg-accent p-6 rounded-xl">
                <Clock className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Quick Staffing</h3>
                <p className="text-muted-foreground">Fill in staffing gaps within hours, not days or weeks.</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-accent p-6 rounded-xl">
                <DollarSign className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Cost-Effective</h3>
                <p className="text-muted-foreground">Reduce recruitment costs with transparent pricing.</p>
              </div>
              <div className="bg-accent p-6 rounded-xl">
                <Check className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">Access to skilled, rated healthcare professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProviderFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Purpose-Built for Healthcare Facilities</h2>
          <p className="text-xl text-muted-foreground">
            Our platform helps hospitals, clinics, and care facilities find the right healthcare professionals quickly and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <Building className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">For Hospitals</h3>
            <p className="text-muted-foreground">
              Fill staffing gaps during peak seasons, manage unexpected absences, and maintain quality care for patients with on-demand staff.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <Heart className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">For Clinics</h3>
            <p className="text-muted-foreground">
              Access specialized healthcare professionals for your clinic's specific needs without the overhead of full-time hiring.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">For Home Care</h3>
            <p className="text-muted-foreground">
              Connect with qualified caregivers, nurses, and other healthcare professionals for in-home patient care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProviderCTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl p-6 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Healthcare Staffing?</h2>
            <p className="text-xl text-muted-foreground">
              Join moonlighting.ph today and experience a new way to connect with qualified healthcare professionals.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold text-lg">
              Book a Demo
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ClientHero />
      <ProviderFeatures />
      <ProviderCTA />
    </div>
  );
};

export default ClientLanding;
