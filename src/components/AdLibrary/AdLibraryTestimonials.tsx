
import { Star } from "lucide-react";

export const AdLibraryTestimonials = () => {
  const testimonials = [
    {
      name: "Shubham K",
      role: "Digital Marketing Manager",
      company: "TechStart Inc",
      content: "Perfect tool to analyze your competitor ads. The insights we get help us stay ahead of the competition.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Abhishek",
      role: "Agency Owner",
      company: "Growth Marketing Co",
      content: "AdSpyder became a selling point for my agency. Clients love the competitive intelligence we provide.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Prateek",
      role: "Marketing Director",
      company: "E-commerce Plus",
      content: "It can automate strategy & planning for your business. The time saved is incredible.",
      rating: 5,
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Marketing Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our users have to say about AdSpyder's Ad Library
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-gray-200 mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
