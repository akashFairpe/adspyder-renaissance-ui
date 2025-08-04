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
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-3 bg-gradient-primary rounded-full shadow-lg">
              <Sparkles className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
              Earn More Credits
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us grow AdSpyder and boost your account! Complete simple tasks to unlock free credits 
            and get more value from our platform.
          </p>
        </div>

        {/* Progress Section */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 via-accent-blue/10 to-accent-purple/10 border-primary/30 shadow-lg">
          <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-white">
              <CreditCard className="h-5 w-5" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-accent-blue/10 rounded-lg border border-accent-blue/20">
                <div className="text-3xl font-bold text-accent-blue">{completedTasks}/5</div>
                <div className="text-sm text-muted-foreground">Tasks Completed</div>
              </div>
              <div className="text-center p-4 bg-accent-green/10 rounded-lg border border-accent-green/20">
                <div className="text-3xl font-bold text-accent-green">+{totalCredits}</div>
                <div className="text-sm text-muted-foreground">Credits Earned</div>
              </div>
              <div className="text-center p-4 bg-accent-purple/10 rounded-lg border border-accent-purple/20">
                <Progress value={progressPercentage} className="w-full mb-2 h-3" />
                <div className="text-sm text-muted-foreground">{Math.round(progressPercentage)}% Complete</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Review Task */}
          <Card className={`transition-all duration-300 border-2 ${
            tasks[0].completed 
              ? 'bg-gradient-to-br from-accent-green/5 to-accent-green/10 border-accent-green/40 shadow-lg' 
              : 'hover:shadow-xl hover:shadow-primary/10 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-card/50'
          }`}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${tasks[0].completed ? 'bg-accent-green/20' : 'bg-primary/10'}`}>
                    <MessageSquare className={`h-5 w-5 ${tasks[0].completed ? 'text-accent-green' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-lg">{tasks[0].title}</CardTitle>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`${tasks[0].completed ? 'bg-accent-green/20 text-accent-green border-accent-green/40' : 'bg-primary/10 text-primary border-primary/40'} font-semibold`}
                >
                  +{tasks[0].credits} Credits
                </Badge>
              </div>
              <CardDescription>{tasks[0].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks[0].completed ? (
                <div className="flex items-center gap-3 p-4 bg-accent-green/10 rounded-lg border border-accent-green/30">
                  <Check className="h-6 w-6 text-accent-green" />
                  <span className="font-semibold text-accent-green text-lg">Task Completed ✅</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {reviewPlatforms.map((platform) => (
                      <Button
                        key={platform.name}
                        variant="outline"
                        className="justify-start hover:bg-primary/5 hover:border-primary/40 transition-all duration-200"
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
                      <Button 
                        onClick={handleReviewSubmit} 
                        disabled={!reviewLink.trim()}
                        className="bg-primary hover:bg-primary/90 disabled:bg-muted"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Social Media Task */}
          <Card className={`transition-all duration-300 border-2 ${
            tasks[1].completed 
              ? 'bg-gradient-to-br from-accent-green/5 to-accent-green/10 border-accent-green/40 shadow-lg' 
              : 'hover:shadow-xl hover:shadow-accent-blue/10 border-accent-blue/20 hover:border-accent-blue/40 bg-gradient-to-br from-card to-card/50'
          }`}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${tasks[1].completed ? 'bg-accent-green/20' : 'bg-accent-blue/10'}`}>
                    <Share2 className={`h-5 w-5 ${tasks[1].completed ? 'text-accent-green' : 'text-accent-blue'}`} />
                  </div>
                  <CardTitle className="text-lg">{tasks[1].title}</CardTitle>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`${tasks[1].completed ? 'bg-accent-green/20 text-accent-green border-accent-green/40' : 'bg-accent-blue/10 text-accent-blue border-accent-blue/40'} font-semibold`}
                >
                  +{tasks[1].credits} Credits
                </Badge>
              </div>
              <CardDescription>{tasks[1].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks[1].completed ? (
                <div className="flex items-center gap-3 p-4 bg-accent-green/10 rounded-lg border border-accent-green/30">
                  <Check className="h-6 w-6 text-accent-green" />
                  <span className="font-semibold text-accent-green text-lg">Task Completed ✅</span>
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
          <Card className={`transition-all duration-300 border-2 ${
            tasks[2].completed 
              ? 'bg-gradient-to-br from-accent-green/5 to-accent-green/10 border-accent-green/40 shadow-lg' 
              : 'hover:shadow-xl hover:shadow-accent-purple/10 border-accent-purple/20 hover:border-accent-purple/40 bg-gradient-to-br from-card to-card/50'
          }`}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${tasks[2].completed ? 'bg-accent-green/20' : 'bg-accent-purple/10'}`}>
                    <Users className={`h-5 w-5 ${tasks[2].completed ? 'text-accent-green' : 'text-accent-purple'}`} />
                  </div>
                  <CardTitle className="text-lg">{tasks[2].title}</CardTitle>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`${tasks[2].completed ? 'bg-accent-green/20 text-accent-green border-accent-green/40' : 'bg-accent-purple/10 text-accent-purple border-accent-purple/40'} font-semibold`}
                >
                  +{tasks[2].credits} Credits
                </Badge>
              </div>
              <CardDescription>{tasks[2].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks[2].completed ? (
                <div className="flex items-center gap-3 p-4 bg-accent-green/10 rounded-lg border border-accent-green/30">
                  <Check className="h-6 w-6 text-accent-green" />
                  <span className="font-semibold text-accent-green text-lg">Task Completed ✅</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-3 bg-accent-purple/5 rounded-lg border border-accent-purple/20">
                    <div className="text-sm font-medium mb-1 text-accent-purple">Your Referral Link:</div>
                    <div className="text-sm text-muted-foreground break-all font-mono">
                      https://adspyder.com/referral/USER123
                    </div>
                  </div>
                  <Button onClick={copyReferralLink} className="w-full bg-accent-purple hover:bg-accent-purple/90 text-white">
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
          <Card className={`transition-all duration-300 border-2 ${
            tasks[3].completed 
              ? 'bg-gradient-to-br from-accent-green/5 to-accent-green/10 border-accent-green/40 shadow-lg' 
              : 'hover:shadow-xl hover:shadow-primary/10 border-primary/30 hover:border-primary/50 bg-gradient-to-br from-card to-card/50'
          }`}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${tasks[3].completed ? 'bg-accent-green/20' : 'bg-primary/10'}`}>
                    <CreditCard className={`h-5 w-5 ${tasks[3].completed ? 'text-accent-green' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-lg">{tasks[3].title}</CardTitle>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`${tasks[3].completed ? 'bg-accent-green/20 text-accent-green border-accent-green/40' : 'bg-primary/10 text-primary border-primary/40'} font-semibold`}
                >
                  +{tasks[3].credits} Credits
                </Badge>
              </div>
              <CardDescription>{tasks[3].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks[3].completed ? (
                <div className="flex items-center gap-3 p-4 bg-accent-green/10 rounded-lg border border-accent-green/30">
                  <Check className="h-6 w-6 text-accent-green" />
                  <span className="font-semibold text-accent-green text-lg">Task Completed ✅</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground p-3 bg-primary/5 rounded-lg border border-primary/20">
                    Connect your Google Ads, Meta Ads, or LinkedIn ad account to get personalized insights.
                  </div>
                  <Button onClick={handleConnectAccount} className="w-full bg-primary hover:bg-primary/90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Connect Account
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Generate Ads Task */}
          <Card className={`lg:col-span-2 transition-all duration-300 border-2 ${
            tasks[4].completed 
              ? 'bg-gradient-to-br from-accent-green/5 to-accent-green/10 border-accent-green/40 shadow-lg' 
              : 'hover:shadow-xl hover:shadow-accent-blue/10 border-accent-blue/30 hover:border-accent-blue/50 bg-gradient-to-br from-card to-accent-blue/5'
          }`}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${tasks[4].completed ? 'bg-accent-green/20' : 'bg-accent-blue/10'}`}>
                    <Sparkles className={`h-5 w-5 ${tasks[4].completed ? 'text-accent-green' : 'text-accent-blue'}`} />
                  </div>
                  <CardTitle className="text-lg">{tasks[4].title}</CardTitle>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`${tasks[4].completed ? 'bg-accent-green/20 text-accent-green border-accent-green/40' : 'bg-accent-blue/10 text-accent-blue border-accent-blue/40'} font-semibold`}
                >
                  +{tasks[4].credits} Credits
                </Badge>
              </div>
              <CardDescription>{tasks[4].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks[4].completed ? (
                <div className="flex items-center gap-3 p-4 bg-accent-green/10 rounded-lg border border-accent-green/30">
                  <Check className="h-6 w-6 text-accent-green" />
                  <span className="font-semibold text-accent-green text-lg">Task Completed ✅</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-accent-blue/5 rounded-lg border border-accent-blue/20">
                    <span className="text-sm font-medium text-accent-blue">Progress: {generateCount}/2 ads generated</span>
                    <Progress value={(generateCount / 2) * 100} className="w-32 h-2" />
                  </div>
                  <Button onClick={handleGenerateAds} className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Ads with AI
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="mt-8 bg-gradient-to-r from-secondary/50 to-secondary/30 border-secondary/40">
          <CardHeader className="bg-gradient-secondary rounded-t-lg">
            <CardTitle className="text-primary">How It Works</CardTitle>
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