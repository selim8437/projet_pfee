/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/50dL0OBiNFp
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
import { JSX, SVGProps, useState } from "react"
import ButtonUpload from "@/app/ui/uploader-button";

export function CreateProduct() {
  const [imageUrl, setImageUrl] = useState('');
 
  // Define a function to update the imageUrl state
  const handleImageUrlChange = (url: React.SetStateAction<string>) => {
    setImageUrl(url);
  };
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Add New Product</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Fill out the form to add a new product to your store.
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div>
            <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="product-name">
              Product Name
            </Label>
            <div className="mt-1">
              <Input
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                id="product-name"
                name="product-name"
                placeholder="Enter product name"
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="product-description">
              Description
            </Label>
            <div className="mt-1">
              <Textarea
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                id="product-description"
                name="product-description"
                placeholder="Enter product description"
                required
                rows={3}
              />
            </div>
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="product-price">
              Price
            </Label>
            <div className="mt-1">
              <Input
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                id="product-price"
                name="product-price"
                placeholder="Enter product price"
                required
                type="number"
              />
            </div>
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product Image</Label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <ButtonUpload onImageUrlChange={handleImageUrlChange} />
            </div>
          </div>
          <div>
            <Button
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              type="submit"
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}


