"use client";

import RolePage from "@/app/ui/rolee";
import { SignUp } from "@clerk/nextjs";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { useEffect, useState } from "react";

export default function Signup() {
  const pathname = usePathname(); // Get the current pathname using usePathname
  const [showSignUp, setShowSignUp] = useState(false); // State to determine whether to show SignUp component
  const [selectedOption, setSelectedOption] = useState<string>(''); // State to store selected option

  useEffect(() => {
    // Check if the current path is /signup
    if (pathname === '/signup/') {
      setShowSignUp(false); // Show RolePage if the path is /signup
    } else {
      setShowSignUp(true); // Show SignUp component for other paths
    }
  }, [pathname]);
 
  const handleDataFromChild = (data1: boolean, data2: string) => {
    console.log('Data received from child:', data1, data2);
    // Update selected option
    setSelectedOption(data2);
    console.log(data2)
    // Show SignUp component
    setShowSignUp(true);
  };
 
  return (
    <>
      {showSignUp ? (
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
      ) : (
        <RolePage sendDataToParent={handleDataFromChild} />
      )}
    </>
  );
}
