
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, Star, DollarSign, Moon, Sun } from 'lucide-react';

// Set dark mode by default
const setDarkMode = () => {
  document.documentElement.classList.add('dark');
  localStorage.theme = 'dark';
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "As a hospital administrator, finding qualified staff during peak seasons was always challenging. Moonlighting.ph has transformed our staffing process with verified professionals available on short notice.",
      author: "Dr. Maria Santos",
      position: "Chief of Medical Services, Metro General Hospital",
      rating: 5
    },
    {
      content: "The verification process is thorough and gives me confidence that I'm hiring qualified professionals. The escrow payment system ensures trust on both sides.",
      author: "James Rodriguez",
      position: "Clinic Manager, Rodriguez Family Clinic",
      rating: 5
    },
    {
      content: "As a nurse, Moonlighting.ph has allowed me to supplement my income while maintaining a flexible schedule. The platform is intuitive and connecting with clients is seamless.",
      author: "Nurse Anna Lim",
      position: "Registered Nurse, Freelance Professional",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="section-container bg-accent/30">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Star className="h-4 w-4 mr-2" />
          <span>Client Testimonials</span>
        </div>
        <h2 className="section-title">What Our Users Say</h2>
        <p className="section-subtitle">
          Join hundreds of satisfied healthcare facilities and professionals already using our platform
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-card rounded-xl p-6 md:p-8 shadow-lg card-hover animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-400 dark:text-gray-600" />
              ))}
            </div>
            <p className="text-base sm:text-lg mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section id="cta" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      </div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl p-6 md:p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Healthcare Staffing?</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Join moonlighting.ph today and experience a new way to connect healthcare professionals with the facilities and patients who need them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full px-6 py-5 sm:px-8 sm:py-6 bg-primary hover:bg-primary/90 text-white font-semibold text-base sm:text-lg">
                  Find a Professional
                </Button>
                <Button variant="outline" className="rounded-full px-6 py-5 sm:px-8 sm:py-6 font-semibold text-base sm:text-lg">
                  Join as a Professional
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-accent rounded-lg p-4 text-center">
                <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                <h3 className="text-sm md:text-base font-semibold">Secure Payments</h3>
              </div>
              <div className="bg-accent rounded-lg p-4 text-center">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                <h3 className="text-sm md:text-base font-semibold">Verified Professionals</h3>
              </div>
              <div className="bg-accent rounded-lg p-4 text-center">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                <h3 className="text-sm md:text-base font-semibold">Diverse Specialists</h3>
              </div>
              <div className="bg-accent rounded-lg p-4 text-center">
                <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                <h3 className="text-sm md:text-base font-semibold">Quality Care</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-card pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-display font-bold">moonlighting.ph</span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Connecting healthcare professionals with those who need them.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">For Hospitals</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">For Clinics</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">For Households</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">For Healthcare Professionals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul