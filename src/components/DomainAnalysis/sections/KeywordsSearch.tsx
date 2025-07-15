import { Search, TrendingUp, DollarSign, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface KeywordsSearchProps {
  domain: string;
}

export const KeywordsSearch = ({ domain }: KeywordsSearchProps) => {
  const keywordData = {
    branded: [
      { keyword: domain.split('.')[0], volume: 12500, cpc: 2.45, position: 1.2, trend: "+15%" },
      { keyword: `${domain.split('.')[0]} app`, volume: 3200, cpc: 1.89, position: 1.8, trend: "+8%" },
      { keyword: `${domain.split('.')[0]} login`, volume: 2800, cpc: 0.95, position: 1.1, trend: "+12%" },
      { keyword: `${domain.split('.')[0]} reviews`, volume: 1900, cpc: 3.20, position: 2.1, trend: "-2%" }
    ],
    nonBranded: [
      { keyword: "online shopping deals", volume: 45000, cpc: 4.20, position: 3.2, trend: "+22%" },
      { keyword: "best ecommerce platform", volume: 28000, cpc: 6.80, position: 2.8, trend: "+18%" },
      { keyword: "discount shopping online", volume: 22000, cpc: 3.95, position: 4.1, trend: "+5%" },
      { keyword: "free shipping deals", volume: 18500, cpc: 2.85, position: 3.7, trend: "+12%" }
    ]
  };

  const renderKeywordTable = (keywords: typeof keywordData.branded) => (
    <div className="space-y-3">
      {keywords.map((keyword, index) => (
        <div key={index} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-foreground">{keyword.keyword}</h4>
            <Badge variant={keyword.trend.startsWith('+') ? 'default' : 'destructive'}>
              {keyword.trend}
            </Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Search Volume</p>
              <p className="font-semibold text-foreground">{keyword.volume.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Avg CPC</p>
              <p className="font-semibold text-foreground">${keyword.cpc}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Avg Position</p>
              <p className="font-semibold text-foreground">{keyword.position}</p>
            </div>
          </div>
          
          {/* Volume bar */}
          <div className="mt-3">
            <div className="w-full h-2 bg-secondary rounded-full">
              <div 
                className="h-2 bg-primary rounded-full transition-all duration-500"
                style={{ width: `${(keyword.volume / 45000) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Search className="w-6 h-6 text-primary" />
        Keywords & Search
      </h2>
      
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">247</p>
                <p className="text-sm text-muted-foreground">Total Keywords</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">89K</p>
                <p className="text-sm text-muted-foreground">Monthly Volume</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">$3.45</p>
                <p className="text-sm text-muted-foreground">Avg CPC</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2.4</p>
                <p className="text-sm text-muted-foreground">Avg Position</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Keywords Tables */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top Keywords</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="branded" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="branded">Branded Keywords</TabsTrigger>
              <TabsTrigger value="non-branded">Non-Branded Keywords</TabsTrigger>
            </TabsList>
            
            <TabsContent value="branded" className="mt-6">
              {renderKeywordTable(keywordData.branded)}
            </TabsContent>
            
            <TabsContent value="non-branded" className="mt-6">
              {renderKeywordTable(keywordData.nonBranded)}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};