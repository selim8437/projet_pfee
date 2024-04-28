"use client";

import { SignUp } from "@clerk/nextjs";

export default function Signup() {
  
  
 
  return (
    <>
     
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div style={{ width: "400px", maxWidth: "500px" }}>
            <SignUp />
          </div>
        </div>
    </>
  );
}
