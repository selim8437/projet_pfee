"use client";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { ShopCart } from "./shop-cart";
import { Button } from "../ui/button";

export function ShopLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  
  

  return (
    <>
      <header className="bg-gray-900 py-4 px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="#" className="text-white no-underline text-lg font-bold">
            Mall for All
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/shop/orders/" className="text-white no-underline hover:text-gray-300">
              My orders
            </Link>
            <Link href="/shop" className="text-white no-underline hover:text-gray-300">
              Shops
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href={{ pathname: '/shop/cart' }} className="hover:text-gray-300">
            <ShopCart />
          </Link>
          <div className="relative">
            {user ? (
              <UserButton />
            ) : (
              <div className="space-x-4">
                <Link href="/signin"><Button>Log In</Button></Link>
                <Link href="/signup"><Button>Sign Up</Button></Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 px-6 md:px-8" />
    </>
  )
}
