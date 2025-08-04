import React, { useState, useEffect } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface ProjectMetadata {
  campaignId: string;
  industryId: string;
  projectId: string;
}

interface AdGenerationRequest {
  budget: number;
  location: string;
  website: string;
  adGoal: string;
  description: string;
  brandName: string;
  industryId: string;
  campaignId: string;
  projectId: string;
}

interface ExpectedPerformance {
  conversionRate: number;
  cpa: number;
  ctr: number;
}

interface AdGroup {
  titles: string[];
  description: string[];
  keywords: string[];
}

interface AdResponse {
  id: string;
  platform: string;
  adType: 'text' | 'image';
  justification: string;
  expectedPerformance: ExpectedPerformance;
  personas?: string[];
  keywordClusters?: string[];
  adGroups?: AdGroup[];
  html?: string;
  freepikImageUrl?: string;
  chosenReason?: string;
}

const AdSpyderAdGeneration = () => {
  const [metadata, setMetadata] = useState<ProjectMetadata | null>(null);
  const [formData, setFormData] = useState<Partial<AdGenerationRequest>>({
    budget: 0,
    location: '',
    website: '',
    adGoal: 'Sales',
    description: '',
    brandName: ''
  });
  const [adResponse, setAdResponse] = useState<AdResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'form' | 'results' | 'extensions'>('form');
  const [selectedExtensions, setSelectedExtensions] = useState<{[key: string]: any}>({});

  const adGoals = [
    'Sales',
    'Leads', 
    'Website Traffic',
    'App Promotion',
    'Awareness & Consideration',
    'Engagement'
  ];

  const extensionSchemas: {[key: string]: any} = {
    'Sales': {
      sitelink: { title: 'text', url: 'url' },
      callout: { text: 'text' },
      structured_snippet: { header: 'text', values: 'text' }
    },
    'Leads': {
      phone: { number: 'tel' },
      sitelink: { title: 'text', url: 'url' },
      callout: { text: 'text' }
    },
    'Website Traffic': {
      sitelink: { title: 'text', url: 'url' },
      callout: { text: 'text' }
    }
  };

  useEffect(() => {
    fetchProjectMetadata();
  }, []);

  const fetchProjectMetadata = async () => {
    try {
      // Simulated API call - replace with actual endpoint
      const mockData: ProjectMetadata = {
        campaignId: 'camp_123',
        industryId: 'ind_456', 
        projectId: 'proj_789'
      };
      setMetadata(mockData);
    } catch (err) {
      setError('Failed to load project metadata');
    }
  };

  const handleInputChange = (field: keyof AdGenerationRequest, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.budget || formData.budget <= 0) return false;
    if (!formData.location?.trim()) return false;
    if (!formData.website?.trim()) return false;
    if (!formData.description?.trim()) return false;
    if (!formData.brandName?.trim()) return false;
    return true;
  };

  const generateAd = async () => {
    if (!validateForm() || !metadata) return;

    setLoading(true);
    setError(null);

    try {
      // Simulated API call - replace with actual endpoint
      const mockResponse: AdResponse = {
        id: 'ad_123',
        platform: 'Google Ads',
        adType: Math.random() > 0.5 ? 'text' : 'image',
        justification: 'Based on your industry and goals, this ad type will maximize ROI.',
        expectedPerformance: {
          conversionRate: 3.2,
          cpa: 45.50,
          ctr: 2.8
        },
        personas: ['Small Business Owner', 'Marketing Manager', 'E-commerce Director'],
        keywordClusters: ['digital marketing', 'online advertising', 'business growth'],
        adGroups: [
          {
            titles: ['Boost Your Business Today', 'Grow Your Revenue Fast', 'Digital Marketing Solutions'],
            description: ['Transform your business with our proven strategies', 'Get more customers and increase sales'],
            keywords: ['business growth', 'marketing solutions', 'increase sales']
          }
        ],
        html: '<div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 20px; color: white; text-align: center;"><h2>Your Business Success Starts Here</h2><p>Professional solutions for modern entrepreneurs</p></div>',
        freepikImageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
        chosenReason: 'This image appeals to your target demographic and aligns with your brand values.'
      };

      setAdResponse(mockResponse);
      setStep('results');
    } catch (err) {
      setError('Failed to generate ad. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const submitExtensions = async () => {
    setLoading(true);
    try {
      // Simulated API call for extensions
      console.log('Submitting extensions:', selectedExtensions);
      // POST /api/ad-extensions
    } catch (err) {
      setError('Failed to save ad extensions');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadImage = () => {
    if (adResponse?.freepikImageUrl) {
      const link = document.createElement('a');
      link.href = adResponse.freepikImageUrl;
      link.download = 'ad-creative.jpg';
      link.click();
    }
  };

  return (
    <div style={styles.page}>
      <Header />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>AdSpyder Ad Generation</h1>
            <p style={styles.subtitle}>Create AI-powered ad campaigns with intelligent insights</p>
          </div>

          {step === 'form' && (
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>Campaign Configuration</h2>
              
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Budget</label>
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', parseFloat(e.target.value))}
                    style={styles.input}
                    placeholder="Enter campaign budget"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    style={styles.input}
                    placeholder="Target location"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    style={styles.input}
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Ad Goal</label>
                  <select
                    value={formData.adGoal}
                    onChange={(e) => handleInputChange('adGoal', e.target.value)}
                    style={styles.select}
                  >
                    {adGoals.map(goal => (
                      <option key={goal} value={goal}>{goal}</option>
                    ))}
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Brand Name</label>
                  <input
                    type="text"
                    value={formData.brandName}
                    onChange={(e) => handleInputChange('brandName', e.target.value)}
                    style={styles.input}
                    placeholder="Your brand name"
                  />
                </div>

                <div style={styles.formGroupFull}>
                  <label style={styles.label}>Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    style={styles.textarea}
                    placeholder="Describe your business and campaign goals"
                    rows={4}
                  />
                </div>
              </div>

              <button
                onClick={generateAd}
                disabled={!validateForm() || loading}
                style={{...styles.primaryButton, ...((!validateForm() || loading) ? styles.disabledButton : {})}}
              >
                {loading ? 'Generating...' : 'Generate Ad'}
              </button>

              {error && <div style={styles.error}>{error}</div>}
            </div>
          )}

          {step === 'results' && adResponse && (
            <div>
              <div style={styles.card}>
                <h2 style={styles.sectionTitle}>Generated Ad Campaign</h2>
                <div style={styles.metaInfo}>
                  <span><strong>Platform:</strong> {adResponse.platform}</span>
                  <span><strong>Type:</strong> {adResponse.adType}</span>
                  <span><strong>ID:</strong> {adResponse.id}</span>
                </div>
                <p style={styles.justification}>{adResponse.justification}</p>
              </div>

              <div style={styles.card}>
                <h3 style={styles.sectionTitle}>Expected Performance</h3>
                <div style={styles.metricsGrid}>
                  <div style={styles.metric}>
                    <div style={styles.metricLabel}>CTR</div>
                    <div style={styles.metricValue}>{adResponse.expectedPerformance.ctr}%</div>
                    <div style={styles.progressBar}>
                      <div style={{...styles.progressFill, width: `${adResponse.expectedPerformance.ctr * 10}%`}}></div>
                    </div>
                  </div>
                  <div style={styles.metric}>
                    <div style={styles.metricLabel}>Conversion Rate</div>
                    <div style={styles.metricValue}>{adResponse.expectedPerformance.conversionRate}%</div>
                    <div style={styles.progressBar}>
                      <div style={{...styles.progressFill, width: `${adResponse.expectedPerformance.conversionRate * 10}%`}}></div>
                    </div>
                  </div>
                  <div style={styles.metric}>
                    <div style={styles.metricLabel}>CPA</div>
                    <div style={styles.metricValue}>${adResponse.expectedPerformance.cpa}</div>
                    <div style={styles.progressBar}>
                      <div style={{...styles.progressFill, width: '75%', backgroundColor: '#10B981'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {adResponse.adType === 'text' && (
                <div style={styles.card}>
                  <h3 style={styles.sectionTitle}>Text Ad Campaign</h3>
                  
                  {adResponse.personas && (
                    <div style={styles.section}>
                      <h4 style={styles.subSectionTitle}>Target Personas</h4>
                      <div style={styles.chips}>
                        {adResponse.personas.map((persona, i) => (
                          <span key={i} style={styles.chip}>{persona}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {adResponse.keywordClusters && (
                    <div style={styles.section}>
                      <h4 style={styles.subSectionTitle}>Keyword Clusters</h4>
                      <div style={styles.chips}>
                        {adResponse.keywordClusters.map((keyword, i) => (
                          <span key={i} style={styles.chip}>{keyword}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {adResponse.adGroups && (
                    <div style={styles.section}>
                      <h4 style={styles.subSectionTitle}>Ad Groups</h4>
                      {adResponse.adGroups.map((group, i) => (
                        <div key={i} style={styles.adGroup}>
                          <div style={styles.adSection}>
                            <h5 style={styles.adSectionTitle}>Headlines</h5>
                            {group.titles.map((title, j) => (
                              <div key={j} style={styles.adItem}>
                                <span>{title}</span>
                                <button 
                                  onClick={() => copyToClipboard(title)}
                                  style={styles.copyButton}
                                >
                                  Copy
                                </button>
                              </div>
                            ))}
                          </div>
                          <div style={styles.adSection}>
                            <h5 style={styles.adSectionTitle}>Descriptions</h5>
                            {group.description.map((desc, j) => (
                              <div key={j} style={styles.adItem}>
                                <span>{desc}</span>
                                <button 
                                  onClick={() => copyToClipboard(desc)}
                                  style={styles.copyButton}
                                >
                                  Copy
                                </button>
                              </div>
                            ))}
                          </div>
                          <div style={styles.adSection}>
                            <h5 style={styles.adSectionTitle}>Keywords</h5>
                            <div style={styles.chips}>
                              {group.keywords.map((keyword, j) => (
                                <span key={j} style={styles.chip}>{keyword}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => setStep('extensions')}
                    style={styles.primaryButton}
                  >
                    Configure Ad Extensions
                  </button>
                </div>
              )}

              {adResponse.adType === 'image' && (
                <div style={styles.card}>
                  <h3 style={styles.sectionTitle}>Image Ad Creative</h3>
                  
                  {adResponse.html && (
                    <div style={styles.section}>
                      <h4 style={styles.subSectionTitle}>HTML Preview</h4>
                      <div 
                        style={styles.htmlPreview}
                        dangerouslySetInnerHTML={{ __html: adResponse.html }}
                      />
                    </div>
                  )}

                  {adResponse.freepikImageUrl && (
                    <div style={styles.section}>
                      <h4 style={styles.subSectionTitle}>Creative Image</h4>
                      <img 
                        src={adResponse.freepikImageUrl} 
                        alt="Ad creative"
                        style={styles.adImage}
                      />
                      <button
                        onClick={downloadImage}
                        style={styles.primaryButton}
                      >
                        Download Image
                      </button>
                    </div>
                  )}

                  {adResponse.chosenReason && (
                    <div style={styles.section}>
                      <h4 style={styles.subSectionTitle}>Why This Creative</h4>
                      <p style={styles.explanation}>{adResponse.chosenReason}</p>
                    </div>
                  )}
                </div>
              )}

              <div style={styles.actionButtons}>
                <button onClick={() => setStep('form')} style={styles.secondaryButton}>
                  Generate New Ad
                </button>
                <button onClick={() => copyToClipboard(JSON.stringify(adResponse))} style={styles.primaryButton}>
                  Save Ad
                </button>
              </div>
            </div>
          )}

          {step === 'extensions' && adResponse?.adType === 'text' && (
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>Ad Extensions Configuration</h2>
              
              {extensionSchemas[formData.adGoal || 'Sales'] && 
                Object.entries(extensionSchemas[formData.adGoal || 'Sales']).map(([extType, fields]) => (
                  <div key={extType} style={styles.extensionForm}>
                    <h4 style={styles.subSectionTitle}>
                      {extType.charAt(0).toUpperCase() + extType.slice(1).replace('_', ' ')}
                    </h4>
                    {Object.entries(fields as {[key: string]: string}).map(([fieldName, fieldType]) => (
                      <div key={fieldName} style={styles.formGroup}>
                        <label style={styles.label}>
                          {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                        </label>
                        <input
                          type={fieldType}
                          onChange={(e) => setSelectedExtensions(prev => ({
                            ...prev,
                            [`${extType}_${fieldName}`]: e.target.value
                          }))}
                          style={styles.input}
                          placeholder={`Enter ${fieldName}`}
                        />
                      </div>
                    ))}
                  </div>
                ))}

              <div style={styles.actionButtons}>
                <button onClick={() => setStep('results')} style={styles.secondaryButton}>
                  Back to Results
                </button>
                <button onClick={submitExtensions} style={styles.primaryButton}>
                  {loading ? 'Saving...' : 'Save Extensions'}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  main: {
    paddingTop: '80px',
    paddingBottom: '40px'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px'
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '32px'
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '8px',
    lineHeight: '1.5'
  },
  subtitle: {
    fontSize: '16px',
    color: '#6C757D',
    lineHeight: '1.6'
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    marginBottom: '24px',
    border: '1px solid #E5E7EB'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '16px'
  },
  subSectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '12px'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px',
    marginBottom: '24px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const
  },
  formGroupFull: {
    display: 'flex',
    flexDirection: 'column' as const,
    gridColumn: '1 / -1'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#2C3E50',
    marginBottom: '6px'
  },
  input: {
    padding: '12px',
    fontSize: '14px',
    border: '1px solid #E5E7EB',
    borderRadius: '4px',
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
    outline: 'none'
  },
  select: {
    padding: '12px',
    fontSize: '14px',
    border: '1px solid #E5E7EB',
    borderRadius: '4px',
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
    outline: 'none'
  },
  textarea: {
    padding: '12px',
    fontSize: '14px',
    border: '1px solid #E5E7EB',
    borderRadius: '4px',
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
    outline: 'none',
    resize: 'vertical' as const,
    minHeight: '100px'
  },
  primaryButton: {
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#FFFFFF',
    backgroundColor: '#3B82F6',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  secondaryButton: {
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#2C3E50',
    backgroundColor: '#F8F9FA',
    border: '1px solid #E5E7EB',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  disabledButton: {
    backgroundColor: '#E5E7EB',
    cursor: 'not-allowed'
  },
  error: {
    color: '#EF4444',
    fontSize: '14px',
    marginTop: '8px',
    padding: '8px',
    backgroundColor: '#FEF2F2',
    border: '1px solid #FECACA',
    borderRadius: '4px'
  },
  metaInfo: {
    display: 'flex',
    gap: '16px',
    marginBottom: '12px',
    flexWrap: 'wrap' as const
  },
  justification: {
    fontSize: '14px',
    color: '#6C757D',
    lineHeight: '1.6'
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px'
  },
  metric: {
    textAlign: 'center' as const
  },
  metricLabel: {
    fontSize: '12px',
    color: '#6C757D',
    marginBottom: '4px'
  },
  metricValue: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '8px'
  },
  progressBar: {
    height: '6px',
    backgroundColor: '#E5E7EB',
    borderRadius: '3px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    transition: 'width 0.3s ease'
  },
  section: {
    marginBottom: '24px'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px'
  },
  chip: {
    padding: '6px 12px',
    fontSize: '12px',
    backgroundColor: '#F3F4F8',
    color: '#2C3E50',
    borderRadius: '16px',
    border: '1px solid #E5E7EB'
  },
  adGroup: {
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px'
  },
  adSection: {
    marginBottom: '16px'
  },
  adSectionTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '8px'
  },
  adItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: '#F8F9FA',
    borderRadius: '4px',
    marginBottom: '4px'
  },
  copyButton: {
    padding: '4px 8px',
    fontSize: '12px',
    color: '#3B82F6',
    backgroundColor: 'transparent',
    border: '1px solid #3B82F6',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  htmlPreview: {
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '16px'
  },
  adImage: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
    marginBottom: '16px'
  },
  explanation: {
    fontSize: '14px',
    color: '#6C757D',
    lineHeight: '1.6'
  },
  actionButtons: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    marginTop: '24px'
  },
  extensionForm: {
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px'
  }
};

export default AdSpyderAdGeneration;