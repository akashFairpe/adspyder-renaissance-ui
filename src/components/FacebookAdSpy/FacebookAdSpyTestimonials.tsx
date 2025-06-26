
export const FacebookAdSpyTestimonials = () => {
  const testimonials = [
    {
      name: "Shubham K",
      rating: 5,
      text: "Perfect tool to analyze your competitor ads. It provides structure to a new business without controlling it."
    },
    {
      name: "Abhishek", 
      rating: 5,
      text: "AdSpyder became a selling point for my agency. We can quickly analyze and run the campaigns accordingly."
    },
    {
      name: "Prateek",
      rating: 5, 
      text: "Never thought this type of service exists in the market. It can automate strategy & planning for your business."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
