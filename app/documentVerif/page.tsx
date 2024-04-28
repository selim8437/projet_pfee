"use client" ;
import React, { useState } from 'react';
import ImageUpload from '../ui/uploader';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import { createStore } from '../lib/stores';

export default function Verif  ({searchParams}:{searchParams:{
  storeName:string ,
  description: string ,
  logo:string ,
  banner:string
}
})  {
  const [imageUrl, setImageUrl] = useState('');
 
  // Define a function to update the imageUrl state
  const handleImageUrlChange = (url: React.SetStateAction<string>) => {
    setImageUrl(url);
  };
  const { user } = useUser(); // Get the current user from useSession

  async function create() {
    if (user) {
      const userId = user.id; // Get the user ID
      createStore(userId, searchParams.storeName, searchParams.logo, searchParams.banner,searchParams.description, 'admin', null, imageUrl, 'pending');
      console.log("Store created successfully",userId);
    } else {
      console.log("User not logged in",user);
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <label style={{ marginBottom: '1rem', fontSize: '24px',  textAlign: 'center' }}>Import business certificate of your store so we can verify you're legit .</label>
        <ImageUpload onImageUrlChange={handleImageUrlChange} />
      {/* Now you can use imageUrl in this component */}
      {imageUrl && <Image src={imageUrl} alt="My Image" width={200} height={200} />}
        <Link href={{
              pathname: '/dashboard',
              query: {verifDoc:imageUrl ,banner:searchParams.banner,logo:searchParams.logo , storeName:searchParams.storeName,description:searchParams.description},
            }}><button className="btn btn-primary" onClick={create}>Next</button>
        </Link>
    </div>
  
  );
};

