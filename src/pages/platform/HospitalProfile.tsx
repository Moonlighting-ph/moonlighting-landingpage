
import React, { useState } from 'react';
import { 
  Building, MapPin, Phone, Mail, Globe, Edit, Upload, 
  Check, Star, Users, Shield, Award, FileText, Clock, X, Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  Card, CardContent, CardDescription, CardFooter, 
  CardHeader, CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// Sample hospital data
const hospitalData = {
  id: 'hosp1',
  name: 'Metro Manila General Hospital',
  logo: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=120&h=120&fit=crop',
  coverImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=300&fit=crop',
  description: 'Metro Manila General Hospital is a 300-bed tertiary care facility providing comprehensive healthcare services to the community since 1985. Our mission is to deliver quality, compassionate healthcare to all patients.',
  location: {
    address: '123 Health Avenue',
    city: 'Quezon City',
    province: 'Metro Manila',
    postalCode: '1100',
    country: 'Philippines',
    coordinates: {
      lat: 14.6091,
      lng: 121.0223
    }
  },
  contact: {
    phone: '+63 (2) 8123 4567',
    email: 'careers@mmgh.ph',
    website: 'https://www.mmgh.ph'
  },
  established: 1985,
  type: 'Tertiary Care',
  employeeCount: '500+',
  accreditations: ['DOH', 'PhilHealth', 'ISO 9001:2015', 'JCI'],
  ratings: {
    overall: 4.5,
    reviews: 128,
    categories: {
      workEnvironment: 4.3,
      compensation: 4.1,
      workLifeBalance: 3.9,
      management: 4.2,
      jobSecurity: 4.6
    }
  },
  departments: [
    'Emergency Medicine', 'Internal Medicine', 'Surgery', 
    'Pediatrics', 'Obstetrics & Gynecology', 'Cardiology', 
    'Neurology', 'Oncology', 'Radiology', 'Anesthesiology',
    'Intensive Care', 'Orthopedics'
  ],
  benefits: [
    'Competitive salary packages',
    'Healthcare coverage for employees and dependents',
    'Free meals during shifts',
    'Transportation allowances',
    'Housing allowances for certain positions',
    'Continuing education support',
    'Professional development opportunities',
    'Performance bonuses'
  ],
  activeJobPostings: 8,
  verified: true,
  completionStatus: 95,
  documents: {
    businessPermit: {
      name: 'business_permit_2023.pdf',
      uploadDate: '2023-01-15',
      expiryDate: '2023-12-31',
      verified: true
    },
    dohLicense: {
      name: 'doh_license_2022_2025.pdf',
      uploadDate: '2022-06-10',
      expiryDate: '2025-06-09',
      verified: true
    },
    philHealthAccreditation: {
      name: 'philhealth_accreditation.pdf',
      uploadDate: '2022-08-22',
      expiryDate: '2024-08-21',
      verified: true
    }
  }
};

const HospitalProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: hospitalData.name,
    description: hospitalData.description,
    address: hospitalData.location.address,
    city: hospitalData.location.city,
    province: hospitalData.location.province,
    postalCode: hospitalData.location.postalCode,
    phone: hospitalData.contact.phone,
    email: hospitalData.contact.email,
    website: hospitalData.contact.website,
    establishedYear: hospitalData.established,
    type: hospitalData.type,
    employeeCount: hospitalData.employeeCount
  });

  // Handle save profile
  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your hospital profile has been successfully updated.",
    });
  };

  // Handle cancel editing
  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormData({
      name: hospitalData.name,
      description: hospitalData.description,
      address: hospitalData.location.address,
      city: hospitalData.location.city,
      province: hospitalData.location.province,
      postalCode: hospitalData.location.postalCode,
      phone: hospitalData.contact.phone,
      email: hospitalData.contact.email,
      website: hospitalData.contact.website,
      establishedYear: hospitalData.established,
      type: hospitalData.type,
      employeeCount: hospitalData.employeeCount
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

  return (
    <div className="bg-background min-h-screen pt-16 md:pt-0 md:ml-64 pb-16">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Hospital Profile</h1>
            <p className="text-muted-foreground">
              Manage your hospital information and credentials
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
        {hospitalData.completionStatus < 100 && (
          <Card className="mb-6 border-primary/20 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Complete Your Profile</CardTitle>
              <CardDescription>
                Your profile is {hospitalData.completionStatus}% complete. A complete profile attracts more qualified professionals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${hospitalData.completionStatus}%` }}
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
              src={hospitalData.coverImage}
              alt={hospitalData.name}
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
              <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-background bg-white shadow-md relative">
                <img 
                  src={hospitalData.logo}
                  alt={hospitalData.name}
                  className="w-full h-full object-cover"
                />
                {isEditing && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Button variant="outline" size="sm" className="bg-background/80">
                      <Upload className="h-3 w-3 mr-1" />
                      Logo
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
                    placeholder="Hospital Name"
                  />
                ) : (
                  <div className="flex items-center flex-wrap gap-2 mb-1">
                    <h1 className="text-2xl font-bold">{hospitalData.name}</h1>
                    {hospitalData.verified && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border-green-200 dark:border-green-800">
                        <Check className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                )}
                <div className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    {isEditing ? (
                      <Select 
                        value={formData.type}
                        onValueChange={(value) => setFormData({...formData, type: value})}
                      >
                        <SelectTrigger className="h-8 border-0 bg-transparent hover:bg-accent focus:ring-0">
                          <SelectValue placeholder="Hospital Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Primary Care">Primary Care</SelectItem>
                          <SelectItem value="Secondary Care">Secondary Care</SelectItem>
                          <SelectItem value="Tertiary Care">Tertiary Care</SelectItem>
                          <SelectItem value="Specialty">Specialty</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <span>{hospitalData.type}</span>
                    )}
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {isEditing ? (
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="h-8 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="City"
                      />
                    ) : (
                      <span>{hospitalData.location.city}, {hospitalData.location.province}</span>
                    )}
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {isEditing ? (
                      <Input
                        name="establishedYear"
                        value={formData.establishedYear}
                        onChange={handleInputChange}
                        className="h-8 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Established Year"
                      />
                    ) : (
                      <span>Est. {hospitalData.established}</span>
                    )}
                  </div>
                </div>
              </div>
              {!isEditing && (
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-center bg-primary/5 rounded-lg p-3">
                    <span className="text-2xl font-bold">{hospitalData.ratings.overall}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-muted-foreground ml-1">({hospitalData.ratings.reviews})</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-primary/5 rounded-lg p-3">
                    <span className="text-2xl font-bold">{hospitalData.activeJobPostings}</span>
                    <span className="text-xs text-muted-foreground">Active Jobs</span>
                  </div>
                </div>
              )}
            </div>

            {isEditing ? (
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-4 h-24"
                placeholder="Hospital description..."
              />
            ) : (
              <p className="text-muted-foreground mt-4 max-w-3xl">
                {hospitalData.description}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  {isEditing ? (
                    <div className="space-y-2 mt-1">
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="h-8"
                        placeholder="Street Address"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          name="province"
                          value={formData.province}
                          onChange={handleInputChange}
                          className="h-8"
                          placeholder="Province"
                        />
                        <Input
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="h-8"
                          placeholder="Postal Code"
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {hospitalData.location.address}, {hospitalData.location.city}, {hospitalData.location.province}, {hospitalData.location.postalCode}
                    </p>
                  )}
                </div>
              </div>
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
                      <p className="text-sm text-muted-foreground">{hospitalData.contact.phone}</p>
                      <p className="text-sm text-muted-foreground">{hospitalData.contact.email}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-start">
                {isEditing ? (
                  <div>
                    <p className="text-sm font-medium">Website</p>
                    <Input
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="h-8 mt-1"
                      placeholder="Website URL"
                    />
                  </div>
                ) : (
                  <>
                    <Globe className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Website</p>
                      <a 
                        href={hospitalData.contact.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {hospitalData.contact.website.replace('https://', '')}
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="info" className="mt-6">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-6">
            <TabsTrigger value="info">Hospital Info</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="jobs">Job Posts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="info" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Departments</CardTitle>
                  <CardDescription>Specialties and departments available at your hospital</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {hospitalData.departments.map((dept, index) => (
                      <Badge key={index} variant="secondary">
                        {dept}
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Accreditations</CardTitle>
                  <CardDescription>Certifications and affiliations of your hospital</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {hospitalData.accreditations.map((accr, index) => (
                      <Badge key={index} variant="secondary">
                        {accr}
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Employee Benefits</CardTitle>
                  <CardDescription>Benefits offered to healthcare professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {hospitalData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  {isEditing && (
                    <Button variant="outline" size="sm" className="mt-4">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Benefit
                    </Button>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ratings & Reviews</CardTitle>
                  <CardDescription>How healthcare professionals rate your hospital</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex flex-col items-center bg-primary/5 rounded-lg p-3">
                      <span className="text-2xl font-bold">{hospitalData.ratings.overall}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-muted-foreground ml-1">Overall</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Work Environment</span>
                            <span>{hospitalData.ratings.categories.workEnvironment}</span>
                          </div>
                          <div className="h-1.5 bg-primary/10 rounded-full">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${(hospitalData.ratings.categories.workEnvironment / 5) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Compensation</span>
                            <span>{hospitalData.ratings.categories.compensation}</span>
                          </div>
                          <div className="h-1.5 bg-primary/10 rounded-full">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${(hospitalData.ratings.categories.compensation / 5) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Work-Life Balance</span>
                            <span>{hospitalData.ratings.categories.workLifeBalance}</span>
                          </div>
                          <div className="h-1.5 bg-primary/10 rounded-full">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${(hospitalData.ratings.categories.workLifeBalance / 5) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button variant="outline" size="sm">
                      View All {hospitalData.ratings.reviews} Reviews
                    </Button>
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
                  Upload necessary documentation to verify your hospital
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Business Permit */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Business Permit</p>
                      {hospitalData.documents.businessPermit.verified ? (
                        <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                          <Check className="h-4 w-4 mr-1" />
                          <span>Verified • Expires {hospitalData.documents.businessPermit.expiryDate}</span>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Upload your business permit issued by DTI/SEC
                        </p>
                      )}
                    </div>
                  </div>
                  {hospitalData.documents.businessPermit.verified ? (
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
                
                {/* DOH License */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">DOH License</p>
                      {hospitalData.documents.dohLicense.verified ? (
                        <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                          <Check className="h-4 w-4 mr-1" />
                          <span>Verified • Expires {hospitalData.documents.dohLicense.expiryDate}</span>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Upload your Department of Health license
                        </p>
                      )}
                    </div>
                  </div>
                  {hospitalData.documents.dohLicense.verified ? (
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
                
                {/* PhilHealth Accreditation */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">PhilHealth Accreditation</p>
                      {hospitalData.documents.philHealthAccreditation.verified ? (
                        <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                          <Check className="h-4 w-4 mr-1" />
                          <span>Verified • Expires {hospitalData.documents.philHealthAccreditation.expiryDate}</span>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Upload your PhilHealth accreditation certificate
                        </p>
                      )}
                    </div>
                  </div>
                  {hospitalData.documents.philHealthAccreditation.verified ? (
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
                  All documents are securely stored and will only be used for verification purposes.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="jobs" className="space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <h2 className="text-xl font-semibold">Active Job Postings</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create New Job Post
              </Button>
            </div>
            
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>
                          {index === 0 ? "Emergency Room Nurse - Night Shift" : 
                           index === 1 ? "General Practitioner - Weekend" : 
                           "ICU Nurse - COVID Unit"}
                        </CardTitle>
                        <CardDescription>
                          Posted {index === 0 ? "2 days ago" : index === 1 ? "1 week ago" : "3 days ago"} • 
                          {index === 0 ? " 8 applications" : index === 1 ? " 3 applications" : " 12 applications"}
                        </CardDescription>
                      </div>
                      {index === 0 && (
                        <Badge variant="destructive">Urgent</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">
                          {index === 0 ? "Quezon City, Metro Manila" : 
                           index === 1 ? "Taguig, Metro Manila" : 
                           "Manila"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">
                          {index === 0 ? "Night Shift" : 
                           index === 1 ? "Weekend Only" : 
                           "Rotating Shifts"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">
                          {index === 0 ? "₱900/day + incentives" : 
                           index === 1 ? "₱1,200/day" : 
                           "₱1,000/day + hazard pay"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <Button variant="outline" size="sm">
                      View Applicants
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <X className="h-4 w-4 mr-2" />
                        Close
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-4">
              <Button variant="outline">
                View All Job Posts
              </Button>
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
                    <p className="font-medium">New Applications</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when a professional applies to your job posts
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Application Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Notifications when an applicant updates their status
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Messages</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when you receive new messages
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing & Updates</p>
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
                      Make your hospital profile visible to all professionals
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Display Reviews</p>
                    <p className="text-sm text-muted-foreground">
                      Show professional reviews on your profile
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

export default HospitalProfile;
