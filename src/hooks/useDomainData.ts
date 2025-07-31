import { useState, useEffect } from 'react';

// API endpoints configuration
const API_BASE_URL = process.env.VITE_API_URL || '/api';

export interface DomainOverviewData {
  domain: string;
  brandName: string;
  industry: string;
  countries: string[];
  adSpend: number;
  totalAds: number;
  activePlatforms: string[];
}

export interface PlatformData {
  platforms: Array<{
    name: string;
    adCount: number;
    formats: string[];
  }>;
}

export interface CTAData {
  ctas: Array<{
    text: string;
    count: number;
    trend: string;
  }>;
}

export interface CampaignTimelineData {
  campaigns: Array<{
    id: string;
    name: string;
    firstSeen: string;
    lastSeen: string;
    platform: string;
    status: 'active' | 'ended';
  }>;
}

export interface KeywordData {
  keywords: Array<{
    term: string;
    volume: number;
    competition: string;
    category: string;
  }>;
}

export interface CompetitorData {
  competitors: Array<{
    domain: string;
    brandName: string;
    similarity: number;
    commonKeywords: number;
  }>;
}

export interface PerformanceData {
  totalAds: number;
  uniqueCreatives: number;
  avgFrequency: number;
  clustersAnalyzed: number;
  estimatedReach: number;
}

// Static placeholder data
const getPlaceholderData = (domain: string) => ({
  overview: {
    domain,
    brandName: domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1),
    industry: 'E-commerce',
    countries: ['United States', 'Canada', 'United Kingdom', 'Australia'],
    adSpend: 125000,
    totalAds: 342,
    activePlatforms: ['Google Ads', 'Facebook', 'Instagram', 'YouTube']
  } as DomainOverviewData,
  
  platforms: {
    platforms: [
      { name: 'Google Ads', adCount: 156, formats: ['Search', 'Display', 'Shopping'] },
      { name: 'Facebook', adCount: 89, formats: ['Feed', 'Stories', 'Reels'] },
      { name: 'Instagram', adCount: 67, formats: ['Feed', 'Stories', 'Reels'] },
      { name: 'YouTube', adCount: 30, formats: ['In-stream', 'Discovery', 'Shorts'] }
    ]
  } as PlatformData,
  
  ctas: {
    ctas: [
      { text: 'Shop Now', count: 89, trend: '+12%' },
      { text: 'Learn More', count: 67, trend: '+8%' },
      { text: 'Get Started', count: 45, trend: '-3%' },
      { text: 'Sign Up Free', count: 34, trend: '+15%' },
      { text: 'Download App', count: 28, trend: '+5%' }
    ]
  } as CTAData,
  
  campaigns: {
    campaigns: [
      { id: '1', name: 'Summer Sale Campaign', firstSeen: '2024-06-01', lastSeen: '2024-08-31', platform: 'Google Ads', status: 'ended' as const },
      { id: '2', name: 'Back to School', firstSeen: '2024-08-15', lastSeen: '2024-09-30', platform: 'Facebook', status: 'ended' as const },
      { id: '3', name: 'Holiday Shopping', firstSeen: '2024-11-01', lastSeen: '2024-12-31', platform: 'Google Ads', status: 'active' as const },
      { id: '4', name: 'New Year Fitness', firstSeen: '2024-12-26', lastSeen: '2025-02-28', platform: 'Instagram', status: 'active' as const },
      { id: '5', name: 'Spring Collection', firstSeen: '2025-03-01', lastSeen: '2025-05-31', platform: 'YouTube', status: 'active' as const }
    ]
  } as CampaignTimelineData,
  
  keywords: {
    keywords: [
      { term: 'best deals', volume: 12500, competition: 'High', category: 'Commercial' },
      { term: 'discount shopping', volume: 8900, competition: 'Medium', category: 'Commercial' },
      { term: 'online store', volume: 15600, competition: 'High', category: 'Brand' },
      { term: 'free shipping', volume: 6700, competition: 'Low', category: 'Offer' },
      { term: 'quality products', volume: 4300, competition: 'Medium', category: 'Brand' }
    ]
  } as KeywordData,
  
  competitors: {
    competitors: [
      { domain: 'competitor1.com', brandName: 'Competitor One', similarity: 85, commonKeywords: 23 },
      { domain: 'competitor2.com', brandName: 'Competitor Two', similarity: 78, commonKeywords: 19 },
      { domain: 'competitor3.com', brandName: 'Competitor Three', similarity: 72, commonKeywords: 15 },
      { domain: 'competitor4.com', brandName: 'Competitor Four', similarity: 68, commonKeywords: 12 }
    ]
  } as CompetitorData,
  
  performance: {
    totalAds: 342,
    uniqueCreatives: 156,
    avgFrequency: 3.2,
    clustersAnalyzed: 12,
    estimatedReach: 2500000
  } as PerformanceData
});

export const useDomainData = (domain: string) => {
  const [data, setData] = useState<ReturnType<typeof getPlaceholderData> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // For now, use static placeholder data
        // In the future, replace with actual API calls:
        // const response = await fetch(`${API_BASE_URL}/domain-overview?domain=${domain}`);
        // const result = await response.json();
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const placeholderData = getPlaceholderData(domain);
        setData(placeholderData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch domain data');
        // Fallback to placeholder data on error
        setData(getPlaceholderData(domain));
      } finally {
        setLoading(false);
      }
    };

    if (domain) {
      fetchData();
    }
  }, [domain]);

  return { data, loading, error };
};

// Individual section hooks for modular data fetching
export const useDomainOverview = (domain: string) => {
  const { data, loading, error } = useDomainData(domain);
  return { data: data?.overview, loading, error };
};

export const usePlatformData = (domain: string) => {
  const { data, loading, error } = useDomainData(domain);
  return { data: data?.platforms, loading, error };
};

export const useCTAData = (domain: string) => {
  const { data, loading, error } = useDomainData(domain);
  return { data: data?.ctas, loading, error };
};

export const useCampaignTimeline = (domain: string) => {
  const { data, loading, error } = useDomainData(domain);
  return { data: data?.campaigns, loading, error };
};

export const useKeywordData = (domain: string) => {
  const { data, loading, error } = useDomainData(domain);
  return { data: data?.keywords, loading, error };
};

export const useCompetitorData = (domain: string) => {
  const { data, loading, error } = useDomainData(domain);
  return { data: data?.competitors, loading, error };
};

export const usePerformanceData = (domain: string) => {
  const { data, loading, error } = useDomainData(domain);
  return { data: data?.performance, loading, error };
};