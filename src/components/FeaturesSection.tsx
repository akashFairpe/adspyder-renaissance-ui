
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Eye,
  Download,
  Filter,
  Clock,
  Users
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Ad Library Search",
      description: "Search through 100M+ ads across 15+ platforms with advanced filters and AI-powered recommendations.",
      badge: "Core Feature",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Get detailed insights on ad spend, engagement rates, and performance metrics for competitor campaigns.",
      badge: "Analytics",
      color: "green"
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Discover competitor targeting strategies including demographics, interests, and custom audiences.",
      badge: "Intelligence",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Identify trending ad formats, creative styles, and messaging strategies in your industry.",
      badge: "Insights",
      color: "orange"
    },
    {
      icon: Eye,
      title: "Creative Monitoring",
      description: "Track competitor ad creative changes and get alerts when new campaigns launch.",
      badge: "Monitoring",
      color: "pink"
    },
    {
      icon: Download,
      title: "Export & Reports",
      description: "Export ad data, create custom reports, and share insights with your team.",
      badge: "Productivity",
      color: "indigo"
    }
  ];

  const platforms = [
    { name: "Google Ads", icon: "🔍", users: "4B+" },
    { name: "Facebook Ads", icon: "📘", users: "3B+" },
    { name: "YouTube Ads", icon: "📺", users: "2B+" },
    { name: "TikTok Ads", icon: "🎵", users: "1B+" },
    { name: "LinkedIn Ads", icon: "💼", users: "900M+" },
    { name: "Twitter Ads", icon: "🐦", users: "450M+" },
    { name: "Bing Ads", icon: "🔎", users: "400M+" },
    { name: "Amazon Ads", icon: "📦", users: "300M+" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700">
            Powerful Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to spy on
            <span className="text-blue-600"> competitor ads</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive ad intelligence platform gives you the tools and insights 
            to discover, analyze, and outperform your competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className={`inline-flex p-3 rounded-2xl bg-${feature.color}-100 text-${feature.color}-600 mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              
              <div className="mb-4">
                <Badge variant="outline" className="mb-3 text-xs">
                  {feature.badge}
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Supported Platforms */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              15+ Ad Platforms Supported
            </h3>
            <p className="text-gray-600 text-lg">
              Get comprehensive ad intelligence across all major advertising platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {platform.name}
                </h4>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {platform.users} users
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
