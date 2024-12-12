'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function CreditorSignup() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const router = useRouter(); // Use the Next.js router

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
      console.log('Form submitted', formData);
      // Perform signup logic here (e.g., API call)
      // On success, redirect to /creditor/details/create
      router.push('/creditor/details/create');    
    }
  };

  return (
    <section className="container mx-auto flex justify-center items-center">
    <div className="w-full max-w-md bg-main border-primary shadow-accent p-8">
      <h2 className="text-2xl font-bold text-primary mb-6">
        Creditor Signup
      </h2>
      <form>
        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-primary font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
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
            required
            placeholder="Enter your password"
            className="w-full p-3 border border-primary shadow-accent"
          />
        </div>
        {/* Submit */}
        {/* <button
          type="submit"
          className="w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
        >
          Sign Up
        </button> */}
        <a
        href="/creditor/details/create"
        className="bg-[#FF6F61] text-[#FFFBEB] py-3 px-6 text-xl font-semibold shadow-[4px_4px_0_0_#333333] hover:shadow-[6px_6px_0_0_#333333] transition-all duration-150"
        >
        Sign Up
        </a>
      </form>
    </div>
  </section>
  );
}
