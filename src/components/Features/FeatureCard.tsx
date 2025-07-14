import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Eye, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  id: string;
  title: string;
  description: string;
  accessLevel: "normal" | "locked" | "samples";
  icon: any;
  category: string;
  preview?: string[];
  chartData?: any[];
}

interface FeatureCardProps {
  feature: Feature;
  isHovered: boolean;
}

export const FeatureCard = ({ feature, isHovered }: FeatureCardProps) => {
  const Icon = feature.icon;

  const renderContent = () => {
    switch (feature.accessLevel) {
      case "locked":
        return (
          <div className="relative">
            <div className="blur-sm opacity-50 pointer-events-none">
              <div className="h-24 bg-gradient-to-r from-muted to-muted/50 rounded-lg mb-4" />
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded w-3/4" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Lock className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <Button size="sm" className="text-xs">
                  Unlock Feature
                </Button>
              </div>
            </div>
          </div>
        );

      case "samples":
        return (
          <div className="space-y-3">
            {feature.preview && (
              <div className="space-y-2">
                {feature.preview.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-sm p-2 rounded bg-muted/20",
                      item.includes("•") && "blur-sm opacity-50"
                    )}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
            <div className="text-center pt-2 border-t">
              <Button size="sm" variant="outline" className="text-xs">
                View All Data
              </Button>
            </div>
          </div>
        );

      case "normal":
        return (
          <div className="space-y-4">
            {feature.chartData && (
              <div className="space-y-2">
                {feature.chartData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{item.name || item.month}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.value || item.campaigns}</span>
                      {item.change && (
                        <span className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded">
                          {item.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center">
              <Button size="sm" variant="outline" className="text-xs">
                <Eye className="h-3 w-3 mr-1" />
                View Details
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <Card 
      className={cn(
        "h-full transition-all duration-300 hover-scale",
        isHovered && "shadow-lg border-primary/20",
        feature.accessLevel === "locked" && "border-muted"
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={cn(
            "p-2 rounded-lg transition-colors",
            feature.accessLevel === "locked" 
              ? "bg-muted text-muted-foreground" 
              : "bg-primary/10 text-primary"
          )}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-base leading-tight">
              {feature.title}
            </CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full capitalize",
                feature.accessLevel === "normal" && "bg-green-100 text-green-700",
                feature.accessLevel === "samples" && "bg-blue-100 text-blue-700",
                feature.accessLevel === "locked" && "bg-gray-100 text-gray-600"
              )}>
                {feature.accessLevel === "samples" ? "Limited" : feature.accessLevel}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {feature.description}
        </p>
        
        {renderContent()}
      </CardContent>
    </Card>
  );
};