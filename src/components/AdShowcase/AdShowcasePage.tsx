
import { useState } from "react";
import { AdCard } from "./AdCard";
import { Button } from "@/components/ui/button";

interface Ad {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

interface AdShowcasePageProps {
  title: string;
  description: string;
  ads: Ad[];
}

export const AdShowcasePage = ({ title, description, ads }: AdShowcasePageProps) => {
  const [visibleRows, setVisibleRows] = useState(2);
  const adsPerRow = 4;
  const visibleAds = visibleRows * adsPerRow;
  const hasMoreAds = visibleAds < ads.length;

  const handleViewMore = () => {
    setVisibleRows(prev => prev + 2);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Ad Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ads.slice(0, visibleAds).map((ad) => (
            <AdCard key={ad.id} ad={ad} />
          ))}
        </div>

        {/* View More Button */}
        {hasMoreAds && (
          <div className="text-center">
            <Button 
              onClick={handleViewMore}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
