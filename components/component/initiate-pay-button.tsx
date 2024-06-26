// pages/index.tsx
import {  useEffect, useState } from 'react';
import { InitiatePaymentRequest, initiatePayment } from '../../app/api/konnect/konnect';
import { Button } from '@/components/ui/button';

import { redir } from '@/app/lib/actions';
import { getUserByid } from '@/app/lib/users';
import { User } from '@/app/lib/types/user';
import { useUser } from '@clerk/nextjs';
import { CheckIcon } from './consult-order';
import { getOrderById } from '@/app/lib/orders';
import { Order } from '@/app/lib/types/order';

const InitPay = ({orderId}:{orderId:string} ) => {
    const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
    const [user1,setUser]=useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [Id,setUserid]=useState<string >('') ;
    const [order,setOrder]=useState<Order|null>(null)
  
    
    
    const handleInitiatePayment = async () => {
      
      setLoading(true);
      setError(null);
      
      try {
        const initiatePaymentRequest: InitiatePaymentRequest = {
          receiverWalletId: '6649b362a58e585682a5ba1a', // Update with your receiver wallet ID
          token: 'TND',
          amount: 58000,
          type: 'immediate',
          description: 'Payment description',
          acceptedPaymentMethods: ['wallet', 'bank_card', 'e-DINAR','flouci'],
          lifespan: 10,
          checkoutForm: false,
          addPaymentFeesToAmount: false,
          firstName: 'selim',
          lastName: 'smaali',
          phoneNumber: '54579977',
          email: 'selim.smaali654@gmail.com',
          orderId: orderId,
          webhook: 'https://merchant.tech/api/notification_payment',
          silentWebhook: true,
          successUrl: 'https://projet-pfee.vercel.app/shop/success/',
          failUrl: 'https://projet-pfee.vercel.app/shop/failure/',
          theme: 'light',
        };
      
        
        const paymentUrl = await initiatePayment(initiatePaymentRequest);
        setPaymentUrl(paymentUrl);
        const payU=await paymentUrl ;
        console.log(payU);
        redir(payU);
      
      } catch (error:any) {
        console.error('Error initiating payment:', error);
        setError(error.message || 'An error occurred while initiating payment');
      }finally {
        setLoading(false);
      }
    
};
const fetchOrder = async () => {
  try {
    const fetchedOrder = await getOrderById(orderId);

    if (fetchedOrder) {
      
      setOrder(fetchedOrder);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  } 

};
useEffect(()=>{
  fetchOrder() ;
},[])
  return (
    <div>
      
      <Button onClick={handleInitiatePayment} className='w-full' disabled={loading}>
        {loading ? 'Loading...' : 'Pay'}
        {!loading ?(
        <CheckIcon className="h-4 w-4 mr-2" />
        ) :(<div></div>)}
      </Button>
    </div>
  );
};

export default InitPay;
