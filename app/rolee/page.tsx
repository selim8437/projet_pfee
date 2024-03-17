'use client';
// RolePage.tsx
import { useState } from 'react';
import Link from 'next/link';
interface RoleProps {}

const RolePage: React.FC<RoleProps> = ({}) => {
  const [selectedOption, setSelectedOption] = useState<string>('Buyer'); // Default selected option

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    // Here you can save the selected option, for example, send it to an API, update state, etc.
    console.log("Selected option:", selectedOption);
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <form  onSubmit={handleSubmit} className="w-full max-w-lg">
        <label className="block mb-2">
          <select
            value={selectedOption} onChange={handleSelectChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">What are you ? </option>
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
