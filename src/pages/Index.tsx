import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Star, DollarSign, Briefcase, Stethoscope, GraduationCap, Heart, ArrowRight, CheckCircle, Award, MessageCircle, HeartPulse, Users, ClipboardCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedTextCycler from '@/components/AnimatedTextCycler';
import ServiceHighlights from '@/components/ServiceHighlights';
import JobListingsPreview from '@/components/JobListingsPreview';
import PageTransition from '@/components/PageTransition';
import { Moon } from '@/components/ui/Moon';

const HeroSection = () => {
  // Text options for the animated cycler
  const professions = [
    "Nurse", "Doctor", "Pediatrician", "Surgeon",
    "Anesthesiologist", "Cardiologist", "Radiologist", "Therapist"
  ];
  
  const locations = [
    "Manila", "Cebu", "Davao", "Quezon City",
    "Makati", "Taguig", "Pasig", "Baguio"
  ];
  
  const schedules = [
    "Weekend", "Night Shift", "Day Shift", "On-Call",
    "Flexible", "Part-Time", "Full-Time", "24-Hour"
  ];

  return (
    <section className="relative min-h-screen pt-20 pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-float delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 md:pt-20 flex flex-col items-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-in">
          <Stethoscope className="h-4 w-4 mr-2" />
          <span>For Healthcare Professionals</span>
        </div>
        
        <div className="text-center max-w-4xl mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <AnimatedTextCycler 
            textGroups={[professions, locations, schedules]}
            staticTexts={["I'm a", "in", "looking for", "work"]}
            className="mb-6 text-center"
          />
          
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mt-6">
            Connect with hospitals, clinics, and care facilities that need your expertise. 
            Take control of your schedule and supplement your income.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg group">
            <span>Join Waitlist</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Link to="/client">
            <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg group">
              <span>I'm a medical provider</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <Clock className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-muted-foreground">Choose when and where you work based on your availability</p>
          </div>

          <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <DollarSign className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Competitive Pay</h3>
            <p className="text-muted-foreground">Earn competitive rates for your expertise and qualifications</p>
          </div>

          <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <Shield className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Secure Process</h3>
            <p className="text-muted-foreground">Our platform ensures you get paid promptly for your services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/30 relative">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Healthcare Professionals</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of healthcare professionals who use our platform to find flexible work opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card dark:bg-gray-800/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-card/80 dark:hover:bg-gray-800 backdrop-blur-sm group">
            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Varied Opportunities</h3>
            <p className="text-muted-foreground">
              Access a wide range of opportunities across different healthcare settings
            </p>
            <div className="w-full h-32 mt-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400" 
                alt="Medical professionals in various settings" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div className="bg-card dark:bg-gray-800/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-card/80 dark:hover:bg-gray-800 backdrop-blur-sm group">
            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Growth</h3>
            <p className="text-muted-foreground">
              Expand your skills by working in diverse healthcare environments
            </p>
            <div className="w-full h-32 mt-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=400" 
                alt="Healthcare professional learning" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div className="bg-card dark:bg-gray-800/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-card/80 dark:hover:bg-gray-800 backdrop-blur-sm group">
            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Financial Freedom</h3>
            <p className="text-muted-foreground">
              Supplement your income with additional work opportunities
            </p>
            <div className="w-full h-32 mt-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=400" 
                alt="Financial growth concept" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Create Your Profile",
      description: "Sign up, verify your credentials, and create your professional profile"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Find Opportunities",
      description: "Browse and apply for shifts that match your schedule and qualifications"
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Work & Get Paid",
      description: "Complete your shifts and receive payment securely through our platform"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Clock className="h-4 w-4 mr-2" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Our streamlined process makes it easy to find healthcare work opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute h-0.5 bg-primary/30 top-24 left-[20%] right-[20%] z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative z-10 flex flex-col items-center text-center bg-card dark:bg-gray-800/90 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              
              {/* New step number styling */}
              <div className="absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold shadow-md group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const servicesForProfessionals = [
  {
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    title: "Wide Range of Specialties",
    description: "Opportunities for nurses, doctors, therapists, and more"
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Flexible Schedules",
    description: "Choose shifts that fit your lifestyle and availability"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Diverse Work Environments",
    description: "Work in hospitals, clinics, home care, and more"
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: "Credential Verification",
    description: "We ensure your credentials meet industry standards"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Competitive Pay",
    description: "Earn competitive rates for your expertise"
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Quick Placement",
    description: "Get matched with opportunities quickly and efficiently"
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Direct Communication",
    description: "Communicate directly with healthcare facilities"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Recognition & Rewards",
    description: "Get recognized for your hard work and dedication"
  }
];

const sampleJobs = [
  {
    id: "job1",
    title: "Registered Nurse - ICU",
    company: "St. Luke's Medical Center",
    logo: "https://images.unsplash.com/photo-1628771418338-e379984939a5?q=80&w=200&h=200&fit=crop",
    location: "Quezon City",
    type: "Full-time",
    description: "Provide critical care to patients in the ICU. Monitor vital signs, administer medications, and collaborate with the healthcare team."
  },
  {
    id: "job2",
    title: "Physical Therapist",
    company: "The Medical City",
    logo: "https://images.unsplash.com/photo-1532938314638-5b94ac63b7ca?q=80&w=200&h=200&fit=crop",
    location: "Pasig City",
    type: "Part-time",
    description: "Evaluate patients' physical condition, develop treatment plans, and assist patients in regaining mobility and function."
  },
  {
    id: "job3",
    title: "Emergency Room Physician",
    company: "Makati Medical Center",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c522?q=80&w=200&h=200&fit=crop",
    location: "Makati City",
    type: "Per Diem",
    description: "Provide immediate medical care to patients in the emergency room. Diagnose illnesses, perform procedures, and stabilize patients."
  },
  {
    id: "job4",
    title: "Medical Technologist",
    company: "Asian Hospital and Medical Center",
    logo: "https://images.unsplash.com/photo-1532187863489-09f919b2513c?q=80&w=200&h=200&fit=crop",
    location: "Muntinlupa City",
    type: "Full-time",
    description: "Perform laboratory tests and analyses to assist in the diagnosis, treatment, and prevention of diseases."
  }
];

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/0 z-0"></div>
      <div className="absolute right-0 top-1/4 w-1/3 h-2/3 bg-[url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600')] bg-cover bg-center rounded-l-3xl opacity-20 blur-sm"></div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-card dark:bg-gray-800/90 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Philippine Hospitals Need Your Skills</h2>
            <p className="text-xl text-muted-foreground">
              Help solve critical staffing shortages while supplementing your income. Moonlighting.ph seamlessly connects you with medical providers across the country.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg group">
              <span>Join Waitlist</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link to="/client">
              <Button variant="outline" className="rounded-full px-8 py-6 font-semibold text-lg group">
                <span>I'm a medical provider</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "As a nurse, Moonlighting.ph has allowed me to supplement my income while maintaining a flexible schedule. The platform is intuitive and connecting with clients is seamless.",
      author: "Nurse Anna Lim",
      position: "Registered Nurse",
      rating: 5,
      image: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=200"
    },
    {
      content: "I've been able to work in different healthcare settings through Moonlighting.ph, which has greatly expanded my clinical experience. The verification process was smooth, and finding opportunities is easy.",
      author: "Dr. Marco Reyes",
      position: "General Practitioner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200"
    },
    {
      content: "After my regular shifts at the hospital, I wanted to earn extra income. This platform has made it possible to find short-term assignments that fit perfectly around my schedule.",
      author: "John Santos",
      position: "Emergency Room Nurse",
      rating: 4,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4 mr-2" />
            <span>Professional Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Healthcare Professionals Say</h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of healthcare professionals already using our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card dark:bg-gray-800/90 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20 group-hover:border-primary transition-colors">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="h-5 w-5 text-muted-foreground opacity-30" />
                ))}
              </div>
              <p className="text-base sm:text-lg mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background py-12 md:py-16 border-t">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="relative p-1">
                <div className="absolute inset-0 rounded-full bg-primary opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <Moon className="h-8 w-8 text-primary relative z-10" />
              </div>
              <span className="font-display font-bold text-lg sm:text-xl">moonlighting.ph</span>
            </Link>
            <p className="text-muted-foreground">
              Connecting healthcare professionals with flexible work opportunities in the Philippines.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="text-muted-foreground">
              <li className="mb-2"><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li className="mb-2"><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li className="mb-2"><a href="#jobs" className="hover:text-primary transition-colors">Job Listings</a></li>
              <li><Link to="/client" className="hover:text-primary transition-colors">For Medical Providers</Link></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <p className="text-muted-foreground">
              Email: <a href="mailto:info@moonlighting.ph" className="hover:text-primary transition-colors">info@moonlighting.ph</a>
            </p>
            <p className="text-muted-foreground">
              Phone: <a href="tel:+639123456789" className="hover:text-primary transition-colors">+63 912 345 6789</a>
            </p>
            <p className="text-muted-foreground">
              Address: 123 Main Street, Metro Manila, Philippines
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Moonlighting.ph. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageTransition />
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ServiceHighlights 
        title="Services for Healthcare Professionals" 
        subtitle="We help you find moonlighting opportunities that match your skills and schedule"
        services={servicesForProfessionals}
      />
      <HowItWorksSection />
      <JobListingsPreview
        title="Recent Job Opportunities"
        subtitle="Browse through the latest healthcare positions available on our platform"
        listings={sampleJobs}
        viewAllLink="#jobs"
      />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
