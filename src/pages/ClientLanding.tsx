
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, Star, DollarSign } from 'lucide-react';

const ClientHero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Qualified Healthcare Professionals
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access a network of verified healthcare professionals for your facility or home care needs. Get matched with the right professionals quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold text-lg">
                Post a Job
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg">
                Browse Professionals
              </Button>
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
                <Users className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Quick Matching</h3>
                <p className="text-muted-foreground">Find the right professional within hours, not days.</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-accent p-6 rounded-xl">
                <DollarSign className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
                <p className="text-muted-foreground">Transparent pricing with no hidden fees.</p>
              </div>
              <div className="bg-accent p-6 rounded-xl">
                <Heart className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Quality Care</h3>
                <p className="text-muted-foreground">Consistently high standards of healthcare service.</p>
              </div>
            </div>
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
    </div>
  );
};

export default ClientLanding;
