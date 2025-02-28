
import React from 'react';
import { 
  Building, 
  Briefcase, 
  Clock, 
  Calendar, 
  DollarSign, 
  Star, 
  Users,
  TrendingUp,
  ChevronRight,
  BookOpen,
  Check,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  // Sample data for dashboard
  const stats = {
    applications: 5,
    interviews: 2,
    saved: 10,
    jobsCompleted: 37,
    earnings: {
      thisMonth: '₱36,500',
      total: '₱345,000',
    },
    upcomingShift: {
      title: 'ER Nurse - Night Shift',
      hospital: 'Metro Manila General Hospital',
      date: 'Aug 29, 2023',
      time: '10:00 PM - 6:00 AM'
    },
    recentJobs: [
      {
        id: 'job1',
        title: 'Emergency Room Nurse',
        hospital: 'Metro Manila General Hospital',
        location: 'Quezon City, Metro Manila',
        type: 'Full-time / Night Shift',
        salary: '₱900/day + incentives',
        deadline: 'Aug 15, 2023',
        urgent: true
      },
      {
        id: 'job2',
        title: 'ICU Nurse',
        hospital: 'St. Luke\'s Medical Center',
        location: 'Taguig, Metro Manila',
        type: 'Part-time / Weekend',
        salary: '₱1,100/day',
        deadline: 'Aug 20, 2023',
        urgent: false
      },
      {
        id: 'job3',
        title: 'General Practitioner',
        hospital: 'Philippine General Hospital',
        location: 'Manila',
        type: 'Full-time / Day Shift',
        salary: '₱1,500/day',
        deadline: 'Aug 25, 2023',
        urgent: true
      }
    ]
  };

  return (
    <div className="container px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Applications</p>
                <p className="text-2xl font-bold">{stats.applications}</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Interviews</p>
                <p className="text-2xl font-bold">{stats.interviews}</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Saved Jobs</p>
                <p className="text-2xl font-bold">{stats.saved}</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Shifts Completed</p>
                <p className="text-2xl font-bold">{stats.jobsCompleted}</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Job Opportunities</CardTitle>
              <CardDescription>
                Latest job postings that match your profile
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {stats.recentJobs.map((job) => (
                  <div 
                    key={job.id} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{job.title}</h3>
                        {job.urgent && (
                          <Badge variant="destructive" className="uppercase text-xs">Urgent</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{job.hospital}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Building className="h-3 w-3 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <DollarSign className="h-3 w-3 mr-1" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="sm:self-start shrink-0">
                      View Job
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button variant="outline" className="w-full">
                View All Jobs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile Completion</CardTitle>
              <CardDescription>
                Complete your profile to increase your chances of getting hired
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Overall Completion</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span>Basic Information</span>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300">Completed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span>Certification Upload</span>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300">Completed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span>Experience Details</span>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300">Completed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3">
                        <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span>Specialization Skills</span>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">In Progress</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3">
                        <X className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <span>Payment Information</span>
                    </div>
                    <Badge variant="outline">Not Started</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button className="w-full">
                Complete Your Profile
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Earnings</CardTitle>
              <CardDescription>
                Track your income from completed shifts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-3xl font-bold">{stats.earnings.thisMonth}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                  <p className="text-3xl font-bold">{stats.earnings.total}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Earnings History
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Shift</CardTitle>
              <CardDescription>
                Your next scheduled work shift
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-20 bg-primary/5 rounded-lg flex items-center justify-center mb-2">
                  <Calendar className="h-8 w-8 text-primary opacity-75" />
                </div>
                <div>
                  <h3 className="font-semibold">{stats.upcomingShift.title}</h3>
                  <p className="text-sm text-muted-foreground">{stats.upcomingShift.hospital}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-xs font-medium">Date</span>
                    </div>
                    <p className="text-sm">{stats.upcomingShift.date}</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-xs font-medium">Time</span>
                    </div>
                    <p className="text-sm">{stats.upcomingShift.time}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Your Ratings</CardTitle>
              <CardDescription>
                How hospitals have rated your work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-4">
                <div className="flex flex-col items-center bg-primary/5 rounded-lg p-6">
                  <span className="text-4xl font-bold">4.8</span>
                  <div className="flex items-center mt-1">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">Based on 24 reviews</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Professionalism</span>
                    <span>4.9</span>
                  </div>
                  <Progress value={98} className="h-1" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Punctuality</span>
                    <span>4.7</span>
                  </div>
                  <Progress value={94} className="h-1" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Communication</span>
                    <span>4.8</span>
                  </div>
                  <Progress value={96} className="h-1" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Expertise</span>
                    <span>4.7</span>
                  </div>
                  <Progress value={94} className="h-1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
