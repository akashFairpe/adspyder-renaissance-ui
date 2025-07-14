import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc",
    content: "The AdSpyder extension has completely changed how we research competitor campaigns. Having ad insights right in my browser saves hours of manual work.",
    rating: 5,
    initials: "SC"
  },
  {
    name: "Mike Rodriguez", 
    role: "Digital Marketing Manager",
    company: "Growth Labs",
    content: "One-click ad analysis is a game changer. I can instantly see what's working for competitors while browsing their sites naturally.",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Emma Thompson",
    role: "PPC Specialist", 
    company: "AdVantage Agency",
    content: "The extension is incredibly fast and accurate. I love how it covers all major platforms in one place without slowing down my browser.",
    rating: 5,
    initials: "ET"
  }
];

export const ExtensionTestimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Marketing Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of marketers who trust AdSpyder for competitive intelligence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
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