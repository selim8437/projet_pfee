"use client";
import { useEffect, useState } from 'react';

const MyComponent: React.FC = () => {
  const [userData, setUserData] = useState<any>(null); // Change 'any' to match your user data type

  useEffect(() => {
    // Function to handle SSE messages
    const handleSSEMessage = (event: MessageEvent) => {
      const eventData = JSON.parse(event.data); // Parse event data from JSON string
      setUserData(eventData); // Update component state with new user data
    };

    // Establish SSE connection
    const eventSource = new EventSource('/api/webhooks/events');

    // Add event listener for SSE messages
    eventSource.addEventListener('message', handleSSEMessage);

    // Cleanup function
    return () => {
      // Close SSE connection
      eventSource.close();
    };
  }, []); // Run once on component mount

  return (
    <div>
      {/* Render user data */}
      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
