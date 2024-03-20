'use client';
import React, { useState } from 'react';
import Upload from '../example-uploader/page';
import axios from 'axios';



interface FormData {
  name: string;
  description: string;
  location: string;
  image?: File | null;
}

const StoreForm: React.FC = ({  }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    location: '',
    image: null,
  });


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if an image file was selected
    if (formData.image) {
      // Create FormData object to send the file
      const formDataToSend = new FormData();
      formDataToSend.append('image', formData.image);

      try {
        // Send the file to the server
        const response = await axios.post('/api/upload', formDataToSend);

        // Handle the response from the server (e.g., display a success message)
        console.log('File uploaded successfully:', response.data);

        // Call the onSubmit callback with the form data
      } catch (error) {
        // Handle errors (e.g., display an error message)
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 40px)', // Adjust if you have a fixed header/footer
      }}
    >
      <form
        style={{
          width: '80%',
          maxWidth: '600px',
          backgroundColor: '#f8f9fa', // Background color
          borderRadius: '10px', // Rounded corners
          padding: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Box shadow for depth
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ marginBottom: '20px' }}>
          <label>
            Store Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Logo:
            <Upload/>
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Banner:
            <Upload/>
          </label>
        </div>
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <b>Create Store</b>
        </button>
      </form>
    </div>
  );
};

export default StoreForm;
