
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAdSpyHero } from "@/components/GoogleAdSpy/GoogleAdSpyHero";
import { GoogleAdSpyStats } from "@/components/GoogleAdSpy/GoogleAdSpyStats";
import { GoogleAdSpyBenefits } from "@/components/GoogleAdSpy/GoogleAdSpyBenefits";
import { GoogleAdSpyLibrary } from "@/components/GoogleAdSpy/GoogleAdSpyLibrary";
import { GoogleAdSpyBlogs } from "@/components/GoogleAdSpy/GoogleAdSpyBlogs";
import { GoogleAdSpyTools } from "@/components/GoogleAdSpy/GoogleAdSpyTools";
import { GoogleAdSpyStrategy } from "@/components/GoogleAdSpy/GoogleAdSpyStrategy";
import { GoogleAdSpyGettingStarted } from "@/components/GoogleAdSpy/GoogleAdSpyGettingStarted";
import { GoogleAdSpyTestimonials } from "@/components/GoogleAdSpy/GoogleAdSpyTestimonials";
import { GoogleAdSpyCTA } from "@/components/GoogleAdSpy/GoogleAdSpyCTA";
import { GoogleAdSpyFAQ } from "@/components/GoogleAdSpy/GoogleAdSpyFAQ";
import { GoogleAdSpySEOContent } from "@/components/GoogleAdSpy/GoogleAdSpySEOContent";
import { useSEO } from "@/hooks/useSEO";
import { pageConfigs } from "@/config/seoConfig";

const GoogleAdSpy = () => {
  useSEO(pageConfigs.googleAdSpy);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <GoogleAdSpyHero />
        <GoogleAdSpyStats />
        <GoogleAdSpyBenefits />
        <GoogleAdSpyLibrary />
        <GoogleAdSpyBlogs />
        <GoogleAdSpyTools />
        <GoogleAdSpyStrategy />
        <GoogleAdSpyGettingStarted />
        <GoogleAdSpyTestimonials />
        <GoogleAdSpyCTA />
        <GoogleAdSpyFAQ />
        <GoogleAdSpySEOContent />
      </main>
      <Footer />
    </div>
  );
};

export default GoogleAdSpy;
