
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const FacebookAdSpyBlogs = () => {
  const blogs = [
    {
      title: "All About Facebook Lead Gen Ads: Boost Your Conversions in 2025",
      intro: "Of all the methods available across the internet sphere of..."
    },
    {
      title: "Maximizing Engagement: 7 Best Practices for Facebook Image Ad Campaigns",
      intro: "In the ever-evolving landscape of social media marketing..."
    },
    {
      title: "Facebook Advantage+ Shopping Campaigns: A Game-Changer for E-commerce",
      intro: "Facebook Advantage+ Shopping campaigns are about to become the key..."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Related Blogs
          </h2>
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
