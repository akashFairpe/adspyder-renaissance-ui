import { Star, Calendar } from "lucide-react";

export const allFeatures = [
  "Google Ads",
  "Meta (Facebook/Instagram) Ads", 
  "LinkedIn Ads",
  "YouTube Ads",
  "Shopping Ads",
  "Bing Ads",
  "Amazon Ads",
  "Twitter (X) Ads",
  "TikTok Ads",
  "Domain Analysis",
  "Keyword Research",
  "Landing Page Analysis", 
  "Text Ad Generation",
  "Image Ad Generation",
  "Video Ad Generation",
  "Ad Account Integration",
  "KPI Tracking",
  "Report Generation",
  "AI-Assisted Ad Optimisation"
];

export const pricingPlans = [
  {
    id: "free-trial",
    name: "Free Trial",
    price: "$0",
    duration: "for 7 Days",
    description: "Try AdSpyder's complete feature set with full access",
    activation: "Activated via Credit Card",
    features: [...allFeatures, "Pay As You Use Option (Available after trial ends)"],
    cta: "Start Free Trial",
    icon: Star,
    popular: false,
    color: "border-green-200 bg-green-50/50"
  },
  {
    id: "monthly",
    name: "Monthly Plan", 
    price: "$49",
    duration: "/month",
    description: "Ideal for ongoing advertisers and marketers",
    features: [...allFeatures, "Includes Pay As You Use flexibility for scaling"],
    cta: "Subscribe Monthly",
    icon: Calendar,
    popular: false,
    color: "border-blue-200 bg-blue-50/50"
  },
  {
    id: "annual",
    name: "Annual Plan",
    price: "$499",
    duration: "/year",
    description: "Recommended for agencies and power users",
    features: [...allFeatures, "Pay As You Use included"],
    cta: "Subscribe Annually – Save 15%",
    icon: Calendar,
    popular: true,
    color: "border-orange-200 bg-orange-50/50",
    savings: "Save 15%"
  }
];