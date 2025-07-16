import { Star, Quote } from 'lucide-react';

export const SemrushTestimonials = () => {
  const testimonials = [
    {
      name: "Sahil R.",
      role: "Growth Hacker",
      content: "AdSpyder is focused, clean, and far more useful than SEMrush for campaign-level work.",
      rating: 5
    },
    {
      name: "Lena W.", 
      role: "Agency Director",
      content: "We dropped SEMrush after 3 years — AdSpyder is more affordable and client-friendly.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Users Are Switching from SEMrush
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-primary/60 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              ))}
              <Star className="h-6 w-6 text-yellow-500" />
            </div>
            <span className="text-lg font-semibold text-foreground">4.8/5</span>
            <span className="text-muted-foreground">from 1,200+ reviews</span>
          </div>
          
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-sm font-medium">Trusted by teams at:</div>
            <div className="flex gap-6">
              <div className="h-8 w-20 bg-muted rounded"></div>
              <div className="h-8 w-20 bg-muted rounded"></div>
              <div className="h-8 w-20 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};