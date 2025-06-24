
import { Button } from "@/components/ui/button";
import { Target, Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="text-center mb-12">
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

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/free-demo" className="hover:text-[#e39000] transition-colors">Free Demo</a></li>
                <li><a href="/contact-us" className="hover:text-[#e39000] transition-colors">Contact us</a></li>
                <li><a href="/terms-condition" className="hover:text-[#e39000] transition-colors">Terms & Condition</a></li>
                <li><a href="/google-api-disclosure" className="hover:text-[#e39000] transition-colors">Google API Disclosure</a></li>
                <li><a href="/privacy-policy" className="hover:text-[#e39000] transition-colors">Privacy Policy</a></li>
                <li><a href="/refund-policy" className="hover:text-[#e39000] transition-colors">Refund Policy</a></li>
                <li><a href="/online-keyword-ad-checker" className="hover:text-[#e39000] transition-colors">Online Keyword Ad Checker</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/solutions" className="hover:text-[#e39000] transition-colors">All Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/google-ads-spy" className="hover:text-[#e39000] transition-colors">Google Ads Spy</a></li>
                <li><a href="/facebook-ads-spy" className="hover:text-[#e39000] transition-colors">Facebook Ads Spy</a></li>
                <li><a href="/youtube-ads-spy" className="hover:text-[#e39000] transition-colors">Youtube Ads Spy</a></li>
                <li><a href="/bing-ads-spy" className="hover:text-[#e39000] transition-colors">Bing Ads Spy</a></li>
                <li><a href="/instagram-ads-spy" className="hover:text-[#e39000] transition-colors">Instagram Ads Spy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Compare</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/vs-poweradspy" className="hover:text-[#e39000] transition-colors">Vs Poweradspy</a></li>
                <li><a href="/vs-bigspy" className="hover:text-[#e39000] transition-colors">Vs BigSpy</a></li>
                <li><a href="/vs-adspy" className="hover:text-[#e39000] transition-colors">Vs AdSpy</a></li>
                <li><a href="/vs-adplexity" className="hover:text-[#e39000] transition-colors">Vs Adplexity</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Partner</h4>
              <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="bg-white rounded-lg p-3 flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-800">Google Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              © GSTECH TECHNOLOGY PRIVATE LIMITED
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
