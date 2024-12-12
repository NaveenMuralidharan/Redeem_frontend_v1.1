'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';


export default function DebtorAccountCreate() {

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const router = useRouter(); // Use the Next.js router
  const { userId } = useParams(); 


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    console.log("form submitted");
    e.preventDefault();
    if (validateForm()) {
      // Perform signup logic here (e.g., API call)
      // On success, redirect to /creditor/details/create
      router.push('/debtor/debts/1234');    
    }
  };

  return (
    <section className="container mx-auto flex justify-center items-center">
    <div className="w-full max-w-md bg-main border-primary shadow-accent p-8">
      <h2 className="text-2xl font-bold text-primary mb-6">
        Link Your Bank Account
      </h2>
      <p>Redeem rounds your transactions off to the nearest dollar amount and 
        applies the accumulated sums towards your debt with bi-weekly withdrawals from your account.
      </p>
      <br></br>
      <hr></hr>
      <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-primary mb-6">
        Bank of USA
      </h2>
        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-primary font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            placeholder="Enter your username"
            className="w-full p-3 border border-primary shadow-accent"
          />
        </div>
        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-primary font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Enter your password"
            className="w-full p-3 border border-primary shadow-accent"
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
        >
          Link Account
        </button>
      </form>
    </div>
  </section>
  );
}
