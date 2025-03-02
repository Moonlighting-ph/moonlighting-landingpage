
import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

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

export default TestimonialsSection;
