"use client";// ImageUpload.js
import React, { useState } from 'react';
import Image from 'next/image';
import { UploadDropzone } from "@/app/lib/uploadthing";

interface ImageUploadProps {
  onImageUrlChange: (url: string) => void; // Define the type for the onImageUrlChange prop
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUrlChange }) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleUploadComplete = (res: { url: string; }[]) => {
    const url = res[0]?.url || '';
    setImageUrl(url);
    // Call the callback function to pass the URL to the parent component
    onImageUrlChange(url);
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={handleUploadComplete}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      
    </div>
  );
};

export default ImageUpload;
