import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Analytics from "./pages/Analytics";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import RecordedEvents from "./pages/RecordedEvents";
import Course from "./pages/Course";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const PageWithNavigation = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navigation />
    {children}
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/home" element={<PageWithNavigation><Home /></PageWithNavigation>} />
            <Route path="/login" element={<PageWithNavigation><Login /></PageWithNavigation>} />
            <Route path="/courses" element={<PageWithNavigation><Courses /></PageWithNavigation>} />
            <Route path="/recorded-events" element={<PageWithNavigation><RecordedEvents /></PageWithNavigation>} />
            <Route path="/speakers" element={<PageWithNavigation><Speakers /></PageWithNavigation>} />
            <Route path="/pricing" element={<PageWithNavigation><Pricing /></PageWithNavigation>} />
            <Route path="/contact" element={<PageWithNavigation><Contact /></PageWithNavigation>} />
            <Route path="/course/:courseId" element={<PageWithNavigation><Course /></PageWithNavigation>} />
            <Route path="/dashboard" element={<PageWithNavigation><ProtectedRoute><Dashboard /></ProtectedRoute></PageWithNavigation>} />
            <Route path="/courses-management" element={<PageWithNavigation><ProtectedRoute><Courses /></ProtectedRoute></PageWithNavigation>} />
            <Route path="/students" element={<PageWithNavigation><ProtectedRoute><Students /></ProtectedRoute></PageWithNavigation>} />
            <Route path="/analytics" element={<PageWithNavigation><ProtectedRoute><Analytics /></ProtectedRoute></PageWithNavigation>} />
            <Route path="*" element={<PageWithNavigation><NotFound /></PageWithNavigation>} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;