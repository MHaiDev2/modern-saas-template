import Stripe from 'stripe';

// Server-side Stripe (only use in API routes and server components)
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-10-28.acacia',
  typescript: true,
});