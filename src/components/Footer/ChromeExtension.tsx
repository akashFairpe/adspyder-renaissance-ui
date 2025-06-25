
import { Button } from "@/components/ui/button";
import { Chrome, Star, Download } from "lucide-react";

export const ChromeExtension = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Chrome className="h-12 w-12 text-white" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2">
        AdSpyder Chrome Extension
      </h3>
      
      <p className="text-orange-100 mb-4 max-w-md mx-auto">
        Get instant domain and ad analysis directly from your browser. Access powerful insights with just one click.
      </p>
      
      <div className="flex items-center justify-center space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
        <span className="text-white font-semibold ml-2">4.8/5</span>
        <span className="text-orange-100 text-sm">(1,200+ reviews)</span>
      </div>
      
      <Button 
        asChild
        className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <a 
          href="https://chromewebstore.google.com/detail/adspyder-get-domain-ad-an/dpfdbgmgkemmfbmmjgikggnljphokpij"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2"
        >
          <Download className="h-5 w-5" />
          <span>Download Free Extension</span>
        </a>
      </Button>
      
      <p className="text-orange-100 text-sm mt-3">
        Available for Chrome • Free to use
      </p>
    </div>
  );
};
