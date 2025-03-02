
import React from 'react';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JobListing {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  description: string;
}

interface JobListingsPreviewProps {
  title: string;
  subtitle: string;
  listings: JobListing[];
  viewAllLink: string;
  forClients?: boolean;
}

const JobListingsPreview: React.FC<JobListingsPreviewProps> = ({ 
  title, 
  subtitle, 
  listings, 
  viewAllLink,
  forClients = false
}) => {
  return (
    <section className="py-16 md:py-24 bg-accent/30 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {listings.map((job, index) => (
            <div 
              key={job.id}
              className="apple-card rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start mb-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden mr-4 border border-primary/10 bg-background flex items-center justify-center">
                  <img 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=120"; // Fallback image
                      target.classList.add("error-img");
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="inline-flex items-center text-sm text-gray-800 dark:text-gray-300 font-medium">
                  <MapPin className="h-4 w-4 mr-1 opacity-100" />
                  {job.location}
                </span>
                <span className="inline-flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1 opacity-100" />
                  {job.type}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4 line-clamp-2">{job.description}</p>
              
              <a href={`#${job.id}`} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium group">
                Read More
                <ArrowRight className="ml-1 h-4 w-4 opacity-100 transform transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Button asChild variant="outline" className="rounded-full px-6 py-6 font-semibold text-lg group">
            <a href={viewAllLink}>
              <span>View All Listings</span>
              <ArrowRight className="ml-2 h-5 w-5 opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobListingsPreview;
