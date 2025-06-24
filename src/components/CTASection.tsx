
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
            Ready to elevate your marketing Strategy?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold">
              Get Started - it's Free
            </Button>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 text-lg font-semibold">
              Book a Demo
            </Button>
          </div>

          <p className="text-gray-600">
            Join over 10,000+ SMEs already using AdSpyder
          </p>
        </div>
      </div>
    </section>
  );
};
