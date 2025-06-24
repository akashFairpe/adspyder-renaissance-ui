
import { Button } from "@/components/ui/button";

export const BlogCommunitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Your Roadmap to Online Ad Success
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3">
              Read Blogs
            </Button>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3">
              Explore case studies
            </Button>
          </div>

          <div className="bg-gray-900 rounded-2xl p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Let's Make Things Happen
            </h3>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Ready to dominate your competition? Start your free trial today and unlock the power of advanced ad intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-4">
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="flex-1 px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-semibold">
                Get Started - It's Free
              </Button>
            </div>

            <p className="text-sm text-gray-400">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
