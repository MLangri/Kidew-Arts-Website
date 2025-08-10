// src/components/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import paymentReducer from './paymentSlice';
//import recaptchaReducer from './recaptchaSlice'; // new recaptcha slice

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    payment: paymentReducer,
    //recaptcha: recaptchaReducer,
  }
  });
export default store;