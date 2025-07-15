import { PricingCard } from "./PricingCard";
import { ContactSales } from "./ContactSales";
import { pricingPlans } from "@/config/pricingData";

export const PricingPlans = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Contact Sales Section */}
        <ContactSales />
      </div>
    </section>
  );
};