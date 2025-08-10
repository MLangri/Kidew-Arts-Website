// functions/index.js
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const stripe = require('stripe')(functions.config().stripe.secret);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// 1) verifyRecaptcha
app.post('/verifyRecaptcha', async (req, res) => {
  const token = req.body.token;
  const secret = functions.config().recaptcha.secret;
  try {
    const resp = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`);
    res.json(resp.data);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 2) M-Pesa STK Push (Daraja sandbox)
app.post('/mpesaStkPush', async (req, res) => {
  const { phone, amount } = req.body;
  const mpesa = functions.config().mpesa; // mpesa.consumer_key, consumer_secret, shortcode, passkey, callback_url

  try {
    // Get access token
    const tokenResp = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      auth: {
        username: mpesa.consumer_key,
        password: mpesa.consumer_secret,
      }
    });
    const token = tokenResp.data.access_token;

    // Construct STK Push payload
    const timestamp = new Date().toISOString().replace(/[-:T\.Z]/g, '').slice(0,14); // YYYYMMDDHHmmss
    const password = Buffer.from(mpesa.shortcode + mpesa.passkey + timestamp).toString('base64');

    const payload = {
      BusinessShortCode: mpesa.shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: mpesa.shortcode,
      PhoneNumber: phone,
      CallBackURL: mpesa.callback_url,
      AccountReference: "KidewArts",
      TransactionDesc: "Kidew Arts Purchase"
    };

    const stkResp = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', payload, {
      headers: { Authorization: `Bearer ${token}` }
    });
    res.json(stkResp.data);
  } catch (error) {
    res.status(500).json({ error: error.message, details: error.response?.data || null });
  }
});

// 3) Stripe PaymentIntent
app.post('/createStripePaymentIntent', async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'kes', // or "usd"
      automatic_payment_methods: { enabled: true },
    });
    res.json({ clientSecret: paymentIntent.client_secret, paymentIntentId: paymentIntent.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

exports.api = functions.https.onRequest(app);
