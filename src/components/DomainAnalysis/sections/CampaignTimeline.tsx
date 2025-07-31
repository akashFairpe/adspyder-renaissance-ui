import { Calendar, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useCampaignTimeline } from "@/hooks/useDomainData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

  // Generate monthly data for line chart
  const monthlyData = [
    { month: 'Jan', ads: 23, campaigns: 3 },
    { month: 'Feb', ads: 34, campaigns: 4 },
    { month: 'Mar', ads: 28, campaigns: 3 },
    { month: 'Apr', ads: 45, campaigns: 5 },
    { month: 'May', ads: 52, campaigns: 6 },
    { month: 'Jun', ads: 38, campaigns: 4 },
    { month: 'Jul', ads: 41, campaigns: 5 },
    { month: 'Aug', ads: 47, campaigns: 5 },
    { month: 'Sep', ads: 55, campaigns: 6 },
    { month: 'Oct', ads: 43, campaigns: 4 },
    { month: 'Nov', ads: 49, campaigns: 5 },
    { month: 'Dec', ads: 58, campaigns: 7 }
  ];

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

      {/* Monthly Ads Line Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Monthly Ad Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  label={{ value: 'Number of Ads', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  formatter={(value, name) => [value, name === 'ads' ? 'Total Ads' : 'Active Campaigns']}
                />
                <Line 
                  type="monotone" 
                  dataKey="ads" 
                  stroke="#ea580c" 
                  strokeWidth={3}
                  dot={{ fill: '#ea580c', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#ea580c', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="campaigns" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 5, stroke: '#3b82f6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                <span className="text-sm font-medium">Total Ads</span>
              </div>
              <p className="text-xs text-muted-foreground">Monthly advertising volume</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-medium">Active Campaigns</span>
              </div>
              <p className="text-xs text-muted-foreground">Concurrent campaign count</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Details List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.campaigns.slice(0, 5).map((campaign) => {
              const startDate = new Date(campaign.firstSeen);
              const endDate = new Date(campaign.lastSeen);
              const duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
              const isActive = campaign.status === 'active';

              return (
                <div key={campaign.id} className="border rounded-lg p-4 space-y-3 hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <h4 className="font-medium text-foreground truncate">{campaign.name}</h4>
                      <Badge variant={isActive ? "default" : "secondary"} className="shrink-0">
                        {isActive ? "Active" : "Ended"}
                      </Badge>
                      <Badge variant="outline" className="shrink-0">{campaign.platform}</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground shrink-0">{duration} days</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span className="truncate">Started: {startDate.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span className="truncate">{isActive ? 'Ends' : 'Ended'}: {endDate.toLocaleDateString()}</span>
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