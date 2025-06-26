
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FacebookAdSpyHero } from "@/components/FacebookAdSpy/FacebookAdSpyHero";
import { FacebookAdSpyStats } from "@/components/FacebookAdSpy/FacebookAdSpyStats";
import { FacebookAdSpyFeatures } from "@/components/FacebookAdSpy/FacebookAdSpyFeatures";
import { FacebookAdSpyUseCases } from "@/components/FacebookAdSpy/FacebookAdSpyUseCases";
import { FacebookAdSpyBlogs } from "@/components/FacebookAdSpy/FacebookAdSpyBlogs";
import { FacebookAdSpyEducation } from "@/components/FacebookAdSpy/FacebookAdSpyEducation";
import { FacebookAdSpyComparison } from "@/components/FacebookAdSpy/FacebookAdSpyComparison";
import { FacebookAdSpyBenefits } from "@/components/FacebookAdSpy/FacebookAdSpyBenefits";
import { FacebookAdSpyQuickStart } from "@/components/FacebookAdSpy/FacebookAdSpyQuickStart";
import { FacebookAdSpyTestimonials } from "@/components/FacebookAdSpy/FacebookAdSpyTestimonials";
import { FacebookAdSpyCTA } from "@/components/FacebookAdSpy/FacebookAdSpyCTA";
import { FacebookAdSpyFAQ } from "@/components/FacebookAdSpy/FacebookAdSpyFAQ";

const FacebookAdSpy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FacebookAdSpyHero />
        <FacebookAdSpyStats />
        <FacebookAdSpyFeatures />
        <FacebookAdSpyUseCases />
        <FacebookAdSpyBlogs />
        <FacebookAdSpyEducation />
        <FacebookAdSpyComparison />
        <FacebookAdSpyBenefits />
        <FacebookAdSpyQuickStart />
        <FacebookAdSpyTestimonials />
        <FacebookAdSpyCTA />
        <FacebookAdSpyFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FacebookAdSpy;
