import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import HeartIcon from "@/components/HeartIcon";
import { Moon, Flame, Gift, Lock, Smile, Sparkles, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen gradient-soft">
      {/* Hero Section */}
      <section className="relative px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <HeartIcon className="w-16 h-16 mx-auto text-primary heart-pulse mb-6" filled />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Heartspace
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
              A safe space for your emotions
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your offline-first companion for emotional well-being. Track moods, practice gratitude, 
              and find focus - all in a gentle, private space designed with love.
            </p>
          </div>
          
          <Button size="lg" className="gradient-heart shadow-heart text-primary-foreground px-8 py-6 text-lg font-medium rounded-full hover:shadow-soft transition-all duration-300">
            Coming Soon ✨
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Love yourself, one note at a time
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Simple tools designed to nurture your emotional well-being with privacy and kindness at heart.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Moon className="w-12 h-12" />}
              title="Mood Cards"
              description="Track your daily emotions with gentle colors and notes. Your feelings matter, and we're here to help you understand them."
            />
            <FeatureCard
              icon={<Flame className="w-12 h-12" />}
              title="Focus Sessions"
              description="Find peace with guided timers and soft animations. Create space for mindfulness in your busy day."
            />
            <FeatureCard
              icon={<Gift className="w-12 h-12" />}
              title="Gratitude Notes"
              description="Collect moments of joy and appreciation. Build a personal collection of love and positive memories."
            />
          </div>
        </div>
      </section>

      {/* Privacy & Love Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gradient-focus rounded-3xl p-8 md:p-12 shadow-soft">
            <HeartIcon className="w-12 h-12 mx-auto text-secondary mb-6 heart-pulse" filled />
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Built with Love & Privacy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Lock className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Completely Offline</h4>
                    <p className="text-muted-foreground text-sm">All your data stays on your device. No accounts, no cloud, no judgment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Smile className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Gentle by Design</h4>
                    <p className="text-muted-foreground text-sm">No stress, no pressure. Just a warm space to be yourself.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Mindfully Minimal</h4>
                    <p className="text-muted-foreground text-sm">Focus on what matters most for your emotional well-being.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Made with Care</h4>
                    <p className="text-muted-foreground text-sm">Every feature designed to make you feel loved and supported.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything you need to know about your emotional well-being companion.
          </p>
          
          <div className="space-y-6">
            <div className="gradient-focus rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3">Is my data private and secure?</h3>
              <p className="text-muted-foreground">Absolutely! Heartspace is completely offline-first. All your emotional data, mood entries, and notes stay securely on your device. No accounts required, no cloud storage, and no data sharing with third parties.</p>
            </div>
            
            <div className="gradient-focus rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3">What features are included for free?</h3>
              <p className="text-muted-foreground">The free version includes mood tracking with notes, gratitude journaling, focus timer sessions, streak tracking, and gentle reminders. You can fully experience emotional wellness without any cost.</p>
            </div>
            
            <div className="gradient-focus rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3">How does mood tracking work?</h3>
              <p className="text-muted-foreground">Simply select your current mood using colorful cards and emojis, add optional notes about your feelings, and track your emotional patterns over time. View your mood history and weekly insights to understand your well-being journey.</p>
            </div>
            
            <div className="gradient-focus rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3">Can I use Heartspace without an internet connection?</h3>
              <p className="text-muted-foreground">Yes! Heartspace works completely offline. You can track moods, write gratitude notes, and use focus sessions anywhere, anytime. Your data syncs locally and never leaves your device.</p>
            </div>
            
            <div className="gradient-focus rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3">What are focus sessions?</h3>
              <p className="text-muted-foreground">Focus sessions are mindful timer experiences with gentle animations and breathing exercises. Choose from 5, 10, or 25-minute sessions to find peace, reduce stress, and practice mindfulness in your daily routine.</p>
            </div>
            
            <div className="gradient-focus rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3">How do gratitude notes help with mental health?</h3>
              <p className="text-muted-foreground">Writing daily gratitude notes helps shift focus to positive experiences and build resilience. Collect moments of joy and appreciation in your personal "Heart Log" to revisit during challenging times.</p>
            </div>
            
            <div className="gradient-focus rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3">Is Heartspace suitable for anxiety and depression?</h3>
              <p className="text-muted-foreground">While Heartspace supports emotional well-being through mood tracking and mindfulness, it's designed as a complementary tool. For anxiety, depression, or other mental health concerns, please consult with qualified healthcare professionals.</p>
            </div>
            
            <div className="gradient-focus rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3">What premium features are available?</h3>
              <p className="text-muted-foreground">Premium features include data export (PDF/CSV), advanced mood insights and correlations, additional pastel themes, and enhanced customization options. All core emotional wellness features remain free forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 text-center">
        <div className="max-w-2xl mx-auto">
          <HeartIcon className="w-8 h-8 mx-auto text-primary mb-4 heart-pulse" filled />
          <p className="text-muted-foreground text-sm">
            Your heart is a safe space. ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
