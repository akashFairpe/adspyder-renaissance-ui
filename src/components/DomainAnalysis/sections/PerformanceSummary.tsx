import { BarChart3, Target, Zap, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { usePerformanceData } from "@/hooks/useDomainData";

interface PerformanceSummaryProps {
  domain: string;
}

export const PerformanceSummary = ({ domain }: PerformanceSummaryProps) => {
  const { data, loading, error } = usePerformanceData(domain);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 h-8 rounded" />
          <Skeleton className="w-48 h-8" />
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
          <BarChart3 className="w-6 h-6 text-orange-600" />
          Performance Summary
        </h2>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No performance data available</p>
        </div>
      </div>
    );
  }

  const metrics = [
    {
      title: "Total Ads",
      value: data.totalAds.toLocaleString(),
      subtitle: "All platforms",
      icon: Target,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Unique Creatives",
      value: data.uniqueCreatives.toLocaleString(),
      subtitle: "Different designs",
      icon: Layers,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Avg Frequency",
      value: `${data.avgFrequency}x`,
      subtitle: "Per creative",
      icon: Zap,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Est. Reach",
      value: `${(data.estimatedReach / 1000000).toFixed(1)}M`,
      subtitle: "Total audience",
      icon: BarChart3,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-orange-600" />
        Performance Summary
      </h2>
      
      <p className="text-muted-foreground">
        Key performance indicators and advertising metrics across all campaigns.
      </p>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${metric.color.split(' ')[0]} rounded-lg`}>
                      <Icon className={`w-5 h-5 ${metric.color.split(' ')[1]}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{metric.title}</p>
                      <p className="text-sm text-muted-foreground">{metric.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Creative Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Creative-to-Ad Ratio</span>
                <span className="text-lg font-semibold text-foreground">
                  {(data.totalAds / data.uniqueCreatives).toFixed(1)}:1
                </span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-orange-600 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((data.totalAds / data.uniqueCreatives) * 10, 100)}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Higher ratios indicate better creative reuse and testing strategies
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Campaign Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-foreground">{data.clustersAnalyzed}</p>
                  <p className="text-sm text-muted-foreground">Campaign Clusters</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {Math.round(data.totalAds / data.clustersAnalyzed)}
                  </p>
                  <p className="text-sm text-muted-foreground">Ads per Cluster</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Campaigns grouped by targeting and creative similarity
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-foreground">Active Advertising</span>
              </div>
              <p className="text-sm text-muted-foreground">
                High volume of active campaigns indicates strong marketing investment
              </p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-foreground">Creative Diversity</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Multiple unique creatives suggest comprehensive testing approach
              </p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-medium text-foreground">Scale Potential</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Large estimated reach indicates significant audience targeting
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};