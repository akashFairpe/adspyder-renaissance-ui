import { Smartphone, Monitor, Video, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlatformData } from "@/hooks/useDomainData";

interface PlatformSummaryProps {
  domain: string;
}

export const PlatformSummary = ({ domain }: PlatformSummaryProps) => {
  const { data, loading, error } = usePlatformData(domain);

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'google ads':
        return Monitor;
      case 'facebook':
      case 'instagram':
        return Smartphone;
      case 'youtube':
        return Video;
      default:
        return Image;
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 h-8 rounded" />
          <Skeleton className="w-64 h-8" />
        </div>
        <Skeleton className="w-full h-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="w-full h-32" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Monitor className="w-6 h-6 text-orange-600" />
          Platform & Format Summary
        </h2>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No platform data available</p>
        </div>
      </div>
    );
  }

  const totalAds = data.platforms.reduce((sum, platform) => sum + platform.adCount, 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Monitor className="w-6 h-6 text-orange-600" />
        Platform & Format Summary
      </h2>
      
      <p className="text-muted-foreground">
        Distribution of advertising activity across different platforms and ad formats.
      </p>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.platforms.map((platform) => {
          const Icon = getPlatformIcon(platform.name);
          const percentage = Math.round((platform.adCount / totalAds) * 100);
          
          return (
            <Card key={platform.name}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{platform.name}</p>
                      <p className="text-sm text-muted-foreground">{percentage}% of ads</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-muted-foreground">Ad Count</span>
                      <span className="text-sm font-medium">{platform.adCount}</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-orange-600 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Formats</p>
                    <div className="flex flex-wrap gap-1">
                      {platform.formats.map((format) => (
                        <Badge key={format} variant="outline" className="text-xs">
                          {format}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Summary Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Platform Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">{totalAds}</p>
              <p className="text-sm text-muted-foreground">Total Ads</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">{data.platforms.length}</p>
              <p className="text-sm text-muted-foreground">Active Platforms</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">
                {data.platforms.reduce((sum, p) => sum + p.formats.length, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Ad Formats</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};