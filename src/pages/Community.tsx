import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CommunityPage } from "@/components/Community/CommunityPage";
import { useSEO } from "@/hooks/useSEO";

const Community = () => {
  useSEO({
    title: "Join AdSpyder Community | WhatsApp Groups for Marketers",
    description: "Join AdSpyder's WhatsApp communities for D2C brands, agencies, startups, PPC marketers, and more. Get exclusive insights and connect with fellow marketers.",
    keywords: "AdSpyder community, WhatsApp groups, digital marketing, D2C brands, agencies, startup marketing, PPC marketing",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CommunityPage />
      </main>
      <Footer />
    </div>
  );
};

export default Community;