import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const SemrushFAQ = () => {
  const faqs = [
    {
      question: "What makes AdSpyder different from SEMrush?",
      answer: "AdSpyder is specifically built for ad intelligence and competitor advertising analysis, while SEMrush focuses primarily on SEO and keyword research. We provide real-time ad monitoring, competitor ad spend insights, and ad funnel visualization that SEMrush doesn't offer. Plus, our interface is cleaner and more focused on actionable advertising insights."
    },
    {
      question: "Is AdSpyder better for ad-focused marketers?",
      answer: "Absolutely! If your primary focus is understanding competitor advertising strategies, ad creatives, and campaign performance, AdSpyder is purpose-built for this. We track ads across 100+ countries, provide ad spend estimates, and show complete ad funnels - features that SEMrush either doesn't have or locks behind expensive enterprise plans."
    },
    {
      question: "Can I export white-label reports?",
      answer: "Yes! AdSpyder includes white-label reporting capabilities in all our plans. You can export branded reports with your agency logo and branding, making it perfect for client presentations. This feature helps agencies deliver professional insights without showing our branding."
    },
    {
      question: "Do you offer support during the free trial?",
      answer: "Yes, we provide full support during your free trial period. Our team is available to help you get the most out of AdSpyder, answer questions, and ensure you can evaluate all our features properly. No restrictions on support during the trial."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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