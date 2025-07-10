import { useEffect } from 'react';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  structuredData?: object;
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Update document title
    if (config.title) {
      document.title = config.title;
    }

    // Update meta tags
    const updateMetaTag = (selector: string, content: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement('meta');
        if (selector.includes('property=')) {
          meta.setAttribute('property', selector.split('"')[1]);
        } else if (selector.includes('name=')) {
          meta.setAttribute('name', selector.split('"')[1]);
        }
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Update link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (link) {
        link.href = href;
      } else {
        link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    };

    if (config.description) {
      updateMetaTag('meta[name="description"]', config.description);
    }

    if (config.keywords) {
      updateMetaTag('meta[name="keywords"]', config.keywords);
    }

    // Open Graph tags
    if (config.ogTitle) {
      updateMetaTag('meta[property="og:title"]', config.ogTitle);
    }

    if (config.ogDescription) {
      updateMetaTag('meta[property="og:description"]', config.ogDescription);
    }

    if (config.ogImage) {
      updateMetaTag('meta[property="og:image"]', config.ogImage);
    }

    if (config.ogUrl) {
      updateMetaTag('meta[property="og:url"]', config.ogUrl);
    }

    // Twitter tags
    if (config.twitterTitle) {
      updateMetaTag('meta[property="twitter:title"]', config.twitterTitle);
    }

    if (config.twitterDescription) {
      updateMetaTag('meta[property="twitter:description"]', config.twitterDescription);
    }

    if (config.twitterImage) {
      updateMetaTag('meta[property="twitter:image"]', config.twitterImage);
    }

    // Canonical URL
    if (config.canonical) {
      updateLinkTag('canonical', config.canonical);
    }

    // Structured Data
    if (config.structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (script) {
        script.textContent = JSON.stringify(config.structuredData);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(config.structuredData);
        document.head.appendChild(script);
      }
    }
  }, [config]);
};