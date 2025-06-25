
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AdLibraryFAQ = () => {
  const faqs = [
    {
      question: "How does AdSpyder's PPC analysis work?",
      answer: "AdSpyder continuously monitors and analyzes ads across major platforms, collecting data on ad creatives, targeting, performance metrics, and more. Our AI-powered system processes this data to provide actionable insights for your campaigns."
    },
    {
      question: "Can I track specific competitors in real-time?",
      answer: "Yes! You can set up tracking for specific domains or competitors and receive real-time notifications when they launch new campaigns, change their ad creatives, or modify their strategies."
    },
    {
      question: "What platforms does the Ad Library cover?",
      answer: "Our Ad Library covers Google Ads, Facebook/Meta, YouTube, LinkedIn, Twitter, TikTok, Amazon, Bing, and many other advertising platforms across 80+ countries."
    },
    {
      question: "How can landing page analytics improve my ad performance?",
      answer: "By analyzing competitor landing pages, you can identify best practices for design, copy, offers, and conversion optimization. This helps you create higher-converting pages and improve your overall campaign ROI."
    },
    {
      question: "Is there a limit to how many ads I can analyze?",
      answer: "Our plans offer different limits based on your needs. The professional plan includes access to our full database of 1B+ ads with advanced filtering and unlimited searches."
    },
    {
      question: "How often is the ad data updated?",
      answer: "Our ad database is updated in real-time. New ads are typically indexed within hours of going live, ensuring you always have access to the latest competitive intelligence."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about AdSpyder's Ad Library
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-orange-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
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
