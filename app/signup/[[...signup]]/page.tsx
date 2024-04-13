import RolePage from "@/app/ui/rolee";
import { SignUp } from "@clerk/nextjs";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { useEffect, useState } from "react";
import axios from 'axios'; // Import Axios

export default function Signup() {
  const pathname = usePathname(); // Get the current pathname using usePathname
  const [showSignUp, setShowSignUp] = useState(false); // State to determine whether to show SignUp component
  const [selectedOption, setSelectedOption] = useState<string>(''); // State to store selected option

  useEffect(() => {
    // Check if the current path is /signup
    setShowSignUp(pathname !== '/signup/');
  }, [pathname]);

  // Function to handle changes in selected option
  const handleDataFromChild = (data1: boolean, data2: string) => {
    console.log('Data received from child:', data1, data2);
    // Update selected option
    setSelectedOption(data2);
    console.log(data2);

    // Send selected option to the API
    sendSelectedOption(data2);
  };

  // Function to send the selected option to the API
  const sendSelectedOption = async (selectedOption: string) => {
    try {
      // Make a POST request to your API endpoint with the selected option
      await axios.post('/your-api-endpoint', { selectedOption });
      console.log('Selected option sent to API:', selectedOption);
    } catch (error) {
      console.error('Error sending selected option to API:', error);
      // Handle error
    }
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
