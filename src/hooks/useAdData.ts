
import { useState, useEffect } from 'react';

export interface Ad {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface AdDataSource {
  type: 'static' | 'api';
  staticData?: Ad[];
  apiUrl?: string;
  apiHeaders?: Record<string, string>;
}

export const useAdData = (dataSource: AdDataSource) => {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (dataSource.type === 'static' && dataSource.staticData) {
        setAds(dataSource.staticData);
        return;
      }

      if (dataSource.type === 'api' && dataSource.apiUrl) {
        setLoading(true);
        setError(null);
        
        try {
          console.log('Fetching ads from API:', dataSource.apiUrl);
          
          const response = await fetch(dataSource.apiUrl, {
            headers: {
              'Content-Type': 'application/json',
              ...dataSource.apiHeaders,
            },
          });

          if (!response.ok) {
            throw new Error(`API request failed: ${response.status} ${response.statusText}`);
          }

          const data = await response.json();
          console.log('API response received:', data);
          
          // Assuming the API returns an array of ads or an object with an ads property
          const adsData = Array.isArray(data) ? data : data.ads || data.data || [];
          setAds(adsData);
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to fetch ad data';
          console.error('Error fetching ad data:', errorMessage);
          setError(errorMessage);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [dataSource]);

  return { ads, loading, error };
};
