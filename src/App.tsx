import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BankInstituteCase from "./pages/BankInstituteCase";
import DronesAgricultureCase from "./pages/DronesAgricultureCase";
import OnlineCarBookingCase from "./pages/OnlineCarBookingCase";
import ProgressiveWebChatCase from "./pages/ProgressiveWebChatCase";
import StudentDatabaseCase from "./pages/StudentDatabaseCase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case/bank-institute" element={<BankInstituteCase />} />
          <Route path="/case/drones-agriculture" element={<DronesAgricultureCase />} />
          <Route path="/case/car-booking" element={<OnlineCarBookingCase />} />
          <Route path="/case/chat-app" element={<ProgressiveWebChatCase />} />
          <Route path="/case/student-database" element={<StudentDatabaseCase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
