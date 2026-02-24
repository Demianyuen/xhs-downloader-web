'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Crown, 
  Infinity, 
  Check, 
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  ChevronRight
} from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

// Linear-style Design Tokens
const colors = {
  background: '#0D0D0F',
  surface: '#141416',
  surfaceHover: '#1A1A1D',
  border: '#2A2A2E',
  borderGlow: 'rgba(139, 92, 246, 0.3)',
  primary: '#8B5CF6',
  primaryGlow: 'rgba(139, 92, 246, 0.4)',
  text: '#FAFAFA',
  textMuted: '#A1A1AA',
  accent: '#22D3EE',
};

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For casual browsing',
    price: 0,
    period: '',
    features: [
      '3 downloads per day',
      '480p quality limit',
      'Basic support',
      'Watermark included'
    ],
    cta: 'Current Plan',
    popular: false,
    disabled: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For content creators',
    price: 29,
    period: '/month',
    originalPrice: 49,
    features: [
      'Unlimited downloads',
      '1080p HD quality',
      'AI transcript & summary',
      'Batch download (10 videos)',
      'Priority email support',
      'No watermark',
      'Early access to features'
    ],
    cta: 'Upgrade to Pro',
    popular: true,
    badge: 'Most Popular',
    priceId: 'price_1QZG7QJvCCwFA8fBFJuqeL2P',
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    description: 'One-time investment',
    price: 199,
    period: ' one-time',
    originalPrice: 499,
    features: [
      'Everything in Pro',
      'Pay once, keep forever',
      'All future updates included',
      'VIP Discord access',
      'Direct feedback channel',
      'Private analytics dashboard'
    ],
    cta: 'Get Lifetime',
    popular: false,
    badge: 'Best Value',
    priceId: 'price_1QZG88JvCCwFA8fBPlJHTxP5',
    limited: true,
    limitedText: 'Only 50 left at this price',
  },
];

export default function PremiumPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [downloadCount, setDownloadCount] = useState(0);
  const [showLimitModal, setShowLimitModal] = useState(false);

  useEffect(() => {
    // Check download count from localStorage
    const count = localStorage.getItem('xhs_download_count');
    if (count) {
      setDownloadCount(parseInt(count, 10));
    }
  }, []);

  const handleSubscribe = async (planId: string, priceId?: string) => {
    if (planId === 'starter') return;
    
    setLoading(planId);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          priceId,
          planId,
          successUrl: `${window.location.origin}/success?plan=${planId}`,
          cancelUrl: `${window.location.origin}/premium`,
        }),
      });

      const { sessionId, url, error } = await response.json();
      
      if (error) {
        console.error('Checkout error:', error);
        alert('Payment initialization failed. Please try again.');
        return;
      }

      if (url) {
        window.location.href = url;
        return;
      }

      const stripe = await stripePromise;
      if (stripe && sessionId) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div 
      className="min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Naval Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ 
            background: `radial-gradient(circle, ${colors.primary}40 0%, transparent 70%)`,
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{ 
            background: `radial-gradient(circle, ${colors.accent}30 0%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
        />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-6 border-b" style={{ borderColor: colors.border }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a 
            href="/" 
            className="flex items-center gap-2 text-lg font-medium transition-opacity hover:opacity-70"
          >
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: colors.primary }}
            >
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span>XHS Downloader</span>
          </a>
          <a 
            href="/" 
            className="text-sm transition-colors hover:opacity-70"
            style={{ color: colors.textMuted }}
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{ 
                backgroundColor: `${colors.primary}15`,
                borderColor: `${colors.primary}30`,
                color: colors.primary,
              }}
            >
              <Sparkles className="w-3 h-3" />
              Upgrade your experience
            </span>
            
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6"
              style={{ 
                background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.primary} 50%, ${colors.accent} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Unlock Unlimited
            </h1>
            
            <p 
              className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
              style={{ color: colors.textMuted }}
            >
              Download without limits. Access HD quality. 
              <br className="hidden md:block" />
              <span style={{ color: colors.text }}>Join 10,000+ creators</span> who trust our platform.
            </p>
          </motion.div>

          {/* Download Limit Alert */}
          {downloadCount >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 rounded-2xl border max-w-xl mx-auto"
              style={{ 
                backgroundColor: `${colors.primary}10`,
                borderColor: `${colors.primary}40`,
              }}
            >
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary }} />
                <div className="text-left">
                  <p className="font-semibold mb-2">You've reached your daily limit</p>
                  <p style={{ color: colors.textMuted }} className="text-sm mb-4">
                    Upgrade to Pro or Lifetime to download unlimited videos.
                  </p>
                  <button
                    onClick={() => handleSubscribe('pro', pricingPlans[1].priceId)}
                    className="text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: colors.primary }}
                  >
                    Upgrade Now →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${colors.primaryGlow} 0%, transparent 70%)`,
                  }}
                />
                
                <div
                  className="relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300"
                  style={{
                    backgroundColor: plan.popular ? `${colors.primary}15` : colors.surface,
                    borderColor: plan.popular ? colors.primary : colors.border,
                    borderWidth: plan.popular ? '2px' : '1px',
                  }}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: colors.primary,
                          color: colors.background,
                        }}
                      >
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <p style={{ color: colors.textMuted }} className="text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span style={{ color: colors.textMuted }} className="text-sm ml-2">
                      {plan.period}
                    </span>
                    {plan.originalPrice && (
                      <div style={{ color: colors.textMuted }} className="text-xs mt-2">
                        <s>${plan.originalPrice}</s> Save {Math.round((1 - plan.price / plan.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>

                  {plan.limited && (
                    <div
                      className="text-xs font-medium mb-6 px-3 py-2 rounded-lg"
                      style={{
                        backgroundColor: `${colors.accent}20`,
                        color: colors.accent,
                      }}
                    >
                      ⚡ {plan.limitedText}
                    </div>
                  )}

                  <button
                    onClick={() => handleSubscribe(plan.id, plan.priceId)}
                    disabled={plan.disabled || loading === plan.id}
                    className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 mb-6"
                    style={{
                      backgroundColor: plan.popular ? colors.primary : colors.surfaceHover,
                      color: plan.popular ? colors.background : colors.text,
                      opacity: plan.disabled ? 0.5 : 1,
                      cursor: plan.disabled ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {loading === plan.id ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        {plan.cta}
                        {!plan.disabled && <ArrowRight className="w-4 h-4" />}
                      </>
                    )}
                  </button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-6 border-t" style={{ borderColor: colors.border }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, monthly plans can be cancelled anytime. Lifetime plans are one-time purchases with no refunds after 30 days.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, American Express) and digital wallets.'
              },
              {
                q: 'Is there a free trial?',
                a: 'The free plan includes 3 downloads per day at 480p quality. Upgrade anytime to access unlimited downloads.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'Monthly subscriptions can be cancelled anytime. Lifetime purchases have a 30-day money-back guarantee.'
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group p-4 rounded-lg border transition-all"
                style={{ borderColor: colors.border }}
              >
                <summary
                  className="flex items-center justify-between cursor-pointer font-medium"
                  style={{ color: colors.text }}
                >
                  {item.q}
                  <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90" />
                </summary>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t py-8 px-6" style={{ borderColor: colors.border }}>
        <div className="max-w-6xl mx-auto text-center text-sm" style={{ color: colors.textMuted }}>
          <p>© 2024 XHS Downloader. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
