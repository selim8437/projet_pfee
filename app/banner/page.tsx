"use client" ;
import React, { useState } from 'react';
import ImageUpload from '../ui/uploader';
import Link from 'next/link';

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
        <ImageUpload onImageUrlChange={handleImageUrlChange} />
      {/* Now you can use imageUrl in this component */}
      {imageUrl && <img src={imageUrl} alt="My Image" width={400} height={400} />}
      <Link href={{
              pathname: '/creditCard',
              query: {banner:imageUrl ,logo:searchParams.logo, storeName:searchParams.storeName,description:searchParams.description},
            }}><button className="btn btn-primary" onClick={createSellerAccount}>Next</button>
        </Link>
    </div>
  
  );
};

