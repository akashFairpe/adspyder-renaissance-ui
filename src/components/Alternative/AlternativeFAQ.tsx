import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const AlternativeFAQ = () => {
  const faqs = [
    {
      question: "How does AdSpyder compare to SimilarWeb?",
      answer: "AdSpyder focuses specifically on ad intelligence and competitor analysis, while SimilarWeb is primarily a web analytics tool. We provide real-time ad monitoring across 100+ countries, competitor landing page analysis, and social media ad tracking at a fraction of SimilarWeb's cost."
    },
    {
      question: "Can I track ads in specific countries?",
      answer: "Yes! AdSpyder monitors ads across 100+ countries, giving you global insights into competitor campaigns. You can filter by specific countries, regions, or get a worldwide view of advertising trends."
    },
    {
      question: "Do I need to talk to sales?",
      answer: "No! Unlike SimilarWeb's custom pricing model, AdSpyder offers transparent, public pricing. You can see all our plans upfront and start with our free trial immediately without talking to anyone."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Absolutely! We offer a free trial with no credit card required. You can explore AdSpyder's features and see how it compares to your current tools before making any commitment."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Still have questions?
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