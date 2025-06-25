
export interface NavigationItem {
  title: string;
  href?: string;
  items?: NavigationItem[];
}

export const navigationConfig: NavigationItem[] = [
  {
    title: "Features",
    items: [
      {
        title: "Ad Library",
        items: [
          { title: "Google Ad Spy", href: "/ad-library" },
          { title: "Facebook Ad Spy", href: "/facebook-ad-spy" },
          { title: "YouTube Ad Spy", href: "/youtube-ad-spy" },
          { title: "LinkedIn Ad Library", href: "/linkedin-ad-library" },
          { title: "TikTok Ad Library", href: "/tiktok-ad-library" },
          { title: "Shopping Ad Spy", href: "/shopping-ad-spy" },
          { title: "Bing Ad Spy", href: "/bing-ad-spy" },
          { title: "Display Ad Spy", href: "/display-ad-spy" },
          { title: "Twitter Ad Library", href: "/twitter-ad-library" },
          { title: "Amazon Ad Library", href: "/amazon-ad-library" },
        ],
      },
      {
        title: "Ad Analytics",
        items: [
          { title: "Domain Analysis", href: "/domain-analysis" },
          { title: "Landing Page Analysis", href: "/landing-page-analysis" },
        ],
      },
      {
        title: "Ad Generation",
        items: [
          { title: "Text Ad Generation", href: "/text-ad-generation" },
          { title: "Image Ad Generation", href: "/image-ad-generation" },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Profile",
        items: [
          { title: "Ad Agencies", href: "/ad-agencies" },
          { title: "D2C Brands", href: "/d2c-brands" },
          { title: "Freelancers", href: "/freelancers" },
          { title: "Affiliates", href: "/affiliates" },
        ],
      },
      {
        title: "Use Cases",
        items: [
          { title: "Dental Clinic", href: "/dental-clinic" },
          { title: "Real Estate", href: "/real-estate" },
          { title: "Travel Agency", href: "/travel-agency" },
          { title: "Online Betting Sites", href: "/online-betting-sites" },
          { title: "Restaurants", href: "/restaurants" },
          { title: "Retail", href: "/retail" },
        ],
      },
      {
        title: "Platform",
        items: [
          { title: "Google Ads", href: "/google-ads" },
          { title: "Meta Ads", href: "/meta-ads" },
          { title: "Bing Ads", href: "/bing-ads" },
          { title: "LinkedIn Ads", href: "/linkedin-ads" },
        ],
      },
      {
        title: "Case Study",
        items: [],
      },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Pricing", href: "/pricing" },
];
