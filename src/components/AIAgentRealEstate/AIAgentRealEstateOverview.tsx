export const AIAgentRealEstateOverview = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            AI-Powered Growth for Real Estate Professionals
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Whether you're an independent realtor, real estate agency, or property platform, our AI agent automates your entire marketing funnel. From property listings to lead nurturing, leverage artificial intelligence to scale your business and close more deals.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">For Realtors</h3>
              <p className="text-muted-foreground text-sm">
                Automate listing promotion and capture buyer leads with intelligent targeting.
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">For Agencies</h3>
              <p className="text-muted-foreground text-sm">
                Scale marketing across multiple agents and properties with unified campaigns.
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">For Platforms</h3>
              <p className="text-muted-foreground text-sm">
                Drive traffic to property listings with optimized ads and SEO strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};