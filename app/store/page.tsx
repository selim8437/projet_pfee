"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Store() {
  const [formData, setFormData] = useState({
    storeName: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Redirect to /logo with query parameters
    window.location.href = `/logo?storeName=${encodeURIComponent(formData.storeName)}&description=${encodeURIComponent(formData.description)}`;
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <form style={{ width: '26rem', margin: 'auto', padding: '2rem' }} onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form4Example1"
              className="form-control"
              name="storeName"
              onChange={handleChange}
              required
            />
            <label className="form-label" htmlFor="form4Example1">
              Store Name
            </label>
          </div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form4Example3"
              rows={4}
              name="description"
              onChange={handleChange}
              required
            ></textarea>
            <label className="form-label" htmlFor="form4Example3">
              Description
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
        </form>
      </div>
    </div>
  );
};
