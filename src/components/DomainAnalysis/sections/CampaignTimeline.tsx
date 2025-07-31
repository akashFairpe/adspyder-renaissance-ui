import { Calendar, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useCampaignTimeline } from "@/hooks/useDomainData";

interface CampaignTimelineProps {
  domain: string;
}

export const CampaignTimeline = ({ domain }: CampaignTimelineProps) => {
  const { data, loading, error } = useCampaignTimeline(domain);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 h-8 rounded" />
          <Skeleton className="w-48 h-8" />
        </div>
        <Skeleton className="w-full h-4" />
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="w-full h-24" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Calendar className="w-6 h-6 text-orange-600" />
          Campaign Timeline
        </h2>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No campaign data available</p>
        </div>
      </div>
    );
  }

  const activeCampaigns = data.campaigns.filter(c => c.status === 'active').length;
  const totalCampaigns = data.campaigns.length;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Calendar className="w-6 h-6 text-orange-600" />
        Campaign Timeline
      </h2>
      
      <p className="text-muted-foreground">
        Track campaign durations and activity patterns across all advertising platforms.
      </p>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Total Campaigns</p>
                  <p className="text-sm text-muted-foreground">All time</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{totalCampaigns}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Active Now</p>
                  <p className="text-sm text-muted-foreground">Currently running</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{activeCampaigns}</p>
                <p className="text-sm text-green-600">Live</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Avg Duration</p>
                  <p className="text-sm text-muted-foreground">Per campaign</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">92d</p>
                <p className="text-sm text-blue-600">Average</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Campaign Activity Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.campaigns.map((campaign) => {
              const startDate = new Date(campaign.firstSeen);
              const endDate = new Date(campaign.lastSeen);
              const duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
              const isActive = campaign.status === 'active';

              return (
                <div key={campaign.id} className="border rounded-lg p-4 space-y-3 hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-foreground">{campaign.name}</h4>
                      <Badge variant={isActive ? "default" : "secondary"}>
                        {isActive ? "Active" : "Ended"}
                      </Badge>
                      <Badge variant="outline">{campaign.platform}</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{duration} days</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Started: {startDate.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{isActive ? 'Ends' : 'Ended'}: {endDate.toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Timeline bar */}
                  <div className="relative">
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          isActive ? 'bg-green-500' : 'bg-gray-400'
                        }`}
                        style={{ 
                          width: isActive ? '100%' : '100%'
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};