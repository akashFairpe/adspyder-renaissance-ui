
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const GoogleAdSpyFAQ = () => {
  const faqs = [
    {
      question: "What makes AdSpyder the most accurate PPC ad spying tool?",
      answer: "AdSpyder provides real-time data with comprehensive coverage across all major platforms. Our advanced algorithms ensure accurate ad tracking, detailed metadata, and up-to-date campaign information, making it the most reliable choice for competitive intelligence."
    },
    {
      question: "How many plans are available in AdSpyder's Google adwords spy tool?",
      answer: "AdSpyder offers flexible pricing plans to suit different business needs, from individual marketers to large agencies. Each plan includes access to our Google Ad Spy tools with varying levels of data access, search limits, and advanced features."
    },
    {
      question: "What data does the Google Ads Checker provide?",
      answer: "Our Google Ads Checker provides comprehensive data including ad copy, headlines, descriptions, landing page URLs, targeting information, ad formats, spending estimates, campaign duration, and demographic targeting details."
    },
    {
      question: "Can I check the total number of Google ads of my competitors for a keyword?",
      answer: "Yes, you can easily track the total number of Google ads any competitor is running for specific keywords. Our tool provides detailed breakdowns by keyword, showing historical data and current active campaigns."
    },
    {
      question: "How to spy on the Google ads of your competitors?",
      answer: "Simply enter your competitor's domain or target keywords in AdSpyder's search tool. You'll get instant access to their active campaigns, ad creatives, landing pages, targeting strategies, and performance insights."
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
              Everything you need to know about Google Ad Spy with AdSpyder
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
