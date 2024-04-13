"use client" ;
import RolePage from "@/app/ui/rolee";
import { SignUp } from "@clerk/nextjs";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { useEffect, useState } from "react";
import axios from 'axios'; // Import Axios
interface UserData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}
export default function Signup() {
  const pathname = usePathname(); // Get the current pathname using usePathname
  const [showSignUp, setShowSignUp] = useState(false); // State to determine whether to show SignUp component
  const [selectedOption, setSelectedOption] = useState<string>(''); // State to store selected option
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Check if the current path is /signup
    setShowSignUp(pathname !== '/signup/');
    
    // Fetch user data when the component mounts
    fetchUserData();
  }, [pathname]);

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      // Make a GET request to fetch user data from the API
      const response = await axios.get('/api/webhooks/'); // Update the endpoint as per your API
      const userData = response.data;
      console.log(userData)
      setUserData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

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
        <div>
          <RolePage sendDataToParent={handleDataFromChild} />
          
        </div>
      )}
    </>
  );
}
