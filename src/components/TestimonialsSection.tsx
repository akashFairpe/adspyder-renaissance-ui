
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Growth Marketing Manager",
      company: "TechFlow SaaS",
      image: "👩‍💼",
      rating: 5,
      text: "AdSpyder helped us increase our ROAS by 340% in just 3 months. The competitor intelligence is incredible - we can see exactly what's working in our industry.",
      results: "340% ROAS increase"
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Marketing Director",
      company: "E-commerce Giant",
      image: "👨‍💻",
      rating: 5,
      text: "The ad library is a goldmine. We've discovered winning creative angles we never would have thought of. Our team uses it daily for campaign planning.",
      results: "50% more conversions"
    },
    {
      name: "Emma Thompson",
      role: "Agency Founder",
      company: "Creative Media Agency",
      image: "👩‍🎨",
      rating: 5,
      text: "This tool has become essential for our agency. We can quickly research any client's competitors and present data-driven strategies. Our clients love the insights.",
      results: "30+ new clients"
    },
    {
      name: "David Park",
      role: "Performance Marketing Lead",
      company: "FinTech Startup",
      image: "👨‍💼",
      rating: 5,
      text: "The real-time ad monitoring alerts have saved us countless hours. We get notified the moment competitors launch new campaigns and can react immediately.",
      results: "2x faster response time"
    }
  ];

  const stats = [
    { value: "50,000+", label: "Active Users" },
    { value: "4.9/5", label: "User Rating" },
    { value: "100M+", label: "Ads Tracked" },
    { value: "15+", label: "Platforms" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700">
            Customer Success
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by marketers
            <span className="text-purple-600"> worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful marketers who trust AdSpyder to give them 
            the competitive edge they need to dominate their markets.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-purple-200 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <Badge className="bg-green-100 text-green-700">
                  ✅ {testimonial.results}
                </Badge>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 opacity-60">
            {["Forbes", "TechCrunch", "Marketing Land", "Search Engine Journal", "AdAge"].map((publication) => (
              <div key={publication} className="text-gray-400 font-medium text-lg">
                {publication}
              </div>
            ))}
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            "AdSpyder has revolutionized how marketers approach competitive intelligence. 
            It's become an essential tool for data-driven advertising success."
          </p>
        </div>
      </div>
    </section>
  );
};
