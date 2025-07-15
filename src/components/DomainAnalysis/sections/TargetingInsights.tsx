import { Target, Users, MapPin, Heart, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TargetingInsightsProps {
  domain: string;
}

export const TargetingInsights = ({ domain }: TargetingInsightsProps) => {
  const demographics = {
    gender: [
      { label: "Female", percentage: 58, color: "bg-pink-500" },
      { label: "Male", percentage: 42, color: "bg-blue-500" }
    ],
    ageGroups: [
      { label: "18-24", percentage: 15, color: "bg-green-500" },
      { label: "25-34", percentage: 35, color: "bg-blue-500" },
      { label: "35-44", percentage: 28, color: "bg-purple-500" },
      { label: "45-54", percentage: 15, color: "bg-orange-500" },
      { label: "55+", percentage: 7, color: "bg-red-500" }
    ]
  };

  const topLocations = [
    { city: "New York", percentage: 22 },
    { city: "Los Angeles", percentage: 18 },
    { city: "Chicago", percentage: 12 },
    { city: "Houston", percentage: 10 },
    { city: "Phoenix", percentage: 8 }
  ];

  const interests = [
    "Shopping", "Technology", "Fashion", "Travel", "Food & Dining",
    "Fitness", "Home & Garden", "Entertainment", "Business", "Education"
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Target className="w-6 h-6" />
        Targeting Insights
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gender Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="w-5 h-5" />
              Gender Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {demographics.gender.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{item.label}</span>
                      <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-secondary rounded-full">
                      <div 
                        className={`h-3 ${item.color} rounded-full transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Age Groups */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Age Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {demographics.ageGroups.map((group) => (
                <div key={group.label} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{group.label}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-secondary rounded-full">
                      <div 
                        className={`h-2 ${group.color} rounded-full transition-all duration-500`}
                        style={{ width: `${(group.percentage / 35) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{group.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Locations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Top Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topLocations.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                  <span className="font-medium text-foreground">{location.city}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-secondary rounded-full">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${(location.percentage / 22) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">{location.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interest Targeting - Locked */}
        <Card className="relative">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Interest Targeting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="blur-sm">
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <div key={index} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-card rounded-lg p-4 shadow-lg border text-center">
                  <Lock className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <p className="font-medium text-foreground">Unlock Interest Data</p>
                  <p className="text-sm text-muted-foreground">View detailed targeting insights</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};