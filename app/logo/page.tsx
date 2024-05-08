"use client" ;
import React, { useState } from 'react';
import ImageUpload from '../ui/uploader';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo  ({searchParams}:{searchParams:{
  storeName:string ,
  description: string }
})  {
  const [imageUrl, setImageUrl] = useState('');
 
  // Define a function to update the imageUrl state
  const handleImageUrlChange = (url: React.SetStateAction<string>) => {
    setImageUrl(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <label style={{ marginBottom: '1rem', fontSize: '24px',  textAlign: 'center' }}>Import a Logo for your store</label>
        <ImageUpload onImageUrlChange={handleImageUrlChange} />
      {/* Now you can use imageUrl in this component */}
        <Link href={{
              pathname: '/banner',
              query: {logo:imageUrl , storeName:searchParams.storeName,description:searchParams.description},
            }}><button className="btn btn-primary">Next</button>
        </Link>
    </div>
  
  );
};

