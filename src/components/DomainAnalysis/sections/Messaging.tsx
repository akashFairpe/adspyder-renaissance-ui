import { MessageSquare, TrendingUp, Hash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MessagingProps {
  domain: string;
}

export const Messaging = ({ domain }: MessagingProps) => {
  const topCTAs = [
    { text: "Shop Now", frequency: 89, trend: "+12%" },
    { text: "Learn More", frequency: 67, trend: "+8%" },
    { text: "Get Started", frequency: 45, trend: "-3%" },
    { text: "Sign Up Free", frequency: 34, trend: "+15%" },
    { text: "Download App", frequency: 28, trend: "+5%" }
  ];

  const headlines = [
    "Transform Your Business Today",
    "Discover Amazing Deals",
    "Join Thousands of Happy Customers",
    "Limited Time Offer - Don't Miss Out",
    "Experience the Difference"
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-primary" />
        Messaging
      </h2>
      
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top CTAs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Top Call-to-Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCTAs.map((cta, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{cta.text}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex-1 bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(cta.frequency / 89) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{cta.frequency}</span>
                    </div>
                  </div>
                  <Badge variant={cta.trend.startsWith('+') ? 'default' : 'destructive'} className="ml-3">
                    {cta.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Headlines */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Hash className="w-5 h-5" />
              Popular Headlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {headlines.map((headline, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                  <p className="text-foreground font-medium">{headline}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Used {Math.floor(Math.random() * 20) + 5} times
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {Math.floor(Math.random() * 3) + 1} platforms
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Message Themes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Message Themes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {[
              "Urgency", "Value Proposition", "Social Proof", "Free Trial", 
              "Limited Time", "Exclusive Access", "Customer Success", "Innovation"
            ].map((theme) => (
              <Badge key={theme} variant="outline" className="px-3 py-1 text-sm">
                {theme}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};