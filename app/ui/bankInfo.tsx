"use client" ;
import React, { useState } from 'react';
import Image from 'next/image';
export default function BankInfo({ data }: any) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    ownerName: '',
    cardExp: '',
    cvv: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <section className="gradient-custom">
      <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-7 col-lg-5 col-xl-4">
            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4">
                <form>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-outline">
                      <input type="text" id="typeText" className="form-control form-control-lg" 
                        placeholder="1234 5678 9012 3457" name="cardNumber" 
                        onChange={handleChange} />
                      <label className="form-label" htmlFor="typeText">Card Number</label>
                    </div>
                    <Image src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" width={64} height={64}/>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-outline">
                      <input type="text" id="typeName" className="form-control form-control-lg" 
                        placeholder="Cardholder's Name" name="ownerName" 
                        onChange={handleChange} />
                      <label className="form-label" htmlFor="typeName">Cardholder&apos;s Name</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <div className="form-outline">
                      <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YYYY"
                        name="cardExp" 
                        onChange={handleChange} />
                      <label className="form-label" htmlFor="typeExp">Expiration</label>
                    </div>
                    <div className="form-outline">
                      <input type="password" id="typeText2" className="form-control form-control-lg"
                        placeholder="&#9679;&#9679;&#9679;" name="cvv" 
                        onChange={handleChange} />
                      <label className="form-label" htmlFor="typeText2">Cvv</label>
                    </div>
                    <button className="btn btn-primary" onClick={() => data(formData)}>Next</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
