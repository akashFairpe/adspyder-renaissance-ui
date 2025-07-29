import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does it work for all types of real estate?",
    answer: "Yes, our AI agent works for residential, commercial, luxury properties, rentals, and property development. The AI adapts its strategies based on your property type and target market."
  },
  {
    question: "How does it integrate with my existing CRM?",
    answer: "Our AI agent integrates with popular real estate CRMs like Chime, Follow Up Boss, KvCORE, and others. Leads are automatically synced and tagged for easy follow-up."
  },
  {
    question: "Can it handle multiple property listings simultaneously?",
    answer: "Absolutely! The AI can manage unlimited property listings, creating unique campaigns for each while optimizing budgets across your entire portfolio for maximum ROI."
  },
  {
    question: "What about compliance with real estate advertising laws?",
    answer: "Our AI is trained on real estate advertising regulations and includes compliance checks for fair housing laws, truth in advertising, and local real estate marketing requirements."
  },
  {
    question: "How quickly can I see results?",
    answer: "Most users see increased lead generation within 48 hours of campaign launch. Full optimization typically occurs within 2-3 weeks as the AI learns your market dynamics."
  }
];

export const AIAgentRealEstateFAQ = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real Estate Marketing Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about using AI for real estate marketing automation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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