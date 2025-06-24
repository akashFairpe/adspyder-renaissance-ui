
export const TestimonialsSection = () => {
  const testimonials = [
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

  return (
    <section className="py-20 bg-[#fcfdff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="text-[#e39000] text-xl mb-4">
                  {testimonial.rating}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-[#111827]">
                  – {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
