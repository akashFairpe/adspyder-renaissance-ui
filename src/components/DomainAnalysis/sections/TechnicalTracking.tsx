import { Code, Tag, TestTube, Link, Lock, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechnicalTrackingProps {
  domain: string;
}

export const TechnicalTracking = ({ domain }: TechnicalTrackingProps) => {
  const trackingFeatures = [
    {
      name: "UTM Parameters",
      description: "Campaign tracking codes",
      status: "active",
      count: 45,
      icon: Link,
      locked: false
    },
    {
      name: "A/B Testing", 
      description: "Split testing variations",
      status: "active",
      count: 12,
      icon: TestTube,
      locked: false
    },
    {
      name: "Remarketing Tags",
      description: "Retargeting pixel codes",
      status: "active", 
      count: 8,
      icon: Tag,
      locked: true
    },
    {
      name: "Conversion Tracking",
      description: "Goal and event tracking",
      status: "active",
      count: 23,
      icon: BarChart,
      locked: true
    },
    {
      name: "Custom Parameters",
      description: "Advanced tracking setup",
      status: "limited",
      count: 6,
      icon: Code,
      locked: false
    },
    {
      name: "Cross-Domain Tracking",
      description: "Multi-site attribution",
      status: "inactive",
      count: 0,
      icon: Link,
      locked: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "default";
      case "limited": return "secondary";
      case "inactive": return "outline";
      default: return "outline";
    }
  };

  const renderTrackingCard = (feature: typeof trackingFeatures[0], index: number) => {
    const Icon = feature.icon;
    
    return (
      <Card key={index} className="relative">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{feature.name}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
            <Badge variant={getStatusColor(feature.status)}>
              {feature.status}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-foreground">{feature.count}</p>
              <p className="text-sm text-muted-foreground">
                {feature.count === 1 ? 'Instance' : 'Instances'}
              </p>
            </div>
            
            {feature.status === "active" && (
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            )}
          </div>
        </CardContent>
        
        {feature.locked && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
            <div className="text-center">
              <Lock className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">Locked Feature</p>
              <p className="text-xs text-muted-foreground">Upgrade to access</p>
            </div>
          </div>
        )}
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Code className="w-6 h-6" />
        Technical Tracking
      </h2>

      {/* Tracking Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Code className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">94</p>
                <p className="text-sm text-muted-foreground">Total Tracking Elements</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <TestTube className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Active A/B Tests</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <BarChart className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">85%</p>
                <p className="text-sm text-muted-foreground">Tracking Coverage</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tracking Features Grid */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Tracking Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trackingFeatures.map((feature, index) => 
            renderTrackingCard(feature, index)
          )}
        </div>
      </div>

      {/* UTM Campaign Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Link className="w-5 h-5" />
            Sample UTM Campaigns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { campaign: "summer_sale_2024", medium: "social", source: "facebook", clicks: 2340 },
              { campaign: "product_launch", medium: "email", source: "newsletter", clicks: 1850 },
              { campaign: "retargeting_campaign", medium: "display", source: "google", clicks: 1420 }
            ].map((utm, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{utm.campaign}</h4>
                  <span className="text-sm text-muted-foreground">{utm.clicks} clicks</span>
                </div>
                <div className="flex gap-4 text-sm">
                  <Badge variant="outline">Source: {utm.source}</Badge>
                  <Badge variant="outline">Medium: {utm.medium}</Badge>
                </div>
                <div className="mt-2">
                  <div className="w-full h-1 bg-secondary rounded-full">
                    <div 
                      className="h-1 bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${(utm.clicks / 2340) * 100}%` }}
                    />
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