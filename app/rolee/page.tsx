'use client';
// RolePage.tsx
import { useState } from 'react';
import Link from 'next/link';

const RolePage: React.FC = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <form  className="w-full max-w-lg">
        <label className="block mb-2">
          <select
            
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a role</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default RolePage;
