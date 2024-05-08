"use client" ;
import React, { useState } from 'react';
import ImageUpload from '../ui/uploader';
import Link from 'next/link';
import Image from 'next/image';
export default function Banner  ({searchParams}:{searchParams:{
storeName:string ,
description:string , 
logo:string}
}) {

  const [imageUrl, setImageUrl] = useState('');

  // Define a function to update the imageUrl state
  const handleImageUrlChange = (url: React.SetStateAction<string>) => {
    setImageUrl(url);
  };
  function createSellerAccount():void{
  
  }

  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      
        <label style={{ marginBottom: '1rem', fontSize: '24px',  textAlign: 'center' }}>Import a Banner for your store</label>
        <br></br>
        <br></br>
        <ImageUpload onImageUrlChange={handleImageUrlChange} />
      {/* Now you can use imageUrl in this component */}
      <br></br>
      <br></br>
      <Link href={{
              pathname: '/documentVerif',
              query: {banner:imageUrl ,logo:searchParams.logo, storeName:searchParams.storeName,description:searchParams.description},
            }}><button className="btn btn-primary" onClick={createSellerAccount}>Next</button>
        </Link>
    </div>
  
  );
};

