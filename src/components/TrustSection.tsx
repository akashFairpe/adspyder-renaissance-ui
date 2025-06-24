
export const TrustSection = () => {
  const logos = [
    { name: "Google", width: "120" },
    { name: "Microsoft", width: "140" },
    { name: "Meta", width: "100" },
    { name: "Amazon", width: "120" },
    { name: "Shopify", width: "130" },
    { name: "HubSpot", width: "130" },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium mb-8">
            Trusted by 50,000+ marketers from leading companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60 hover:opacity-80 transition-opacity">
            {logos.map((logo) => (
              <div 
                key={logo.name} 
                className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: `${logo.width}px` }}
              >
                <div className="bg-gray-200 h-8 w-full rounded flex items-center justify-center text-xs font-medium text-gray-600">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">GDPR</div>
            <div className="text-gray-600">Compliant</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">SOC 2</div>
            <div className="text-gray-600">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};
