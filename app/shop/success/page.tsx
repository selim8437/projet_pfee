'use client';
import { getPaymentDetails } from "@/app/api/konnect/konnect";
import { createPayment, payOrder } from "@/app/lib/orders";
import { SuccessPayment } from "@/components/component/success-payment";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from "react";

export default  function Page() {
    const searchParams = useSearchParams();
    const paymentRef = searchParams.get('payment_ref');
    const hasCalled = useRef(false);
    const [id,setId]=useState<string>('');
    const createPay = async () => {
        if (paymentRef && !hasCalled.current) {
            hasCalled.current = true; // Mark the function as called
            try {
                const payment = await getPaymentDetails(paymentRef);
                const amount = payment.amount;
                const status = payment.status;
                const orderId = payment.orderId;
                setId(orderId);
                await createPayment(paymentRef , orderId, amount, status);
                await payOrder(orderId);
            } catch (error) {
                console.error('Error creating payment:', error);
            }
        }
    };

    useEffect(() => {
        createPay();
    }, []);

    console.log(paymentRef);

    return (
        <div>
            <SuccessPayment id={id} />
            
        </div>
    );
}