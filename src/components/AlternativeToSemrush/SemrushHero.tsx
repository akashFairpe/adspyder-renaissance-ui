import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const SemrushHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Outgrown SEMrush? 
              <span className="text-primary block mt-2">Upgrade to AdSpyder.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AdSpyder gives you powerful ad intelligence, global visibility, and actionable insights — without the cost or complexity.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-4"
                onClick={() => window.open('https://app.adspyder.com/register', '_blank')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                No credit card required
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card border rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">AdSpyder vs SEMrush</div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Speed</span>
                    <div className="flex gap-2">
                      <div className="h-2 w-12 bg-green-500 rounded"></div>
                      <span className="text-xs">AdSpyder</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <div className="flex gap-2">
                      <div className="h-2 w-16 bg-primary rounded"></div>
                      <span className="text-xs">AdSpyder</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Ad Focus</span>
                    <div className="flex gap-2">
                      <div className="h-2 w-20 bg-blue-500 rounded"></div>
                      <span className="text-xs">AdSpyder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};