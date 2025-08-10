// src/components/Payment/Visa.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStripeIntent, clearPaymentState } from '../Redux/paymentSlice';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutFormInner = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePay = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    const res = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
      },
    });
    if (res.error) alert(res.error.message);
    else if (res.paymentIntent && res.paymentIntent.status === 'succeeded') {
      alert('Payment successful!');
    }
  };

  return (
    <form onSubmit={handlePay}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};

export default function VisaCheckout({ amount }) {
  const dispatch = useDispatch();
  const { stripeClientSecret, status } = useSelector(state => state.payment);

  useEffect(() => {
    dispatch(createStripeIntent({ amount })); // amount in smallest currency unit e.g. cents
    return () => dispatch(clearPaymentState());
  }, [dispatch, amount]);

  if (status === 'loading') return <p>Preparing payment...</p>;
  if (!stripeClientSecret) return null;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret: stripeClientSecret }}>
      <CheckoutFormInner clientSecret={stripeClientSecret} />
    </Elements>
  );
}
