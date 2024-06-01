/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/9Iv7FK2mkWv
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Order } from "@/app/lib/types/order"
import { getOrdersByClientId } from "@/app/lib/orders"
import { useUser } from "@clerk/nextjs";

export function ShopOrders() {
  const [orders,setOrders]=useState<Order[]>([]) ;
  const {user}=useUser() ;

  const fetchOrders = async () => {
    try {
      if(user?.id) {
      const fetchedOrders = await getOrdersByClientId(user.id);
      if (fetchedOrders) {
        setOrders(fetchedOrders);
      }
    }
    } catch (error) {
      console.error("Error fetching products:", error);
    } 

  };

  useEffect( ()=>{
    fetchOrders();
  },[user]) ;

 
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h1 className="text-2xl text-white font-bold md:text-3xl">My Orders</h1>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {orders.map((order,index)=>(
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge className={getStatusBadgeClass(order.status)}>{order.status}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">{order.buyerId}</span>
              <span className="text-gray-500 dark:text-gray-400">{order.date}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">{order.totalPrice}</span>
              <Link className="text-primary hover:underline" href={"/shop/orders/"+order.id}>
                View Details
              </Link>
            </div>
          </CardContent>
        </Card>
        ))}
      </div>
    </main>
  )
}
export const getStatusBadgeClass = (status: string|undefined) => {
  switch (status) {
    case 'accepted':
      return 'bg-green-500 text-white';
    case 'declined':
      return 'bg-red-500 text-white';
    case 'pending':
      return 'bg-yellow-500 text-gray-900'; // Adjust text color for better contrast
    case 'paid':
      return 'bg-blue-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
