
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Target className="h-8 w-8 text-[#e39000]" />
              <span className="text-2xl font-bold">AdSpyder</span>
            </div>
            
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The world's most comprehensive ad intelligence platform. 
              Spy on competitor ads across 15+ platforms and dominate your market 
              with data-driven advertising strategies.
            </p>
          </div>

          {/* Footer Links - Simple layout for now */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/ad-library" className="hover:text-[#e39000] transition-colors">Ad Library</a></li>
                <li><a href="/ad-analysis" className="hover:text-[#e39000] transition-colors">Ad Analysis</a></li>
                <li><a href="/ad-generation" className="hover:text-[#e39000] transition-colors">Ad Generation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/agencies" className="hover:text-[#e39000] transition-colors">For Agencies</a></li>
                <li><a href="/brands" className="hover:text-[#e39000] transition-colors">For Brands</a></li>
                <li><a href="/freelancers" className="hover:text-[#e39000] transition-colors">For Freelancers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/blog" className="hover:text-[#e39000] transition-colors">Blog</a></li>
                <li><a href="/case-studies" className="hover:text-[#e39000] transition-colors">Case Studies</a></li>
                <li><a href="/help" className="hover:text-[#e39000] transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-[#e39000] transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-[#e39000] transition-colors">Contact</a></li>
                <li><a href="/careers" className="hover:text-[#e39000] transition-colors">Careers</a></li>
              </ul>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
