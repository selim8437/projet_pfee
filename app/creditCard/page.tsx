"use client" ;
import React, { useState } from 'react';
import BankInfo from '../ui/bankInfo';
import Link from 'next/link';
import { createStore } from '../lib/stores';
import { useUser } from '@clerk/nextjs';

export default function CreditCard({ searchParams }: { searchParams: { storeName: string, description: string, logo: string, banner: string, verifDoc: string } }) {
  const [data1, setData1] = useState({
    cardNumber: '',
    ownerName: '',
    cardExp: '',
    cvv: ''
  });
  const { user } = useUser(); // Get the current user from useSession

  async function create() {
    if (user) {
      const userId = user.id; // Get the user ID
      createStore(userId, searchParams.storeName, searchParams.logo, searchParams.banner,searchParams.description, 'admin', null, searchParams.verifDoc, 'pending');
      console.log("Store created successfully",userId);
    } else {
      console.log("User not logged in",user);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
      <label style={{ marginBottom: '1rem', fontSize: '24px', textAlign: 'center' }}>Put the store&apos;s credit card information</label>
      <BankInfo data={data1} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '0vh' }}>
        <Link href={{ pathname: '/dashboard', query: {} }}>
          <button className="btn btn-primary" onClick={create}>Next</button>
        </Link>
      </div>
    </div>
  );
};
