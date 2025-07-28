export const AISalesAgentIntro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 text-center">
            What Is an AI Sales Agent?
          </h2>
          
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p className="text-lg mb-6">
              An AI Sales Agent is an intelligent, autonomous system that handles sales-related tasks such as lead generation, qualification, personalized outreach, follow-ups, and even closing deals. Powered by large language models (LLMs) and sales-specific datasets, these agents can execute repetitive tasks at scale—freeing your human sales team to focus on relationship-building and strategic conversations.
            </p>
            
            <p className="text-lg">
              AI sales agents operate using advanced workflows that combine natural language understanding (NLU), CRM integration, contextual reasoning, and personalized response generation. Many are designed with architectures like ReAct, LangChain, or AutoGen, enabling decision-making and tool use in complex sales environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};