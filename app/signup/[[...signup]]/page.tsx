"use client";

import { SignUp } from "@clerk/nextjs";

export default function Signup() {
  
  
 
  return (
    <>
     
        <div className="bg-gray-850"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="bg-gray-850" style={{ width: "400px", maxWidth: "500px" }}>
            <SignUp />
          </div>
        </div>
    </>
  );
}
