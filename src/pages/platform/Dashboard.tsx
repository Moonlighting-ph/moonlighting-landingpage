
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleUser, Bell, MessageSquare, Hospital, CalendarCheck, Briefcase, CreditCard, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const navigate = useNavigate();
  const userType = 'professional'; // This would be determined by authentication, either 'professional' or 'provider'

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 bg-background z-40 border-b border-border md:hidden">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <span className="text-xl font-semibold ml-2">Moonlighting.ph</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate('/platform/messages')}>
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate('/platform/profile')}>
              <CircleUser className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex md:w-64 flex-col border-r border-border bg-card fixed inset-y-0 z-50">
        <div className="flex items-center h-16 px-6 border-b border-border">
          <span className="text-xl font-semibold">Moonlighting.ph</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-4 py-4">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/platform')}>
                {userType === 'professional' ? (
                  <Briefcase className="mr-3 h-5 w-5" />
                ) : (
                  <Hospital className="mr-3 h-5 w-5" />
                )}
                Dashboard
              </Button>
              
              {userType === 'professional' ? (
                <>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/platform/jobs')}>
                    <Briefcase className="mr-3 h-5 w-5" />
                    Browse Jobs
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/platform/applications')}>
                    <CalendarCheck className="mr-3 h-5 w-5" />
                    My Applications
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/platform/post-job')}>
                    <Briefcase className="mr-3 h-5 w-5" />
                    Post a Job
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/platform/manage-jobs')}>
                    <CalendarCheck className="mr-3 h-5 w-5" />
                    Manage Jobs
                  </Button>
                </>
              )}
              
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/platform/messages')}>
                <MessageSquare className="mr-3 h-5 w-5" />
                Messages
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/platform/payments')}>
                <CreditCard className="mr-3 h-5 w-5" />
                Payments
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/platform/settings')}>
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Button>
            </div>
          </nav>
          <div className="px-4 py-4 border-t border-border">
            <Button variant="ghost" className="w-full justify-start text-destructive">
              <LogOut className="mr-3 h-5 w-5" />
              Sign out
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border md:hidden z-40">
        <div className="grid grid-cols-5 h-16">
          <Button variant="ghost" className="flex flex-col items-center justify-center rounded-none" onClick={() => navigate('/platform')}>
            <Briefcase className="h-5 w-5" />
            <span className="text-xs mt-1">Dashboard</span>
          </Button>
          
          {userType === 'professional' ? (
            <Button variant="ghost" className="flex flex-col items-center justify-center rounded-none" onClick={() => navigate('/platform/jobs')}>
              <Briefcase className="h-5 w-5" />
              <span className="text-xs mt-1">Jobs</span>
            </Button>
          ) : (
            <Button variant="ghost" className="flex flex-col items-center justify-center rounded-none" onClick={() => navigate('/platform/post-job')}>
              <Briefcase className="h-5 w-5" />
              <span className="text-xs mt-1">Post Job</span>
            </Button>
          )}
          
          <Button variant="ghost" className="flex flex-col items-center justify-center rounded-none" onClick={() => navigate('/platform/messages')}>
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs mt-1">Messages</span>
          </Button>
          
          <Button variant="ghost" className="flex flex-col items-center justify-center rounded-none" onClick={() => navigate('/platform/payments')}>
            <CreditCard className="h-5 w-5" />
            <span className="text-xs mt-1">Payments</span>
          </Button>
          
          <Button variant="ghost" className="flex flex-col items-center justify-center rounded-none" onClick={() => navigate('/platform/profile')}>
            <CircleUser className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-16 pb-16 md:py-0">
        <div className="container px-4 py-8">
          {/* Dashboard Content - Professional */}
          {userType === 'professional' && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, Dr. Santos</h1>
                  <p className="text-muted-foreground">Here's what's happening with your job applications.</p>
                </div>
                <Button className="w-full md:w-auto">
                  Browse Available Jobs
                </Button>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-muted-foreground font-medium mb-2">Active Applications</h3>
                  <p className="text-3xl font-bold">5</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-muted-foreground font-medium mb-2">Upcoming Shifts</h3>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-muted-foreground font-medium mb-2">This Month Earnings</h3>
                  <p className="text-3xl font-bold">₱24,500</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-muted-foreground font-medium mb-2">Rating</h3>
                  <div className="flex items-center">
                    <p className="text-3xl font-bold">4.8</p>
                    <Star className="h-5 w-5 text-yellow-500 ml-2 fill-yellow-500" />
                  </div>
                </div>
              </div>

              {/* Upcoming Shifts */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Upcoming Shifts</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          <Hospital className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">ER Nurse - Night Shift</h3>
                          <p className="text-muted-foreground text-sm">Metro Manila General Hospital</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end">
                        <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm font-medium text-green-800 dark:text-green-300">
                          Confirmed
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">Jul 24, 2023 (10:00 PM - 6:00 AM)</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-b border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          <Hospital className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">ICU Nurse - Weekend</h3>
                          <p className="text-muted-foreground text-sm">St. Luke's Medical Center</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end">
                        <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm font-medium text-green-800 dark:text-green-300">
                          Confirmed
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">Jul 29-30, 2023 (7:00 AM - 7:00 PM)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Job Posts */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Recent Job Postings</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="font-semibold">Pediatric Nurse - Day Shift</h3>
                          <span className="ml-2 text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full">Urgent</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">Makati Medical Center</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">₱900/day</span>
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">Makati City</span>
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">Immediate Start</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button className="w-full md:w-auto">Apply Now</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="font-semibold">General Practitioner - Weekend</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">Philippine General Hospital</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">₱1,200/day</span>
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">Manila</span>
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">Jul 15 - Aug 30</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button className="w-full md:w-auto">Apply Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dashboard Content - Provider */}
          {userType === 'provider' && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, Metro Manila Hospital</h1>
                  <p className="text-muted-foreground">Here's an overview of your staffing status.</p>
                </div>
                <Button className="w-full md:w-auto">
                  Post a New Job
                </Button>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-muted-foreground font-medium mb-2">Active Job Posts</h3>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-muted-foreground font-medium mb-2">Pending Applications</h3>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-muted-foreground font-medium mb-2">Upcoming Shifts</h3>
                  <p className="text-3xl font-bold">5</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-muted-foreground font-medium mb-2">Total Filled Positions</h3>
                  <p className="text-3xl font-bold">37</p>
                </div>
              </div>

              {/* Recent Applications */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Recent Applications</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=64&h=64&fit=crop" alt="Applicant" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Dr. Maria Santos</h3>
                          <p className="text-muted-foreground text-sm">Applied for: ER Physician - Night Shift</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Profile</Button>
                        <Button size="sm">Accept</Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-b border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=64&h=64&fit=crop" alt="Applicant" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Nurse Juan Dela Cruz</h3>
                          <p className="text-muted-foreground text-sm">Applied for: ICU Nurse - Weekend</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Profile</Button>
                        <Button size="sm">Accept</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Job Posts */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Active Job Posts</h2>
                  <Button variant="outline" size="sm">Manage All</Button>
                </div>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="font-semibold">ER Physician - Night Shift</h3>
                          <span className="ml-2 text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full">Urgent</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">Posted: Jul 10, 2023 • 5 applications</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">₱1,500/day</span>
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">Night Shift</span>
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">Immediate Start</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button variant="outline" className="w-full md:w-auto">View Applicants</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="font-semibold">ICU Nurse - Weekend</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">Posted: Jul 5, 2023 • 7 applications</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">₱900/day</span>
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">Weekend Only</span>
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full">Jul 15 - Aug 30</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button variant="outline" className="w-full md:w-auto">View Applicants</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
