import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Make the switch from SimilarWeb today. Get more — and pay less.
        </h2>
        
        <Button 
          size="lg" 
          className="bg-white hover:bg-gray-100 text-primary text-lg px-8 py-4 mb-4"
          onClick={() => window.open('https://app.adspyder.com/register', '_blank')}
        >
          Start Free Trial Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <p className="text-primary-foreground/80">
          Subscribe when you're ready — no pressure.
        </p>
      </div>
    </section>
  );
};