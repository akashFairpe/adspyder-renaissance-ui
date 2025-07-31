import { MousePointer, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useCTAData } from "@/hooks/useDomainData";

interface TopCTAsProps {
  domain: string;
}

export const TopCTAs = ({ domain }: TopCTAsProps) => {
  const { data, loading, error } = useCTAData(domain);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 h-8 rounded" />
          <Skeleton className="w-48 h-8" />
        </div>
        <Skeleton className="w-full h-4" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="w-full h-16" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <MousePointer className="w-6 h-6 text-orange-600" />
          Top Call-to-Actions
        </h2>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No CTA data available</p>
        </div>
      </div>
    );
  }

  const maxCount = Math.max(...data.ctas.map(cta => cta.count));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <MousePointer className="w-6 h-6 text-orange-600" />
        Top Call-to-Actions
      </h2>
      
      <p className="text-muted-foreground">
        Most frequently used call-to-action phrases and their performance trends.
      </p>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            CTA Performance Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.ctas.map((cta, index) => {
              const isPositiveTrend = cta.trend.startsWith('+');
              const TrendIcon = isPositiveTrend ? ArrowUp : ArrowDown;
              
              return (
                <div key={index} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                  <div className="flex-1 min-w-0 mr-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-muted-foreground shrink-0">#{index + 1}</span>
                      <p className="font-semibold text-foreground truncate">{cta.text}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-secondary rounded-full h-3">
                        <div 
                          className="bg-orange-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${(cta.count / maxCount) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground shrink-0">{cta.count} uses</span>
                    </div>
                  </div>
                  
                  <div className="shrink-0">
                    <Badge 
                      variant={isPositiveTrend ? 'default' : 'destructive'} 
                      className="flex items-center gap-1"
                    >
                      <TrendIcon className="w-3 h-3" />
                      {cta.trend}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* CTA Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">CTA Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {[
              { category: "Action", count: 3, color: "bg-blue-100 text-blue-700" },
              { category: "Shopping", count: 2, color: "bg-green-100 text-green-700" },
              { category: "Information", count: 1, color: "bg-purple-100 text-purple-700" },
              { category: "Trial", count: 1, color: "bg-orange-100 text-orange-700" }
            ].map((cat) => (
              <div key={cat.category} className={`px-3 py-2 rounded-lg ${cat.color}`}>
                <span className="font-medium">{cat.category}</span>
                <span className="ml-2 text-sm">({cat.count})</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};