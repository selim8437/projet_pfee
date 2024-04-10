"use client" ;
import React, { useState } from 'react';
import BankInfo from '../ui/bankInfo';
import Link from 'next/link';

export default function Banner  ({searchParams}:{searchParams:{
storeName:string ,
description:string , 
logo:string,
banner:string},
}) {

  const data1={cardNumber: '',
  ownerName: '',
  cardExp:'',
  cvv:''}
     function printr(params:string) {
        console.log(data1.cardNumber)
    }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  minHeight: '100vh' }}>
        <label style={{ marginBottom: '1rem', fontSize: '24px',  textAlign: 'center' }}>put the store's credit card information</label>
      {/* Now you can use imageUrl in this component */}
      <BankInfo data={data1} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center',  minHeight: '0vh' }}>
      <button className="btn btn-primary" onClick={()=>printr} >Next</button>
        
        </div>
        {data1.cardExp +data1.cardNumber}
    </div>
  
  );
};

