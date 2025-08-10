// src/components/Redux/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from '../firebase/firebaseConfig'; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import axios from 'axios';

// Verify recaptcha via cloud function and then register
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ email, password, role = 'user' }, thunkAPI) => {//put recaptcha token after user once configured
    // verify recaptcha via cloud function
    {/*const verify = await axios.post('/__/functions/verifyRecaptcha', { token: recaptchaToken })
      .catch(e => thunkAPI.rejectWithValue('reCAPTCHA verification failed'));
    if (!verify?.data?.success) return thunkAPI.rejectWithValue('reCAPTCHA failed');*/}

    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    // Save role in Firestore
    await setDoc(doc(db, 'users', userCred.user.uid), { role, email });
    return { uid: userCred.user.uid, email: userCred.user.email, role };
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }, thunkAPI) => {//put recaptcha token after password once configured
    {/*const verify = await axios.post('/__/functions/verifyRecaptcha', { token: recaptchaToken })
      .catch(e => thunkAPI.rejectWithValue('reCAPTCHA verification failed'));
    if (!verify?.data?.success) return thunkAPI.rejectWithValue('reCAPTCHA failed');*/}

    const userCred = await signInWithEmailAndPassword(auth, email, password);
    // fetch role
    const userDoc = await getDoc(doc(db, 'users', userCred.user.uid));
    const role = userDoc.exists() ? userDoc.data().role : 'user';
    return { uid: userCred.user.uid, email: userCred.user.email, role };
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  await signOut(auth);
  return true;
}
);
export const forgotPassword = createAsyncThunk(
  'user/forgotPassword',
  async ({ email }, thunkAPI) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return 'Password reset email sent!';
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  uid: null,
  email: null,
  role: null,
  status: 'idle',
  error: null,
  //recaptchaVerified: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserFromListener(state, action) {
      const { uid, email, role } = action.payload || {};
      state.uid = uid || null;
      state.email = email || null;
      state.role = role || null;
      state.status = 'succeeded';
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state) => { state.status = 'loading'; state.error = null; })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.uid = action.payload.uid;
        state.email = action.payload.email;
        state.role = action.payload.role;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(loginUser.pending, (state) => { state.status = 'loading'; state.error = null; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.uid = action.payload.uid;
        state.email = action.payload.email;
        state.role = action.payload.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.uid = null;
        state.email = null;
        state.role = null;
        state.status = 'idle';
      });
  },
});

export const { setUserFromListener, clearError } = userSlice.actions;
export default userSlice.reducer;
