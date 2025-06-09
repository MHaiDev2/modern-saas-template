import { loadStripe } from '@stripe/stripe-js';

// Client-side Stripe
export const getStripe = () => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set');
  }
  
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
};

// Subscription tiers configuration
export const SUBSCRIPTION_TIERS = {
  FREE: {
    name: 'Free',
    price: 0,
    priceId: null,
    features: [
      'Basic dashboard access',
      'Up to 5 projects',
      'Community support',
    ],
  },
  PRO: {
    name: 'Pro',
    price: 29,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      'Everything in Free',
      'Up to 50 projects',
      'Priority support',
      'Advanced analytics',
      'API access',
    ],
  },
  MAX: {
    name: 'Max',
    price: 99,
    priceId: process.env.STRIPE_MAX_PRICE_ID,
    features: [
      'Everything in Pro',
      'Unlimited projects',
      '24/7 phone support',
      'Custom integrations',
      'Dedicated account manager',
    ],
  },
} as const;

export type SubscriptionTier = keyof typeof SUBSCRIPTION_TIERS;