
import { Chrome, Facebook, Youtube, Linkedin, Twitter, Search, ShoppingBag, Target } from "lucide-react";

export const AdLibraryPlatforms = () => {
  const platforms = [
    { name: "Google", icon: Chrome, color: "text-blue-600" },
    { name: "Facebook", icon: Facebook, color: "text-blue-700" },
    { name: "YouTube", icon: Youtube, color: "text-red-600" },
    { name: "LinkedIn", icon: Linkedin, color: "text-blue-800" },
    { name: "Twitter", icon: Twitter, color: "text-blue-500" },
    { name: "Shopping", icon: ShoppingBag, color: "text-green-600" },
    { name: "Display", icon: Target, color: "text-purple-600" },
    { name: "Bing", icon: Search, color: "text-orange-600" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Empower Your Ad Campaigns with AdSpyder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor competitor advertising strategies across all major platforms in real-time
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center group">
              <platform.icon className={`h-8 w-8 mx-auto mb-3 ${platform.color} group-hover:scale-110 transition-transform`} />
              <p className="text-sm font-medium text-gray-700">{platform.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
