import { BarChart3, TrendingUp, Eye, Repeat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TrendsReachProps {
  domain: string;
}

export const TrendsReach = ({ domain }: TrendsReachProps) => {
  const trendData = [
    { period: "Week 1", impressions: 125000, frequency: 2.3, change: "+12%" },
    { period: "Week 2", impressions: 142000, frequency: 2.5, change: "+14%" },
    { period: "Week 3", impressions: 138000, frequency: 2.4, change: "-3%" },
    { period: "Week 4", impressions: 156000, frequency: 2.7, change: "+13%" }
  ];

  const reachMetrics = [
    { metric: "Total Reach", value: "1.2M", change: "+18%", period: "This Month" },
    { metric: "Unique Users", value: "890K", change: "+22%", period: "This Month" },
    { metric: "Frequency", value: "2.5", change: "+8%", period: "Avg per User" },
    { metric: "Impressions", value: "3.1M", change: "+15%", period: "This Month" }
  ];

  const monthlyTrends = [
    { month: "Jan", reach: 850000, impressions: 2100000 },
    { month: "Feb", reach: 920000, impressions: 2350000 },
    { month: "Mar", reach: 1050000, impressions: 2800000 },
    { month: "Apr", reach: 1120000, impressions: 2950000 },
    { month: "May", reach: 1180000, impressions: 3100000 },
    { month: "Jun", reach: 1200000, impressions: 3100000 }
  ];

  const maxReach = Math.max(...monthlyTrends.map(d => d.reach));
  const maxImpressions = Math.max(...monthlyTrends.map(d => d.impressions));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-primary" />
        Trends & Reach
      </h2>
      
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {reachMetrics.map((metric, index) => {
          const icons = [Eye, TrendingUp, Repeat, BarChart3];
          const Icon = icons[index];
          
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.metric}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.change}
                      </span>
                      <span className="text-xs text-muted-foreground">{metric.period}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Weekly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendData.map((week, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-foreground">{week.period}</h4>
                    <span className={`text-sm font-medium ${
                      week.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {week.change}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Impressions</p>
                      <p className="font-semibold text-foreground">{week.impressions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Frequency</p>
                      <p className="font-semibold text-foreground">{week.frequency}</p>
                    </div>
                  </div>
                  
                  {/* Impressions bar */}
                  <div className="mt-3">
                    <div className="w-full h-2 bg-secondary rounded-full">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${(week.impressions / 156000) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">6-Month Trend Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Reach Chart */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Monthly Reach</h4>
                <div className="flex items-end gap-2 h-24">
                  {monthlyTrends.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-primary rounded-t transition-all duration-500 hover:bg-primary/80"
                        style={{ 
                          height: `${(data.reach / maxReach) * 100}%`,
                          minHeight: '4px'
                        }}
                      />
                      <span className="text-xs text-muted-foreground">{data.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>0</span>
                  <span>{(maxReach / 1000000).toFixed(1)}M</span>
                </div>
              </div>

              {/* Impressions Chart */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Monthly Impressions</h4>
                <div className="flex items-end gap-2 h-24">
                  {monthlyTrends.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-green-500 rounded-t transition-all duration-500 hover:bg-green-400"
                        style={{ 
                          height: `${(data.impressions / maxImpressions) * 100}%`,
                          minHeight: '4px'
                        }}
                      />
                      <span className="text-xs text-muted-foreground">{(data.impressions / 1000000).toFixed(1)}M</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-accent/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Growth Rate</p>
                  <p className="text-sm text-muted-foreground">Month-over-Month average</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">+18%</p>
                  <p className="text-sm text-muted-foreground">Reach growth</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};