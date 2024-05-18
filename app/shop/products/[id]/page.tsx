"use client";
import { ShopProducts } from "@/components/component/shop-products";
import { useEffect, useState } from "react";
import { Product } from "@/app/lib/types/prduct"; // Corrected import path for Product type

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [storedData, setStoredData] = useState<Product[]>([]); // State to store retrieved data

  useEffect(() => {
    // Run only on the client side after component mounts
    const data = sessionStorage.getItem('myData');
    if (data) {
      setStoredData(JSON.parse(data) as Product[]);
      console.log('Data retrieved from sessionStorage:', data);
    }
  }, []); // Empty dependency array ensures this effect runs only once, after component mounts on the client side

  return (
    <main>
      <ShopProducts shopId={id} />
    </main>
  );
}


