/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/iiZ2LV5YveY
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
import { Button } from "@/components/ui/button"
import { Product } from "@/app/lib/types/prduct"
import { JSX, SVGProps, useContext, useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { MyContext } from "./context";
import Link from "next/link";
import InitPay from "./initiate-pay-button";
import { createOrder } from "@/app/lib/orders";
import { Cart } from "@/app/lib/types/cart";
import { v4 } from 'uuid';
import { redir } from "@/app/lib/actions";


export function CartProc() {
  const [storedData, setStoredData] = useState<Product[] >([]); // State to store retrieved data
  const [totalPrice, setTotalPrice] = useState<number>(0); // State to store total price
  const [region,setRegion]=useState<string>('tunis') ;
  const [paymentMethod,setPayment]=useState<string>('Card') ;
  const [shippingMethod,setShippingMethod]=useState<string>('Standard');
  const [adress,setAdress]=useState<string>('') ;
  const [phone,setPhone]=useState<string>('') ;
  const [sellerId,setSellerId]=useState<string>('');
  const [buyerId,setBuyerId]=useState<string>('');
  const [productsIds,setProductIds]=useState<string[]>([]);
  const [currentShop,setCurrentShop]=useState<string>('');
  const [orderId,setOrderId]=useState<string>('') ;
  
  const clearStoreData = ()=>{
    setStoredData([]) ;
    sessionStorage.removeItem('myData');
    setNum('0');
  }
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('MyComponent must be used within a MyProvider');
  }

  const { num, setNum } = context;
  const removeProduct = (index: number) => {
    const updatedData = storedData.filter((_, i) => i !== index);
    setStoredData(updatedData);
    sessionStorage.setItem('myData', JSON.stringify(updatedData));
    setNum(updatedData.length.toString());
  };
  useEffect(() => {
    const productIds1 =storedData.map(product => product.id);
    setProductIds(productIds1);
  },[storedData])
  useEffect(() => {
      // Retrieve data from sessionStorage on component mount
      const data = sessionStorage.getItem('myData');
      const CurrentShop =sessionStorage.getItem('CurrentShop') ;
      if (data) {
        setStoredData(JSON.parse(data) as Product[]);
        console.log('Data retrieved from sessionStorage:', data);
      }
      if (CurrentShop) {
        setCurrentShop(CurrentShop);
        setSellerId(CurrentShop);
      }

  }, []);
  useEffect(() => {
    // Calculate the total price whenever storedData changes
    const price = storedData.reduce((sum, product) => sum + Number(product.price), 0);
    setTotalPrice(price);
  }, [storedData]);

  const handleSubmit=()=>{
    console.log('its happenign');
    const cart:Cart={totalPrice,region,shippingMethod,adress,phone,buyerId,sellerId,paymentMethod,productsIds} ;
    const sa:string=v4() ;
    setOrderId(sa);
    createOrder(cart,sa);
    redir('/shop/orders/'+sa) ;
  }
  return (
    <div className=" bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <div className="flex flex-col gap-6">
        
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
          <Link href={`/shop/products/${currentShop}`}><Button className=" bg-black text-white ">Return to shopping</Button></Link>

            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <Button onClick={clearStoreData} className=" bg-black text-white " >
              Clear Cart
            </Button>
          </div>
          <div className="grid gap-4">
          {storedData.map((product,index)=>(

            <div key={index} className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
              <img
                alt="Product Image"
                className="rounded-md"
                height="80"
                src={product.images[0]}
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div className="grid gap-1">
                <h3 className="font-medium">{product.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{product.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button className="h-8 w-8" size="icon" variant="outline"  onClick={() => removeProduct(index)}>
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  
                </div>
                <span className="font-medium">${product.price}</span>
              </div>
              
            </div>
            ))}
            
            
          </div>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 dark:text-gray-400">Total</span>
            <span className="font-medium">${totalPrice}</span>
          </div>
          <div className="grid gap-2">
            <RadioGroup className="grid grid-cols-2 gap-4" defaultValue={paymentMethod} onValueChange={setPayment}>
              <div>
                <RadioGroupItem className="peer sr-only" id="Card" value="Card" />
                <Label
                  className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                  htmlFor="Card"
                >
                  <CreditCardIcon className="mb-3 h-6 w-6" />
                  Card
                </Label>
              </div>
              <div>
                <RadioGroupItem className="peer sr-only" id="cash" value="cash" />
                <Label
                  className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                  htmlFor="cash"
                >
                  <DollarSignIcon className="mb-3 h-6 w-6" />
                  Cash
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <RadioGroup className="grid grid-cols-2 gap-4" defaultValue={shippingMethod} onValueChange={setShippingMethod}>
              <div>
                <RadioGroupItem className="peer sr-only" id="Standard" value="Standard" />
                <Label
                  className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                  htmlFor="Standard"
                >
                  <TruckIcon className="mb-3 h-6 w-6" />
                  Standard shipping
                </Label>
              </div>
              <div>
                <RadioGroupItem className="peer sr-only" id="Express" value="Express" />
                <Label
                  className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                  htmlFor="Express"
                >
                  <RocketIcon className="mb-3 h-6 w-6" />
                  Express shipping
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">Region</span>
              <Select  onValueChange={setRegion}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a region" defaultValue={region} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tunisia Regions</SelectLabel>
                    <SelectItem value="ariana">Ariana</SelectItem>
                    <SelectItem value="beja">Béja</SelectItem>
                    <SelectItem value="ben_arous">Ben Arous</SelectItem>
                    <SelectItem value="bizerte">Bizerte</SelectItem>
                    <SelectItem value="gabes">Gabès</SelectItem>
                    <SelectItem value="gafsa">Gafsa</SelectItem>
                    <SelectItem value="jendouba">Jendouba</SelectItem>
                    <SelectItem value="kairouan">Kairouan</SelectItem>
                    <SelectItem value="kasserine">Kasserine</SelectItem>
                    <SelectItem value="kebili">Kébili</SelectItem>
                    <SelectItem value="kef">Le Kef</SelectItem>
                    <SelectItem value="mahdia">Mahdia</SelectItem>
                    <SelectItem value="manouba">Manouba</SelectItem>
                    <SelectItem value="medenine">Médenine</SelectItem>
                    <SelectItem value="monastir">Monastir</SelectItem>
                    <SelectItem value="nabeul">Nabeul</SelectItem>
                    <SelectItem value="sfax">Sfax</SelectItem>
                    <SelectItem value="sidi_bouzid">Sidi Bouzid</SelectItem>
                    <SelectItem value="siliana">Siliana</SelectItem>
                    <SelectItem value="sousse">Sousse</SelectItem>
                    <SelectItem value="tataouine">Tataouine</SelectItem>
                    <SelectItem value="tozeur">Tozeur</SelectItem>
                    <SelectItem value="tunis">Tunis</SelectItem>
                    <SelectItem value="zaghouan">Zaghouan</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-gray-500 dark:text-gray-400" htmlFor="address">
                Address
              </Label>
              <Input id="address" placeholder="Enter your address" onChange={(e)=>setAdress(e.target.value)}/>
            </div>  
            <div className="flex items-center justify-between">
              <Label className="text-gray-500 dark:text-gray-400" htmlFor="address">
                Phone number
              </Label>
              <Input id="address" placeholder="Enter your phone number" onChange={(e)=>setPhone(e.target.value)}/>
            </div>  
            <Button onClick={handleSubmit} className='bg-black text-white w-full' >Submit order</Button>
             
          </div>
                   
        
        </div>
      </div>
    </div>
  )
}

function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
    </svg>
  )
}

function CreditCardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DollarSignIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

  function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  }
  function TruckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    )
  }

function uuidv4(): string {
  throw new Error("Function not implemented.");
}

