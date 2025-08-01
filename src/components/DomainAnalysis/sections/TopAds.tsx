import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Eye, Calendar, ExternalLink } from "lucide-react";

interface TopAdsProps {
  domain: string;
}

interface AdData {
  id: string;
  title: string;
  description: string;
  platform: string;
  firstSeen: string;
  lastSeen: string;
  impressions: number;
  engagementRate: number;
  adFormat: string;
  imageUrl: string;
  status: 'active' | 'ended';
}

const mockAdData: AdData[] = [
  {
    id: "1",
    title: "Summer Sale - Up to 50% Off Everything",
    description: "Don't miss our biggest sale of the year! Shop now and save on all your favorite items.",
    platform: "Facebook",
    firstSeen: "2024-06-15",
    lastSeen: "2024-08-30",
    impressions: 2500000,
    engagementRate: 4.2,
    adFormat: "Image",
    imageUrl: "/placeholder.svg",
    status: "ended"
  },
  {
    id: "2",
    title: "New Collection Launch - Premium Quality",
    description: "Discover our latest premium collection. Crafted with the finest materials.",
    platform: "Google Ads",
    firstSeen: "2024-09-01",
    lastSeen: "2024-12-31",
    impressions: 1800000,
    engagementRate: 3.8,
    adFormat: "Video",
    imageUrl: "/placeholder.svg",
    status: "active"
  },
  {
    id: "3",
    title: "Free Shipping on Orders Over $50",
    description: "Limited time offer - get free shipping on all orders over $50. Shop now!",
    platform: "Instagram",
    firstSeen: "2024-10-15",
    lastSeen: "2024-12-31",
    impressions: 1200000,
    engagementRate: 5.1,
    adFormat: "Carousel",
    imageUrl: "/placeholder.svg",
    status: "active"
  },
  {
    id: "4",
    title: "Holiday Special - Gift Cards Available",
    description: "Perfect gifts for everyone on your list. Digital gift cards available instantly.",
    platform: "YouTube",
    firstSeen: "2024-11-01",
    lastSeen: "2024-12-25",
    impressions: 950000,
    engagementRate: 3.5,
    adFormat: "Video",
    imageUrl: "/placeholder.svg",
    status: "active"
  }
];

export const TopAds = ({ domain }: TopAdsProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
      case 'instagram':
        return 'bg-pink-100 text-pink-700 hover:bg-pink-200';
      case 'google ads':
        return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'youtube':
        return 'bg-red-100 text-red-700 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Top Performing Ads</h2>
          <p className="text-gray-600 mt-1">
            Highest performing advertisements for {domain}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <TrendingUp className="w-4 h-4" />
          <span>Sorted by impressions</span>
        </div>
      </div>

      <div className="grid gap-6">
        {mockAdData.map((ad, index) => (
          <Card key={ad.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className={getPlatformColor(ad.platform)}>
                      {ad.platform}
                    </Badge>
                    <Badge variant="secondary" className={getStatusColor(ad.status)}>
                      {ad.status}
                    </Badge>
                    <Badge variant="outline">{ad.adFormat}</Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                    {ad.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {ad.description}
                  </CardDescription>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <img 
                    src={ad.imageUrl} 
                    alt={ad.title}
                    className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Impressions</span>
                  </div>
                  <div className="text-xl font-semibold text-gray-900">
                    {formatNumber(ad.impressions)}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Engagement</span>
                  </div>
                  <div className="text-xl font-semibold text-gray-900">
                    {ad.engagementRate}%
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">First Seen</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {formatDate(ad.firstSeen)}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Last Seen</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {formatDate(ad.lastSeen)}
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Ad #{index + 1} • Running for {Math.ceil((new Date(ad.lastSeen).getTime() - new Date(ad.firstSeen).getTime()) / (1000 * 60 * 60 * 24))} days
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button variant="outline" className="gap-2">
          Load More Ads
          <TrendingUp className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};