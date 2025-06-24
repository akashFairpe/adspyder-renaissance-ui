
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Eye, 
  TrendingUp, 
  Clock, 
  Share2, 
  Heart,
  MoreHorizontal,
  Filter,
  Search
} from "lucide-react";

export const AdLibraryShowcase = () => {
  const [activeTab, setActiveTab] = useState("google");

  const mockAds = {
    google: [
      {
        id: 1,
        title: "Premium CRM Software - 50% Off",
        description: "Boost your sales with our AI-powered CRM. Try free for 30 days.",
        platform: "Google Ads",
        spend: "High",
        duration: "45 days",
        engagement: "2.3M",
        type: "Search Ad",
        landing: "/premium-crm"
      },
      {
        id: 2,
        title: "Marketing Automation Made Simple",
        description: "Automate your email campaigns and increase conversions by 300%.",
        platform: "Google Ads",
        spend: "Medium",
        duration: "23 days",
        engagement: "1.8M",
        type: "Display Ad",
        landing: "/automation-tool"
      }
    ],
    facebook: [
      {
        id: 3,
        title: "Transform Your Business Today",
        description: "Join 50,000+ entrepreneurs using our platform to scale their business.",
        platform: "Facebook",
        spend: "Very High",
        duration: "67 days",
        engagement: "5.2M",
        type: "Video Ad",
        landing: "/business-platform"
      },
      {
        id: 4,
        title: "Limited Time: 70% Off Training",
        description: "Master digital marketing with our comprehensive course bundle.",
        platform: "Facebook",
        spend: "High",
        duration: "12 days",
        engagement: "3.1M",
        type: "Carousel Ad",
        landing: "/training-course"
      }
    ],
    youtube: [
      {
        id: 5,
        title: "How I Built a $1M Business",
        description: "Watch this 15-minute video to learn the exact strategy I used.",
        platform: "YouTube",
        spend: "High",
        duration: "30 days",
        engagement: "4.7M",
        type: "Video Ad",
        landing: "/success-story"
      }
    ]
  };

  const getSpendColor = (spend) => {
    switch (spend) {
      case "Very High": return "bg-red-100 text-red-700";
      case "High": return "bg-orange-100 text-orange-700";
      case "Medium": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700">
            Live Ad Intelligence
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See what your competitors are doing
            <span className="text-green-600"> right now</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get real-time access to competitor ad campaigns across multiple platforms. 
            Discover their strategies, budgets, and performance metrics.
          </p>
        </div>

        {/* Interactive Ad Library Demo */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-0 overflow-hidden shadow-2xl border-0">
            {/* Demo Header */}
            <div className="bg-gray-50 p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-bold text-gray-900">Ad Library Dashboard</h3>
                  <Badge className="bg-green-100 text-green-700">
                    🔴 Live Data
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <Button variant="outline" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Platform Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="border-b border-gray-200 px-6">
                <TabsList className="grid w-full max-w-md grid-cols-3 bg-transparent h-auto p-0">
                  <TabsTrigger 
                    value="google" 
                    className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none py-4"
                  >
                    🔍 Google Ads
                  </TabsTrigger>
                  <TabsTrigger 
                    value="facebook" 
                    className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none py-4"
                  >
                    📘 Facebook Ads
                  </TabsTrigger>
                  <TabsTrigger 
                    value="youtube" 
                    className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none py-4"
                  >
                    📺 YouTube Ads
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Ad Content */}
              {Object.entries(mockAds).map(([platform, ads]) => (
                <TabsContent key={platform} value={platform} className="m-0">
                  <div className="p-6 space-y-4">
                    {ads.map((ad) => (
                      <Card key={ad.id} className="p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                              {ad.type.includes('Video') ? (
                                <Play className="h-6 w-6 text-blue-600" />
                              ) : (
                                <TrendingUp className="h-6 w-6 text-blue-600" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h4 className="font-bold text-gray-900 text-lg">{ad.title}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {ad.type}
                                </Badge>
                              </div>
                              <p className="text-gray-600 mb-3">{ad.description}</p>
                              <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center text-gray-500">
                                  <Eye className="h-4 w-4 mr-1" />
                                  {ad.engagement} views
                                </div>
                                <div className="flex items-center text-gray-500">
                                  <Clock className="h-4 w-4 mr-1" />
                                  Running {ad.duration}
                                </div>
                                <Badge className={getSpendColor(ad.spend)}>
                                  {ad.spend} Spend
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="icon">
                              <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <Button variant="outline" size="sm">
                            View Landing Page
                          </Button>
                          <Button variant="outline" size="sm">
                            Analyze Performance
                          </Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Get Insights
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
              Explore Full Ad Library
              <TrendingUp className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
