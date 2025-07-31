import { Search, Hash, TrendingUp, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useKeywordData } from "@/hooks/useDomainData";

interface KeywordStrategyProps {
  domain: string;
}

export const KeywordStrategy = ({ domain }: KeywordStrategyProps) => {
  const { data, loading, error } = useKeywordData(domain);

  const getCompetitionColor = (competition: string) => {
    switch (competition.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'commercial':
        return 'bg-blue-100 text-blue-700';
      case 'brand':
        return 'bg-purple-100 text-purple-700';
      case 'offer':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
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
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="w-full h-20" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Search className="w-6 h-6 text-orange-600" />
          Keyword Strategy
        </h2>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No keyword data available</p>
        </div>
      </div>
    );
  }

  const totalVolume = data.keywords.reduce((sum, keyword) => sum + keyword.volume, 0);
  const avgVolume = Math.round(totalVolume / data.keywords.length);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Search className="w-6 h-6 text-orange-600" />
        Keyword Strategy
      </h2>
      
      <p className="text-muted-foreground">
        Search keywords, PPC terms, and ad copy keywords driving traffic and conversions.
      </p>

      {/* Keyword Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Hash className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Total Keywords</p>
                  <p className="text-sm text-muted-foreground">Tracked</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{data.keywords.length}</p>
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
                  <p className="font-semibold text-foreground">Avg Volume</p>
                  <p className="text-sm text-muted-foreground">Monthly</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{avgVolume.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Filter className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Categories</p>
                  <p className="text-sm text-muted-foreground">Unique</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">
                  {new Set(data.keywords.map(k => k.category)).size}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Keywords List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top Keywords</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.keywords.map((keyword, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                    <p className="font-semibold text-foreground">{keyword.term}</p>
                    <Badge className={getCategoryColor(keyword.category)}>
                      {keyword.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Volume:</span>
                      <span className="text-sm font-medium">{keyword.volume.toLocaleString()}</span>
                    </div>
                    <Badge className={getCompetitionColor(keyword.competition)}>
                      {keyword.competition} Competition
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Keyword Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Keyword Distribution by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from(new Set(data.keywords.map(k => k.category))).map((category) => {
              const categoryKeywords = data.keywords.filter(k => k.category === category);
              const categoryVolume = categoryKeywords.reduce((sum, k) => sum + k.volume, 0);
              
              return (
                <div key={category} className="text-center p-4 border rounded-lg">
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                    {category}
                  </div>
                  <p className="text-2xl font-bold text-foreground mt-2">{categoryKeywords.length}</p>
                  <p className="text-sm text-muted-foreground">Keywords</p>
                  <p className="text-sm text-muted-foreground">{categoryVolume.toLocaleString()} volume</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};