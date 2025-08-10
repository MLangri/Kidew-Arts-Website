/*import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { setCaptchaVerified } from "../Redux/recaptchaSlice";

const ReCaptcha = () => {
    const dispatch = useDispatch();

  const handleCaptchaChange = (value) => {
    if (value) {
      dispatch(setCaptchaVerified(true));
    } else {
      dispatch(setCaptchaVerified(false));
    }
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey="YOUR_SITE_KEY" // Replace with your Google reCAPTCHA site key
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default ReCaptcha*/