
import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-1 max-w-sm px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-[#e39000] focus:ring-2 focus:ring-[#e39000]/20"
            />
            <Button className="bg-[#e39000] hover:bg-[#e39000]/90 text-white px-8 py-3 font-semibold">
              Get Started - It's Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
