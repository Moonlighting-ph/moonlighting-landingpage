
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClientLanding from "./pages/ClientLanding";
import Dashboard from "./pages/platform/Dashboard";
import Jobs from "./pages/platform/Jobs";
import JobDetail from "./pages/platform/JobDetail";
import HospitalProfile from "./pages/platform/HospitalProfile";
import ProfessionalProfile from "./pages/platform/ProfessionalProfile";
import PlatformLayout from "./components/layouts/PlatformLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/client" element={<ClientLanding />} />
          
          {/* Platform Routes - wrapped with PlatformLayout */}
          <Route path="/platform" element={<PlatformLayout><Dashboard /></PlatformLayout>} />
          <Route path="/platform/jobs" element={<PlatformLayout><Jobs /></PlatformLayout>} />
          <Route path="/platform/job/:id" element={<PlatformLayout><JobDetail /></PlatformLayout>} />
          <Route path="/platform/hospital-profile" element={<PlatformLayout><HospitalProfile /></PlatformLayout>} />
          <Route path="/platform/professional-profile" element={<PlatformLayout><ProfessionalProfile /></PlatformLayout>} />
          
          {/* Catch-all - must be at bottom */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
