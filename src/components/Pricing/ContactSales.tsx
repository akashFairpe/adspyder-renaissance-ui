import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const ContactSales = () => {
  return (
    <div className="mt-20 text-center">
      <h3 className="text-2xl font-bold text-foreground mb-4">
        Need a Custom Plan or Enterprise Access?
      </h3>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Looking for volume discounts, custom integrations, or enterprise features? 
        Our sales team is here to help you find the perfect solution.
      </p>
      <Button 
        asChild
        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3"
        size="lg"
      >
        <a href="mailto:sales@adspyder.io" className="inline-flex items-center gap-2">
          <Mail className="w-5 h-5" />
          Contact Sales
        </a>
      </Button>
    </div>
  );
};