// utils/konnect/konnectApi.ts
import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://api.preprod.konnect.network/api/v2/'; // Sandbox environment URL

export interface PaymentRequest {
  amount: number;
  currency: string;
  payment_methods: string[];
  // Add other necessary fields according to the API documentation
}

export interface PaymentResponse {
  payment_reference: string;
  payUrl: string;
  // Add other response fields if needed
}



export interface InitiatePaymentRequest {
  receiverWalletId: string;
  token: string;
  amount: number;
  type: string;
  description: string;
  acceptedPaymentMethods: string[];
  lifespan: number;
  checkoutForm: boolean;
  addPaymentFeesToAmount: boolean;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  orderId: string;
  webhook: string;
  silentWebhook: boolean;
  successUrl: string;
  failUrl: string;
  theme: string;
}

export const initiatePayment = async (initiatePaymentRequest: InitiatePaymentRequest): Promise<string> => {
  try {
    const response: AxiosResponse<{ payUrl: string }> = await axios.post(`${BASE_URL}/payments/init-payment`, initiatePaymentRequest, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key':`${process.env.NEXT_PUBLIC_KONNECT_API_KEY}`,
      },
    });
    console.log(response);
    return response.data.payUrl;
  } catch (error:any) {
    throw new Error(`Error initiating payment: ${error.message}`);
  }
};
