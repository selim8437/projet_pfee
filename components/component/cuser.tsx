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
import { SelectM } from "./select-m";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


export function Cuser() {
    const [id, setId] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [firstName, setFirstName] = useState('');
  
    // Initialize imageTest array with false values corresponding to images length
    const [storeid, setStoreId] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser: User = { id, firstName, lastName, email, type, storeid};
    createUser(updatedUser)
      .then(() => {
        // Call the onProductUpdate callback function after successful update
        onUserUpdate();
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  };
  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 lg:p-10">
      <div className="space-y-6 text-white">
        <div>
          <h1 className="text-3xl  font-bold">Create a new User</h1>
          <p className="text-gray-400">Fill out the form to add a new user .</p>
        </div>
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter name"     onChange={(e) => setLastName(e.target.value)}
/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="firstName"> firstName</Label>
            <Input  id="firstName" placeholder="Enter first name "    
            onChange={(e) => setFirstName(e.target.value)}
 />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Email</Label>
            <Input id="price" placeholder="Enter email"               onChange={(e) => setEmail(e.target.value)}
 />
          </div>
          
          <div className="grid gap-2">
         <select
            value={type}
            onChange={(e)=>setType(e.target.value)}
            className="block w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="S">Seller</option>
            <option value="B">Buyer</option>
          </select>
          </div>
          
          <Button className="w-full bg-teal-500 text-white" type="submit">
            Create User
          </Button>
        </form>
      </div>
    </div>
  )
}


function onUserUpdate() {
  throw new Error("Function not implemented.");
}

