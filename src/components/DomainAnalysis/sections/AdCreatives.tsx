import { Image, Video, Type, Lock, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AdCreativesProps {
  domain: string;
}

export const AdCreatives = ({ domain }: AdCreativesProps) => {
  const adTypes = [
    { type: "Display", count: 234, icon: Image },
    { type: "Video", count: 156, icon: Video },
    { type: "Text", count: 89, icon: Type }
  ];

  const sampleAds = [
    {
      id: 1,
      type: "Display",
      title: "Summer Sale - 50% Off",
      platform: "Facebook",
      performance: "High"
    },
    {
      id: 2, 
      type: "Video",
      title: "Product Demo Video",
      platform: "YouTube", 
      performance: "Medium"
    },
    {
      id: 3,
      type: "Text",
      title: "Limited Time Offer",
      platform: "Google Ads",
      performance: "High"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Image className="w-6 h-6" />
        Ad Creatives
      </h2>

      {/* Ad Type Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {adTypes.map((adType) => {
          const Icon = adType.icon;
          return (
            <Card key={adType.type}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{adType.type}</p>
                      <p className="text-sm text-muted-foreground">Ads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">{adType.count}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Sample Creatives */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sample Ad Creatives</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="display">Display</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
              <TabsTrigger value="text">Text</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleAds.map((ad) => (
                  <div key={ad.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{ad.type}</Badge>
                      <Badge variant={ad.performance === "High" ? "default" : "secondary"}>
                        {ad.performance}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-foreground">{ad.title}</h4>
                    <p className="text-sm text-muted-foreground">{ad.platform}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
              
              {/* Locked Content */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 blur-sm">
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="h-4 bg-secondary rounded"></div>
                    <div className="h-6 bg-secondary rounded"></div>
                    <div className="h-4 bg-secondary rounded w-1/2"></div>
                  </div>
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="h-4 bg-secondary rounded"></div>
                    <div className="h-6 bg-secondary rounded"></div>
                    <div className="h-4 bg-secondary rounded w-1/2"></div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card rounded-lg p-6 shadow-lg border text-center">
                    <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="font-medium text-foreground">Unlock to View All Creatives</p>
                    <p className="text-sm text-muted-foreground mt-1">200+ additional ad samples</p>
                    <Button className="mt-3">Upgrade Plan</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};