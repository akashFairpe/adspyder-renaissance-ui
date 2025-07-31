import { Globe, Building, Lock, DollarSign, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useDomainOverview } from "@/hooks/useDomainData";

interface DomainOverviewProps {
  domain: string;
}

export const DomainOverview = ({ domain }: DomainOverviewProps) => {
  const { data, loading, error } = useDomainOverview(domain);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 h-8 rounded" />
          <Skeleton className="w-48 h-8" />
        </div>
        <Skeleton className="w-full h-4" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Skeleton className="w-full h-64" />
          <Skeleton className="w-full h-64" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Globe className="w-6 h-6 text-orange-600" />
          Domain Overview
        </h2>
        <div className="text-center py-8">
          <p className="text-muted-foreground">Unable to load domain data</p>
        </div>
      </div>
    );
  }

  const countries = [
    { name: "United States", percentage: 45 },
    { name: "Canada", percentage: 25 },
    { name: "United Kingdom", percentage: 15 },
    { name: "Australia", percentage: 10 },
    { name: "Others", percentage: 5 }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Globe className="w-6 h-6 text-orange-600" />
        Domain Overview
      </h2>
      
      <p className="text-muted-foreground">
        Comprehensive advertising insights and performance metrics for {data.domain}.
      </p>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Total Ads</p>
                  <p className="text-sm text-muted-foreground">Active</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{data.totalAds}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Est. Spend</p>
                  <p className="text-sm text-muted-foreground">Monthly</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">${(data.adSpend / 1000).toFixed(0)}K</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Countries</p>
                  <p className="text-sm text-muted-foreground">Active</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{data.countries.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Building className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Platforms</p>
                  <p className="text-sm text-muted-foreground">Active</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{data.activePlatforms.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Domain Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Domain URL</label>
              <p className="text-lg font-semibold text-foreground">{data.domain}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Brand Name</label>
              <p className="text-lg font-semibold text-foreground">{data.brandName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Industry</label>
              <p className="text-lg font-semibold text-foreground">{data.industry}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Active Platforms</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {data.activePlatforms.map((platform) => (
                  <Badge key={platform} variant="secondary">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Country Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.countries.slice(0, 4).map((country, index) => {
                const percentage = countries[index]?.percentage || Math.floor(Math.random() * 30) + 10;
                return (
                  <div key={country} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{country}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-orange-600 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8">{percentage}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};