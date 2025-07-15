import { Globe, Building, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DomainOverviewProps {
  domain: string;
}

export const DomainOverview = ({ domain }: DomainOverviewProps) => {
  const platforms = ["Facebook", "Google Ads", "Instagram", "YouTube"];
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
        <Globe className="w-6 h-6 text-primary" />
        Domain Overview
      </h2>
      
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Domain Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Domain URL</label>
              <p className="text-lg font-semibold text-foreground">{domain}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Brand Name</label>
              <p className="text-lg font-semibold text-foreground">
                {domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1)}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Active Platforms</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {platforms.map((platform) => (
                  <Badge key={platform} variant="secondary">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative">
              <label className="text-sm font-medium text-muted-foreground">Industry</label>
              <div className="relative">
                <p className="text-lg font-semibold text-foreground blur-sm">E-commerce</p>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Country Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Country Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {countries.map((country) => (
                <div key={country.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{country.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${country.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{country.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};