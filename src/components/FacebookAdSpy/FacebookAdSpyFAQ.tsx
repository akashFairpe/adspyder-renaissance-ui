
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FacebookAdSpyFAQ = () => {
  const faqs = [
    {
      question: "Why should I use AdSpyder's Facebook Ad Spy tool?",
      answer: "AdSpyder provides comprehensive insights beyond what Facebook's native Ad Library offers, including performance metrics, targeting data, and landing page analysis to give you a complete competitive intelligence picture."
    },
    {
      question: "What are the advantages of Facebook ad spying tools?",
      answer: "Facebook ad spying tools help you understand what works in your industry, avoid costly trial and error, discover new targeting opportunities, and stay ahead of competitor strategies and trends."
    },
    {
      question: "Who can use Facebook ads?",
      answer: "Any business, marketer, or individual looking to reach Facebook's 2.8+ billion users can use Facebook ads. This includes e-commerce brands, service providers, agencies, and content creators."
    },
    {
      question: "What is the Facebook Ads Spy Tool?",
      answer: "A Facebook Ads Spy Tool is a platform that allows you to view, analyze, and track competitors' Facebook and Instagram ad campaigns, including their creatives, targeting, and performance data."
    },
    {
      question: "What ad formats can I spy on?",
      answer: "You can spy on various Facebook ad formats including image ads, video ads, carousel ads, collection ads, lead generation ads, and dynamic product ads across Facebook and Instagram."
    },
    {
      question: "How does the FB Spy tool work?",
      answer: "The tool crawls and indexes Facebook's advertising data, organizing it in a searchable database where you can filter by keywords, demographics, date ranges, and other criteria to find relevant competitor ads."
    },
    {
      question: "How to use Facebook competitor ad data effectively?",
      answer: "Use the data to identify successful creative patterns, understand messaging strategies, discover new audiences, optimize your ad timing, and create better-performing campaigns based on proven approaches."
    },
    {
      question: "What data does AdSpyder provide?",
      answer: "AdSpyder provides ad creatives, copy text, targeting information, landing pages, performance indicators, demographic data, geographic targeting, and historical campaign data for comprehensive analysis."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Facebook Ad Spying with AdSpyder
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 py-6 hover:no-underline">
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
