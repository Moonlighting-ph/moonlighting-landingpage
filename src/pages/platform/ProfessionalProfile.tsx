
import React, { useState } from 'react';
import { 
  User, MapPin, GraduationCap, Phone, Mail, Calendar, Star, 
  Edit, Upload, Award, Briefcase, FileText, Shield, Clock, Heart,
  FileCheck, X, Check, Plus, Stethoscope
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, CardContent, CardDescription, CardFooter, 
  CardHeader, CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

// Sample professional data
const professionalData = {
  id: 'prof1',
  name: 'Dr. Maria Santos',
  title: 'General Practitioner',
  avatar: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=120&h=120&fit=crop',
  coverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=300&fit=crop',
  bio: 'Experienced general practitioner with 8+ years of clinical experience across various healthcare settings. Passionate about providing quality patient care with a focus on preventive medicine.',
  location: {
    city: 'Quezon City',
    province: 'Metro Manila',
    country: 'Philippines'
  },
  contact: {
    phone: '+63 917 123 4567',
    email: 'maria.santos@email.com'
  },
  availability: {
    status: 'Available for shifts',
    preferences: {
      schedule: ['Weekends', 'Night shifts'],
      locations: ['Metro Manila', 'Rizal Province'],
      types: ['Full-time', 'Part-time', 'On-call']
    },
    calendar: [
      { date: '2023-07-24', available: true },
      { date: '2023-07-25', available: true },
      { date: '2023-07-26', available: false },
      { date: '2023-07-27', available: true },
      { date: '2023-07-28', available: true },
      { date: '2023-07-29', available: true },
      { date: '2023-07-30', available: true }
    ]
  },
  education: [
    {
      degree: 'Doctor of Medicine',
      institution: 'University of the Philippines Manila',
      year: '2015'
    },
    {
      degree: 'Bachelor of Science in Biology',
      institution: 'Ateneo de Manila University',
      year: '2011'
    }
  ],
  certifications: [
    {
      name: 'PRC Licensed Physician',
      issuer: 'Professional Regulation Commission',
      dateIssued: '2016',
      expiryDate: '2026',
      verified: true
    },
    {
      name: 'Basic Life Support (BLS)',
      issuer: 'Philippine Red Cross',
      dateIssued: '2022',
      expiryDate: '2024',
      verified: true
    },
    {
      name: 'Advanced Cardiac Life Support (ACLS)',
      issuer: 'American Heart Association',
      dateIssued: '2022',
      expiryDate: '2024',
      verified: true
    }
  ],
  experience: [
    {
      title: 'General Practitioner',
      company: 'Metro Manila General Hospital',
      location: 'Quezon City, Metro Manila',
      from: 'January 2020',
      to: 'Present',
      description: 'Providing outpatient care, conducting routine check-ups, and managing patient treatment plans.'
    },
    {
      title: 'Resident Physician',
      company: 'Philippine General Hospital',
      location: 'Manila',
      from: 'June 2016',
      to: 'December 2019',
      description: 'Completed residency program in Internal Medicine, managed inpatient care, and assisted in emergency department.'
    }
  ],
  specialties: [
    'General Medicine',
    'Preventive Care',
    'Family Medicine',
    'Geriatric Care',
    'Minor Procedures'
  ],
  ratings: {
    overall: 4.8,
    reviews: 24,
    categories: {
      professionalism: 4.9,
      punctuality: 4.7,
      communication: 4.8,
      expertise: 4.7
    }
  },
  completedShifts: 37,
  applications: {
    pending: 3,
    accepted: 2,
    completed: 37
  },
  earnings: {
    thisMonth: '₱36,500',
    total: '₱345,000'
  },
  verified: true,
  completionStatus: 95,
  documents: {
    prcLicense: {
      name: 'prc_license_2023.pdf',
      uploadDate: '2023-01-10',
      expiryDate: '2026-01-09',
      verified: true
    },
    blsCertification: {
      name: 'bls_certification.pdf',
      uploadDate: '2022-05-15',
      expiryDate: '2024-05-14',
      verified: true
    },
    nbi: {
      name: 'nbi_clearance_2023.pdf',
      uploadDate: '2023-03-20',
      expiryDate: '2024-03-19',
      verified: true
    }
  },
  savedJobs: 5
};

const ProfessionalProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: professionalData.name,
    title: professionalData.title,
    bio: professionalData.bio,
    city: professionalData.location.city,
    province: professionalData.location.province,
    phone: professionalData.contact.phone,
    email: professionalData.contact.email,
    availabilityStatus: professionalData.availability.status
  });

  // Handle save profile
  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your professional profile has been successfully updated.",
    });
  };

  // Handle cancel editing
  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormData({
      name: professionalData.name,
      title: professionalData.title,
      bio: professionalData.bio,
      city: professionalData.location.city,
      province: professionalData.location.province,
      phone: professionalData.contact.phone,
      email: professionalData.contact.email,
      availabilityStatus: professionalData.availability.status
    });
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Toggle specialty tags
  const toggleSpecialty = (specialty) => {
    console.log(`Toggled ${specialty}`);
    // In a real app, this would update the list of specialties
  };

  return (
    <div className="bg-background min-h-screen pt-16 md:pt-0 md:ml-64 pb-16">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Professional Profile</h1>
            <p className="text-muted-foreground">
              Manage your professional information and credentials
            </p>
          </div>
          <div className="flex items-center gap-2">
            {isEditing ? (
              <>
                <Button variant="outline" onClick={handleCancelEdit}>
                  Cancel
                </Button>
                <Button onClick={handleSaveProfile}>
                  Save Profile
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        {/* Profile Completion Card */}
        {professionalData.completionStatus < 100 && (
          <Card className="mb-6 border-primary/20 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Complete Your Profile</CardTitle>
              <CardDescription>
                Your profile is {professionalData.completionStatus}% complete. A complete profile attracts more job opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${professionalData.completionStatus}%` }}
                ></div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Complete Profile
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Profile Header */}
        <div className="bg-card rounded-lg border border-border overflow-hidden mb-6">
          <div className="h-40 md:h-60 bg-primary/5 relative">
            <img 
              src={professionalData.coverImage}
              alt="Profile cover"
              className="w-full h-full object-cover"
            />
            {isEditing && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button variant="outline" className="bg-background/80">
                  <Upload className="h-4 w-4 mr-2" />
                  Change Cover Image
                </Button>
              </div>
            )}
            <div className="absolute -bottom-16 left-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background bg-white shadow-md relative">
                <img 
                  src={professionalData.avatar}
                  alt={professionalData.name}
                  className="w-full h-full object-cover"
                />
                {isEditing && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-full">
                    <Button variant="outline" size="sm" className="bg-background/80">
                      <Upload className="h-3 w-3 mr-1" />
                      Photo
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="p-6 pt-20">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                {isEditing ? (
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="text-2xl font-bold mb-2 px-0 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Your Name"
                  />
                ) : (
                  <div className="flex items-center flex-wrap gap-2 mb-1">
                    <h1 className="text-2xl font-bold">{professionalData.name}</h1>
                    {professionalData.verified && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border-green-200 dark:border-green-800">
                        <Check className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                )}

                {isEditing ? (
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="text-lg text-muted-foreground mb-2 px-0 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Your Professional Title"
                  />
                ) : (
                  <p className="text-lg text-muted-foreground">{professionalData.title}</p>
                )}

                <div className="flex items-center flex-wrap gap-3 text-sm text-muted-foreground mt-1">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {isEditing ? (
                      <div className="flex items-center gap-1">
                        <Input
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="h-8 w-24 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="City"
                        />
                        <span>,</span>
                        <Input
                          name="province"
                          value={formData.province}
                          onChange={handleInputChange}
                          className="h-8 w-24 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Province"
                        />
                      </div>
                    ) : (
                      <span>{professionalData.location.city}, {professionalData.location.province}</span>
                    )}
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>{professionalData.completedShifts} shifts completed</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>{professionalData.ratings.overall} ({professionalData.ratings.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              {!isEditing && (
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center bg-primary/5 rounded-lg p-3">
                    <span className="text-2xl font-bold">{professionalData.applications.pending}</span>
                    <span className="text-xs text-muted-foreground">Pending</span>
                  </div>
                  <div className="flex flex-col items-center bg-green-50 dark:bg-green-950/30 rounded-lg p-3">
                    <span className="text-2xl font-bold">{professionalData.applications.accepted}</span>
                    <span className="text-xs text-muted-foreground">Accepted</span>
                  </div>
                  <div className="flex flex-col items-center bg-primary/5 rounded-lg p-3">
                    <span className="text-2xl font-bold">{professionalData.savedJobs}</span>
                    <span className="text-xs text-muted-foreground">Saved Jobs</span>
                  </div>
                </div>
              )}
            </div>

            {isEditing ? (
              <Textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="mt-4 h-24"
                placeholder="Write a short bio about yourself..."
              />
            ) : (
              <p className="text-muted-foreground mt-4 max-w-3xl">
                {professionalData.bio}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-2 mt-4">
              <Badge variant="outline" className="bg-primary/5">
                <Stethoscope className="h-3 w-3 mr-1" />
                {professionalData.specialties[0]}
              </Badge>
              {professionalData.specialties.slice(1, 4).map((specialty, index) => (
                <Badge key={index} variant="outline" className="bg-primary/5">
                  {specialty}
                </Badge>
              ))}
              {professionalData.specialties.length > 4 && (
                <Badge variant="outline" className="bg-primary/5">
                  +{professionalData.specialties.length - 4} more
                </Badge>
              )}
              {isEditing && (
                <Button variant="outline" size="sm" className="h-7">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit Skills
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Contact</p>
                  {isEditing ? (
                    <div className="space-y-2 mt-1">
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-8"
                        placeholder="Phone Number"
                      />
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-8"
                        placeholder="Email Address"
                      />
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground">{professionalData.contact.phone}</p>
                      <p className="text-sm text-muted-foreground">{professionalData.contact.email}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Availability</p>
                  {isEditing ? (
                    <Select 
                      value={formData.availabilityStatus} 
                      onValueChange={(value) => setFormData({...formData, availabilityStatus: value})}
                    >
                      <SelectTrigger className="h-8 mt-1">
                        <SelectValue placeholder="Your Availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Available for shifts">Available for shifts</SelectItem>
                        <SelectItem value="Limited availability">Limited availability</SelectItem>
                        <SelectItem value="Not available">Not available</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="flex items-center gap-1 mt-1">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        {professionalData.availability.status}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Experience</p>
                  <p className="text-sm text-muted-foreground">
                    {professionalData.experience[0].title} at {professionalData.experience[0].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="experience" className="mt-6">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Work Experience</CardTitle>
                  <CardDescription>Your previous and current work history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {professionalData.experience.map((exp, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{exp.title}</h3>
                        <div className="text-sm text-muted-foreground">{exp.from} - {exp.to}</div>
                      </div>
                      <p className="text-sm">{exp.company}, {exp.location}</p>
                      <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                    </div>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm" className="mt-2 w-full">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Experience
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Education</CardTitle>
                  <CardDescription>Your academic background and qualifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {professionalData.education.map((edu, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <div className="text-sm text-muted-foreground">{edu.year}</div>
                      </div>
                      <p className="text-sm">{edu.institution}</p>
                    </div>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm" className="mt-2 w-full">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Education
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Certifications</CardTitle>
                  <CardDescription>Your professional certifications and licenses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {professionalData.certifications.map((cert, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <h3 className="font-semibold">{cert.name}</h3>
                          {cert.verified && (
                            <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-300 border-green-200 dark:border-green-800">
                              <Check className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">Expires: {cert.expiryDate}</div>
                      </div>
                      <p className="text-sm">{cert.issuer}</p>
                    </div>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm" className="mt-2 w-full">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Certification
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Skills & Specialties */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Specialties & Skills</CardTitle>
                  <CardDescription>Areas of expertise and professional skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {professionalData.specialties.map((specialty, index) => (
                      <Badge key={index} variant={isEditing ? "outline" : "secondary"} className={isEditing ? "cursor-pointer hover:bg-primary/10" : ""} onClick={isEditing ? () => toggleSpecialty(specialty) : undefined}>
                        {specialty}
                        {isEditing && <X className="h-3 w-3 ml-1" />}
                      </Badge>
                    ))}
                    {isEditing && (
                      <Button variant="outline" size="sm" className="h-8">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Required Documents</CardTitle>
                <CardDescription>
                  Upload necessary documentation to verify your professional credentials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* PRC License */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">PRC License</p>
                      {professionalData.documents.prcLicense.verified ? (
                        <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                          <Check className="h-4 w-4 mr-1" />
                          <span>Verified • Expires {professionalData.documents.prcLicense.expiryDate}</span>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Upload your Professional Regulation Commission license
                        </p>
                      )}
                    </div>
                  </div>
                  {professionalData.documents.prcLicense.verified ? (
                    <Button variant="outline" size="sm">
                      View Document
                    </Button>
                  ) : (
                    <Button size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  )}
                </div>
                
                {/* BLS Certificate */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">BLS Certification</p>
                      {professionalData.documents.blsCertification.verified ? (
                        <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                          <Check className="h-4 w-4 mr-1" />
                          <span>Verified • Expires {professionalData.documents.blsCertification.expiryDate}</span>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Upload your Basic Life Support certification
                        </p>
                      )}
                    </div>
                  </div>
                  {professionalData.documents.blsCertification.verified ? (
                    <Button variant="outline" size="sm">
                      View Document
                    </Button>
                  ) : (
                    <Button size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  )}
                </div>
                
                {/* NBI Clearance */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">NBI Clearance</p>
                      {professionalData.documents.nbi.verified ? (
                        <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                          <Check className="h-4 w-4 mr-1" />
                          <span>Verified • Expires {professionalData.documents.nbi.expiryDate}</span>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Upload your NBI clearance certificate
                        </p>
                      )}
                    </div>
                  </div>
                  {professionalData.documents.nbi.verified ? (
                    <Button variant="outline" size="sm">
                      View Document
                    </Button>
                  ) : (
                    <Button size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  All documents are securely stored and verified to maintain the highest standard of professionals on our platform.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="applications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Job Applications</CardTitle>
                    <CardDescription>Track your job applications and their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="pending">
                      <TabsList className="w-full grid grid-cols-3 mb-4">
                        <TabsTrigger value="pending">Pending ({professionalData.applications.pending})</TabsTrigger>
                        <TabsTrigger value="accepted">Accepted ({professionalData.applications.accepted})</TabsTrigger>
                        <TabsTrigger value="completed">Completed ({professionalData.applications.completed})</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="pending" className="space-y-4">
                        {Array.from({ length: 3 }).map((_, index) => (
                          <div key={index} className="flex flex-col sm:flex-row justify-between items-start p-4 border border-border rounded-lg">
                            <div>
                              <h3 className="font-semibold">
                                {index === 0 ? "ER Nurse - Night Shift" : 
                                 index === 1 ? "General Practitioner - Weekend" : 
                                 "Medical Technologist - Day Shift"}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {index === 0 ? "Metro Manila General Hospital" : 
                                 index === 1 ? "St. Luke's Medical Center" : 
                                 "The Medical City"}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">
                                  {index === 0 ? "Night Shift" : 
                                   index === 1 ? "Weekend" : 
                                   "Day Shift"}
                                </Badge>
                                <Badge variant="outline">
                                  {index === 0 ? "₱900/day" : 
                                   index === 1 ? "₱1,200/day" : 
                                   "₱800/day"}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                              <Badge variant="secondary">Under Review</Badge>
                              <p className="text-xs text-muted-foreground mt-1">Applied {index === 0 ? "2 days ago" : index === 1 ? "1 week ago" : "3 days ago"}</p>
                              <Button variant="outline" size="sm" className="mt-2">
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="accepted" className="space-y-4">
                        {Array.from({ length: 2 }).map((_, index) => (
                          <div key={index} className="flex flex-col sm:flex-row justify-between items-start p-4 border border-border rounded-lg">
                            <div>
                              <h3 className="font-semibold">
                                {index === 0 ? "ICU Nurse - Weekend" : "Pediatrician - Night Shift"}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {index === 0 ? "St. Luke's Medical Center" : "Makati Medical Center"}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">
                                  {index === 0 ? "Weekend" : "Night Shift"}
                                </Badge>
                                <Badge variant="outline">
                                  {index === 0 ? "₱1,100/day" : "₱1,500/day"}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Accepted</Badge>
                              <p className="text-xs text-muted-foreground mt-1">Starts on {index === 0 ? "Jul 29, 2023" : "Aug 2, 2023"}</p>
                              <Button variant="outline" size="sm" className="mt-2">
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="completed">
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">You have completed {professionalData.applications.completed} shifts.</p>
                          <Button variant="outline" size="sm" className="mt-4">
                            View Shift History
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Saved Jobs</CardTitle>
                    <CardDescription>Jobs you've saved for later consideration</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.from({ length: 2 }).map((_, index) => (
                      <div key={index} className="flex flex-col sm:flex-row justify-between items-start p-4 border border-border rounded-lg">
                        <div>
                          <h3 className="font-semibold">
                            {index === 0 ? "Cardiologist - Part-time" : "Nursing Supervisor - Day Shift"}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {index === 0 ? "Philippine Heart Center" : "East Avenue Medical Center"}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">
                              {index === 0 ? "Part-time" : "Full-time"}
                            </Badge>
                            <Badge variant="outline">
                              {index === 0 ? "₱2,000/day" : "₱1,200/day"}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end mt-2 sm:mt-0 gap-2">
                          <p className="text-xs text-muted-foreground">Posted {index === 0 ? "3 days ago" : "1 week ago"}</p>
                          <div className="flex gap-2">
                            <Button size="sm">
                              Apply Now
                            </Button>
                            <Button variant="outline" size="sm" className="text-rose-500">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="text-center mt-4">
                      <Button variant="outline" size="sm">
                        View All {professionalData.savedJobs} Saved Jobs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-4 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Earnings</CardTitle>
                    <CardDescription>Track your income from completed shifts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-muted-foreground">This Month</p>
                        <p className="text-3xl font-bold">{professionalData.earnings.thisMonth}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Earnings</p>
                        <p className="text-3xl font-bold">{professionalData.earnings.total}</p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        View Earnings History
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ratings & Reviews</CardTitle>
                    <CardDescription>How hospitals have rated your work</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex flex-col items-center bg-primary/5 rounded-lg p-3">
                        <span className="text-2xl font-bold">{professionalData.ratings.overall}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs text-muted-foreground ml-1">Overall</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Professionalism</span>
                              <span>{professionalData.ratings.categories.professionalism}</span>
                            </div>
                            <div className="h-1.5 bg-primary/10 rounded-full">
                              <div 
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${(professionalData.ratings.categories.professionalism / 5) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Punctuality</span>
                              <span>{professionalData.ratings.categories.punctuality}</span>
                            </div>
                            <div className="h-1.5 bg-primary/10 rounded-full">
                              <div 
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${(professionalData.ratings.categories.punctuality / 5) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Communication</span>
                              <span>{professionalData.ratings.categories.communication}</span>
                            </div>
                            <div className="h-1.5 bg-primary/10 rounded-full">
                              <div 
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${(professionalData.ratings.categories.communication / 5) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Button variant="outline" size="sm">
                        View All {professionalData.ratings.reviews} Reviews
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Notification Settings</CardTitle>
                <CardDescription>
                  Control how you receive notifications and updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Job Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when new jobs match your profile
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Application Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified about changes to your application status
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Messages</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when you get new messages
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Platform Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about platform features and newsletters
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Job Preferences</CardTitle>
                <CardDescription>
                  Set your preferences for job recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred Locations</label>
                  <div className="flex flex-wrap gap-2">
                    {professionalData.availability.preferences.locations.map((location, index) => (
                      <Badge key={index} variant="secondary">
                        {location}
                        {isEditing && <X className="h-3 w-3 ml-1" />}
                      </Badge>
                    ))}
                    {isEditing && (
                      <Button variant="outline" size="sm" className="h-6 text-xs">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred Job Types</label>
                  <div className="flex flex-wrap gap-2">
                    {professionalData.availability.preferences.types.map((type, index) => (
                      <Badge key={index} variant="secondary">
                        {type}
                        {isEditing && <X className="h-3 w-3 ml-1" />}
                      </Badge>
                    ))}
                    {isEditing && (
                      <Button variant="outline" size="sm" className="h-6 text-xs">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred Schedules</label>
                  <div className="flex flex-wrap gap-2">
                    {professionalData.availability.preferences.schedule.map((schedule, index) => (
                      <Badge key={index} variant="secondary">
                        {schedule}
                        {isEditing && <X className="h-3 w-3 ml-1" />}
                      </Badge>
                    ))}
                    {isEditing && (
                      <Button variant="outline" size="sm" className="h-6 text-xs">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    )}
                  </div>
                </div>
                
                {isEditing ? (
                  <Button className="mt-4">
                    Save Preferences
                  </Button>
                ) : (
                  <Button variant="outline" className="mt-4">
                    Edit Preferences
                  </Button>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Account Settings</CardTitle>
                <CardDescription>
                  Manage your account and privacy settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Profile Visibility</p>
                    <p className="text-sm text-muted-foreground">
                      Make your profile visible to healthcare facilities
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Share Credentials</p>
                    <p className="text-sm text-muted-foreground">
                      Allow facilities to view your verified credentials
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="pt-4 border-t">
                  <Button variant="destructive" size="sm">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
