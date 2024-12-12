'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function CreditorCreateDetails() {

    return (
        <section className="container mx-auto  flex justify-center items-center">
        <div className="w-full max-w-md bg-main border-primary shadow-accent p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Fill In Your Company Details
          </h2>
          <form>
            {/* Company Name */}
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-primary font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                placeholder="Enter your Company Name"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            {/* Company Address */}
            <div className="mb-4">
              <label htmlFor="companyAddress" className="block text-primary font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                id="companyAddress"
                name="companyAddress"
                required
                placeholder="Enter your Address"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            {/* Collection Agency?  */}
            <div className="mb-4">
              <label htmlFor="collectionAgency" className="block text-primary font-bold mb-2">
                Is your company a collection agency?
              </label>
              <input
                type="checkbox"
                id="collectionAgency"
                name="collectionAgency"
                required
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
                href="/creditor/account/create"
                className="bg-[#FF6F61] text-[#FFFBEB] py-3 px-6 text-xl font-semibold shadow-[4px_4px_0_0_#333333] hover:shadow-[6px_6px_0_0_#333333] transition-all duration-150"
            >
                Create Profile
            </a>
          </form>
        </div>
      </section>
      );
}