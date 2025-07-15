import { DomainOverview } from "./sections/DomainOverview";
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

interface DomainContentProps {
  selectedDomain: string;
}

export const DomainContent = ({ selectedDomain }: DomainContentProps) => {
  return (
    <div className="flex-1 space-y-8">
      <div id="domain-overview">
        <DomainOverview domain={selectedDomain} />
      </div>
      
      <div id="ad-creatives">
        <AdCreatives domain={selectedDomain} />
      </div>
      
      <div id="messaging">
        <Messaging domain={selectedDomain} />
      </div>
      
      <div id="performance-timeline">
        <PerformanceTimeline domain={selectedDomain} />
      </div>
      
      <div id="landing-experience">
        <LandingExperience domain={selectedDomain} />
      </div>
      
      <div id="targeting-insights">
        <TargetingInsights domain={selectedDomain} />
      </div>
      
      <div id="keywords-search">
        <KeywordsSearch domain={selectedDomain} />
      </div>
      
      <div id="engagement-metrics">
        <EngagementMetrics domain={selectedDomain} />
      </div>
      
      <div id="competitive-analysis">
        <CompetitiveAnalysis domain={selectedDomain} />
      </div>
      
      <div id="trends-reach">
        <TrendsReach domain={selectedDomain} />
      </div>
      
      <div id="technical-tracking">
        <TechnicalTracking domain={selectedDomain} />
      </div>
      
      <div id="distribution-devices">
        <DistributionDevices domain={selectedDomain} />
      </div>
    </div>
  );
};