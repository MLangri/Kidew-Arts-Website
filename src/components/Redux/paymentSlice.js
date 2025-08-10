import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create Stripe PaymentIntent (call Cloud Function)
export const createStripeIntent = createAsyncThunk(
  'payment/createStripeIntent',
  async ({ amount }, thunkAPI) => {
    const res = await axios.post('/__/functions/createStripePaymentIntent', { amount });
    return res.data; // { clientSecret, paymentIntentId }
  }
);

// Trigger M-Pesa STK Push (call Cloud Function)
export const triggerMpesaStk = createAsyncThunk(
  'payment/triggerMpesaStk',
  async ({ phone, amount }, thunkAPI) => {
    const res = await axios.post('/__/functions/mpesaStkPush', { phone, amount });
    return res.data; // whatever the function returns
  }
);

const initialState = {
  stripeClientSecret: null,
  mpesaResponse: null,
  status: 'idle',
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    clearPaymentState(state) {
      state.stripeClientSecret = null;
      state.mpesaResponse = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createStripeIntent.pending, (state) => { state.status = 'loading'; })
      .addCase(createStripeIntent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stripeClientSecret = action.payload.clientSecret;
      })
      .addCase(createStripeIntent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(triggerMpesaStk.pending, (state) => { state.status = 'loading'; })
      .addCase(triggerMpesaStk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mpesaResponse = action.payload;
      })
      .addCase(triggerMpesaStk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;
