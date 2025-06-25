
import { Play, Star } from "lucide-react";

export const TestimonialsSection = () => {
  const textTestimonials = [
    {
      rating: "★★★★★",
      text: "It's a perfect tool to analyze your competitor ads. It provides structure to a new business without controlling it.",
      author: "Shubham K"
    },
    {
      rating: "★★★★★",
      text: "AdSpyder became a selling point for my agency. We can quickly analyze and run the campaigns accordingly",
      author: "Abhishek"
    },
    {
      rating: "★★★★★",
      text: "Never thought this type of service exists in the market. It can automate strategy & planning for your business",
      author: "Prateek"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      thumbnail: "/placeholder.svg",
      author: "Sarah Johnson",
      title: "Marketing Director",
      company: "TechStart Inc."
    },
    {
      id: 2,
      thumbnail: "/placeholder.svg",
      author: "Mike Chen",
      title: "Digital Marketing Specialist",
      company: "Growth Agency"
    },
    {
      id: 3,
      thumbnail: "/placeholder.svg",
      author: "Emma Rodriguez",
      title: "E-commerce Manager",
      company: "RetailPro"
    }
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-full">
                💬 Customer Stories
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from marketing professionals who've transformed their campaigns with AdSpyder
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Video Testimonials</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {videoTestimonials.map((video) => (
                <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className="aspect-video bg-gray-900 relative cursor-pointer">
                    {/* Video Thumbnail Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-700 transition-colors shadow-lg">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                    
                    {/* Rating overlay */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-black/50 rounded-full px-3 py-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">{video.author}</h4>
                    <p className="text-orange-600 font-medium mb-1">{video.title}</p>
                    <p className="text-gray-600 text-sm">{video.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Written Reviews</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {textTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-orange-500 text-xl mb-4">
                    {testimonial.rating}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-gray-900">
                    – {testimonial.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
