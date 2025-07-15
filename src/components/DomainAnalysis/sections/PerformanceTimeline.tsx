import { TrendingUp, Calendar, DollarSign, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PerformanceTimelineProps {
  domain: string;
}

export const PerformanceTimeline = ({ domain }: PerformanceTimelineProps) => {
  const monthlyData = [
    { month: "Jan", activeAds: 45, spend: 12000 },
    { month: "Feb", activeAds: 52, spend: 15000 },
    { month: "Mar", activeAds: 38, spend: 9800 },
    { month: "Apr", activeAds: 61, spend: 18500 },
    { month: "May", activeAds: 58, spend: 17200 },
    { month: "Jun", activeAds: 67, spend: 21000 }
  ];

  const maxSpend = Math.max(...monthlyData.map(d => d.spend));
  const maxAds = Math.max(...monthlyData.map(d => d.activeAds));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-primary" />
        Performance Timeline
      </h2>
      
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Active Ads</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">67</p>
                <p className="text-sm text-green-600">+12%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Est. Spend</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">$21K</p>
                <p className="text-sm text-green-600">+22%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Avg. Duration</p>
                  <p className="text-sm text-muted-foreground">Per Campaign</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">28d</p>
                <p className="text-sm text-red-600">-5%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">6-Month Ad Activity Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Ad Count Chart */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Active Ads per Month</h4>
              <div className="flex items-end gap-2 h-32">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-primary rounded-t transition-all duration-500 hover:bg-primary/80"
                      style={{ 
                        height: `${(data.activeAds / maxAds) * 100}%`,
                        minHeight: '4px'
                      }}
                    />
                    <span className="text-xs text-muted-foreground">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spend Chart */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Estimated Monthly Spend</h4>
              <div className="flex items-end gap-2 h-32">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-green-500 rounded-t transition-all duration-500 hover:bg-green-400"
                      style={{ 
                        height: `${(data.spend / maxSpend) * 100}%`,
                        minHeight: '4px'
                      }}
                    />
                    <span className="text-xs text-muted-foreground">${(data.spend / 1000).toFixed(0)}K</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};