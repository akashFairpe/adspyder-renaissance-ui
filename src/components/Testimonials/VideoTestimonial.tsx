
import { Play } from "lucide-react";

interface VideoTestimonialProps {
  name: string;
  role: string;
  company: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export const VideoTestimonial = ({ 
  name, 
  role, 
  company, 
  videoUrl, 
  thumbnailUrl 
}: VideoTestimonialProps) => {
  return (
    <div className="bg-white rounded-2xl p-1 shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group cursor-pointer">
        {/* Video thumbnail or placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-700 transition-colors shadow-lg">
              <Play className="h-6 w-6 text-white ml-1" />
            </div>
            <p className="text-white font-medium">{name}</p>
            <p className="text-gray-300 text-sm">{role} at {company}</p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-3 left-3 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-3 left-7 w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="absolute top-3 left-11 w-2 h-2 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};
