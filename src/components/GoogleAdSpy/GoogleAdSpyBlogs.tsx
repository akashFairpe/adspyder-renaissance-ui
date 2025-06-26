
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const GoogleAdSpyBlogs = () => {
  const blogs = [
    {
      title: "Analyze Your Competitors' PPC Strategies with AdSpyder",
      intro: "These days, the world of digital and online marketing has..."
    },
    {
      title: "How to Spy on Your Competitors' Google Ads Like a Pro",
      intro: "Want to know how your competitors use Google Ads? This..."
    },
    {
      title: "AdSpyder: The Ultimate AdWords Ads Spy Tool",
      intro: "Staying ahead of the competition requires more than just a..."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Related Blogs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about Google Ad spying strategies and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-lg transition-all group">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blog.intro}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full justify-between group-hover:bg-blue-50 border-blue-200 text-blue-600 hover:text-blue-700"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
