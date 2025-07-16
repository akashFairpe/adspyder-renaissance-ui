import { useSEO } from '@/hooks/useSEO';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer';
import { SemrushHero } from '@/components/AlternativeToSemrush/SemrushHero';
import { SemrushComparisonTable } from '@/components/AlternativeToSemrush/SemrushComparisonTable';
import { SemrushWhyChoose } from '@/components/AlternativeToSemrush/SemrushWhyChoose';
import { SemrushUseCases } from '@/components/AlternativeToSemrush/SemrushUseCases';
import { SemrushTestimonials } from '@/components/AlternativeToSemrush/SemrushTestimonials';
import { SemrushFAQ } from '@/components/AlternativeToSemrush/SemrushFAQ';
import { SemrushFinalCTA } from '@/components/AlternativeToSemrush/SemrushFinalCTA';

const AlternativeToSemrush = () => {
  useSEO({
    title: "AdSpyder: The Best SEMrush Alternative | Ad Intelligence Platform",
    description: "Outgrown SEMrush? Upgrade to AdSpyder. Get powerful ad intelligence, global visibility, and actionable insights without the cost or complexity.",
    keywords: "SEMrush alternative, ad intelligence, competitor analysis, digital marketing tools, ad monitoring, SEO tools alternative",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <SemrushHero />
        <SemrushComparisonTable />
        <SemrushWhyChoose />
        <SemrushUseCases />
        <SemrushTestimonials />
        <SemrushFAQ />
        <SemrushFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default AlternativeToSemrush;