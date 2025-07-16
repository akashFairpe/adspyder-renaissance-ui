import { Button } from '@/components/ui/button';
import { ArrowRight, Target } from 'lucide-react';

export const AlternativeHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="h-4 w-4" />
            <span>Better Alternative to SimilarWeb</span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Tired of SimilarWeb's pricing and complexity? 
              <span className="text-primary block mt-2">Meet AdSpyder.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AdSpyder gives you powerful ad intelligence, global monitoring, and competitor insights — at a fraction of the cost.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto text-lg px-8 py-4"
                onClick={() => window.open('https://app.adspyder.com/register', '_blank')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                No credit card required
              </p>
              
              {/* Platform Support */}
              <p className="text-gray-600 mt-8 mb-6">
                Supports 15+ digital ads Platforms, 100+ countries
              </p>

              {/* Platform Logos */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
                {[
                  { name: 'Google' },
                  { name: 'Meta' },
                  { name: 'Bing' },
                  { name: 'Amazon' },
                  { name: 'LinkedIn' },
                  { name: 'Reddit' },
                  { name: '+ more' }
                ].map((platform) => (
                  <div 
                    key={platform.name} 
                    className="bg-gray-100 h-10 px-4 rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors shadow-sm"
                  >
                    {platform.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card border rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">AdSpyder Dashboard</div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-8 bg-primary/20 rounded"></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-accent rounded"></div>
                    <div className="h-16 bg-accent rounded"></div>
                    <div className="h-16 bg-accent rounded"></div>
                  </div>
                  <div className="h-24 bg-accent rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};