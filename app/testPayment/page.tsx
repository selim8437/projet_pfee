// pages/index.tsx
"use client";
import { useState } from 'react';
import { InitiatePaymentRequest, initiatePayment } from '../api/konnect/konnect';

const HomePage: React.FC = () => {
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInitiatePayment = async () => {
    setLoading(true);
    setError(null);
    try {
      const initiatePaymentRequest: InitiatePaymentRequest = {
        receiverWalletId: '6649b362a58e585682a5ba1a', // Update with your receiver wallet ID
        token: 'TND',
        amount: 9999,
        type: 'immediate',
        description: 'Payment description',
        acceptedPaymentMethods: ['wallet', 'bank_card', 'e-DINAR','flouci'],
        lifespan: 10,
        checkoutForm: false,
        addPaymentFeesToAmount: false,
        firstName: 'selim',
        lastName: 'Smaali',
        phoneNumber: '54579977',
        email: 'selim.smaali654@gmail.com',
        orderId: '1234657',
        webhook: 'https://merchant.tech/api/notification_payment',
        silentWebhook: true,
        successUrl: 'http://127.0.0.1:3000/shop/success/',
        failUrl: 'http://127.0.0.13000/shop/failure/',
        theme: 'light',
      };
      const paymentUrl = await initiatePayment(initiatePaymentRequest);
      setPaymentUrl(paymentUrl);
    } catch (error:any) {
      console.error('Error initiating payment:', error);
      setError(error.message || 'An error occurred while initiating payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Konnect Payment</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <button onClick={handleInitiatePayment} disabled={loading}>
        {loading ? 'Initiating Payment...' : 'Initiate Payment'}
      </button>
      {paymentUrl && (
        <div>
          <p>Payment URL: <a href={paymentUrl} target="_blank" rel="noopener noreferrer">{paymentUrl}</a></p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
