import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Play, 
  Calendar,
  Shield,
  Globe,
  Download,
  Bell,
  Chrome,
  Users,
  DollarSign,
  Check,
  X,
  CreditCard,
  Eye,
  BarChart3,
  FileText,
  Star
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function FreeTrialLanding() {
  useSEO({
    title: "Free Trial—No Card | See More Ads Across More Platforms | AdSpyder",
    description: "Start a free trial with no credit card. Research more ads across more platforms. Transparent pricing and unlimited previews while you evaluate.",
    keywords: "free trial, ad research, no credit card, transparent pricing, ad library, competitive intelligence",
    canonical: "/free-trial",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AdSpyder",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  });

  const handleCTAClick = (location: string) => {
    // Analytics event tracking
    console.log('CTA clicked:', location);
    window.open('https://dashboard.adspyder.io', '_blank');
  };

  const handlePricingView = () => {
    console.log('Pricing viewed');
  };

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Creative Research",
      description: "Discover top creatives by keyword, industry, and format—fast."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Export & Share",
      description: "Export creatives and insights to share with clients and teams."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Alerts & Tracking",
      description: "Get notified as markets shift. Never miss a winning move."
    },
    {
      icon: <Chrome className="h-6 w-6" />,
      title: "Chrome-Friendly",
      description: "Works beautifully in your browser—no installs required."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Agency-Ready",
      description: "Workspaces, permissions, and workflows your team will love."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Transparent Pricing",
      description: "Clear plan limits. No card wall to start."
    }
  ];

  const comparisonFeatures = [
    { feature: "Free trial without credit card", adspyder: true, others: false },
    { feature: "Unlimited previews while evaluating", adspyder: true, others: false },
    { feature: "Broader platform coverage", adspyder: true, others: false },
    { feature: "Transparent, public pricing", adspyder: true, others: false },
    { feature: "Easy export & share", adspyder: true, others: false }
  ];

  const testimonials = [
    {
      quote: "Being able to start without a card and still see real coverage was a breath of fresh air.",
      author: "Growth Marketer, D2C",
      rating: 5
    },
    {
      quote: "We switched for wider platform coverage and stayed for the exports and alerts.",
      author: "Media Buyer, Agency",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do I need a credit card to start?",
      answer: "No. Start your free trial with zero payment details. Explore coverage first."
    },
    {
      question: "Is the trial actually free?",
      answer: "Yes. Evaluate key features, previews, and workflows without a paywall."
    },
    {
      question: "Which platforms are covered?",
      answer: "Major ad platforms including Facebook, Google Ads, Instagram, YouTube, TikTok, and more."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes—no contracts. Upgrade only when you're ready."
    },
    {
      question: "Can I export creatives during the trial?",
      answer: "Exports are available within fair-use trial limits. Paid plans expand capacity."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdff]">
      <Header />
      
      {/* Sticky Top Bar */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-border/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                Free Trial • No Card Needed
              </Badge>
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                Transparent Pricing
              </Badge>
            </div>
            <Button 
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => handleCTAClick('sticky')}
              asChild
            >
              <a href="https://dashboard.adspyder.io" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary to-background py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                      Ad Research, Made Lovable
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      Free Trial—No Card Needed
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      See more ads across more platforms. Start free today and explore creative and competitive insights without a paywall.
                    </p>
                  </div>
                   
                   <Button 
                     size="lg" 
                     className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                     onClick={() => handleCTAClick('hero')}
                     asChild
                   >
                     <a href="https://dashboard.adspyder.io" target="_blank" rel="noopener noreferrer">
                       <Play className="h-5 w-5 mr-2" />
                       Start Free Trial
                     </a>
                   </Button>

                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Transparent pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Unlimited previews</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:pl-12">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
                    <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-orange-600 rounded-full flex items-center justify-center">
                          <Target className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-gray-600 font-medium">Dashboard Preview</p>
                        <p className="text-gray-500 text-sm">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why People Switch */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Tired of Paywalls & Limits?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Many tools gate features behind a card wall and cap what you can see. AdSpyder flips the script—start free, explore more, and decide with confidence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    Common Pain Points
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">No free trial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Credit card needed upfront</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">"Free" plans with heavy limits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Limited ad libraries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Narrow platform coverage</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    How AdSpyder Helps
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Free trial—no card needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Explore real coverage before paying</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Unlimited ad previews while evaluating</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Larger, fresher ad libraries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Research across multiple platforms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage & Platforms */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                More Ads. More Platforms.
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Research creatives across the channels that matter most—without bumps.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">1 Billion+</div>
                  <div className="text-gray-600">Ads tracked</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">10 Million+</div>
                  <div className="text-gray-600">Advertisers monitored</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600">Major Platforms</div>
                  <div className="text-xs text-gray-500 mt-1">Facebook, Google, Instagram, YouTube, TikTok, and more</div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                onClick={() => handleCTAClick('coverage')}
                asChild
              >
                <a href="https://dashboard.adspyder.io" target="_blank" rel="noopener noreferrer">
                  <Play className="h-5 w-5 mr-2" />
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Value Highlights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Do More With Every Click
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                  onClick={() => handleCTAClick('value_highlights')}
                  asChild
                >
                  <a href="https://dashboard.adspyder.io" target="_blank" rel="noopener noreferrer">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Start Free—No Card Needed
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Compare at a Glance
                </h2>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">AdSpyder</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Other tools</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {comparisonFeatures.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900">{item.feature}</td>
                          <td className="px-6 py-4 text-center">
                            {item.adspyder ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-red-500 mx-auto" />
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {item.others ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-gray-400 text-sm">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Comparisons are based on publicly available information and user feedback and may change.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pick a Plan—Start Free
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Explore the product first. Upgrade only when you're ready.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Free trial—no credit card needed</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Clear plan limits & overviews</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Cancel anytime</span>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                  onClick={() => handleCTAClick('pricing')}
                  asChild
                >
                  <a href="https://dashboard.adspyder.io" target="_blank" rel="noopener noreferrer">
                    <Play className="h-5 w-5 mr-2" />
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials & Logos */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Loved by Marketers & Teams
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white border-gray-200">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-gray-700 mb-4 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-sm font-medium text-gray-900">
                        — {testimonial.author}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-gray-50 rounded-lg px-6 border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Start Free—See More, Sooner
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                No card required. Explore a larger ad library across more platforms.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50 px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => handleCTAClick('final')}
                  asChild
                >
                  <a href="https://dashboard.adspyder.io" target="_blank" rel="noopener noreferrer">
                    <Play className="h-5 w-5 mr-2" />
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}