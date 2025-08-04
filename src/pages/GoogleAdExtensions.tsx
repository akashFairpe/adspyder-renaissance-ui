import React, { useState, useEffect } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const GoogleAdExtensions = () => {
  const [adInfo, setAdInfo] = useState({ adGoal: 'Google Text Ad', adId: '' });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [extensions, setExtensions] = useState<Record<string, any>>({});
  const [isMobile, setIsMobile] = useState(false);

  // Ad extension configurations
  const adExtensionConfig = {
    "Google Text Ad": {
      "supported_extensions": {
        "sitelink": {
          "label": "Sitelink",
          "description": "Displays additional links to content on your site.",
          "fields": [
            { "name": "title", "type": "text", "maxLength": 25, "required": true },
            { "name": "url", "type": "url", "required": true }
          ],
          "multiple": true
        },
        "enhanced_sitelink": {
          "label": "Enhanced Sitelink",
          "description": "Adds descriptions under sitelinks for more context.",
          "fields": [
            { "name": "title", "type": "text", "maxLength": 25, "required": true },
            { "name": "description", "type": "text", "maxLength": 90, "required": true },
            { "name": "url", "type": "url", "required": true }
          ],
          "multiple": true
        },
        "rating": {
          "label": "Seller Rating",
          "description": "Displays user-submitted ratings for your business.",
          "fields": [
            { "name": "rating", "type": "number", "min": 0, "max": 5, "step": 0.1, "required": true },
            { "name": "total_reviews", "type": "number", "min": 1, "required": true },
            { "name": "source_url", "type": "url", "required": false }
          ],
          "multiple": false
        },
        "app": {
          "label": "App Download (Mobile Only)",
          "description": "Promotes app installs from Google Play or Apple Store.",
          "fields": [
            { "name": "app_name", "type": "text", "required": true },
            { "name": "store_url", "type": "url", "required": true },
            { "name": "platform", "type": "select", "options": ["Android", "iOS"], "required": true }
          ],
          "mobile_only": true,
          "multiple": false
        },
        "price": {
          "label": "Price Extension",
          "description": "Shows prices for specific services or products.",
          "fields": [
            { "name": "label", "type": "text", "required": true },
            { "name": "price", "type": "text", "pattern": "^\\$\\d+(\\.\\d{2})?$", "required": true },
            { "name": "url", "type": "url", "required": true }
          ],
          "multiple": true
        },
        "promotion": {
          "label": "Promotion Extension",
          "description": "Displays discounts, promo codes or offers.",
          "fields": [
            { "name": "promotion_text", "type": "text", "maxLength": 60, "required": true },
            { "name": "discount", "type": "text", "example": "20% Off", "required": true },
            { "name": "final_url", "type": "url", "required": true }
          ],
          "multiple": true
        },
        "click_to_call": {
          "label": "Click-to-Call (Mobile Only)",
          "description": "Lets users tap to call you directly.",
          "fields": [
            { "name": "phone_number", "type": "tel", "pattern": "^\\+?[0-9\\-\\s]{10,20}$", "required": true },
            { "name": "call_hours", "type": "text", "example": "9AM–6PM EST", "required": false }
          ],
          "mobile_only": true,
          "multiple": false
        },
        "location": {
          "label": "Location Extension",
          "description": "Displays your business address and distance.",
          "fields": [
            { "name": "business_name", "type": "text", "required": true },
            { "name": "address", "type": "text", "required": true },
            { "name": "city", "type": "text", "required": true },
            { "name": "zip_code", "type": "text", "pattern": "^[0-9]{4,10}$", "required": true }
          ],
          "multiple": false
        },
        "phone_number": {
          "label": "Phone Number (Desktop Only)",
          "description": "Displays a static phone number (non-clickable).",
          "fields": [
            { "name": "phone_number", "type": "tel", "pattern": "^\\+?[0-9\\-\\s]{10,20}$", "required": true }
          ],
          "desktop_only": true,
          "multiple": false
        },
        "call_to_action": {
          "label": "Call-to-Action",
          "description": "Adds a button with a strong call-to-action.",
          "fields": [
            { "name": "cta_text", "type": "text", "maxLength": 20, "required": true }
          ],
          "multiple": false
        },
        "ad_disclosure": {
          "label": "Ad Disclosure",
          "description": "Displays required disclosure statements (e.g. political ads).",
          "fields": [
            { "name": "disclosure_text", "type": "text", "required": true },
            { "name": "disclosure_url", "type": "url", "required": false }
          ],
          "multiple": false
        }
      }
    }
  };

  useEffect(() => {
    // Detect if mobile
    setIsMobile(window.innerWidth <= 768);
    
    // Initialize extensions based on ad type
    initializeExtensions();
    
    // Simulate API call to fetch ad info
    const fetchAdInfo = async () => {
      try {
        setTimeout(() => {
          setAdInfo({ adGoal: 'Google Text Ad', adId: 'ad_123456' });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Failed to fetch ad info:', error);
        setLoading(false);
      }
    };

    fetchAdInfo();
  }, []);

  const initializeExtensions = () => {
    const config = adExtensionConfig[adInfo.adGoal as keyof typeof adExtensionConfig];
    if (!config) return;

    const initialExtensions: Record<string, any> = {};
    Object.entries(config.supported_extensions).forEach(([key, ext]) => {
      if (ext.multiple) {
        initialExtensions[key] = [{}];
      } else {
        initialExtensions[key] = {};
      }
    });
    setExtensions(initialExtensions);
  };

  const validateField = (fieldConfig: any, value: string) => {
    const newErrors = { ...errors };
    const fieldKey = `${fieldConfig.name}_${Date.now()}`;

    if (fieldConfig.required && !value) {
      newErrors[fieldKey] = `${fieldConfig.name} is required`;
      setErrors(newErrors);
      return false;
    }

    if (value) {
      switch (fieldConfig.type) {
        case 'url':
          const urlRegex = /^https?:\/\/.+\..+/;
          if (!urlRegex.test(value)) {
            newErrors[fieldKey] = 'URL must start with http:// or https://';
          } else {
            delete newErrors[fieldKey];
          }
          break;
        case 'tel':
          if (fieldConfig.pattern) {
            const phoneRegex = new RegExp(fieldConfig.pattern);
            if (!phoneRegex.test(value)) {
              newErrors[fieldKey] = 'Invalid phone number format';
            } else {
              delete newErrors[fieldKey];
            }
          }
          break;
        case 'text':
          if (fieldConfig.pattern) {
            const regex = new RegExp(fieldConfig.pattern);
            if (!regex.test(value)) {
              newErrors[fieldKey] = `Invalid format for ${fieldConfig.name}`;
            } else {
              delete newErrors[fieldKey];
            }
          }
          if (fieldConfig.maxLength && value.length > fieldConfig.maxLength) {
            newErrors[fieldKey] = `${fieldConfig.name} cannot exceed ${fieldConfig.maxLength} characters`;
          } else if (!fieldConfig.pattern) {
            delete newErrors[fieldKey];
          }
          break;
        case 'number':
          const num = parseFloat(value);
          if (isNaN(num)) {
            newErrors[fieldKey] = 'Must be a valid number';
          } else if (fieldConfig.min !== undefined && num < fieldConfig.min) {
            newErrors[fieldKey] = `Must be at least ${fieldConfig.min}`;
          } else if (fieldConfig.max !== undefined && num > fieldConfig.max) {
            newErrors[fieldKey] = `Must be at most ${fieldConfig.max}`;
          } else {
            delete newErrors[fieldKey];
          }
          break;
        default:
          if (value.includes('<script') || /[^\w\s$.,!?-]/.test(value)) {
            newErrors[fieldKey] = 'Invalid characters detected';
          } else {
            delete newErrors[fieldKey];
          }
      }
    } else {
      delete newErrors[fieldKey];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdTypeChange = (newAdType: string) => {
    setAdInfo({ ...adInfo, adGoal: newAdType });
    initializeExtensions();
  };

  const handleExtensionFieldChange = (extensionKey: string, fieldName: string, value: string, index?: number) => {
    const config = adExtensionConfig[adInfo.adGoal as keyof typeof adExtensionConfig];
    if (!config) return;

    const extensionConfig = config.supported_extensions[extensionKey as keyof typeof config.supported_extensions];
    
    if (extensionConfig.multiple && index !== undefined) {
      const newExtensions = { ...extensions };
      if (!newExtensions[extensionKey]) newExtensions[extensionKey] = [{}];
      newExtensions[extensionKey][index] = {
        ...newExtensions[extensionKey][index],
        [fieldName]: value
      };
      setExtensions(newExtensions);
    } else {
      setExtensions({
        ...extensions,
        [extensionKey]: {
          ...extensions[extensionKey],
          [fieldName]: value
        }
      });
    }
  };

  const addMultipleExtension = (extensionKey: string) => {
    setExtensions({
      ...extensions,
      [extensionKey]: [...(extensions[extensionKey] || []), {}]
    });
  };

  const removeMultipleExtension = (extensionKey: string, index: number) => {
    const newExtensions = { ...extensions };
    newExtensions[extensionKey] = newExtensions[extensionKey].filter((_: any, i: number) => i !== index);
    setExtensions(newExtensions);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      const cleanExtensions: Record<string, any> = {};
      
      Object.entries(extensions).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          const filtered = value.filter((item: any) => 
            Object.values(item).some(val => val && String(val).trim())
          );
          if (filtered.length > 0) {
            cleanExtensions[key] = filtered;
          }
        } else if (value && typeof value === 'object') {
          const hasValues = Object.values(value).some(val => val && String(val).trim());
          if (hasValues) {
            cleanExtensions[key] = value;
          }
        }
      });

      const payload = {
        adId: adInfo.adId,
        adGoal: adInfo.adGoal,
        extensions: cleanExtensions
      };

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

  const getAvailableExtensions = () => {
    const config = adExtensionConfig[adInfo.adGoal as keyof typeof adExtensionConfig];
    if (!config) return {};

    const availableExtensions: Record<string, any> = {};
    
    Object.entries(config.supported_extensions).forEach(([key, ext]) => {
      // Filter based on mobile/desktop
      if ((ext as any).mobile_only && !isMobile) return;
      if ((ext as any).desktop_only && isMobile) return;
      
      availableExtensions[key] = ext;
    });

    return availableExtensions;
  };

  const renderField = (fieldConfig: any, extensionKey: string, value: string, index?: number) => {
    const fieldKey = `${extensionKey}_${fieldConfig.name}_${index || 0}`;
    
    switch (fieldConfig.type) {
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => handleExtensionFieldChange(extensionKey, fieldConfig.name, e.target.value, index)}
            style={styles.input}
            required={fieldConfig.required}
          >
            <option value="">Select {fieldConfig.name}</option>
            {fieldConfig.options?.map((option: string) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'number':
        return (
          <input
            type="number"
            min={fieldConfig.min}
            max={fieldConfig.max}
            step={fieldConfig.step}
            value={value}
            onChange={(e) => handleExtensionFieldChange(extensionKey, fieldConfig.name, e.target.value, index)}
            style={styles.input}
            required={fieldConfig.required}
            placeholder={`Enter ${fieldConfig.name}`}
          />
        );
      default:
        return (
          <input
            type={fieldConfig.type}
            value={value}
            onChange={(e) => handleExtensionFieldChange(extensionKey, fieldConfig.name, e.target.value, index)}
            style={styles.input}
            required={fieldConfig.required}
            maxLength={fieldConfig.maxLength}
            placeholder={fieldConfig.example || `Enter ${fieldConfig.name}`}
            pattern={fieldConfig.pattern}
          />
        );
    }
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

  const relevantExtensions = getAvailableExtensions();

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <div style={styles.content}>
          <div style={styles.header}>
            <h1 style={styles.title}>Google Ad Extensions Manager</h1>
            <p style={styles.subtitle}>
              Configure and customize ad extensions for enhanced ad performance
            </p>
          </div>

          {/* Ad Type Selector */}
          <div style={styles.extensionSection}>
            <h3 style={styles.extensionTitle}>🎯 Select Ad Type</h3>
            <select
              value={adInfo.adGoal}
              onChange={(e) => handleAdTypeChange(e.target.value)}
              style={styles.select}
            >
              {Object.keys(adExtensionConfig).map((adType) => (
                <option key={adType} value={adType}>{adType}</option>
              ))}
            </select>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            {Object.entries(relevantExtensions).map(([extensionKey, extensionConfig]) => (
              <div key={extensionKey} style={styles.extensionSection}>
                <h3 style={styles.extensionTitle}>
                  {(extensionConfig as any).label}
                  {(extensionConfig as any).mobile_only && ' (Mobile Only)'}
                  {(extensionConfig as any).desktop_only && ' (Desktop Only)'}
                </h3>
                <p style={styles.helper}>{extensionConfig.description}</p>

                {extensionConfig.multiple ? (
                  // Multiple instances
                  <div>
                    {(extensions[extensionKey] || [{}]).map((instance: any, index: number) => (
                      <div key={index} style={styles.multipleInstanceGroup}>
                        <div style={styles.fieldGroup}>
                          {extensionConfig.fields.map((fieldConfig: any) => (
                            <div key={fieldConfig.name} style={styles.fieldContainer}>
                              <label style={styles.fieldLabel}>
                                {fieldConfig.name.replace('_', ' ').toUpperCase()}
                                {fieldConfig.required && <span style={styles.required}>*</span>}
                              </label>
                              {renderField(
                                fieldConfig,
                                extensionKey,
                                instance[fieldConfig.name] || '',
                                index
                              )}
                            </div>
                          ))}
                        </div>
                        {(extensions[extensionKey]?.length || 0) > 1 && (
                          <button
                            type="button"
                            onClick={() => removeMultipleExtension(extensionKey, index)}
                            style={styles.removeButton}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addMultipleExtension(extensionKey)}
                      style={styles.addButton}
                    >
                      + Add Another {extensionConfig.label}
                    </button>
                  </div>
                ) : (
                  // Single instance
                  <div style={styles.fieldGroup}>
                    {extensionConfig.fields.map((fieldConfig: any) => (
                      <div key={fieldConfig.name} style={styles.fieldContainer}>
                        <label style={styles.fieldLabel}>
                          {fieldConfig.name.replace('_', ' ').toUpperCase()}
                          {fieldConfig.required && <span style={styles.required}>*</span>}
                        </label>
                        {renderField(
                          fieldConfig,
                          extensionKey,
                          extensions[extensionKey]?.[fieldConfig.name] || ''
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={submitting}
              style={{...styles.submitButton, ...(submitting ? styles.submitButtonDisabled : {})}}
            >
              {submitting ? 'Saving Extensions...' : 'Save Ad Extensions'}
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
  select: {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: 'white',
    color: '#2d3748',
    boxSizing: 'border-box' as const,
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  fieldContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  fieldLabel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#4a5568',
    textTransform: 'capitalize' as const,
  },
  required: {
    color: '#e53e3e',
    marginLeft: '4px',
  },
  multipleInstanceGroup: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    backgroundColor: '#f8fafc',
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