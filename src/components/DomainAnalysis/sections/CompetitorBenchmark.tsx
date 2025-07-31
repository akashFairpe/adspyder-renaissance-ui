import { Users, Award, TrendingUp, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCompetitorData } from "@/hooks/useDomainData";

interface CompetitorBenchmarkProps {
  domain: string;
}

export const CompetitorBenchmark = ({ domain }: CompetitorBenchmarkProps) => {
  const { data, loading, error } = useCompetitorData(domain);

  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 80) return 'bg-red-100 text-red-700';
    if (similarity >= 60) return 'bg-yellow-100 text-yellow-700';
    return 'bg-green-100 text-green-700';
  };

  const getSimilarityLabel = (similarity: number) => {
    if (similarity >= 80) return 'High';
    if (similarity >= 60) return 'Medium';
    return 'Low';
  };

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
          <Users className="w-6 h-6 text-orange-600" />
          Competitor Benchmark
        </h2>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No competitor data available</p>
        </div>
      </div>
    );
  }

  const avgSimilarity = Math.round(data.competitors.reduce((sum, comp) => sum + comp.similarity, 0) / data.competitors.length);
  const totalCommonKeywords = data.competitors.reduce((sum, comp) => sum + comp.commonKeywords, 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Users className="w-6 h-6 text-orange-600" />
        Competitor Benchmark
      </h2>
      
      <p className="text-muted-foreground">
        Direct competitors and their advertising strategies compared to {domain}.
      </p>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Competitors</p>
                  <p className="text-sm text-muted-foreground">Identified</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{data.competitors.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Avg Similarity</p>
                  <p className="text-sm text-muted-foreground">To your brand</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{avgSimilarity}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Shared Keywords</p>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{totalCommonKeywords}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competitors List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top Competitors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.competitors.map((competitor, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                    <div>
                      <p className="font-semibold text-foreground">{competitor.brandName}</p>
                      <p className="text-sm text-muted-foreground">{competitor.domain}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Similarity:</span>
                      <Badge className={getSimilarityColor(competitor.similarity)}>
                        {getSimilarityLabel(competitor.similarity)} ({competitor.similarity}%)
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Shared Keywords:</span>
                      <span className="text-sm font-medium">{competitor.commonKeywords}</span>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Analyze
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competition Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Competitive Landscape</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-3">Market Position</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">High Competition</span>
                  <span className="text-sm font-medium">
                    {data.competitors.filter(c => c.similarity >= 80).length} brands
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Medium Competition</span>
                  <span className="text-sm font-medium">
                    {data.competitors.filter(c => c.similarity >= 60 && c.similarity < 80).length} brands
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Low Competition</span>
                  <span className="text-sm font-medium">
                    {data.competitors.filter(c => c.similarity < 60).length} brands
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-3">Opportunity Score</h4>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-secondary rounded-full h-3">
                  <div 
                    className="bg-orange-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${100 - avgSimilarity}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{100 - avgSimilarity}%</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Based on market differentiation potential
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};