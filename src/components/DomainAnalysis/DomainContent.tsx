import { DomainOverview } from "./sections/DomainOverview";
import { PlatformSummary } from "./sections/PlatformSummary";
import { TopCTAs } from "./sections/TopCTAs";
import { CampaignTimeline } from "./sections/CampaignTimeline";
import { KeywordStrategy } from "./sections/KeywordStrategy";
import { CompetitorBenchmark } from "./sections/CompetitorBenchmark";
import { PerformanceSummary } from "./sections/PerformanceSummary";
import { AdCreatives } from "./sections/AdCreatives";
import { Messaging } from "./sections/Messaging";
import { PerformanceTimeline } from "./sections/PerformanceTimeline";
import { LandingExperience } from "./sections/LandingExperience";
import { TargetingInsights } from "./sections/TargetingInsights";
import { KeywordsSearch } from "./sections/KeywordsSearch";
import { EngagementMetrics } from "./sections/EngagementMetrics";
import { CompetitiveAnalysis } from "./sections/CompetitiveAnalysis";
import { TrendsReach } from "./sections/TrendsReach";
import { TechnicalTracking } from "./sections/TechnicalTracking";
import { DistributionDevices } from "./sections/DistributionDevices";
import { TopAds } from "./sections/TopAds";

interface DomainContentProps {
  selectedDomain: string;
}

export const DomainContent = ({ selectedDomain }: DomainContentProps) => {
  return (
    <div className="space-y-8 w-full min-w-0">
      <div id="domain-overview">
        <DomainOverview domain={selectedDomain} />
      </div>
      
      <div id="platform-summary">
        <PlatformSummary domain={selectedDomain} />
      </div>
      
      <div id="top-ctas">
        <TopCTAs domain={selectedDomain} />
      </div>
      
      <div id="campaign-timeline">
        <CampaignTimeline domain={selectedDomain} />
      </div>
      
      <div id="keyword-strategy">
        <KeywordStrategy domain={selectedDomain} />
      </div>
      
      <div id="competitor-benchmark">
        <CompetitorBenchmark domain={selectedDomain} />
      </div>
      
      <div id="performance-summary">
        <PerformanceSummary domain={selectedDomain} />
      </div>
      
      <div id="top-ads">
        <TopAds domain={selectedDomain} />
      </div>

      {/* Legacy sections - keeping for potential future use */}
      <div id="ad-creatives" className="hidden">
        <AdCreatives domain={selectedDomain} />
      </div>
      
      <div id="messaging" className="hidden">
        <Messaging domain={selectedDomain} />
      </div>
      
      <div id="performance-timeline" className="hidden">
        <PerformanceTimeline domain={selectedDomain} />
      </div>
      
      <div id="landing-experience" className="hidden">
        <LandingExperience domain={selectedDomain} />
      </div>
      
      <div id="targeting-insights" className="hidden">
        <TargetingInsights domain={selectedDomain} />
      </div>
      
      <div id="keywords-search" className="hidden">
        <KeywordsSearch domain={selectedDomain} />
      </div>
      
      <div id="engagement-metrics" className="hidden">
        <EngagementMetrics domain={selectedDomain} />
      </div>
      
      <div id="competitive-analysis" className="hidden">
        <CompetitiveAnalysis domain={selectedDomain} />
      </div>
      
      <div id="trends-reach" className="hidden">
        <TrendsReach domain={selectedDomain} />
      </div>
      
      <div id="technical-tracking" className="hidden">
        <TechnicalTracking domain={selectedDomain} />
      </div>
      
      <div id="distribution-devices" className="hidden">
        <DistributionDevices domain={selectedDomain} />
      </div>
    </div>
  );
};