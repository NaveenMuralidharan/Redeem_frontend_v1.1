'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function CreditorLinkAccount() {

    return (
      <section className="container mx-auto  flex justify-center items-center">
        <div className="w-full max-w-md bg-main border-primary shadow-accent p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Link you company bank account:
          </h2>
          <p>This gives Redeem the authorization to deposit Debtor payments to this account. </p>
            <hr></hr>
            <br></br>
          <h2 className="text-2xl font-bold text-primary mb-6">
            Bank of Platypus:
          </h2>
          <form>
            {/* Company Name */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-primary font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter your Username"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            {/* Company Address */}
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
            <br></br>
            {/* Submit */}
            {/* <button
              type="submit"
              className="w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
            >
              Sign Up
            </button> */}
            
            <a
                href="/creditor/debts"
                className="bg-[#FF6F61] text-[#FFFBEB] py-3 px-6 text-xl font-semibold shadow-[4px_4px_0_0_#333333] hover:shadow-[6px_6px_0_0_#333333] transition-all duration-150"
            >
                Link Account
            </a>
          </form>
        </div>
      </section>
      );
}