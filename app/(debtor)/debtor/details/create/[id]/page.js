'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';


export default function CreditorCreateDetails() {
    const router = useRouter();
    const { userId } = useParams(); 

    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push("/debtor/account/create/1234");
    }

    return (
        <section className="container mx-auto  flex justify-center items-center">
        <div className="w-full max-w-md bg-main border-primary shadow-accent p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Fill In Your Personal Details
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Company Name */}
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-primary font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="Enter your First Name"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block text-primary font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Enter your Last Name"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-primary font-bold mb-2">
                Mailing Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="Enter your Mailing Address"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-primary font-bold mb-2">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your Email ID"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>


            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
            >
              Create Profile
            </button>
            
            {/* <a
                href="/creditor/account/create"
                className="bg-[#FF6F61] text-[#FFFBEB] py-3 px-6 text-xl font-semibold shadow-[4px_4px_0_0_#333333] hover:shadow-[6px_6px_0_0_#333333] transition-all duration-150"
            >
                Create Profile
            </a> */}
          </form>
        </div>
      </section>
      );
}