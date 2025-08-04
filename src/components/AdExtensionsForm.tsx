import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    initializeExtensions();
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
    switch (fieldConfig.type) {
      case 'select':
        return (
          <Select
            value={value}
            onValueChange={(val) => handleExtensionFieldChange(extensionKey, fieldConfig.name, val, index)}
          >
            <SelectTrigger>
              <SelectValue placeholder={`Select ${fieldConfig.name}`} />
            </SelectTrigger>
            <SelectContent>
              {fieldConfig.options?.map((option: string) => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'number':
        return (
          <Input
            type="number"
            min={fieldConfig.min}
            max={fieldConfig.max}
            step={fieldConfig.step}
            value={value}
            onChange={(e) => handleExtensionFieldChange(extensionKey, fieldConfig.name, e.target.value, index)}
            required={fieldConfig.required}
            placeholder={`Enter ${fieldConfig.name}`}
          />
        );
      default:
        return (
          <Input
            type={fieldConfig.type}
            value={value}
            onChange={(e) => handleExtensionFieldChange(extensionKey, fieldConfig.name, e.target.value, index)}
            required={fieldConfig.required}
            maxLength={fieldConfig.maxLength}
            placeholder={fieldConfig.example || `Enter ${fieldConfig.name}`}
          />
        );
    }
  };

  const relevantExtensions = getAvailableExtensions();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Ad Extensions Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Ad Goal Selector */}
        <div className="space-y-2">
          <Label htmlFor="ad-goal">Ad Goal</Label>
          <Select value={adGoal} onValueChange={setAdGoal}>
            <SelectTrigger id="ad-goal">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(adExtensionConfig).map((goal) => (
                <SelectItem key={goal} value={goal}>{goal}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.entries(relevantExtensions).map(([extensionKey, extensionConfig]) => (
            <Card key={extensionKey} className="border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  {extensionKey.replace('_', ' ').toUpperCase()}
                  {(extensionConfig as any).mobile_only && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Mobile Only</span>
                  )}
                  {(extensionConfig as any).desktop_only && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Desktop Only</span>
                  )}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{extensionConfig.description}</p>
              </CardHeader>
              <CardContent>
                {extensionConfig.multiple ? (
                  <div className="space-y-4">
                    {(extensions[extensionKey] || [{}]).map((instance: any, index: number) => (
                      <div key={index} className="border rounded-lg p-4 bg-muted/30">
                        <div className="grid gap-4 md:grid-cols-2">
                          {extensionConfig.fields.map((fieldConfig: any) => (
                            <div key={fieldConfig.name} className="space-y-2">
                              <Label className="text-sm font-medium">
                                {fieldConfig.name.replace('_', ' ').toUpperCase()}
                                {fieldConfig.required && <span className="text-destructive ml-1">*</span>}
                              </Label>
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
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeMultipleExtension(extensionKey, index)}
                            className="mt-3"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => addMultipleExtension(extensionKey)}
                      className="w-full"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Another {extensionKey.replace('_', ' ')}
                    </Button>
                  </div>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2">
                    {extensionConfig.fields.map((fieldConfig: any) => (
                      <div key={fieldConfig.name} className="space-y-2">
                        <Label className="text-sm font-medium">
                          {fieldConfig.name.replace('_', ' ').toUpperCase()}
                          {fieldConfig.required && <span className="text-destructive ml-1">*</span>}
                        </Label>
                        {renderField(
                          fieldConfig,
                          extensionKey,
                          extensions[extensionKey]?.[fieldConfig.name] || ''
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          <Button type="submit" className="w-full">
            Save Ad Extensions
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdExtensionsForm;