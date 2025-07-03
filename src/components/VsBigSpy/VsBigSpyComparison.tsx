
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

export const VsBigSpyComparison = () => {
  const features = [
    { feature: "Pricing", bigSpy: "$99/month", adSpyder: "$49/month" },
    { feature: "Free Plan", bigSpy: "No free plan", adSpyder: "7-day free with no search limit" },
    { feature: "Ad database", bigSpy: "850 Million+", adSpyder: "1 Billion +" },
    { feature: "Supported platforms", bigSpy: "9", adSpyder: "15+" },
    { feature: "Domain Analytics", bigSpy: "Limited", adSpyder: "AI Enabled" },
    { feature: "Keyword Analytics", bigSpy: false, adSpyder: "AI Enabled" },
    { feature: "Domain Based Search", bigSpy: false, adSpyder: true },
    { feature: "Text Ad Generation", bigSpy: false, adSpyder: true },
    { feature: "Image Ad Generation", bigSpy: false, adSpyder: true },
    { feature: "Landing Page-Ad Copy Relationship", bigSpy: false, adSpyder: true },
    { feature: "Ad Management", bigSpy: false, adSpyder: true },
    { feature: "Keyword Based Funnel Analysis", bigSpy: false, adSpyder: true },
    { feature: "Keyword Tracking", bigSpy: false, adSpyder: true },
    { feature: "Domain Tracking", bigSpy: false, adSpyder: true },
    { feature: "Ad Health", bigSpy: false, adSpyder: true },
    { feature: "Seasonality Trends", bigSpy: false, adSpyder: true },
    { feature: "Text Based Search", bigSpy: "Limited", adSpyder: true },
    { feature: "Ad Bookmarking", bigSpy: false, adSpyder: true },
    { feature: "Filter by Country", bigSpy: false, adSpyder: true },
    { feature: "Search Ads", bigSpy: "Limited", adSpyder: true }
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
              Compare AdSpyder with BigSpy
            </h2>
            <p className="text-xl text-gray-600">
              Find out why AdSpyder is the leading solution for ad intelligence.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-bold text-gray-900 text-left">Features</TableHead>
                  <TableHead className="font-bold text-gray-900 text-center">BigSpy</TableHead>
                  <TableHead className="font-bold text-orange-600 text-center bg-orange-50">AdSpyder</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((row, index) => (
                  <TableRow key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900">{row.feature}</TableCell>
                    <TableCell className="text-center">{renderCell(row.bigSpy)}</TableCell>
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
