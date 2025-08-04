import React, { useState, useEffect } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const GoogleAdExtensions = () => {
  const [adInfo, setAdInfo] = useState({ adGoal: '', adId: '' });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [extensions, setExtensions] = useState({
    sitelinks: [{ title: '', url: '' }],
    callout: [''],
    price: '',
    promotion: '',
    phone: ''
  });

  // Ad goal to extensions mapping
  const extensionMapping = {
    'leads': ['phone', 'callout', 'sitelinks', 'location'],
    'sales': ['price', 'promotion', 'sitelinks', 'callout'],
    'traffic': ['sitelinks', 'callout'],
    'awareness': ['callout', 'sitelinks'],
    'app': ['sitelinks', 'callout']
  };

  useEffect(() => {
    // Simulate API call to fetch ad info
    const fetchAdInfo = async () => {
      try {
        // In real implementation, this would be: 
        // const response = await fetch(`/api/ad-info/${adId}`);
        // const data = await response.json();
        
        // Mock data for demonstration
        setTimeout(() => {
          setAdInfo({ adGoal: 'leads', adId: 'ad_123456' });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Failed to fetch ad info:', error);
        setLoading(false);
      }
    };

    fetchAdInfo();
  }, []);

  const validateField = (field, value) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'phone':
        const phoneRegex = /^\+1-\d{3}-\d{3}-\d{4}$/;
        if (value && !phoneRegex.test(value)) {
          newErrors.phone = 'Phone must be in +1-xxx-xxx-xxxx format';
        } else {
          delete newErrors.phone;
        }
        break;
      case 'url':
        const urlRegex = /^https?:\/\/.+\..+/;
        if (value && !urlRegex.test(value)) {
          newErrors.url = 'URL must start with http:// or https://';
        } else {
          delete newErrors.url;
        }
        break;
      case 'price':
        const priceRegex = /^\$\d+(\.\d{2})?$/;
        if (value && !priceRegex.test(value)) {
          newErrors.price = 'Price must be in $XX.XX format';
        } else {
          delete newErrors.price;
        }
        break;
      default:
        if (value && (value.includes('<script') || /[^\w\s$.,!?-]/.test(value))) {
          newErrors[field] = 'Invalid characters detected';
        } else {
          delete newErrors[field];
        }
    }

    setErrors(newErrors);
  };

  const handleInputChange = (field, value, index = null) => {
    if (field === 'sitelinks') {
      const newSitelinks = [...extensions.sitelinks];
      newSitelinks[index] = { ...newSitelinks[index], ...value };
      setExtensions({ ...extensions, sitelinks: newSitelinks });
    } else if (field === 'callout' && index !== null) {
      const newCallouts = [...extensions.callout];
      newCallouts[index] = value;
      setExtensions({ ...extensions, callout: newCallouts });
    } else {
      setExtensions({ ...extensions, [field]: value });
    }

    validateField(field, typeof value === 'string' ? value : value.url || value.title);
  };

  const addSitelink = () => {
    setExtensions({
      ...extensions,
      sitelinks: [...extensions.sitelinks, { title: '', url: '' }]
    });
  };

  const removeSitelink = (index) => {
    const newSitelinks = extensions.sitelinks.filter((_, i) => i !== index);
    setExtensions({ ...extensions, sitelinks: newSitelinks });
  };

  const addCallout = () => {
    setExtensions({
      ...extensions,
      callout: [...extensions.callout, '']
    });
  };

  const removeCallout = (index) => {
    const newCallouts = extensions.callout.filter((_, i) => i !== index);
    setExtensions({ ...extensions, callout: newCallouts });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Final validation
    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      setSubmitting(false);
      return;
    }

    try {
      // Filter out empty extensions
      const cleanExtensions = {};
      
          if (extensions.sitelinks.some(sl => sl.title && sl.url)) {
            (cleanExtensions as any).sitelinks = extensions.sitelinks.filter(sl => sl.title && sl.url);
          }
          
          if (extensions.callout.some(c => c.trim())) {
            (cleanExtensions as any).callout = extensions.callout.filter(c => c.trim());
          }
      
          ['price', 'promotion', 'phone'].forEach(field => {
            if ((extensions as any)[field]) {
              (cleanExtensions as any)[field] = (extensions as any)[field];
            }
          });

      const payload = {
        adId: adInfo.adId,
        adGoal: adInfo.adGoal,
        extensions: cleanExtensions
      };

      // In real implementation:
      // const response = await fetch('/api/ad-extensions', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload)
      // });

      console.log('Submitting extensions:', payload);
      
      // Simulate API call
      setTimeout(() => {
        alert('Ad extensions saved successfully!');
        setSubmitting(false);
      }, 1500);

    } catch (error) {
      console.error('Failed to save extensions:', error);
      setSubmitting(false);
    }
  };

  const getRelevantExtensions = () => {
    return extensionMapping[adInfo.adGoal.toLowerCase()] || [];
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <Header />
        <div style={styles.loadingContainer}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading ad information...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const relevantExtensions = getRelevantExtensions();

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <div style={styles.content}>
          <div style={styles.header}>
            <h1 style={styles.title}>Add Google Ad Extensions</h1>
            <p style={styles.subtitle}>
              Enhance your ad with additional information based on your goal: <strong>{adInfo.adGoal}</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Phone Extension */}
            {relevantExtensions.includes('phone') && (
              <div style={styles.extensionSection}>
                <h3 style={styles.extensionTitle}>📞 Phone Extension</h3>
                <p style={styles.helper}>Add a phone number for direct contact</p>
                <input
                  type="text"
                  placeholder="+1-555-123-4567"
                  value={extensions.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  style={{...styles.input, ...(errors.phone ? styles.inputError : {})}}
                />
                {errors.phone && <span style={styles.error}>{errors.phone}</span>}
              </div>
            )}

            {/* Price Extension */}
            {relevantExtensions.includes('price') && (
              <div style={styles.extensionSection}>
                <h3 style={styles.extensionTitle}>💰 Price Extension</h3>
                <p style={styles.helper}>Show your starting price</p>
                <input
                  type="text"
                  placeholder="$99.99"
                  value={extensions.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  style={{...styles.input, ...(errors.price ? styles.inputError : {})}}
                />
                {errors.price && <span style={styles.error}>{errors.price}</span>}
              </div>
            )}

            {/* Promotion Extension */}
            {relevantExtensions.includes('promotion') && (
              <div style={styles.extensionSection}>
                <h3 style={styles.extensionTitle}>🎯 Promotion Extension</h3>
                <p style={styles.helper}>Highlight special offers</p>
                <input
                  type="text"
                  placeholder="20% Off All Items"
                  value={extensions.promotion}
                  onChange={(e) => handleInputChange('promotion', e.target.value)}
                  style={styles.input}
                />
              </div>
            )}

            {/* Sitelinks Extension */}
            {relevantExtensions.includes('sitelinks') && (
              <div style={styles.extensionSection}>
                <h3 style={styles.extensionTitle}>🔗 Sitelinks Extension</h3>
                <p style={styles.helper}>Add links to specific pages on your website</p>
                {extensions.sitelinks.map((sitelink, index) => (
                  <div key={index} style={styles.sitelinkGroup}>
                    <input
                      type="text"
                      placeholder="Link Title"
                      value={sitelink.title}
                      onChange={(e) => handleInputChange('sitelinks', { title: e.target.value }, index)}
                      style={styles.input}
                    />
                    <input
                      type="text"
                      placeholder="https://example.com/page"
                      value={sitelink.url}
                      onChange={(e) => handleInputChange('sitelinks', { url: e.target.value }, index)}
                      style={{...styles.input, ...(errors.url ? styles.inputError : {})}}
                    />
                    {extensions.sitelinks.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSitelink(index)}
                        style={styles.removeButton}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                {errors.url && <span style={styles.error}>{errors.url}</span>}
                <button
                  type="button"
                  onClick={addSitelink}
                  style={styles.addButton}
                >
                  + Add Another Sitelink
                </button>
              </div>
            )}

            {/* Callout Extension */}
            {relevantExtensions.includes('callout') && (
              <div style={styles.extensionSection}>
                <h3 style={styles.extensionTitle}>📢 Callout Extension</h3>
                <p style={styles.helper}>Add short phrases highlighting key features</p>
                {extensions.callout.map((callout, index) => (
                  <div key={index} style={styles.calloutGroup}>
                    <input
                      type="text"
                      placeholder="Free Shipping, 24/7 Support, etc."
                      value={callout}
                      onChange={(e) => handleInputChange('callout', e.target.value, index)}
                      style={styles.input}
                    />
                    {extensions.callout.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeCallout(index)}
                        style={styles.removeButton}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addCallout}
                  style={styles.addButton}
                >
                  + Add Another Callout
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              style={{...styles.submitButton, ...(submitting ? styles.submitButtonDisabled : {})}}
            >
              {submitting ? 'Saving...' : 'Save Ad Extensions'}
            </button>
          </form>
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .extension-section {
          transition: all 0.3s ease;
        }
        
        .extension-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 768px) {
          .content {
            padding: 20px 15px !important;
          }
          
          .form {
            gap: 20px !important;
          }
          
          .sitelink-group {
            flex-direction: column !important;
          }
          
          .sitelink-group input {
            margin-bottom: 10px !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fcfdff',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  main: {
    paddingTop: '80px',
    paddingBottom: '40px',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#4a5568',
    lineHeight: '1.6',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '30px',
  },
  extensionSection: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  },
  extensionTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '8px',
  },
  helper: {
    fontSize: '0.9rem',
    color: '#718096',
    marginBottom: '16px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s ease',
    backgroundColor: 'white',
    color: '#2d3748',
    boxSizing: 'border-box' as const,
  },
  inputError: {
    borderColor: '#e53e3e',
  },
  error: {
    color: '#e53e3e',
    fontSize: '0.875rem',
    marginTop: '4px',
    display: 'block',
  },
  sitelinkGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '12px',
    alignItems: 'center',
  },
  calloutGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '12px',
    alignItems: 'center',
  },
  removeButton: {
    padding: '8px 16px',
    backgroundColor: '#fed7d7',
    color: '#c53030',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#bee3f8',
    color: '#2c5282',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginTop: '8px',
  },
  submitButton: {
    padding: '16px 32px',
    backgroundColor: '#4299e1',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    marginTop: '20px',
  },
  submitButtonDisabled: {
    backgroundColor: '#a0aec0',
    cursor: 'not-allowed',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #e2e8f0',
    borderTop: '4px solid #4299e1',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '16px',
  },
  loadingText: {
    fontSize: '1.1rem',
    color: '#718096',
  },
};

export default GoogleAdExtensions;