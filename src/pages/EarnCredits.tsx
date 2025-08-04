import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  Share2, 
  Users, 
  CreditCard, 
  Sparkles,
  Star,
  MessageSquare,
  Link
} from 'lucide-react';

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
    // Simulate redirect to ad optimization page
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
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Earn More Credits</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us grow AdSpyder and boost your account! Complete simple tasks to unlock free credits 
            and get more value from our platform.
          </p>
        </div>

        {/* Progress Section */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{completedTasks}/5</div>
                <div className="text-sm text-muted-foreground">Tasks Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">+{totalCredits}</div>
                <div className="text-sm text-muted-foreground">Credits Earned</div>
              </div>
              <div className="text-center">
                <Progress value={progressPercentage} className="w-full mb-2" />
                <div className="text-sm text-muted-foreground">{Math.round(progressPercentage)}% Complete</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Review Task */}
          <Card className={`transition-all duration-300 ${tasks[0].completed ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : 'hover:shadow-lg'}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{tasks[0].title}</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  +{tasks[0].credits} Credits
                </Badge>
              </div>
              <CardDescription>{tasks[0].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks[0].completed ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">Completed ✅</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {reviewPlatforms.map((platform) => (
                      <Button
                        key={platform.name}
                        variant="outline"
                        className="justify-start"
                        onClick={() => {
                          setReviewPlatform(platform.name);
                          window.open(platform.url, '_blank');
                        }}
                      >
                        <Star className="h-4 w-4 mr-2" />
                        Review on {platform.name}
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </Button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="review-link">Submit review link or screenshot</Label>
                    <div className="flex gap-2">
                      <Input
                        id="review-link"
                        placeholder="Paste your review link here..."
                        value={reviewLink}
                        onChange={(e) => setReviewLink(e.target.value)}
                      />
                      <Button onClick={handleReviewSubmit} disabled={!reviewLink.trim()}>
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Social Media Task */}
          <Card className={`transition-all duration-300 ${tasks[1].completed ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : 'hover:shadow-lg'}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{tasks[1].title}</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  +{tasks[1].credits} Credits
                </Badge>
              </div>
              <CardDescription>{tasks[1].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks[1].completed ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">Completed ✅</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Platform</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {['twitter', 'linkedin', 'facebook'].map((platform) => (
                        <Button
                          key={platform}
                          variant={socialPlatform === platform ? "default" : "outline"}
                          size="sm"
                          onClick={() => {
                            setSocialPlatform(platform);
                            generateSocialPost(platform);
                          }}
                        >
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  {socialPost && (
                    <div className="space-y-2">
                      <Label>Copy this post:</Label>
                      <textarea
                        className="w-full p-3 border border-input rounded-md bg-background text-sm"
                        rows={4}
                        value={socialPost}
                        readOnly
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText(socialPost)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Post
                      </Button>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="social-link">Submit post link</Label>
                    <div className="flex gap-2">
                      <Input
                        id="social-link"
                        placeholder="Paste your post link here..."
                        value={socialLink}
                        onChange={(e) => setSocialLink(e.target.value)}
                      />
                      <Button onClick={handleSocialSubmit} disabled={!socialLink.trim()}>
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Referral Task */}
          <Card className={`transition-all duration-300 ${tasks[2].completed ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : 'hover:shadow-lg'}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{tasks[2].title}</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  +{tasks[2].credits} Credits
                </Badge>
              </div>
              <CardDescription>{tasks[2].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks[2].completed ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">Completed ✅</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-md">
                    <div className="text-sm font-medium mb-1">Your Referral Link:</div>
                    <div className="text-sm text-muted-foreground break-all">
                      https://adspyder.com/referral/USER123
                    </div>
                  </div>
                  <Button onClick={copyReferralLink} className="w-full">
                    <Link className="h-4 w-4 mr-2" />
                    {referralCopied ? 'Copied!' : 'Copy Referral Link'}
                  </Button>
                  <div className="text-sm text-muted-foreground text-center">
                    Share this link with friends and colleagues. Get credits when they sign up!
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Connect Account Task */}
          <Card className={`transition-all duration-300 ${tasks[3].completed ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : 'hover:shadow-lg'}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{tasks[3].title}</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  +{tasks[3].credits} Credits
                </Badge>
              </div>
              <CardDescription>{tasks[3].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks[3].completed ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">Completed ✅</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Connect your Google Ads, Meta Ads, or LinkedIn ad account to get personalized insights.
                  </div>
                  <Button onClick={handleConnectAccount} className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Connect Account
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Generate Ads Task */}
          <Card className={`lg:col-span-2 transition-all duration-300 ${tasks[4].completed ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : 'hover:shadow-lg'}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{tasks[4].title}</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  +{tasks[4].credits} Credits
                </Badge>
              </div>
              <CardDescription>{tasks[4].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks[4].completed ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">Completed ✅</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                    <span className="text-sm">Progress: {generateCount}/2 ads generated</span>
                    <Progress value={(generateCount / 2) * 100} className="w-32" />
                  </div>
                  <Button onClick={handleGenerateAds} className="w-full">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Ads with AI
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-2">Why do we offer credits?</h4>
                <p className="text-muted-foreground">
                  Your participation helps us grow AdSpyder and reach more marketers. In return, 
                  we reward you with credits to unlock premium features.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">When do I receive my credits?</h4>
                <p className="text-muted-foreground">
                  Credits are added to your account immediately after task completion. 
                  You can use them right away for premium features and data exports.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EarnCredits;