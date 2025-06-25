
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AdAnalyticsFAQ = () => {
  const faqs = [
    {
      question: "What is Domain Analysis in AdSpyder?",
      answer: "Domain Analysis in AdSpyder provides comprehensive insights into any domain's advertising activities, including active campaigns, ad distribution by country, platform usage, and competitor identification. You can track real-time ad performance and discover strategic insights about any advertiser."
    },
    {
      question: "How can Domain Funnel Analysis help?",
      answer: "Domain Funnel Analysis helps you understand the complete customer journey from ad click to conversion. It reveals landing page strategies, conversion paths, and optimization opportunities by analyzing how competitors structure their marketing funnels."
    },
    {
      question: "What insights can I get from keyword data?",
      answer: "Our keyword analytics provide search volume, CPC data, geographical distribution, timing insights, platform usage, and competitive intelligence. You can track keyword performance across campaigns and discover new targeting opportunities."
    },
    {
      question: "What does Day-Hour Cohort Analysis show?",
      answer: "Day-Hour Cohort Analysis creates heatmaps showing when ads are most active throughout the week. This helps you optimize your campaign scheduling, budget allocation, and timing strategies based on when competitors are most active."
    },
    {
      question: "How often is the data updated?",
      answer: "Our data is updated in real-time across all platforms. You'll see new ads and campaign changes as they happen, ensuring you always have the most current competitive intelligence for your marketing decisions."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about AdSpyder's Ad Analytics
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
