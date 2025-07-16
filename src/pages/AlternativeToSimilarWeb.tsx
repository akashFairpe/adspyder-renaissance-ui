import { useSEO } from '@/hooks/useSEO';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer';
import { AlternativeHero } from '@/components/Alternative/AlternativeHero';
import { ComparisonTable } from '@/components/Alternative/ComparisonTable';
import { WhyChooseAdSpyder } from '@/components/Alternative/WhyChooseAdSpyder';
import { WhoUsesAdSpyder } from '@/components/Alternative/WhoUsesAdSpyder';
import { AlternativeTestimonials } from '@/components/Alternative/AlternativeTestimonials';
import { AlternativeFAQ } from '@/components/Alternative/AlternativeFAQ';
import { FinalCTA } from '@/components/Alternative/FinalCTA';

const AlternativeToSimilarWeb = () => {
  useSEO({
    title: "AdSpyder: The Best Alternative to SimilarWeb | Ad Intelligence Platform",
    description: "Tired of SimilarWeb's pricing and complexity? Meet AdSpyder. Get powerful ad intelligence, global monitoring, and competitor insights at a fraction of the cost.",
    keywords: "SimilarWeb alternative, ad intelligence, competitor analysis, digital marketing tools, ad monitoring, website traffic analysis",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <AlternativeHero />
        <ComparisonTable />
        <WhyChooseAdSpyder />
        <WhoUsesAdSpyder />
        <AlternativeTestimonials />
        <AlternativeFAQ />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default AlternativeToSimilarWeb;