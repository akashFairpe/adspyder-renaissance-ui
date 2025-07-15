import { Heart, MessageCircle, Share2, Eye, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EngagementMetricsProps {
  domain: string;
}

export const EngagementMetrics = ({ domain }: EngagementMetricsProps) => {
  const engagementData = {
    total: 125420,
    breakdown: [
      { type: "Likes", count: 75250, percentage: 60, icon: Heart, color: "bg-red-500" },
      { type: "Comments", count: 25084, percentage: 20, icon: MessageCircle, color: "bg-blue-500" },
      { type: "Shares", count: 18763, percentage: 15, icon: Share2, color: "bg-green-500" },
      { type: "Views", count: 6323, percentage: 5, icon: Eye, color: "bg-purple-500" }
    ]
  };

  const platformMetrics = [
    { platform: "Facebook", engagement: 45200, rate: "3.2%", trend: "+12%" },
    { platform: "Instagram", engagement: 38150, rate: "4.1%", trend: "+18%" },
    { platform: "YouTube", engagement: 28470, rate: "2.8%", trend: "+5%" },
    { platform: "LinkedIn", engagement: 13600, rate: "2.1%", trend: "+22%" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Heart className="w-6 h-6 text-primary" />
        Engagement Metrics
      </h2>
      
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* Total Engagement */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Total Engagement Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <p className="text-4xl font-bold text-foreground mb-2">
              {engagementData.total.toLocaleString()}
            </p>
            <p className="text-muted-foreground">Total Engagements This Month</p>
            <p className="text-sm text-green-600 mt-1">+15% vs last month</p>
          </div>

          {/* Engagement Breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {engagementData.breakdown.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.type} className="text-center p-4 border rounded-lg">
                  <div className="flex justify-center mb-2">
                    <div className={`p-3 ${item.color} rounded-full`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{item.count.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">{item.type}</p>
                  <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                </div>
              );
            })}
          </div>

          {/* Visual Chart */}
          <div className="mt-6">
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Engagement Distribution</h4>
            <div className="flex h-4 rounded-full overflow-hidden">
              {engagementData.breakdown.map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} transition-all duration-500`}
                  style={{ width: `${item.percentage}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              {engagementData.breakdown.map((item) => (
                <span key={item.type}>{item.type} ({item.percentage}%)</span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Platform Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {platformMetrics.map((platform, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{platform.platform}</h4>
                    <span className={`text-sm ${platform.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {platform.trend}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Total Engagement</p>
                      <p className="font-semibold text-foreground">{platform.engagement.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Engagement Rate</p>
                      <p className="font-semibold text-foreground">{platform.rate}</p>
                    </div>
                  </div>
                  
                  {/* Engagement bar */}
                  <div className="mt-3">
                    <div className="w-full h-2 bg-secondary rounded-full">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${(platform.engagement / 45200) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};