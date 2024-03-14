import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Center vertically
          height: "100vh", // Set the height of the container to full viewport height
        }}>
        <div style={{ width: "400%", maxWidth: "500px" }}> {/* Adjust width as needed */}
        <SignUp />
      </div>
    </div>
}