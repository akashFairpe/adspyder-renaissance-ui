
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { PageLoader } from "./components/PageLoader";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const AdLibrary = lazy(() => import("./pages/AdLibrary"));
const AdAnalytics = lazy(() => import("./pages/AdAnalytics"));
const GoogleAdSpy = lazy(() => import("./pages/GoogleAdSpy"));
const FacebookAdSpy = lazy(() => import("./pages/FacebookAdSpy"));
const TestPage = lazy(() => import("./pages/TestPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const VsPowerAdSpy = lazy(() => import("./pages/VsPowerAdSpy"));
const VsBigSpy = lazy(() => import("./pages/VsBigSpy"));
const VsAdSpy = lazy(() => import("./pages/VsAdSpy"));
const VsAdplexity = lazy(() => import("./pages/VsAdplexity"));
const AlternativeToSimilarWeb = lazy(() => import("./pages/AlternativeToSimilarWeb"));
const AlternativeToSemrush = lazy(() => import("./pages/AlternativeToSemrush"));
const Community = lazy(() => import("./pages/Community"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const BrowserExtension = lazy(() => import("./pages/BrowserExtension"));
const DomainPaidAdAnalysis = lazy(() => import("./pages/DomainPaidAdAnalysis"));
const Pricing = lazy(() => import("./pages/Pricing"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/alternate-to-similarweb" element={<AlternativeToSimilarWeb />} />
            <Route path="/alternate-to-semrush" element={<AlternativeToSemrush />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/browser-extension" element={<BrowserExtension />} />
            <Route path="/domain-paid-ad-analysis" element={<DomainPaidAdAnalysis />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
