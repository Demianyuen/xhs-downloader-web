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
