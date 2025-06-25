
import { VideoTestimonial } from "./Testimonials/VideoTestimonial";

export const TestimonialsSection = () => {
  const videoTestimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      videoUrl: "/testimonials/sarah-johnson.mp4",
      thumbnailUrl: "/testimonials/sarah-johnson-thumb.jpg"
    },
    {
      name: "Mike Chen",
      role: "Agency Owner",
      company: "Digital Boost",
      videoUrl: "/testimonials/mike-chen.mp4",
      thumbnailUrl: "/testimonials/mike-chen-thumb.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      company: "RetailPlus",
      videoUrl: "/testimonials/emily-rodriguez.mp4",
      thumbnailUrl: "/testimonials/emily-rodriguez-thumb.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
              💬 What Our Users Say
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from marketers, agencies, and brands who have transformed their advertising strategies with AdSpyder
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videoTestimonials.map((testimonial, index) => (
            <VideoTestimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              videoUrl={testimonial.videoUrl}
              thumbnailUrl={testimonial.thumbnailUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
