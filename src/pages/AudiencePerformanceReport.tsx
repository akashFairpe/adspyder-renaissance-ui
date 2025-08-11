import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Target, 
  Users, 
  TrendingUp, 
  Eye, 
  MousePointer, 
  DollarSign,
  Smartphone,
  MapPin,
  Monitor,
  PieChart,
  LineChart,
  Calendar,
  Play,
  Filter,
  ChevronRight
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AudiencePerformanceReport() {
  const keyMetrics = [
    { icon: Eye, label: "Impressions", description: "Total ad views by audience segment" },
    { icon: MousePointer, label: "Clicks", description: "Click-through performance" },
    { icon: Target, label: "CTR", description: "Click-through rate by audience" },
    { icon: DollarSign, label: "Avg CPC", description: "Cost per click analysis" },
    { icon: TrendingUp, label: "Conversions", description: "Conversion tracking" },
    { icon: BarChart3, label: "CPA", description: "Cost per acquisition" },
    { icon: PieChart, label: "ROAS", description: "Return on ad spend" },
    { icon: LineChart, label: "CVR", description: "Conversion rate insights" }
  ];

  const segmentationDimensions = [
    { icon: Smartphone, label: "Device", description: "Mobile, desktop, tablet performance" },
    { icon: MapPin, label: "Location", description: "Geographic targeting insights" },
    { icon: Monitor, label: "Network", description: "Search vs display performance" },
    { icon: Users, label: "Demographics", description: "Age, gender, income segments" },
    { icon: Target, label: "In-Market & Affinity", description: "Interest-based audience clusters" }
  ];

  const visualFeatures = [
    { icon: BarChart3, title: "KPI Cards", description: "Quick wins dashboard for top-performing audiences" },
    { icon: TrendingUp, title: "Stacked Bar Charts", description: "ROAS comparison by audience and device type" },
    { icon: LineChart, title: "Trend Analysis", description: "CPA and ROAS performance over time" },
    { icon: Target, title: "Heatmap Insights", description: "Device × Audience conversion rate visualization" },
    { icon: PieChart, title: "Audience Distribution", description: "Share of performance by audience type" }
  ];

  const useCases = [
    "Increase bids for audiences with high ROAS",
    "Remove or refine underperforming segments",
    "Tailor creatives for specific audience clusters"
  ];

  const steps = [
    { title: "Connect your Google Ads account", description: "Secure integration with your advertising platform" },
    { title: "AdSpyder automatically imports audience-level performance data", description: "Real-time data synchronization and processing" },
    { title: "Visualize it in interactive charts, tables, and KPIs", description: "Comprehensive dashboard with customizable views" },
    { title: "Apply filters to drill down into devices, geos, and time ranges", description: "Granular analysis with multi-dimensional filtering" }
  ];

  const faqs = [
    {
      question: "How often is the data updated?",
      answer: "Every 24 hours or based on your account's sync frequency."
    },
    {
      question: "Can I customize metrics?",
      answer: "Yes — toggle visible KPIs and select which charts to display."
    },
    {
      question: "Is it integrated with other AdSpyder reports?",
      answer: "Yes — it shares global filters for seamless analysis."
    },
    {
      question: "Do I need technical skills?",
      answer: "No — the interface is designed for marketers, not developers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BarChart3 className="h-4 w-4" />
                  <span>PPC Analytics Suite</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Audience Performance Report
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Identify your most profitable audiences and focus your budget where it matters.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    See It in Action
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 text-lg font-semibold"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book a Demo
                  </Button>
                </div>
              </div>
              
              {/* Hero Visual Placeholder */}
              <div className="relative">
                <Card className="p-8 shadow-2xl bg-card border-border">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-card-foreground">Audience Performance Dashboard</h3>
                      <div className="bg-accent-green/10 text-accent-green px-3 py-1 rounded-full text-sm font-medium">
                        Live Data
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-accent-foreground">+127%</div>
                        <div className="text-sm text-muted-foreground">ROAS Improvement</div>
                      </div>
                      <div className="bg-accent-blue/10 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-accent-blue">-32%</div>
                        <div className="text-sm text-muted-foreground">CPA Reduction</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Top Performing Audience</span>
                        <span className="text-sm font-medium text-card-foreground">In-Market: Home & Garden</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Device Leader</span>
                        <span className="text-sm font-medium text-card-foreground">Mobile (65% conversions)</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Report Is */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Complete Audience Performance Breakdown
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The Audience Performance Report provides a complete breakdown of ad performance by audience segment, 
                allowing marketers to see exactly which audiences deliver the best ROI and make data-driven optimization decisions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Key Metrics Tracked</h3>
                <div className="grid grid-cols-2 gap-4">
                  {keyMetrics.map((metric, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                      <div className="bg-accent w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <metric.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-card-foreground">{metric.label}</div>
                        <div className="text-sm text-muted-foreground">{metric.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Segmentation Dimensions</h3>
                <div className="space-y-4">
                  {segmentationDimensions.map((dimension, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border">
                      <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <dimension.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-card-foreground">{dimension.label}</div>
                        <div className="text-sm text-muted-foreground">{dimension.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four simple steps to unlock comprehensive audience insights and optimize your advertising performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-2xl p-6 border border-border h-full">
                    <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Useful */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Audience Performance Analytics Matter
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Business Value</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Quickly identify top-performing audiences, reduce wasted ad spend, and improve targeting efficiency. 
                      Make informed decisions that directly impact your bottom line.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Operational Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Faster reporting, data-driven decisions, and campaign scaling capabilities that save hours of manual analysis 
                      while providing deeper insights than ever before.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Example Use Cases</h3>
                <div className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                      <div className="bg-accent-green/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                      </div>
                      <p className="text-card-foreground">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Visual Features & Analytics
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive visualization tools designed to make complex audience data actionable and easy to understand
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visualFeatures.map((feature, index) => (
                <Card key={index} className="p-6 border border-border hover:shadow-lg transition-all group">
                  <CardContent className="p-0">
                    <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                      <feature.icon className="h-7 w-7 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use It */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Who Should Use This Report?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Designed for marketing professionals who need actionable audience insights to optimize their advertising performance
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "PPC Managers", icon: Target },
                { title: "Digital Analysts", icon: BarChart3 },
                { title: "Agency Strategists", icon: TrendingUp },
                { title: "In-House Marketing Teams", icon: Users }
              ].map((role, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border text-center">
                  <div className="bg-accent w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <role.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold text-card-foreground">{role.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about the Audience Performance Report
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-orange-600 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pinpoint Your Best Audiences Now
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Stop guessing which audiences perform best. Get data-driven insights that transform your advertising ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Analyzing
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Get a Demo
              </Button>
            </div>
            
            <p className="text-orange-200 text-sm mt-4">
              No credit card required • 7-day free trial • Setup in under 2 minutes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}