import { SEOConfig } from "@/hooks/useSEO";

export const defaultSEOConfig: SEOConfig = {
  title: "AdSpyder - Ad Intelligence Redefined | Best Ad Spy Tool",
  description: "Embark on an unbeatable ad journey with the best ad spy tool. Track competitors, generate compelling ad copies, and achieve your marketing goals faster. Supports 15+ digital ads platforms, 100+ countries.",
  keywords: "ad spy, competitor ads, ad intelligence, facebook ads, google ads, youtube ads, tiktok ads, marketing intelligence, ad spy tool, competitor analysis, ad generation, ad optimization",
  ogTitle: "AdSpyder - Ad Intelligence Redefined | Best Ad Spy Tool",
  ogDescription: "Embark on an unbeatable ad journey with the best ad spy tool. Track competitors, generate compelling ad copies, and achieve your marketing goals faster.",
  ogImage: "https://adspyder.io/og-image.jpg",
  ogUrl: "https://adspyder.io/",
  twitterTitle: "AdSpyder - Ad Intelligence Redefined | Best Ad Spy Tool",
  twitterDescription: "Embark on an unbeatable ad journey with the best ad spy tool. Track competitors, generate compelling ad copies, and achieve your marketing goals faster.",
  twitterImage: "https://adspyder.io/twitter-image.jpg",
  canonical: "https://adspyder.io/",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AdSpyder",
    "description": "The world's most comprehensive ad intelligence platform for competitor ad analysis and ad generation",
    "url": "https://adspyder.io",
    "applicationCategory": "Marketing Software",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "description": "Free trial available"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "10000"
    }
  }
};

export const pageConfigs = {
  home: defaultSEOConfig,
  adLibrary: {
    title: "Ad Library - AdSpyder | Browse 1B+ Ads Across Platforms",
    description: "Access the world's largest ad library with 1B+ ads from 15+ platforms. Discover winning ad creatives, analyze competitor strategies, and boost your campaigns.",
    keywords: "ad library, facebook ad library, google ads library, ad database, competitor ads, ad creatives, marketing intelligence",
    canonical: "https://adspyder.io/ad-library"
  },
  adAnalytics: {
    title: "Ad Analytics - AdSpyder | AI-Powered Ad Intelligence",
    description: "Get deep insights into ad performance with AI-powered analytics. Track competitor strategies, analyze ad trends, and optimize your campaigns for better ROI.",
    keywords: "ad analytics, ad intelligence, competitor analysis, ad performance, marketing analytics, ai ad analysis",
    canonical: "https://adspyder.io/ad-analytics"
  },
  googleAdSpy: {
    title: "Google Ad Spy - AdSpyder | Track Google Ads & PPC Campaigns",
    description: "Spy on Google Ads campaigns, discover profitable keywords, and analyze competitor PPC strategies. Access millions of Google ads for better campaign performance.",
    keywords: "google ad spy, google ads spy tool, ppc spy, google ads intelligence, search ads spy, competitor google ads",
    canonical: "https://adspyder.io/google-ad-spy"
  },
  facebookAdSpy: {
    title: "Facebook Ad Spy - AdSpyder | Meta Ads Intelligence Tool",
    description: "Discover winning Facebook and Instagram ad campaigns. Analyze competitor Meta ads, find profitable audiences, and create high-converting social media ads.",
    keywords: "facebook ad spy, instagram ad spy, meta ads spy, social media ads, facebook ads library, competitor facebook ads",
    canonical: "https://adspyder.io/facebook-ad-spy"
  },
  contact: {
    title: "Contact Us - AdSpyder | Get Support & Sales Assistance",
    description: "Contact AdSpyder for technical support, sales inquiries, or general questions. Reach our team via email, phone, or visit our office in Bengaluru, India.",
    keywords: "contact adspyder, customer support, sales contact, technical support, help desk",
    canonical: "https://adspyder.io/contact"
  },
  privacy: {
    title: "Privacy Policy - AdSpyder | Data Protection & Privacy",
    description: "Read AdSpyder's privacy policy to understand how we collect, use, and protect your personal data. Learn about our commitment to user privacy and data security.",
    keywords: "privacy policy, data protection, privacy rights, data security, gdpr compliance",
    canonical: "https://adspyder.io/privacy"
  },
  browserExtension: {
    title: "AdSpyder Chrome Extension - Instantly Discover Ads on Any Website",
    description: "Install the AdSpyder Chrome extension to spy on competitor ads directly in your browser. Analyze ad creatives, placements, and networks from Google, Facebook, YouTube & more in one click.",
    keywords: "AdSpyder chrome extension, ad spy extension, competitor ads browser, ad analysis tool, facebook ads spy, google ads spy",
    canonical: "https://adspyder.io/browser-extension"
  }
};