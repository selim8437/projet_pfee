/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/IrzUZauBZNa
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
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { Order, OrderProducts } from "@/app/lib/types/order";
import { acceptOrder, getOrdersByClientId, getOrdersBySellerId, getOrdersProductBySellerId, rejectOrder } from "@/app/lib/orders";
import { useUser } from "@clerk/nextjs";
import { SearchIcon } from "./layout-test";
import { Input } from "../ui/input";
import { getStoreId } from "@/app/lib/users";
import { getStatusBadgeClass } from "./shop-orders";

export function OrdersAdmin() {
  const [userId,setUserId]=useState<string>('') ;
  const {user}=useUser() ;
  const [orders,setOrders]=useState<Order[]>([]) ;
  const [ordersP,setOrdersP]=useState<OrderProducts[]>([]) ;
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const fetchOrders = async () => {
    try {
      if(user?.id){
      const fetchedOrders = await getOrdersBySellerId(user.id);
      if (fetchedOrders) {
        
        setOrders(fetchedOrders);
      }
    }
    } catch (error) {
      console.error("Error fetching products:", error);
    } 

  };
  useEffect(()=>{
    const handlefetchOrderProducts = async () => {
      if (user?.id) {
        try {
          console.log(user.id)
          setUserId(user.id) ;
          const op=await getOrdersProductBySellerId(user.id) ;
          console.log(op);
          if(op){
            
            setOrdersP(op) ;
          }
        }catch(e){
          console.log(e);
        }
      }
    }
    handlefetchOrderProducts();
  },[user])
 
  const handleAccept= (e:string)=>{
    acceptOrder(e) ;
    fetchOrders();
  }
  const handleReject= (e:string)=>{
    rejectOrder(e) ;
    fetchOrders();

  }
  useEffect( ()=>{
    fetchOrders();
  },[user]) ;
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  
  // Filter the shops based on the search query
  const filteredOrders= orders.filter((order) =>
    order.buyerId.toLowerCase().startsWith(searchQuery.toLowerCase())
  );
  return (
    
    <div className="mx-auto px-8 py-16 flex flex-col items-center">
  <div className="w-full max-w-screen-lg">
    <div className="relative flex justify-center">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      </div>
      <Input
        className="w-full rounded-md bg-white px-8 py-2 pl-8 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-gray-900 dark:bg-gray-800 dark:text-black-50 dark:focus:ring-gray-300"
        placeholder="Search Orders ..."
        type="search"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  </div>
  <br></br>
  <br></br>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">

        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="px-6 py-4 text-left">Order #</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Products Ordered</th>
              <th className="px-6 py-4 text-left">Adress</th>
              <th className="px-6 py-4 text-left">Phone</th>

              <th className="px-6 py-4 text-left">shippingMethod</th>
              <th className="px-6 py-4 text-left">Payment option</th>
              <th className="px-6 py-4 text-right">Total</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredOrders.map( (order,index)=>(
            <tr key={index}>
              <td className="px-6 py-4 font-medium">
                <Link className="text-blue-500 hover:underline" href="#">
                  #{order.id}
                </Link>
              </td>
              <td className="px-6 py-4">{order.buyerId}</td>
              <td className="px-6 py-4">
                {ordersP.map((orderp,iindex)=>(
                  <div key={iindex}>
                    {order.id === orderp.orderId && (
                    
                    <div className="flex flex-col  space-y-2">
                      <div className="flex items-center  space-x-2">
                        <div >
                        <span>     {orderp.productId}:{orderp.quantity},</span>

                        </div>
                      </div>
                    </div>
                    )}
                  </div>
                
                ))}
              </td>
              <td className="px-6 py-4 text-right">{order.adress}</td>
              <td className="px-6 py-4 text-right">{order.phone}</td>

              <td className="px-6 py-4 text-right">{order.shippingMethod}</td>
              <td className="px-6 py-4 text-right">{order.paymentMethod}</td>
              <td className="px-6 py-4 text-right">{order.totalPrice}</td>
              

              <td className="px-6 py-4">
                
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ">
                  <span className={getStatusBadgeClass(order?.status)}>
                  {order.status}
                  </span>
                </span>
              </td>
              
              <td className="px-6 py-4 text-right space-x-2">
                {order.status === 'pending' && (
                <>
                <Button onClick={()=>handleAccept(order.id)} className="bg-green-500 text-white hover:bg-green-600" size="sm" variant="outline">
                  Accept
                </Button>
                <Button onClick={()=>handleReject(order.id)} className="bg-red-500 text-white hover:bg-red-600" size="sm" variant="outline">
                  Reject
                </Button>
                </>
              )}
</td>

            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
