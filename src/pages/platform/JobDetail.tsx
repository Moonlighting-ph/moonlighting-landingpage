
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Clock, Calendar, DollarSign, Building, ArrowLeft, 
  Heart, Send, Star, Shield, Award, Users, CheckCircle, Coffee, Home, Bus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Mock data for a job
const jobData = {
  id: 'job1',
  title: 'Emergency Room Nurse',
  hospital: 'Metro Manila General Hospital',
  location: 'Quezon City, Metro Manila',
  type: 'Full-time / Night Shift',
  salary: '₱900/day + ₱8,000 incentives per cutoff',
  urgent: true,
  description: 'We are looking for an experienced ER nurse to join our team for night shifts. Responsibilities include dispensing medications, taking vitals, and attending to medical concerns.',
  fullDescription: `
    <p>Metro Manila General Hospital is seeking dedicated Emergency Room Nurses to join our team. This is an excellent opportunity for nursing professionals who thrive in fast-paced environments and are passionate about providing critical care.</p>
    
    <h3>Job Description:</h3>
    <ul>
      <li>Provide direct patient care in the emergency department</li>
      <li>Assess patients' conditions and implement appropriate nursing interventions</li>
      <li>Administer medications and treatments as prescribed</li>
      <li>Monitor and document patients' conditions</li>
      <li>Coordinate with healthcare team members to ensure quality patient care</li>
      <li>Respond to emergency situations quickly and efficiently</li>
      <li>Maintain accurate and detailed medical records</li>
      <li>Provide emotional support to patients and their families</li>
    </ul>
    
    <h3>Work Schedule:</h3>
    <p>Night shift hours are from 10:00 PM to 6:00 AM, Monday to Friday. Additional weekend shifts may be available for those interested in overtime opportunities.</p>
  `,
  requirements: [
    'PRC License (active)',
    'ACLS Certification',
    'BLS Certification',
    'Min. 2 years ER experience',
    'Ability to work night shifts',
    'Excellent communication skills',
    'Strong critical thinking and problem-solving abilities'
  ],
  benefits: [
    'Free meals during shifts',
    'Transportation allowance (₱150/day)',
    'SSS, PhilHealth, and Pag-IBIG contributions',
    'Healthcare coverage',
    'Annual paid vacation',
    'Opportunities for professional development',
    'Performance-based bonuses'
  ],
  shifts: 'Monday to Friday, 10:00 PM - 6:00 AM',
  posted: '2 days ago',
  deadline: 'August 15, 2023',
  vacancies: 3,
  applications: 12,
  rating: 4.5,
  image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=200&fit=crop',
  logo: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=80&h=80&fit=crop',
  hospitalInfo: {
    name: 'Metro Manila General Hospital',
    description: 'Metro Manila General Hospital is a 300-bed tertiary care facility providing comprehensive healthcare services to the community since 1985. Our emergency department serves over 50,000 patients annually.',
    location: 'Quezon City, Metro Manila',
    rating: 4.5,
    reviews: 128,
    employees: '500+',
    hospitalType: 'Tertiary Care',
    accreditations: ['DOH', 'PhilHealth', 'ISO 9001:2015']
  }
};

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [coverLetter, setCoverLetter] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  // Handle application submission
  const handleApply = () => {
    toast({
      title: "Application Submitted",
      description: "Your application for this position has been successfully submitted!",
    });
  };

  // Toggle job saved status
  const toggleSaveJob = () => {
    setIsSaved(!isSaved);
    if (!isSaved) {
      toast({
        title: "Job Saved",
        description: "This job has been added to your saved jobs.",
      });
    } else {
      toast({
        title: "Job Removed",
        description: "This job has been removed from your saved jobs.",
      });
    }
  };

  return (
    <div className="bg-background min-h-screen pt-16 md:pt-0 md:ml-64 pb-16">
      <div className="container px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate('/platform/jobs')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Jobs
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="h-40 bg-primary/5 relative">
                <img 
                  src={jobData.image} 
                  alt={jobData.hospital}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute bottom-4 left-6 flex items-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-4 border-background bg-white">
                    <img 
                      src={jobData.logo} 
                      alt={jobData.hospital} 
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <h1 className="text-2xl font-bold">{jobData.title}</h1>
                      {jobData.urgent && (
                        <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground">{jobData.hospital}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 mr-1">{jobData.rating}</span>
                      <span className="text-muted-foreground">({jobData.hospitalInfo.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-muted-foreground">Posted {jobData.posted} • {jobData.applications} applicants</p>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={toggleSaveJob}
                        className={isSaved ? "text-pink-500 bg-pink-50 dark:bg-pink-950/30 border-pink-200 dark:border-pink-800" : ""}
                      >
                        <Heart className={`h-4 w-4 mr-2 ${isSaved ? "fill-pink-500" : ""}`} />
                        {isSaved ? "Saved" : "Save Job"}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate('/platform/messages')}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{jobData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Job Type</p>
                      <p className="text-sm text-muted-foreground">{jobData.type}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Salary</p>
                      <p className="text-sm text-muted-foreground">{jobData.salary}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Work Schedule</p>
                      <p className="text-sm text-muted-foreground">{jobData.shifts}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Apply By</p>
                      <p className="text-sm text-muted-foreground">{jobData.deadline}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Vacancies</p>
                      <p className="text-sm text-muted-foreground">{jobData.vacancies} positions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Details Tabs */}
            <div className="bg-card rounded-lg border border-border overflow-hidden p-6">
              <Tabs defaultValue="description">
                <TabsList className="mb-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="hospital">About the Hospital</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="space-y-4">
                  <div dangerouslySetInnerHTML={{ __html: jobData.fullDescription }} />
                </TabsContent>
                
                <TabsContent value="requirements" className="space-y-4">
                  <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                  <ul className="space-y-2">
                    {jobData.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="benefits" className="space-y-4">
                  <h3 className="text-lg font-semibold mb-2">Benefits & Perks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        {index === 0 ? (
                          <Coffee className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        ) : index === 1 ? (
                          <Bus className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        ) : index === 2 ? (
                          <Shield className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        ) : index === 3 ? (
                          <Heart className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        ) : index === 4 ? (
                          <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        ) : index === 5 ? (
                          <Award className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        ) : (
                          <DollarSign className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="hospital" className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-border">
                      <img 
                        src={jobData.logo} 
                        alt={jobData.hospitalInfo.name} 
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{jobData.hospitalInfo.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 mr-1">{jobData.hospitalInfo.rating}</span>
                        <span className="text-muted-foreground">({jobData.hospitalInfo.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{jobData.hospitalInfo.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">{jobData.hospitalInfo.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Employees</p>
                        <p className="text-sm text-muted-foreground">{jobData.hospitalInfo.employees}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Type</p>
                        <p className="text-sm text-muted-foreground">{jobData.hospitalInfo.hospitalType}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Accreditations</p>
                    <div className="flex flex-wrap gap-2">
                      {jobData.hospitalInfo.accreditations.map((accr, index) => (
                        <Badge key={index} variant="secondary">
                          {accr}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Application Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Apply for this Position</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Cover Letter (Optional)</label>
                  <Textarea 
                    placeholder="Tell the employer why you're a good fit for this position..."
                    className="h-32"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                  />
                </div>
                
                <div className="bg-secondary/20 rounded-lg p-4">
                  <p className="text-sm mb-2">
                    Your profile information and credentials will be shared with {jobData.hospital}.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Make sure your profile is complete and up-to-date.
                  </p>
                </div>
                
                <Button className="w-full" onClick={handleApply}>
                  Apply Now
                </Button>
                
                <Button variant="outline" className="w-full" onClick={toggleSaveJob}>
                  <Heart className={`h-4 w-4 mr-2 ${isSaved ? "fill-pink-500" : ""}`} />
                  {isSaved ? "Remove from Saved" : "Save for Later"}
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-medium mb-2">Share this Job</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
