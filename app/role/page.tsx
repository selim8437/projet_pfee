"use client" ;
import { useState } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { setType } from '../lib/users';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { redirecti } from '../lib/actions';

export default function RolePage() {
    const { user } = useUser();
    const userId = user?.id;
    

  const [selectedOption, setSelectedOption] = useState<string>('B'); // Default selected option

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    try{
    // Here you can save the selected option, for example, send it to an API, update state, etc.
    console.log("Selected option:", selectedOption);
    if(userId && userId!=undefined){
    setType(selectedOption,userId) ;
    // Send data to parent component
    }else{
        console.log("user id is null or undefined")
    }
    if(selectedOption=='B'){
       
        redirecti('/shop/');
    }else{
        
        redirecti('/store');
    }
  }catch(e){
    console.log(e) ;
  }

};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <label className="block mb-2">
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">What are you?</option>
            <option value='S'>Seller</option>
            <option value='B'>Buyer</option>
          </select>
        </label>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
