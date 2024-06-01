/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/geFSVqGHdyR
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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps, useEffect, useState } from "react"

import { User } from "@/app/lib/types/user";
import { createUser } from "@/app/lib/users";
import { Store } from "@/app/lib/types/store";
import { createStore } from "@/app/lib/stores";


export function Cstore() {
const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [banner, setBanner] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [userId, setUserId] = useState('');
  const [verifUrl, setVerifUrl] = useState('');
  const [verifState, setVerifState] = useState('');
  const [shippingOptions, setShippingOptions] = useState('');
  const [returnPolicies, setReturnPolicies] = useState('');
  const [changeButtonLogo,setChangeButtonLogo]=useState(false) ;
  const [changeButtonBanner,setChangeButtonBanner]=useState(false) ;


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedStore: Store = { id, name, logo, banner, description, categoryId,userId,verifUrl,verifState,shippingOptions,returnPolicies};
    createStore(updatedStore)
      .then(() => {
        // Call the onProductUpdate callback function after successful update
        onStoreUpdate();
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  };
  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 lg:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Create a new Store</h1>
          <p className="text-gray-500 dark:text-gray-400">Fill out the form to add a new store to the database.</p>
        </div>
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter name"     onChange={(e) => setName(e.target.value)}
/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Description</Label>
            <Input id="name" placeholder="Enter description"     onChange={(e) => setDescription(e.target.value)}
/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Category Id</Label>
            <Input id="name" placeholder="Enter category"     onChange={(e) => setCategoryId(e.target.value)}
/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Shipping options </Label>
            <Input id="name" placeholder="Enter shipping options"     onChange={(e) => setShippingOptions(e.target.value)}
/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Return Policies</Label>
            <Input id="name" placeholder="Enter name"     onChange={(e) => setReturnPolicies(e.target.value)}
/>
          </div>
         

          
          
          <Button className="w-full" type="submit">
            Create Store
          </Button>
        </form>
      </div>
    </div>
  )
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 5v14" />
    </svg>
  )
}
function onStoreUpdate() {
  throw new Error("Function not implemented.");
}
