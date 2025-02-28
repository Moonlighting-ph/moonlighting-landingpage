import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Clock, Hospital, Filter, DollarSign, Star, Calendar, X, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Sample data for jobs
const jobListings = [
  {
    id: 'job1',
    title: 'Emergency Room Nurse',
    hospital: 'Metro Manila General Hospital',
    location: 'Quezon City, Metro Manila',
    type: 'Full-time / Night Shift',
    salary: '₱900/day + ₱8,000 incentives per cutoff',
    urgent: true,
    description: 'We are looking for an experienced ER nurse to join our team for night shifts. Responsibilities include dispensing medications, taking vitals, and attending to medical concerns.',
    requirements: ['PRC License', 'ACLS Certification', 'Min. 2 years ER experience'],
    benefits: ['Free meals', 'Transportation allowance', 'SSS, PhilHealth'],
    shifts: 'Monday to Friday, 10:00 PM - 6:00 AM',
    posted: '2 days ago',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=64&h=64&fit=crop'
  },
  {
    id: 'job2',
    title: 'General Practitioner',
    hospital: 'St. Luke\'s Medical Center',
    location: 'Taguig, Metro Manila',
    type: 'Part-time / Weekend',
    salary: '₱1,200/day + ₱10,000 incentives per month',
    urgent: false,
    description: 'We are seeking a general practitioner for weekend shifts at our outpatient department. Duties include patient consultations, prescribing medications, and referrals.',
    requirements: ['PRC License', 'Board Certified', 'Min. 3 years experience'],
    benefits: ['Free meals', 'SSS, PhilHealth, Pag-IBIG', '13th month pay'],
    shifts: 'Saturdays and Sundays, 8:00 AM - 5:00 PM',
    posted: '1 week ago',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=64&h=64&fit=crop'
  },
  {
    id: 'job3',
    title: 'ICU Nurse - COVID Unit',
    hospital: 'Philippine General Hospital',
    location: 'Manila',
    type: 'Contract / Rotating Shifts',
    salary: '₱1,000/day + ₱12,000 COVID hazard pay',
    urgent: true,
    description: 'Looking for ICU nurses to staff our COVID-19 unit. Responsibilities include critical patient care, ventilator management, and medication administration.',
    requirements: ['PRC License', 'ACLS Certification', 'ICU experience', 'COVID-19 vaccination'],
    benefits: ['Hazard pay', 'Free accommodation', 'Complete PPE', 'Free COVID testing'],
    shifts: 'Rotating 12-hour shifts (7AM-7PM, 7PM-7AM)',
    posted: '3 days ago',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=64&h=64&fit=crop'
  },
  {
    id: 'job4',
    title: 'Pediatrician',
    hospital: 'Makati Medical Center',
    location: 'Makati, Metro Manila',
    type: 'On-call / Reliever',
    salary: '₱1,500/day',
    urgent: false,
    description: 'Seeking pediatricians for on-call shifts at our children\'s ward. Responsibilities include patient rounds, consultations, and emergency care for pediatric patients.',
    requirements: ['PRC License', 'Board Certified in Pediatrics', 'Min. 2 years experience'],
    benefits: ['Free meals', 'Transportation allowance', 'Professional development'],
    shifts: 'On-call, 24-hour shifts as needed',
    posted: '2 weeks ago',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=64&h=64&fit=crop'
  },
  {
    id: 'job5',
    title: 'Medical Technologist',
    hospital: 'The Medical City',
    location: 'Pasig, Metro Manila',
    type: 'Full-time / Day Shift',
    salary: '₱800/day + ₱6,000 incentives per month',
    urgent: true,
    description: 'We are hiring medical technologists for our laboratory. Duties include specimen collection, analysis, and result documentation.',
    requirements: ['PRC License', 'BS Medical Technology', 'Proficient in laboratory information systems'],
    benefits: ['HMO coverage', 'Free meals', 'SSS, PhilHealth, Pag-IBIG'],
    shifts: 'Monday to Friday, 7:00 AM - 4:00 PM',
    posted: '1 day ago',
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?w=64&h=64&fit=crop'
  }
];

const Jobs = () => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [filters, setFilters] = useState({
    locations: [],
    jobTypes: [],
    salaryRange: [500, 2000],
    urgentOnly: false,
    freeAccommodation: false,
    freeTransportation: false,
    freeFood: false,
    ratings: 0
  });

  // Toggle filter panel on mobile
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      locations: [],
      jobTypes: [],
      salaryRange: [500, 2000],
      urgentOnly: false,
      freeAccommodation: false,
      freeTransportation: false,
      freeFood: false,
      ratings: 0
    });
    setSearch('');
    setSortBy('relevance');
  };

  // Toggle location filter
  const toggleLocation = (location) => {
    if (filters.locations.includes(location)) {
      setFilters({
        ...filters,
        locations: filters.locations.filter(loc => loc !== location)
      });
    } else {
      setFilters({
        ...filters,
        locations: [...filters.locations, location]
      });
    }
  };

  // Toggle job type filter
  const toggleJobType = (type) => {
    if (filters.jobTypes.includes(type)) {
      setFilters({
        ...filters,
        jobTypes: filters.jobTypes.filter(t => t !== type)
      });
    } else {
      setFilters({
        ...filters,
        jobTypes: [...filters.jobTypes, type]
      });
    }
  };

  // Sample locations and job types for the filters
  const locations = ['Metro Manila', 'Quezon City', 'Makati', 'Taguig', 'Pasig', 'Manila', 'Cebu', 'Davao'];
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'On-call', 'Night Shift', 'Day Shift', 'Weekend', 'Rotating Shifts'];

  return (
    <div className="bg-background min-h-screen pt-16 md:pt-0 md:ml-64 pb-16">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Browse Jobs</h1>
            <p className="text-muted-foreground">Find your next healthcare opportunity</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={toggleFilter}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by: Relevance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="salary_high">Salary: High to Low</SelectItem>
                <SelectItem value="salary_low">Salary: Low to High</SelectItem>
                <SelectItem value="rating">Hospital Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-xs">Reset</Button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Keywords..."
                      className="pl-9"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {locations.map((location) => (
                      <div key={location} className="flex items-center">
                        <Checkbox
                          id={`location-${location}`}
                          checked={filters.locations.includes(location)}
                          onCheckedChange={() => toggleLocation(location)}
                        />
                        <label htmlFor={`location-${location}`} className="ml-2 text-sm font-medium">
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Job Type Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Job Type</label>
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {jobTypes.map((type) => (
                      <div key={type} className="flex items-center">
                        <Checkbox
                          id={`type-${type}`}
                          checked={filters.jobTypes.includes(type)}
                          onCheckedChange={() => toggleJobType(type)}
                        />
                        <label htmlFor={`type-${type}`} className="ml-2 text-sm font-medium">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Salary Range Filter */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium">Salary Range (Daily Rate)</label>
                    <span className="text-xs text-muted-foreground">
                      ₱{filters.salaryRange[0]} - ₱{filters.salaryRange[1]}
                    </span>
                  </div>
                  <Slider
                    value={filters.salaryRange}
                    min={500}
                    max={2000}
                    step={100}
                    onValueChange={(value) => setFilters({ ...filters, salaryRange: value })}
                    className="my-6"
                  />
                </div>

                {/* Other Filters */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="urgent-only" className="text-sm font-medium">Urgent Positions Only</label>
                    <Switch
                      id="urgent-only"
                      checked={filters.urgentOnly}
                      onCheckedChange={(checked) => setFilters({ ...filters, urgentOnly: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="free-accommodation" className="text-sm font-medium">Free Accommodation</label>
                    <Switch
                      id="free-accommodation"
                      checked={filters.freeAccommodation}
                      onCheckedChange={(checked) => setFilters({ ...filters, freeAccommodation: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="free-transportation" className="text-sm font-medium">Free Transportation</label>
                    <Switch
                      id="free-transportation"
                      checked={filters.freeTransportation}
                      onCheckedChange={(checked) => setFilters({ ...filters, freeTransportation: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="free-food" className="text-sm font-medium">Free Food/Meals</label>
                    <Switch
                      id="free-food"
                      checked={filters.freeFood}
                      onCheckedChange={(checked) => setFilters({ ...filters, freeFood: checked })}
                    />
                  </div>
                </div>

                {/* Hospital Rating Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Minimum Hospital Rating</label>
                  <div className="flex items-center">
                    <Select 
                      value={filters.ratings.toString()} 
                      onValueChange={(value) => setFilters({ ...filters, ratings: parseInt(value) })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any Rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any Rating</SelectItem>
                        <SelectItem value="3">3+ Stars</SelectItem>
                        <SelectItem value="4">4+ Stars</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-background z-50 md:hidden overflow-y-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Filters</h2>
                <Button variant="ghost" size="icon" onClick={toggleFilter}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Keywords..."
                      className="pl-9"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((location) => (
                      <Badge
                        key={location}
                        variant={filters.locations.includes(location) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleLocation(location)}
                      >
                        {location}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Job Type Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Job Type</label>
                  <div className="flex flex-wrap gap-2">
                    {jobTypes.map((type) => (
                      <Badge
                        key={type}
                        variant={filters.jobTypes.includes(type) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleJobType(type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Salary Range Filter */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium">Salary Range (Daily Rate)</label>
                    <span className="text-xs text-muted-foreground">
                      ₱{filters.salaryRange[0]} - ₱{filters.salaryRange[1]}
                    </span>
                  </div>
                  <Slider
                    value={filters.salaryRange}
                    min={500}
                    max={2000}
                    step={100}
                    onValueChange={(value) => setFilters({ ...filters, salaryRange: value })}
                    className="my-6"
                  />
                </div>

                {/* Other Filters */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="mobile-urgent-only" className="text-sm font-medium">Urgent Positions Only</label>
                    <Switch
                      id="mobile-urgent-only"
                      checked={filters.urgentOnly}
                      onCheckedChange={(checked) => setFilters({ ...filters, urgentOnly: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="mobile-free-accommodation" className="text-sm font-medium">Free Accommodation</label>
                    <Switch
                      id="mobile-free-accommodation"
                      checked={filters.freeAccommodation}
                      onCheckedChange={(checked) => setFilters({ ...filters, freeAccommodation: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="mobile-free-transportation" className="text-sm font-medium">Free Transportation</label>
                    <Switch
                      id="mobile-free-transportation"
                      checked={filters.freeTransportation}
                      onCheckedChange={(checked) => setFilters({ ...filters, freeTransportation: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="mobile-free-food" className="text-sm font-medium">Free Food/Meals</label>
                    <Switch
                      id="mobile-free-food"
                      checked={filters.freeFood}
                      onCheckedChange={(checked) => setFilters({ ...filters, freeFood: checked })}
                    />
                  </div>
                </div>

                {/* Hospital Rating Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Minimum Hospital Rating</label>
                  <div className="flex items-center">
                    <Select 
                      value={filters.ratings.toString()} 
                      onValueChange={(value) => setFilters({ ...filters, ratings: parseInt(value) })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any Rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any Rating</SelectItem>
                        <SelectItem value="3">3+ Stars</SelectItem>
                        <SelectItem value="4">4+ Stars</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline" className="w-1/2" onClick={resetFilters}>
                    Reset All
                  </Button>
                  <Button className="w-1/2" onClick={toggleFilter}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Job Listings */}
          <div className="flex-1">
            <div className="bg-card p-4 rounded-lg border border-border mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for jobs, keywords, hospitals..."
                  className="pl-9"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">Showing <span className="font-medium">{jobListings.length}</span> jobs</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="mr-2">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy} className="md:hidden">
                  <SelectTrigger className="h-8 text-xs w-[120px]">
                    <SelectValue placeholder="Relevance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="salary_high">Salary: High to Low</SelectItem>
                    <SelectItem value="salary_low">Salary: Low to High</SelectItem>
                    <SelectItem value="rating">Hospital Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            {(filters.locations.length > 0 || filters.jobTypes.length > 0 || filters.urgentOnly || 
              filters.freeAccommodation || filters.freeTransportation || filters.freeFood || 
              filters.ratings > 0 || search.trim() !== '') && (
              <div className="flex flex-wrap gap-2 mb-4">
                {search.trim() !== '' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: {search}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSearch('')} />
                  </Badge>
                )}
                {filters.locations.map((location) => (
                  <Badge key={location} variant="secondary" className="flex items-center gap-1">
                    {location}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleLocation(location)} />
                  </Badge>
                ))}
                {filters.jobTypes.map((type) => (
                  <Badge key={type} variant="secondary" className="flex items-center gap-1">
                    {type}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleJobType(type)} />
                  </Badge>
                ))}
                {filters.urgentOnly && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Urgent Only
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setFilters({...filters, urgentOnly: false})} />
                  </Badge>
                )}
                {filters.freeAccommodation && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Free Accommodation
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setFilters({...filters, freeAccommodation: false})} />
                  </Badge>
                )}
                {filters.freeTransportation && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Free Transportation
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setFilters({...filters, freeTransportation: false})} />
                  </Badge>
                )}
                {filters.freeFood && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Free Meals
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setFilters({...filters, freeFood: false})} />
                  </Badge>
                )}
                {filters.ratings > 0 && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {filters.ratings}+ Stars
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setFilters({...filters, ratings: 0})} />
                  </Badge>
                )}
                <Button variant="outline" size="sm" className="h-6 text-xs" onClick={resetFilters}>
                  Clear All
                </Button>
              </div>
            )}

            {/* Job Cards */}
            <div className="space-y-4">
              {jobListings.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/platform/job/${job.id}`)}
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-border">
                        <img src={job.image} alt={job.hospital} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-semibold">{job.title}</h3>
                            {job.urgent && (
                              <span className="ml-2 text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full">Urgent</span>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Hospital className="h-3 w-3 mr-1" />
                            <span>{job.hospital}</span>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 mr-1 fill-yellow-500" />
                              <span>{job.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          Posted {job.posted}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                        {job.requirements.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{job.requirements.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex items-start md:items-center mt-4 md:mt-0">
                      <Button>Apply Now</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
