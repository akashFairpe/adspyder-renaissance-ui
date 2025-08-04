import React, { useState, useEffect } from 'react';
import { Trash2, Plus } from 'lucide-react';

interface AdExtensionsFormProps {
  onSubmit?: (data: any) => void;
  initialAdGoal?: string;
}

const AdExtensionsForm: React.FC<AdExtensionsFormProps> = ({ 
  onSubmit, 
  initialAdGoal = 'Sales' 
}) => {
  const [adGoal, setAdGoal] = useState(initialAdGoal);
  const [selectedExtension, setSelectedExtension] = useState<string>('');
  const [extensions, setExtensions] = useState<Record<string, any>>({});
  const [isMobile, setIsMobile] = useState(false);

  const adExtensionConfig = {
    "Sales": {
      "extensions": {
        "sitelink": {
          "description": "Link to specific product or deal pages.",
          "fields": [
            { "name": "title", "type": "text", "maxLength": 25, "required": true },
            { "name": "url", "type": "url", "required": true }
          ],
          "multiple": true
        },
        "price": {
          "description": "Show price of specific offerings.",
          "fields": [
            { "name": "label", "type": "text", "required": true },
            { "name": "price", "type": "text", "pattern": "^\\$\\d+(\\.\\d{2})?$", "required": true },
            { "name": "url", "type": "url", "required": true }
          ],
          "multiple": true
        },
        "promotion": {
          "description": "Highlight discounts or seasonal offers.",
          "fields": [
            { "name": "promotion_text", "type": "text", "maxLength": 60, "required": true },
            { "name": "discount", "type": "text", "required": true },
            { "name": "final_url", "type": "url", "required": true }
          ],
          "multiple": true
        },
        "click_to_call": {
          "description": "Click-to-call feature (mobile only).",
          "fields": [
            { "name": "phone_number", "type": "tel", "pattern": "^\\+?[0-9\\-\\s]{10,20}$", "required": true },
            { "name": "call_hours", "type": "text", "required": false }
          ],
          "mobile_only": true
        },
        "call_to_action": {
          "description": "Adds a CTA like 'Buy Now'.",
          "fields": [
            { "name": "cta_text", "type": "text", "maxLength": 20, "required": true }
          ]
        }
      }
    },
    "Leads": {
      "extensions": {
        "phone_number": {
          "description": "Static phone number (desktop only).",
          "fields": [
            { "name": "phone_number", "type": "tel", "pattern": "^\\+?[0-9\\-\\s]{10,20}$", "required": true }
          ],
          "desktop_only": true
        },
        "click_to_call": {
          "description": "Let users call directly (mobile).",
          "fields": [
            { "name": "phone_number", "type": "tel", "required": true }
          ],
          "mobile_only": true
        },
        "sitelink": {
          "description": "Link to lead-gen content: demo, contact, etc.",
          "fields": [
            { "name": "title", "type": "text", "required": true },
            { "name": "url", "type": "url", "required": true }
          ],
          "multiple": true
        },
        "call_to_action": {
          "description": "Prompt users to take an action like 'Get Quote'.",
          "fields": [
            { "name": "cta_text", "type": "text", "required": true }
          ]
        },
        "rating": {
          "description": "Show user trust scores.",
          "fields": [
            { "name": "rating", "type": "number", "min": 0, "max": 5, "required": true },
            { "name": "total_reviews", "type": "number", "min": 1, "required": true }
          ]
        }
      }
    },
    "Website Traffic": {
      "extensions": {
        "sitelink": {
          "description": "Drive traffic to various parts of the site.",
          "fields": [
            { "name": "title", "type": "text", "required": true },
            { "name": "url", "type": "url", "required": true }
          ],
          "multiple": true
        },
        "callout": {
          "description": "Add short supporting claims or features.",
          "fields": [
            { "name": "callouts", "type": "list", "itemType": "text", "maxLength": 25, "required": true }
          ]
        },
        "rating": {
          "description": "Show reputation to increase trust.",
          "fields": [
            { "name": "rating", "type": "number", "required": true },
            { "name": "total_reviews", "type": "number", "required": true }
          ]
        },
        "call_to_action": {
          "description": "Encourage users to explore the site.",
          "fields": [
            { "name": "cta_text", "type": "text", "required": true }
          ]
        }
      }
    },
    "App Promotion": {
      "extensions": {
        "app": {
          "description": "Download the app from store.",
          "fields": [
            { "name": "app_name", "type": "text", "required": true },
            { "name": "store_url", "type": "url", "required": true },
            { "name": "platform", "type": "select", "options": ["iOS", "Android"], "required": true }
          ],
          "mobile_only": true
        },
        "promotion": {
          "description": "Promotional offer for app users.",
          "fields": [
            { "name": "promotion_text", "type": "text", "required": true },
            { "name": "discount", "type": "text", "required": true }
          ]
        },
        "call_to_action": {
          "description": "Encourage app installs.",
          "fields": [
            { "name": "cta_text", "type": "text", "required": true }
          ]
        },
        "sitelink": {
          "description": "Link to app feature or support pages.",
          "fields": [
            { "name": "title", "type": "text", "required": true },
            { "name": "url", "type": "url", "required": true }
          ],
          "multiple": true
        }
      }
    },
    "Awareness & Consideration": {
      "extensions": {
        "sitelink": {
          "description": "Link to brand or story pages.",
          "fields": [
            { "name": "title", "type": "text", "required": true },
            { "name": "url", "type": "url", "required": true }
          ]
        },
        "rating": {
          "description": "Social proof for brand.",
          "fields": [
            { "name": "rating", "type": "number", "required": true },
            { "name": "total_reviews", "type": "number", "required": true }
          ]
        },
        "callout": {
          "description": "Add brand values or USP.",
          "fields": [
            { "name": "callouts", "type": "list", "itemType": "text", "required": true }
          ]
        },
        "call_to_action": {
          "description": "Encourage people to learn more.",
          "fields": [
            { "name": "cta_text", "type": "text", "required": true }
          ]
        },
        "ad_disclosure": {
          "description": "Required for political or advocacy ads.",
          "fields": [
            { "name": "disclosure_text", "type": "text", "required": true }
          ]
        }
      }
    },
    "Engagement": {
      "extensions": {
        "callout": {
          "description": "Prompt participation or sharing.",
          "fields": [
            { "name": "callouts", "type": "list", "itemType": "text", "required": true }
          ]
        },
        "sitelink": {
          "description": "Link to polls, contests, or blogs.",
          "fields": [
            { "name": "title", "type": "text", "required": true },
            { "name": "url", "type": "url", "required": true }
          ],
          "multiple": true
        },
        "click_to_call": {
          "description": "Quick call to engage (mobile only).",
          "fields": [
            { "name": "phone_number", "type": "tel", "required": true }
          ],
          "mobile_only": true
        },
        "app": {
          "description": "Engage via app download.",
          "fields": [
            { "name": "app_name", "type": "text", "required": true },
            { "name": "store_url", "type": "url", "required": true },
            { "name": "platform", "type": "select", "options": ["Android", "iOS"], "required": true }
          ],
          "mobile_only": true
        },
        "call_to_action": {
          "description": "Encourage engagement: 'Join Us', 'Chat Now'.",
          "fields": [
            { "name": "cta_text", "type": "text", "required": true }
          ]
        }
      }
    }
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    setSelectedExtension('');
    setExtensions({});
  }, [adGoal]);

  const initializeExtensions = () => {
    const config = adExtensionConfig[adGoal as keyof typeof adExtensionConfig];
    if (!config) return;

    const initialExtensions: Record<string, any> = {};
    Object.entries(config.extensions).forEach(([key, ext]) => {
      if ((ext as any).multiple) {
        initialExtensions[key] = [{}];
      } else {
        initialExtensions[key] = {};
      }
    });
    setExtensions(initialExtensions);
  };

  const getAvailableExtensions = () => {
    const config = adExtensionConfig[adGoal as keyof typeof adExtensionConfig];
    if (!config || !config.extensions) return {};

    const availableExtensions: Record<string, any> = {};
    
    Object.entries(config.extensions).forEach(([key, ext]) => {
      if ((ext as any).mobile_only && !isMobile) return;
      if ((ext as any).desktop_only && isMobile) return;
      
      availableExtensions[key] = ext;
    });

    return availableExtensions;
  };

  const handleExtensionFieldChange = (extensionKey: string, fieldName: string, value: string, index?: number) => {
    const config = adExtensionConfig[adGoal as keyof typeof adExtensionConfig];
    if (!config) return;

    const extensionConfig = config.extensions[extensionKey as keyof typeof config.extensions];
    
    if ((extensionConfig as any).multiple && index !== undefined) {
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

  const selectExtension = (extensionKey: string) => {
    setSelectedExtension(extensionKey);
    
    const config = adExtensionConfig[adGoal as keyof typeof adExtensionConfig];
    if (!config) return;
    
    const extensionConfig = config.extensions[extensionKey as keyof typeof config.extensions];
    
    if ((extensionConfig as any).multiple) {
      setExtensions({
        [extensionKey]: [{}]
      });
    } else {
      setExtensions({
        [extensionKey]: {}
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
      adGoal,
      extensions: cleanExtensions
    };

    onSubmit?.(payload);
  };

  const renderField = (fieldConfig: any, extensionKey: string, value: string, index?: number) => {
    const baseInputStyle = {
      width: '100%',
      height: '40px',
      padding: '8px 12px',
      border: '1px solid #E5E7EB',
      borderRadius: '4px',
      fontSize: '14px',
      fontFamily: 'Inter, system-ui, sans-serif',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      outline: 'none',
      transition: 'border-color 0.2s ease'
    };

    const baseSelectStyle = {
      ...baseInputStyle,
      cursor: 'pointer',
      paddingRight: '32px',
      backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEuNUw2IDYuNUwxMSAxLjUiIHN0cm9rZT0iIzZDNzU3RCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      appearance: 'none' as const
    };

    switch (fieldConfig.type) {
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => handleExtensionFieldChange(extensionKey, fieldConfig.name, e.target.value, index)}
            style={baseSelectStyle}
            required={fieldConfig.required}
            onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          >
            <option value="">{`Select ${fieldConfig.name}`}</option>
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
            required={fieldConfig.required}
            placeholder={`Enter ${fieldConfig.name}`}
            style={baseInputStyle}
            onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          />
        );
      default:
        return (
          <input
            type={fieldConfig.type}
            value={value}
            onChange={(e) => handleExtensionFieldChange(extensionKey, fieldConfig.name, e.target.value, index)}
            required={fieldConfig.required}
            maxLength={fieldConfig.maxLength}
            placeholder={fieldConfig.example || `Enter ${fieldConfig.name}`}
            style={baseInputStyle}
            onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          />
        );
    }
  };

  const relevantExtensions = getAvailableExtensions();

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    fontFamily: 'Inter, system-ui, sans-serif'
  };

  const headerStyle = {
    padding: '24px',
    borderBottom: '1px solid #E5E7EB'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2C3E50',
    margin: '0 0 8px 0',
    lineHeight: '1.5'
  };

  const subtitleStyle = {
    fontSize: '14px',
    color: '#6C757D',
    margin: '0',
    lineHeight: '1.6'
  };

  const contentStyle = {
    padding: '24px'
  };

  const sectionStyle = {
    marginBottom: '24px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '8px'
  };

  const selectStyle = {
    width: '100%',
    height: '40px',
    padding: '8px 12px',
    border: '1px solid #E5E7EB',
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'Inter, system-ui, sans-serif',
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
    outline: 'none',
    cursor: 'pointer',
    paddingRight: '32px',
    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEuNUw2IDYuNUwxMSAxLjUiIHN0cm9rZT0iIzZDNzU3RCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    appearance: 'none' as const,
    transition: 'border-color 0.2s ease'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px'
  };

  const extensionButtonStyle = {
    padding: '16px',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    textAlign: 'left' as const,
    transition: 'all 0.2s ease',
    minHeight: '80px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start'
  };

  const selectedExtensionButtonStyle = {
    ...extensionButtonStyle,
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
    color: '#FFFFFF'
  };

  const extensionTitleStyle = {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '4px',
    lineHeight: '1.4'
  };

  const extensionDescStyle = {
    fontSize: '12px',
    lineHeight: '1.4',
    opacity: 0.8
  };

  const badgeStyle = {
    fontSize: '10px',
    padding: '2px 8px',
    borderRadius: '12px',
    marginTop: '8px',
    alignSelf: 'flex-start'
  };

  const mobileBadgeStyle = {
    ...badgeStyle,
    backgroundColor: '#DBEAFE',
    color: '#1E40AF'
  };

  const desktopBadgeStyle = {
    ...badgeStyle,
    backgroundColor: '#D1FAE5',
    color: '#065F46'
  };

  const configCardStyle = {
    backgroundColor: '#F8F9FA',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    padding: '16px',
    marginTop: '16px'
  };

  const formGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px'
  };

  const fieldGroupStyle = {
    marginBottom: '16px'
  };

  const submitButtonStyle = {
    width: '100%',
    height: '44px',
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '24px',
    transition: 'background-color 0.2s ease'
  };

  const removeButtonStyle = {
    padding: '8px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    color: '#6C757D',
    transition: 'background-color 0.2s ease'
  };

  const addButtonStyle = {
    width: '100%',
    height: '36px',
    backgroundColor: 'transparent',
    color: '#3B82F6',
    border: '1px solid #3B82F6',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.2s ease'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Ad Extensions Configuration</h2>
        <p style={subtitleStyle}>Configure and customize ad extensions for enhanced ad performance</p>
      </div>
      
      <div style={contentStyle}>
        {/* Ad Goal Selector */}
        <div style={sectionStyle}>
          <label style={labelStyle} htmlFor="ad-goal">Ad Goal</label>
          <select 
            id="ad-goal"
            value={adGoal} 
            onChange={(e) => setAdGoal(e.target.value)}
            style={selectStyle}
            onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          >
            {Object.keys(adExtensionConfig).map((goal) => (
              <option key={goal} value={goal}>{goal}</option>
            ))}
          </select>
        </div>

        {/* Extension Selector */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Available Ad Extensions</label>
          <div style={gridStyle}>
            {Object.entries(relevantExtensions).map(([extensionKey, extensionConfig]) => (
              <div
                key={extensionKey}
                style={selectedExtension === extensionKey ? selectedExtensionButtonStyle : extensionButtonStyle}
                onClick={() => selectExtension(extensionKey)}
                onMouseEnter={(e) => {
                  if (selectedExtension !== extensionKey) {
                    e.currentTarget.style.borderColor = '#3B82F6';
                    e.currentTarget.style.backgroundColor = '#F8F9FA';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedExtension !== extensionKey) {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                  }
                }}
              >
                <div style={extensionTitleStyle}>
                  {extensionKey.replace('_', ' ').toUpperCase()}
                </div>
                <div style={extensionDescStyle}>
                  {extensionConfig.description}
                </div>
                {(extensionConfig as any).mobile_only && (
                  <span style={mobileBadgeStyle}>Mobile Only</span>
                )}
                {(extensionConfig as any).desktop_only && (
                  <span style={desktopBadgeStyle}>Desktop Only</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Extension Configuration */}
        {selectedExtension && (
          <form onSubmit={handleSubmit}>
            <div style={configCardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ ...extensionTitleStyle, fontSize: '18px', margin: '0 0 4px 0', color: '#2C3E50' }}>
                    {selectedExtension.replace('_', ' ').toUpperCase()}
                  </h3>
                  <p style={{ ...extensionDescStyle, fontSize: '14px', color: '#6C757D', margin: 0 }}>
                    {relevantExtensions[selectedExtension]?.description}
                  </p>
                </div>
                <button
                  type="button"
                  style={removeButtonStyle}
                  onClick={() => setSelectedExtension('')}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {relevantExtensions[selectedExtension]?.multiple ? (
                <div>
                  {(extensions[selectedExtension] || [{}]).map((instance: any, index: number) => (
                    <div key={index} style={{ 
                      backgroundColor: '#FFFFFF', 
                      border: '1px solid #E5E7EB', 
                      borderRadius: '4px', 
                      padding: '16px', 
                      marginBottom: '12px' 
                    }}>
                      <div style={formGridStyle}>
                        {relevantExtensions[selectedExtension]?.fields.map((fieldConfig: any) => (
                          <div key={fieldConfig.name} style={fieldGroupStyle}>
                            <label style={labelStyle}>
                              {fieldConfig.name.replace('_', ' ').toUpperCase()}
                              {fieldConfig.required && <span style={{ color: '#EF4444', marginLeft: '4px' }}>*</span>}
                            </label>
                            {renderField(
                              fieldConfig,
                              selectedExtension,
                              instance[fieldConfig.name] || '',
                              index
                            )}
                          </div>
                        ))}
                      </div>
                      {(extensions[selectedExtension]?.length || 0) > 1 && (
                        <button
                          type="button"
                          style={{ ...removeButtonStyle, marginTop: '8px' }}
                          onClick={() => removeMultipleExtension(selectedExtension, index)}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FEE2E2'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          <Trash2 size={14} style={{ marginRight: '4px' }} />
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    style={addButtonStyle}
                    onClick={() => addMultipleExtension(selectedExtension)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#3B82F6';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#3B82F6';
                    }}
                  >
                    <Plus size={16} />
                    Add Another {selectedExtension.replace('_', ' ')}
                  </button>
                </div>
              ) : (
                <div style={formGridStyle}>
                  {relevantExtensions[selectedExtension]?.fields.map((fieldConfig: any) => (
                    <div key={fieldConfig.name} style={fieldGroupStyle}>
                      <label style={labelStyle}>
                        {fieldConfig.name.replace('_', ' ').toUpperCase()}
                        {fieldConfig.required && <span style={{ color: '#EF4444', marginLeft: '4px' }}>*</span>}
                      </label>
                      {renderField(
                        fieldConfig,
                        selectedExtension,
                        extensions[selectedExtension]?.[fieldConfig.name] || ''
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button 
              type="submit" 
              style={submitButtonStyle}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
            >
              Save Ad Extensions
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdExtensionsForm;