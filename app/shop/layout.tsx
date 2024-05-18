// components/Layout.tsx
"use client" ;
import React, { useState } from 'react';
import { ShopLayout } from '@/components/component/shop-layout';
import { MyContext } from '@/components/component/context';
export default function Layout({ children }: { children: React.ReactNode }) {
  const [num, setNum] = useState('0');
  const value = { num, setNum };
  return (
    <div>
      <MyContext.Provider value={value}>
        <ShopLayout />
        <div>{children}</div>
        </MyContext.Provider>
    </div>
  );
}
