import { Users, TrendingUp, BarChart3, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CompetitiveAnalysisProps {
  domain: string;
}

export const CompetitiveAnalysis = ({ domain }: CompetitiveAnalysisProps) => {
  const competitors = [
    {
      domain: "competitor1.com",
      name: "Competitor One",
      shareOfVoice: 28,
      adSpend: 45000,
      activeAds: 234,
      trend: "+15%"
    },
    {
      domain: "competitor2.com", 
      name: "Competitor Two",
      shareOfVoice: 22,
      adSpend: 38000,
      activeAds: 189,
      trend: "+8%"
    },
    {
      domain: domain,
      name: "Your Domain",
      shareOfVoice: 18,
      adSpend: 32000,
      activeAds: 156,
      trend: "+12%"
    },
    {
      domain: "competitor3.com",
      name: "Competitor Three", 
      shareOfVoice: 16,
      adSpend: 28000,
      activeAds: 134,
      trend: "-3%"
    },
    {
      domain: "competitor4.com",
      name: "Competitor Four",
      shareOfVoice: 16,
      adSpend: 25000,
      activeAds: 112,
      trend: "+5%"
    }
  ];

  const benchmarks = [
    { metric: "Avg. Ad Spend", yourValue: "$32K", industryAvg: "$28.5K", performance: "above" },
    { metric: "Active Ads", yourValue: "156", industryAvg: "142", performance: "above" },
    { metric: "Engagement Rate", yourValue: "3.2%", industryAvg: "2.8%", performance: "above" },
    { metric: "CPC", yourValue: "$3.45", industryAvg: "$3.82", performance: "below" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Users className="w-6 h-6" />
        Competitive Analysis
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Competitors */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Top Competitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {competitors.map((competitor, index) => (
                <div 
                  key={index} 
                  className={`border rounded-lg p-4 ${competitor.domain === domain ? 'bg-primary/5 border-primary' : ''}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-foreground">{competitor.name}</h4>
                      <p className="text-sm text-muted-foreground">{competitor.domain}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {competitor.domain === domain && <Badge variant="default">You</Badge>}
                      <Badge variant={competitor.trend.startsWith('+') ? 'default' : 'destructive'}>
                        {competitor.trend}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Share of Voice</p>
                      <p className="font-semibold text-foreground">{competitor.shareOfVoice}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Est. Spend</p>
                      <p className="font-semibold text-foreground">${(competitor.adSpend / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Active Ads</p>
                      <p className="font-semibold text-foreground">{competitor.activeAds}</p>
                    </div>
                  </div>
                  
                  {/* Share of voice bar */}
                  <div className="mt-3">
                    <div className="w-full h-2 bg-secondary rounded-full">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          competitor.domain === domain ? 'bg-primary' : 'bg-muted-foreground'
                        }`}
                        style={{ width: `${(competitor.shareOfVoice / 28) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Industry Benchmarks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Industry Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {benchmarks.map((benchmark, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{benchmark.metric}</h4>
                    <Badge variant={benchmark.performance === "above" ? "default" : "secondary"}>
                      {benchmark.performance === "above" ? "Above Avg" : "Below Avg"}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Your Performance</p>
                      <p className="text-lg font-semibold text-foreground">{benchmark.yourValue}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Industry Average</p>
                      <p className="text-lg font-semibold text-muted-foreground">{benchmark.industryAvg}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-accent/20 rounded-lg">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Overall Performance</p>
                  <p className="text-sm text-muted-foreground">You're performing above industry average in 3 out of 4 key metrics</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Share of Voice Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Market Share of Voice</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-center h-32">
              <div className="relative w-32 h-32">
                {/* Simple pie chart representation */}
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary via-blue-500 to-green-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-sm font-bold">SOV</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
              {competitors.map((competitor, index) => (
                <div key={index} className="text-xs">
                  <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${
                    index === 0 ? 'bg-blue-500' :
                    index === 1 ? 'bg-green-500' :
                    competitor.domain === domain ? 'bg-primary' :
                    index === 3 ? 'bg-orange-500' : 'bg-purple-500'
                  }`}></div>
                  <p className="font-medium">{competitor.shareOfVoice}%</p>
                  <p className="text-muted-foreground truncate">{competitor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};