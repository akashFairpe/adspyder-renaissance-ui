
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const VsBigSpyTestimonials = () => {
  const testimonials = [
    {
      name: "Shubham K",
      content: "It's a perfect tool to analyze your competitor ads. It provides structure to a new business without controlling it.",
      initials: "SK"
    },
    {
      name: "Shreyas Puttige",
      content: "AdSpyder became a selling point for my agency. We can quickly analyze and run the campaigns accordingly.",
      initials: "SP"
    },
    {
      name: "Prateek",
      content: "Never thought this type of service exists in the market. It can automate strategy & planning for your business.",
      initials: "P"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Join over 10,000+ SMEs already using AdSpyder
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
