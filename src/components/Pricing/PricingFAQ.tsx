import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our 7-day free trial gives you complete access to all AdSpyder features. Simply activate with a credit card - you won't be charged until the trial period ends. Cancel anytime during the trial at no cost."
  },
  {
    question: "What's included in Pay As You Use pricing?",
    answer: "Pay As You Use is perfect for users with variable or low-volume needs. You only pay for what you actually use - searches, reports, and analyses. There are no monthly minimums or commitments."
  },
  {
    question: "How much can I save with annual billing?",
    answer: "Annual subscribers save 15% compared to monthly billing. That's 2 months free when you pay annually! You can upgrade or downgrade your plan at any time."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Absolutely! You can upgrade, downgrade, or switch between monthly and annual billing at any time. Changes take effect at your next billing cycle."
  },
  {
    question: "What platforms does AdSpyder cover?",
    answer: "AdSpyder provides ad intelligence across all major platforms: Google, Meta (Facebook/Instagram), LinkedIn, YouTube, TikTok, Twitter (X), Amazon, Bing, and shopping networks."
  },
  {
    question: "Is there a limit on ad searches or data exports?",
    answer: "Subscription plans include generous usage limits that accommodate most business needs. Pay As You Use customers only pay for actual usage. Contact us for enterprise-level requirements."
  },
  {
    question: "Do you offer enterprise or team plans?",
    answer: "Yes! We offer custom enterprise solutions with team collaboration features, dedicated support, and volume discounts. Contact our sales team for a personalized quote."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. All payments are processed securely through Stripe."
  }
];

export const PricingFAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about AdSpyder pricing and plans
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:sales@adspyder.io"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all inline-flex items-center justify-center gap-2"
            >
              Contact Sales
            </a>
            <button className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};