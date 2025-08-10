import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerMpesaStk, clearPaymentState } from '../Redux/paymentSlice';

export default function MPesaPayment({ amount }) {
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const { mpesaResponse, status, error } = useSelector(s => s.payment);

  const handlePay = (e) => {
    e.preventDefault();
    dispatch(triggerMpesaStk({ phone, amount }));
  };

  return (
    <div>
      <h3>M-Pesa Payment</h3>
      <form onSubmit={handlePay}>
        <input placeholder="+2547..." value={phone} onChange={e => setPhone(e.target.value)} />
        <button type="submit">Pay with M-Pesa</button>
      </form>
      {status === 'loading' && <p>Sending STK Push...</p>}
      {mpesaResponse && <pre>{JSON.stringify(mpesaResponse, null, 2)}</pre>}
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
}
