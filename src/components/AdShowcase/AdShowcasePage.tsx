
import { useState } from "react";
import { AdCard } from "./AdCard";
import { Button } from "@/components/ui/button";
import { useAdData, type Ad, type AdDataSource } from "@/hooks/useAdData";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

interface AdShowcasePageProps {
  title: string;
  description: string;
  ads?: Ad[]; // Keep for backward compatibility
  dataSource?: AdDataSource; // New API integration option
}

export const AdShowcasePage = ({ title, description, ads: staticAds, dataSource }: AdShowcasePageProps) => {
  const [visibleRows, setVisibleRows] = useState(2);
  const adsPerRow = 4;
  
  // Determine data source based on props
  const finalDataSource: AdDataSource = dataSource || {
    type: 'static',
    staticData: staticAds || []
  };
  
  const { ads, loading, error } = useAdData(finalDataSource);
  
  const visibleAds = visibleRows * adsPerRow;
  const hasMoreAds = visibleAds < ads.length;

  const handleViewMore = () => {
    setVisibleRows(prev => prev + 2);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
            <span className="ml-2 text-gray-600">Loading ads...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
          
          <Alert className="max-w-md mx-auto">
            <AlertDescription>
              Failed to load ad data: {error}
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

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
        
        {ads.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500">No ads available to display.</p>
          </div>
        )}
      </div>
    </div>
  );
};
