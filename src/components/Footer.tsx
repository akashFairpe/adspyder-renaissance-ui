
import { Button } from "@/components/ui/button";
import { Target, Mail, Phone, MapPin, Twitter, Linkedin, Youtube, Facebook } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Ad Library", href: "/ad-library" },
        { name: "Ad Analysis", href: "/ad-analysis" },
        { name: "Domain Analysis", href: "/domain-analysis" },
        { name: "Landing Page Analysis", href: "/landing-page-analysis" },
        { name: "Ad Generation", href: "/ad-generation" },
        { name: "API", href: "/api" }
      ]
    },
    {
      title: "Platforms",
      links: [
        { name: "Google Ads", href: "/google-ads" },
        { name: "Facebook Ads", href: "/facebook-ads" },
        { name: "YouTube Ads", href: "/youtube-ads" },
        { name: "TikTok Ads", href: "/tiktok-ads" },
        { name: "LinkedIn Ads", href: "/linkedin-ads" },
        { name: "All Platforms", href: "/platforms" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "For Agencies", href: "/agencies" },
        { name: "For D2C Brands", href: "/d2c-brands" },
        { name: "For Freelancers", href: "/freelancers" },
        { name: "For Affiliates", href: "/affiliates" },
        { name: "Enterprise", href: "/enterprise" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Help Center", href: "/help" },
        { name: "Video Tutorials", href: "/tutorials" },
        { name: "Ad Intelligence Guide", href: "/guide" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
        { name: "Partners", href: "/partners" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Target className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">AdSpyder</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              The world's most comprehensive ad intelligence platform. 
              Spy on competitor ads across 15+ platforms and dominate your market 
              with data-driven advertising strategies.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span>hello@adspyder.io</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Stay ahead of the competition</h3>
              <p className="text-gray-300">Get weekly ad intelligence insights delivered to your inbox.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 min-w-0 sm:min-w-[300px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AdSpyder. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="/security" className="text-gray-400 hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
