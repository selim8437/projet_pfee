"use client";// ImageUpload.js
import React, { useState } from 'react';
import Image from 'next/image';
import { UploadButton, UploadDropzone } from "@/app/lib/uploadthing";

interface ImageUploadProps {
  onImageUrlChange: (url: string) => void; // Define the type for the onImageUrlChange prop
}

const ButtonUpload: React.FC<ImageUploadProps> = ({ onImageUrlChange }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const[test,setTest]=useState<boolean>(true);
  const handleUploadComplete = (res: { url: string;}[]) => {
    const url = res[0]?.url || '';
    setImageUrl(url);
    // Call the callback function to pass the URL to the parent component
    onImageUrlChange(url);
    setTest(false);
  };

  return (
    <div className="flex flex-col items-center  justify-between">
       {test ? (
    <UploadButton className='ut-button:bg-teal-500'
    
    endpoint="imageUploader"
    onClientUploadComplete={handleUploadComplete}
    onUploadError={(error) => {
      // Do something with the error.
      alert(`ERROR! ${error.message}`);
    }}
  />
   
    ) : (
      <div className="flex flex-col items-center justify-between"> <Image src={imageUrl} alt="My Image" width={200} height={200} /></div>
    )}
    </div>
  );
};

export default ButtonUpload;
