
import { AdLibraryHero } from "@/components/AdLibrary/AdLibraryHero";
import { AdLibraryStats } from "@/components/AdLibrary/AdLibraryStats";
import { AdLibraryPlatforms } from "@/components/AdLibrary/AdLibraryPlatforms";
import { AdLibraryBenefits } from "@/components/AdLibrary/AdLibraryBenefits";
import { AdLibraryFeatures } from "@/components/AdLibrary/AdLibraryFeatures";
import { AdLibraryTestimonials } from "@/components/AdLibrary/AdLibraryTestimonials";
import { AdLibraryCTA } from "@/components/AdLibrary/AdLibraryCTA";
import { AdLibraryFAQ } from "@/components/AdLibrary/AdLibraryFAQ";
import { AdLibraryFinalCTA } from "@/components/AdLibrary/AdLibraryFinalCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AdLibrary = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AdLibraryHero />
        <AdLibraryStats />
        <AdLibraryPlatforms />
        <AdLibraryBenefits />
        <AdLibraryFeatures />
        <AdLibraryTestimonials />
        <AdLibraryCTA />
        <AdLibraryFAQ />
        <AdLibraryFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AdLibrary;
