
import { AdShowcasePage } from "@/components/AdShowcase/AdShowcasePage";

const TestPage = () => {
  // Sample data for Bicycle Ads - this would come from API in real implementation
  const pageData = {
    title: "Bicycle Ads",
    description: "See creative ads from agencies around the world created for Bicycle Ads Creative.",
    ads: [
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
    ]
  };

  return <AdShowcasePage {...pageData} />;
};

export default TestPage;
