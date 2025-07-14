import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the AdSpyder Chrome extension free?",
    answer: "Yes, you can install and try the AdSpyder Chrome extension for free. We offer a free tier with basic ad discovery features, and premium plans for advanced analytics and unlimited access."
  },
  {
    question: "Which platforms and ad networks does it support?",
    answer: "The extension supports Google Ads, Facebook, Instagram, YouTube, LinkedIn, Twitter, TikTok, Pinterest, and 20+ other major ad networks and platforms."
  },
  {
    question: "Does the extension slow down my browser?",
    answer: "No, the AdSpyder extension is designed to be lightweight and fast. It only activates when you click the extension icon and doesn't affect your normal browsing experience."
  },
  {
    question: "Is my browsing data secure and private?",
    answer: "Absolutely. We don't collect, store, or track your personal browsing data. The extension only analyzes publicly available ad information when you actively request it."
  },
  {
    question: "Can I use this for competitor research?",
    answer: "Yes, that's exactly what it's designed for. You can analyze any website's advertising strategy, including ad creatives, targeting, and estimated spend across all major platforms."
  },
  {
    question: "Do I need a separate AdSpyder account?",
    answer: "While you can use basic features without an account, creating a free AdSpyder account allows you to save findings, access historical data, and unlock additional features."
  },
  {
    question: "How accurate is the ad data?",
    answer: "Our data is sourced in real-time from official ad libraries and APIs, ensuring high accuracy. We update information continuously to provide the most current advertising insights."
  },
  {
    question: "Can I export the ad data I find?",
    answer: "Yes, premium users can export ad data, creative assets, and analysis reports in various formats including CSV, PDF, and image files."
  }
];

export const ExtensionFAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the AdSpyder Chrome extension
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
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