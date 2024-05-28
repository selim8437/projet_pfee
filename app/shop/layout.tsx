// components/Layout.tsx
"use client" ;
import React, { useEffect, useState } from 'react';
import { ShopLayout } from '@/components/component/shop-layout';
import { MyContext } from '@/components/component/context';
export default function Layout({ children }: { children: React.ReactNode }) {
  const [num, setNum] = useState('0');
  useEffect(()=>{
    const numm =sessionStorage.getItem('num') ;
    if (numm)
      setNum(numm) ;
    
  },[])
  const value = { num, setNum };
  return (
    <div className='bg-gray-900'>
      <MyContext.Provider value={value}>
        <ShopLayout />
        <div>{children}</div>
        </MyContext.Provider>
    </div>
  );
}
