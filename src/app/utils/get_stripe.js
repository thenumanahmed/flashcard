import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    if (!stripePromise) {
      console.error("Stripe initialization failed. Please check your publishable key.");
    }
  }
  return stripePromise;
};

export default getStripe;
