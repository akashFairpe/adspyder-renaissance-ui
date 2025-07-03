
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

export const VsAdSpyComparison = () => {
  const features = [
    { feature: "Pricing", adSpy: "$149/month", adSpyder: "$49/month" },
    { feature: "Free Plan", adSpy: "1000 views", adSpyder: "7-day free with no search limit" },
    { feature: "Ad database", adSpy: "160 Million+", adSpyder: "1 Billion +" },
    { feature: "Supported platforms", adSpy: "2", adSpyder: "15+" },
    { feature: "Domain Analytics", adSpy: false, adSpyder: "AI Enabled" },
    { feature: "Keyword Analytics", adSpy: false, adSpyder: "AI Enabled" },
    { feature: "Search Ads", adSpy: true, adSpyder: true },
    { feature: "Domain Based Search", adSpy: false, adSpyder: true },
    { feature: "Text Ad Generation", adSpy: false, adSpyder: true },
    { feature: "Image Ad Generation", adSpy: false, adSpyder: true },
    { feature: "Landing Page-Ad Copy Relationship", adSpy: false, adSpyder: true },
    { feature: "Ad Management", adSpy: false, adSpyder: true },
    { feature: "Keyword Based Funnel Analysis", adSpy: false, adSpyder: true },
    { feature: "Keyword Tracking", adSpy: false, adSpyder: true },
    { feature: "Domain Tracking", adSpy: false, adSpyder: true },
    { feature: "Ad Health", adSpy: false, adSpyder: true },
    { feature: "Seasonality and Date-Time Trends", adSpy: false, adSpyder: true },
    { feature: "Text Based Search", adSpy: false, adSpyder: true },
    { feature: "Ad Bookmarking", adSpy: false, adSpyder: true },
    { feature: "Filter by Country", adSpy: false, adSpyder: true }
  ];

  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-center block">{value}</span>;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compare AdSpyder with AdSpy
            </h2>
            <p className="text-xl text-gray-600">
              Find out why AdSpyder is the best solution for supercharging your ads.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-bold text-gray-900 text-left">Features</TableHead>
                  <TableHead className="font-bold text-gray-900 text-center">AdSpy</TableHead>
                  <TableHead className="font-bold text-orange-600 text-center bg-orange-50">AdSpyder</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((row, index) => (
                  <TableRow key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900">{row.feature}</TableCell>
                    <TableCell className="text-center">{renderCell(row.adSpy)}</TableCell>
                    <TableCell className="text-center bg-orange-50/50">{renderCell(row.adSpyder)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              → Try it for free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
