
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdShowcasePage } from "@/components/AdShowcase/AdShowcasePage";
import { Button } from "@/components/ui/button";

const TestPage = () => {
  // Sample static data for Bicycle Ads - this would come from API in real implementation
  const staticAds = [
    {
      id: 1,
      image: "/placeholder.svg",
      category: "Fitness",
      title: "City Bikes Summer Promo 2025",
      description: "A clean, bold design used by a German cycling brand during its seasonal launch."
    },
    {
      id: 2,
      image: "/placeholder.svg",
      category: "Outdoor",
      title: "Mountain Trail Adventure",
      description: "Dynamic outdoor photography showcasing rugged terrain bikes for adventure seekers."
    },
    {
      id: 3,
      image: "/placeholder.svg",
      category: "Retail",
      title: "Urban Commuter Collection",
      description: "Minimalist design targeting city professionals with sleek commuter bike models."
    },
    {
      id: 4,
      image: "/placeholder.svg",
      category: "Fitness",
      title: "Electric Bike Revolution",
      description: "Innovative campaign highlighting the convenience of electric-powered cycling."
    },
    {
      id: 5,
      image: "/placeholder.svg",
      category: "Outdoor",
      title: "Weekend Explorer Series",
      description: "Family-focused campaign promoting weekend cycling adventures and outdoor bonding."
    },
    {
      id: 6,
      image: "/placeholder.svg",
      category: "Retail",
      title: "Student Budget Bikes",
      description: "Affordable cycling solutions targeted at university students and young adults."
    },
    {
      id: 7,
      image: "/placeholder.svg",
      category: "Fitness",
      title: "Professional Racing Gear",
      description: "High-performance campaign showcasing professional-grade racing bicycles."
    },
    {
      id: 8,
      image: "/placeholder.svg",
      category: "Outdoor",
      title: "Beach Cruiser Lifestyle",
      description: "Relaxed coastal campaign featuring comfortable beach cruiser bicycles."
    },
    {
      id: 9,
      image: "/placeholder.svg",
      category: "Retail",
      title: "Kids First Bike Program",
      description: "Heartwarming campaign promoting children's first bicycle learning experiences."
    },
    {
      id: 10,
      image: "/placeholder.svg",
      category: "Fitness",
      title: "Indoor Cycling Studio",
      description: "Modern fitness campaign showcasing stationary bikes for home workout enthusiasts."
    },
    {
      id: 11,
      image: "/placeholder.svg",
      category: "Outdoor",
      title: "Bike Touring Adventures",
      description: "Long-distance touring campaign featuring durable bikes for cross-country journeys."
    },
    {
      id: 12,
      image: "/placeholder.svg",
      category: "Retail",
      title: "Vintage Classic Collection",
      description: "Nostalgic campaign celebrating classic bicycle designs and timeless craftsmanship."
    }
  ];

  const pageData = {
    title: "Bicycle Ads",
    description: "See creative ads from agencies around the world created for Bicycle Ads Creative.",
    // Option 1: Use static data (current approach)
    ads: staticAds,
    
    // Option 2: Use API data source (uncomment to use API instead)
    // dataSource: {
    //   type: 'api' as const,
    //   apiUrl: 'https://your-api-endpoint.com/bicycle-ads',
    //   apiHeaders: {
    //     'Authorization': 'Bearer your-api-key',
    //     'X-Custom-Header': 'your-custom-value',
    //   },
    // },
  };

  return (
    <div className="min-h-screen bg-[#fcfdff]">
      <Header />
      <main>
        <AdShowcasePage {...pageData} />
        
        {/* Additional Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                Explore High-Converting Bicycle Ad Campaigns from Around the World
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  Looking to create compelling and high-performing bicycle ads? AdSpyder's curated collection of Bicycle Ad Creatives showcases real-world ad campaigns from top agencies and brands. From product launches and seasonal sales to sustainability messages and urban cycling promotions, discover how bicycle brands are advertising across Facebook, Google, Instagram, and other platforms.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                  Our ad gallery includes:
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></span>
                    <span>Static and dynamic image ads from global bike manufacturers and local retailers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></span>
                    <span>Campaigns targeting urban cyclists, fitness enthusiasts, and eco-conscious consumers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></span>
                    <span>A wide variety of ad styles—from minimal, lifestyle-focused creatives to bold, high-impact sales promos</span>
                  </li>
                </ul>
                
                <p className="text-lg mb-8">
                  Use this resource to gain inspiration for your next cycling campaign. Whether you're promoting a mountain bike, electric bike, road cycle, or a biking accessory, these ads offer powerful ideas for copywriting, design, and targeting strategies.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                  Why Bicycle Ads Matter in 2025
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></span>
                    <span>Cycling is seeing massive global adoption due to sustainability efforts and urban mobility trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></span>
                    <span>Seasonal promotions (spring/summer/fall) offer prime opportunities for bike sales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></span>
                    <span>Performance-focused ad creatives consistently drive high engagement and conversions for bicycle brands</span>
                  </li>
                </ul>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                  Use AdSpyder's Bicycle Ads Library to:
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></span>
                    <span>Spy on top-performing bicycle ad campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></span>
                    <span>Get inspired by layout, messaging, and visual direction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></span>
                    <span>Understand ad trends by region, format, or target audience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></span>
                    <span>Discover landing pages and CTAs that convert</span>
                  </li>
                </ul>
                
                <p className="text-lg mb-8">
                  Optimize your next Facebook or Google campaign with ideas from real-world bicycle ad creatives. Explore now, or start your free trial to access full ad analytics and insights.
                </p>
                
                <div className="text-center mt-12">
                  <Button 
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Start Your Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestPage;
