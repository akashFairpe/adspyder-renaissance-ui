
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AdLibrary from "./pages/AdLibrary";
import AdAnalytics from "./pages/AdAnalytics";
import GoogleAdSpy from "./pages/GoogleAdSpy";
import FacebookAdSpy from "./pages/FacebookAdSpy";
import TestPage from "./pages/TestPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import VsPowerAdSpy from "./pages/VsPowerAdSpy";
import VsBigSpy from "./pages/VsBigSpy";
import VsAdSpy from "./pages/VsAdSpy";
import VsAdplexity from "./pages/VsAdplexity";
import NotFound from "./pages/NotFound";

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
          <Route path="/ad-library" element={<AdLibrary />} />
          <Route path="/ad-analytics" element={<AdAnalytics />} />
          <Route path="/google-ad-spy" element={<GoogleAdSpy />} />
          <Route path="/facebook-ad-spy" element={<FacebookAdSpy />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/vs-poweradspy" element={<VsPowerAdSpy />} />
          <Route path="/vs-bigspy" element={<VsBigSpy />} />
          <Route path="/vs-adspy" element={<VsAdSpy />} />
          <Route path="/vs-adplexity" element={<VsAdplexity />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
