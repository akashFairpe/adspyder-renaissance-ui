import React, { useState } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  credits: number;
  completed: boolean;
  type: 'review' | 'social' | 'referral' | 'connect' | 'generate';
}

const EarnCredits = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 'review',
      title: 'Leave a Review or Testimonial',
      description: 'Share your experience with AdSpyder on review platforms',
      credits: 150,
      completed: false,
      type: 'review'
    },
    {
      id: 'social',
      title: 'Share on Social Media',
      description: 'Tell your network about AdSpyder and earn credits',
      credits: 100,
      completed: false,
      type: 'social'
    },
    {
      id: 'referral',
      title: 'Refer a Friend or Colleague',
      description: 'Invite others to join AdSpyder with your unique link',
      credits: 200,
      completed: false,
      type: 'referral'
    },
    {
      id: 'connect',
      title: 'Connect Ad Account',
      description: 'Link your Google, Meta, or LinkedIn ad account',
      credits: 125,
      completed: false,
      type: 'connect'
    },
    {
      id: 'generate',
      title: 'Generate Ads Using AI',
      description: 'Create 2 ads using our AI Ad Generator this week',
      credits: 75,
      completed: false,
      type: 'generate'
    }
  ]);

  const [reviewPlatform, setReviewPlatform] = useState('');
  const [reviewLink, setReviewLink] = useState('');
  const [socialPlatform, setSocialPlatform] = useState('');
  const [socialPost, setSocialPost] = useState('');
  const [socialLink, setSocialLink] = useState('');
  const [referralCopied, setReferralCopied] = useState(false);
  const [generateCount, setGenerateCount] = useState(0);

  const completeTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalCredits = tasks.filter(task => task.completed).reduce((sum, task) => sum + task.credits, 0);
  const progressPercentage = (completedTasks / tasks.length) * 100;

  const handleReviewSubmit = () => {
    if (reviewLink.trim()) {
      completeTask('review');
    }
  };

  const handleSocialSubmit = () => {
    if (socialLink.trim()) {
      completeTask('social');
    }
  };

  const copyReferralLink = () => {
    const referralLink = 'https://adspyder.com/referral/USER123';
    navigator.clipboard.writeText(referralLink);
    setReferralCopied(true);
    setTimeout(() => setReferralCopied(false), 2000);
    completeTask('referral');
  };

  const handleConnectAccount = () => {
    completeTask('connect');
    window.open('/ad-optimization', '_blank');
  };

  const handleGenerateAds = () => {
    const newCount = generateCount + 1;
    setGenerateCount(newCount);
    if (newCount >= 2) {
      completeTask('generate');
    }
    window.open('/ad-generator', '_blank');
  };

  const generateSocialPost = (platform: string) => {
    const posts = {
      twitter: `Just discovered @AdSpyder - the most comprehensive ad intelligence platform! 🚀 Get insights into competitor ads across all major platforms. Perfect for marketers looking to stay ahead! #AdSpyder #AdIntelligence #Marketing`,
      linkedin: `I've been using AdSpyder for competitive ad intelligence and it's been a game-changer for our marketing strategy. The platform provides incredible insights into competitor campaigns across Google, Facebook, and more. Highly recommend for any marketing professional! #AdSpyder #MarketingIntelligence #CompetitiveAnalysis`,
      facebook: `Found an amazing tool for marketers! AdSpyder helps you analyze competitor ads and discover winning strategies. If you're in digital marketing, you need to check this out! 💡`
    };
    setSocialPost(posts[platform as keyof typeof posts] || '');
  };

  const reviewPlatforms = [
    { name: 'G2', url: 'https://www.g2.com/products/adspyder/reviews' },
    { name: 'Capterra', url: 'https://www.capterra.com/p/adspyder/reviews' },
    { name: 'Product Hunt', url: 'https://www.producthunt.com/products/adspyder' }
  ];

  return (
    <div style={styles.container}>
      <style>{cssStyles}</style>
      
      <div style={styles.maxWidth}>
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.headerIcon}>
            <div style={styles.sparkleIcon}>✨</div>
            <h1 style={styles.title}>Earn More Credits</h1>
          </div>
          <p style={styles.subtitle}>
            Help us grow AdSpyder and boost your account! Complete simple tasks to unlock free credits 
            and get more value from our platform.
          </p>
        </div>

        {/* Progress Section */}
        <div style={styles.progressCard}>
          <div style={styles.progressHeader}>
            <h3 style={styles.progressTitle}>
              💳 Your Progress
            </h3>
          </div>
          <div style={styles.progressContent}>
            <div style={styles.progressGrid}>
              <div style={styles.progressItemBlue}>
                <div style={styles.progressNumber}>{completedTasks}/5</div>
                <div style={styles.progressLabel}>Tasks Completed</div>
              </div>
              <div style={styles.progressItemGreen}>
                <div style={styles.progressNumber}>+{totalCredits}</div>
                <div style={styles.progressLabel}>Credits Earned</div>
              </div>
              <div style={styles.progressItemPurple}>
                <div style={styles.progressBar}>
                  <div style={{...styles.progressFill, width: `${progressPercentage}%`}}></div>
                </div>
                <div style={styles.progressLabel}>{Math.round(progressPercentage)}% Complete</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks Grid */}
        <div style={styles.tasksGrid}>
          {/* Review Task */}
          <div style={tasks[0].completed ? styles.taskCardCompleted : styles.taskCardReview}>
            <div style={styles.taskHeader}>
              <div style={styles.taskTitleRow}>
                <div style={tasks[0].completed ? styles.taskIconCompleted : styles.taskIconReview}>
                  💬
                </div>
                <h3 style={styles.taskTitle}>{tasks[0].title}</h3>
              </div>
              <div style={tasks[0].completed ? styles.badgeCompleted : styles.badgeReview}>
                +{tasks[0].credits} Credits
              </div>
            </div>
            <p style={styles.taskDescription}>{tasks[0].description}</p>
            
            <div style={styles.taskContent}>
              {tasks[0].completed ? (
                <div style={styles.completedBadge}>
                  <span style={styles.checkmark}>✅</span>
                  <span>Task Completed ✅</span>
                </div>
              ) : (
                <div style={styles.taskActions}>
                  <div style={styles.buttonGroup}>
                    {reviewPlatforms.map((platform) => (
                      <button
                        key={platform.name}
                        style={styles.platformButton}
                        onClick={() => {
                          setReviewPlatform(platform.name);
                          window.open(platform.url, '_blank');
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f9ff'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        ⭐ Review on {platform.name} 🔗
                      </button>
                    ))}
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Submit review link or screenshot</label>
                    <div style={styles.inputRow}>
                      <input
                        style={styles.input}
                        placeholder="Paste your review link here..."
                        value={reviewLink}
                        onChange={(e) => setReviewLink(e.target.value)}
                      />
                      <button 
                        style={reviewLink.trim() ? styles.submitButton : styles.submitButtonDisabled}
                        onClick={handleReviewSubmit} 
                        disabled={!reviewLink.trim()}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Social Media Task */}
          <div style={tasks[1].completed ? styles.taskCardCompleted : styles.taskCardSocial}>
            <div style={styles.taskHeader}>
              <div style={styles.taskTitleRow}>
                <div style={tasks[1].completed ? styles.taskIconCompleted : styles.taskIconSocial}>
                  📤
                </div>
                <h3 style={styles.taskTitle}>{tasks[1].title}</h3>
              </div>
              <div style={tasks[1].completed ? styles.badgeCompleted : styles.badgeSocial}>
                +{tasks[1].credits} Credits
              </div>
            </div>
            <p style={styles.taskDescription}>{tasks[1].description}</p>
            
            <div style={styles.taskContent}>
              {tasks[1].completed ? (
                <div style={styles.completedBadge}>
                  <span style={styles.checkmark}>✅</span>
                  <span>Task Completed ✅</span>
                </div>
              ) : (
                <div style={styles.taskActions}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Select Platform</label>
                    <div style={styles.platformGrid}>
                      {['twitter', 'linkedin', 'facebook'].map((platform) => (
                        <button
                          key={platform}
                          style={socialPlatform === platform ? styles.platformButtonSelected : styles.platformButtonOutline}
                          onClick={() => {
                            setSocialPlatform(platform);
                            generateSocialPost(platform);
                          }}
                        >
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {socialPost && (
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Copy this post:</label>
                      <textarea
                        style={styles.textarea}
                        rows={4}
                        value={socialPost}
                        readOnly
                      />
                      <button
                        style={styles.copyButton}
                        onClick={() => navigator.clipboard.writeText(socialPost)}
                      >
                        📋 Copy Post
                      </button>
                    </div>
                  )}
                  
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Submit post link</label>
                    <div style={styles.inputRow}>
                      <input
                        style={styles.input}
                        placeholder="Paste your post link here..."
                        value={socialLink}
                        onChange={(e) => setSocialLink(e.target.value)}
                      />
                      <button 
                        style={socialLink.trim() ? styles.submitButton : styles.submitButtonDisabled}
                        onClick={handleSocialSubmit} 
                        disabled={!socialLink.trim()}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Referral Task */}
          <div style={tasks[2].completed ? styles.taskCardCompleted : styles.taskCardReferral}>
            <div style={styles.taskHeader}>
              <div style={styles.taskTitleRow}>
                <div style={tasks[2].completed ? styles.taskIconCompleted : styles.taskIconReferral}>
                  👥
                </div>
                <h3 style={styles.taskTitle}>{tasks[2].title}</h3>
              </div>
              <div style={tasks[2].completed ? styles.badgeCompleted : styles.badgeReferral}>
                +{tasks[2].credits} Credits
              </div>
            </div>
            <p style={styles.taskDescription}>{tasks[2].description}</p>
            
            <div style={styles.taskContent}>
              {tasks[2].completed ? (
                <div style={styles.completedBadge}>
                  <span style={styles.checkmark}>✅</span>
                  <span>Task Completed ✅</span>
                </div>
              ) : (
                <div style={styles.taskActions}>
                  <div style={styles.referralBox}>
                    <div style={styles.referralLabel}>Your Referral Link:</div>
                    <div style={styles.referralLink}>
                      https://adspyder.com/referral/USER123
                    </div>
                  </div>
                  <button style={styles.referralButton} onClick={copyReferralLink}>
                    🔗 {referralCopied ? 'Copied!' : 'Copy Referral Link'}
                  </button>
                  <div style={styles.helpText}>
                    Share this link with friends and colleagues. Get credits when they sign up!
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Connect Account Task */}
          <div style={tasks[3].completed ? styles.taskCardCompleted : styles.taskCardConnect}>
            <div style={styles.taskHeader}>
              <div style={styles.taskTitleRow}>
                <div style={tasks[3].completed ? styles.taskIconCompleted : styles.taskIconConnect}>
                  💳
                </div>
                <h3 style={styles.taskTitle}>{tasks[3].title}</h3>
              </div>
              <div style={tasks[3].completed ? styles.badgeCompleted : styles.badgeConnect}>
                +{tasks[3].credits} Credits
              </div>
            </div>
            <p style={styles.taskDescription}>{tasks[3].description}</p>
            
            <div style={styles.taskContent}>
              {tasks[3].completed ? (
                <div style={styles.completedBadge}>
                  <span style={styles.checkmark}>✅</span>
                  <span>Task Completed ✅</span>
                </div>
              ) : (
                <div style={styles.taskActions}>
                  <div style={styles.infoBox}>
                    Connect your Google Ads, Meta Ads, or LinkedIn ad account to get personalized insights.
                  </div>
                  <button style={styles.connectButton} onClick={handleConnectAccount}>
                    🔗 Connect Account
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Generate Ads Task */}
          <div style={{...((tasks[4].completed ? styles.taskCardCompleted : styles.taskCardGenerate)), gridColumn: '1 / -1'}}>
            <div style={styles.taskHeader}>
              <div style={styles.taskTitleRow}>
                <div style={tasks[4].completed ? styles.taskIconCompleted : styles.taskIconGenerate}>
                  ✨
                </div>
                <h3 style={styles.taskTitle}>{tasks[4].title}</h3>
              </div>
              <div style={tasks[4].completed ? styles.badgeCompleted : styles.badgeGenerate}>
                +{tasks[4].credits} Credits
              </div>
            </div>
            <p style={styles.taskDescription}>{tasks[4].description}</p>
            
            <div style={styles.taskContent}>
              {tasks[4].completed ? (
                <div style={styles.completedBadge}>
                  <span style={styles.checkmark}>✅</span>
                  <span>Task Completed ✅</span>
                </div>
              ) : (
                <div style={styles.taskActions}>
                  <div style={styles.progressBox}>
                    <span style={styles.progressText}>Progress: {generateCount}/2 ads generated</span>
                    <div style={styles.miniProgressBar}>
                      <div style={{...styles.miniProgressFill, width: `${(generateCount / 2) * 100}%`}}></div>
                    </div>
                  </div>
                  <button style={styles.generateButton} onClick={handleGenerateAds}>
                    ✨ Generate Ads with AI
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={styles.faqCard}>
          <div style={styles.faqHeader}>
            <h3 style={styles.faqTitle}>How It Works</h3>
          </div>
          <div style={styles.faqContent}>
            <div style={styles.faqGrid}>
              <div>
                <h4 style={styles.faqQuestion}>Why do we offer credits?</h4>
                <p style={styles.faqAnswer}>
                  Your participation helps us grow AdSpyder and reach more marketers. In return, 
                  we reward you with credits to unlock premium features.
                </p>
              </div>
              <div>
                <h4 style={styles.faqQuestion}>When do I receive my credits?</h4>
                <p style={styles.faqAnswer}>
                  Credits are added to your account immediately after task completion. 
                  You can use them right away for premium features and data exports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    padding: '48px 16px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  maxWidth: {
    maxWidth: '1024px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '48px'
  },
  headerIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '16px'
  },
  sparkleIcon: {
    padding: '12px',
    background: 'linear-gradient(135deg, #1e293b, #334155)',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    fontSize: '32px'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #1e293b, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#64748b',
    maxWidth: '512px',
    margin: '0 auto',
    lineHeight: 1.6
  },
  progressCard: {
    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.1), rgba(59, 130, 246, 0.1))',
    border: '2px solid rgba(30, 41, 59, 0.3)',
    borderRadius: '12px',
    marginBottom: '32px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  progressHeader: {
    background: 'linear-gradient(135deg, #1e293b, #334155)',
    color: 'white',
    padding: '16px 24px'
  },
  progressTitle: {
    margin: 0,
    fontSize: '1.125rem',
    fontWeight: '600'
  },
  progressContent: {
    padding: '24px'
  },
  progressGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px'
  },
  progressItemBlue: {
    textAlign: 'center' as const,
    padding: '16px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(59, 130, 246, 0.2)'
  },
  progressItemGreen: {
    textAlign: 'center' as const,
    padding: '16px',
    background: 'rgba(34, 197, 94, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(34, 197, 94, 0.2)'
  },
  progressItemPurple: {
    textAlign: 'center' as const,
    padding: '16px',
    background: 'rgba(147, 51, 234, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(147, 51, 234, 0.2)'
  },
  progressNumber: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#1e293b'
  },
  progressLabel: {
    fontSize: '0.875rem',
    color: '#64748b',
    marginTop: '4px'
  },
  progressBar: {
    width: '100%',
    height: '12px',
    backgroundColor: '#e2e8f0',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '8px'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    borderRadius: '6px',
    transition: 'width 0.3s ease'
  },
  tasksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px'
  },
  taskCardReview: {
    background: 'linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.5))',
    border: '2px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 16px rgba(59, 130, 246, 0.1)',
    transition: 'all 0.3s ease'
  },
  taskCardSocial: {
    background: 'linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.5))',
    border: '2px solid rgba(147, 51, 234, 0.2)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 16px rgba(147, 51, 234, 0.1)',
    transition: 'all 0.3s ease'
  },
  taskCardReferral: {
    background: 'linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.5))',
    border: '2px solid rgba(168, 85, 247, 0.2)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 16px rgba(168, 85, 247, 0.1)',
    transition: 'all 0.3s ease'
  },
  taskCardConnect: {
    background: 'linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.5))',
    border: '2px solid rgba(30, 41, 59, 0.3)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 16px rgba(30, 41, 59, 0.1)',
    transition: 'all 0.3s ease'
  },
  taskCardGenerate: {
    background: 'linear-gradient(135deg, #ffffff, rgba(59, 130, 246, 0.05))',
    border: '2px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 16px rgba(59, 130, 246, 0.1)',
    transition: 'all 0.3s ease'
  },
  taskCardCompleted: {
    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(34, 197, 94, 0.1))',
    border: '2px solid rgba(34, 197, 94, 0.4)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 8px 32px rgba(34, 197, 94, 0.15)',
    transition: 'all 0.3s ease'
  },
  taskHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '16px'
  },
  taskTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  taskIconReview: {
    padding: '8px',
    borderRadius: '8px',
    background: 'rgba(59, 130, 246, 0.1)',
    fontSize: '20px'
  },
  taskIconSocial: {
    padding: '8px',
    borderRadius: '8px',
    background: 'rgba(147, 51, 234, 0.1)',
    fontSize: '20px'
  },
  taskIconReferral: {
    padding: '8px',
    borderRadius: '8px',
    background: 'rgba(168, 85, 247, 0.1)',
    fontSize: '20px'
  },
  taskIconConnect: {
    padding: '8px',
    borderRadius: '8px',
    background: 'rgba(30, 41, 59, 0.1)',
    fontSize: '20px'
  },
  taskIconGenerate: {
    padding: '8px',
    borderRadius: '8px',
    background: 'rgba(59, 130, 246, 0.1)',
    fontSize: '20px'
  },
  taskIconCompleted: {
    padding: '8px',
    borderRadius: '8px',
    background: 'rgba(34, 197, 94, 0.2)',
    fontSize: '20px'
  },
  taskTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    margin: 0,
    color: '#1e293b'
  },
  badgeReview: {
    padding: '4px 12px',
    borderRadius: '16px',
    background: 'rgba(59, 130, 246, 0.1)',
    color: '#3b82f6',
    border: '1px solid rgba(59, 130, 246, 0.4)',
    fontSize: '0.875rem',
    fontWeight: '600'
  },
  badgeSocial: {
    padding: '4px 12px',
    borderRadius: '16px',
    background: 'rgba(147, 51, 234, 0.1)',
    color: '#9333ea',
    border: '1px solid rgba(147, 51, 234, 0.4)',
    fontSize: '0.875rem',
    fontWeight: '600'
  },
  badgeReferral: {
    padding: '4px 12px',
    borderRadius: '16px',
    background: 'rgba(168, 85, 247, 0.1)',
    color: '#a855f7',
    border: '1px solid rgba(168, 85, 247, 0.4)',
    fontSize: '0.875rem',
    fontWeight: '600'
  },
  badgeConnect: {
    padding: '4px 12px',
    borderRadius: '16px',
    background: 'rgba(30, 41, 59, 0.1)',
    color: '#1e293b',
    border: '1px solid rgba(30, 41, 59, 0.4)',
    fontSize: '0.875rem',
    fontWeight: '600'
  },
  badgeGenerate: {
    padding: '4px 12px',
    borderRadius: '16px',
    background: 'rgba(59, 130, 246, 0.1)',
    color: '#3b82f6',
    border: '1px solid rgba(59, 130, 246, 0.4)',
    fontSize: '0.875rem',
    fontWeight: '600'
  },
  badgeCompleted: {
    padding: '4px 12px',
    borderRadius: '16px',
    background: 'rgba(34, 197, 94, 0.2)',
    color: '#22c55e',
    border: '1px solid rgba(34, 197, 94, 0.4)',
    fontSize: '0.875rem',
    fontWeight: '600'
  },
  taskDescription: {
    color: '#64748b',
    marginBottom: '16px',
    lineHeight: 1.5
  },
  taskContent: {
    marginTop: '16px'
  },
  completedBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    background: 'rgba(34, 197, 94, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    color: '#22c55e',
    fontSize: '1.125rem',
    fontWeight: '600'
  },
  checkmark: {
    fontSize: '24px'
  },
  taskActions: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px'
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px'
  },
  platformButton: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    background: 'white',
    cursor: 'pointer',
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.2s ease'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px'
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151'
  },
  inputRow: {
    display: 'flex',
    gap: '8px'
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem'
  },
  submitButton: {
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    background: '#1e293b',
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.875rem'
  },
  submitButtonDisabled: {
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    background: '#e5e7eb',
    color: '#9ca3af',
    cursor: 'not-allowed',
    fontSize: '0.875rem'
  },
  platformGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px'
  },
  platformButtonSelected: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: 'none',
    background: '#1e293b',
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.75rem'
  },
  platformButtonOutline: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    background: 'white',
    color: '#374151',
    cursor: 'pointer',
    fontSize: '0.75rem'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem',
    fontFamily: 'inherit',
    resize: 'vertical' as const
  },
  copyButton: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    background: 'white',
    cursor: 'pointer',
    fontSize: '0.75rem',
    alignSelf: 'flex-start'
  },
  referralBox: {
    padding: '12px',
    background: 'rgba(168, 85, 247, 0.05)',
    borderRadius: '8px',
    border: '1px solid rgba(168, 85, 247, 0.2)'
  },
  referralLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#a855f7',
    marginBottom: '4px'
  },
  referralLink: {
    fontSize: '0.875rem',
    color: '#64748b',
    fontFamily: 'monospace',
    wordBreak: 'break-all' as const
  },
  referralButton: {
    padding: '12px 16px',
    borderRadius: '6px',
    border: 'none',
    background: '#a855f7',
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.875rem',
    width: '100%'
  },
  helpText: {
    fontSize: '0.875rem',
    color: '#64748b',
    textAlign: 'center' as const
  },
  infoBox: {
    padding: '12px',
    background: 'rgba(30, 41, 59, 0.05)',
    borderRadius: '8px',
    border: '1px solid rgba(30, 41, 59, 0.2)',
    fontSize: '0.875rem',
    color: '#64748b'
  },
  connectButton: {
    padding: '12px 16px',
    borderRadius: '6px',
    border: 'none',
    background: '#1e293b',
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.875rem',
    width: '100%'
  },
  progressBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    background: 'rgba(59, 130, 246, 0.05)',
    borderRadius: '8px',
    border: '1px solid rgba(59, 130, 246, 0.2)'
  },
  progressText: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#3b82f6'
  },
  miniProgressBar: {
    width: '128px',
    height: '8px',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  miniProgressFill: {
    height: '100%',
    background: '#3b82f6',
    borderRadius: '4px',
    transition: 'width 0.3s ease'
  },
  generateButton: {
    padding: '12px 16px',
    borderRadius: '6px',
    border: 'none',
    background: '#3b82f6',
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.875rem',
    width: '100%'
  },
  faqCard: {
    marginTop: '32px',
    background: 'linear-gradient(135deg, rgba(241, 245, 249, 0.5), rgba(226, 232, 240, 0.3))',
    border: '1px solid rgba(203, 213, 225, 0.4)',
    borderRadius: '12px',
    overflow: 'hidden'
  },
  faqHeader: {
    background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
    padding: '16px 24px'
  },
  faqTitle: {
    margin: 0,
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1e293b'
  },
  faqContent: {
    padding: '24px'
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  },
  faqQuestion: {
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#1e293b'
  },
  faqAnswer: {
    fontSize: '0.875rem',
    color: '#64748b',
    lineHeight: 1.6,
    margin: 0
  }
};

const cssStyles = `
  @media (max-width: 768px) {
    .tasks-grid {
      grid-template-columns: 1fr;
    }
    .progress-grid {
      grid-template-columns: 1fr;
    }
    .platform-grid {
      grid-template-columns: 1fr;
    }
    .input-row {
      flex-direction: column;
    }
    .faq-grid {
      grid-template-columns: 1fr;
    }
  }
  
  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .task-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }
`;

export default EarnCredits;