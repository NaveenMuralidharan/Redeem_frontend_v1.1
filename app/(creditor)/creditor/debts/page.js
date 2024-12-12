'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function CreditorDebtsDashboard() {
    
    return (
        <>
        <section>
        <h2 className="text-2xl font-bold text-primary mb-6">
            Debts Dashboard:
          </h2>
          <p>View repayment status of your current debts, create new debts all from your dashboard  </p>
          <br></br>
          <a
                href="/creditor/debts/create"
                className="bg-[#FF6F61] text-[#FFFBEB] py-3 px-6 text-xl font-semibold shadow-[4px_4px_0_0_#333333] hover:shadow-[6px_6px_0_0_#333333] transition-all duration-150"
            >
                Create Debt
            </a>
            </section>
            <br></br>
            <hr></hr>
            <br></br>
        
        {/* Debts filters */}
        <p> Filter Debts: </p>
        <select
            // value={filter}
            className="border border-gray-300 p-2 rounded"
          >
            <option value="all">All</option>
            <option value="settled">Settled</option>
            <option value="unsettled">Unsettled</option>
          </select>

        <br></br>
        <hr></hr>
        <br></br>

        {/* debt cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        <section className="container mx-auto  flex justify-center items-center">
        <div className="bg-main border-primary shadow-accent p-4">

          <h4 className="text-2xl font-bold text-primary mb-6">
            Debt ID: 235912
          </h4>
            <div className="mb-4">
                <ul>
                    <li>
                        <b>Customer ID: </b>CO_3456087
                    </li>
                    <li>
                        <b>Customer Name:</b> Ann Adams
                    </li>
                    <li>
                        <b>Amount:</b> $456.70
                    </li>
                    <li>
                        <b>Status:</b> Not settled
                    </li>
                    <li>
                    <b>Progress:</b> 23% Paid

                    <div className="progress-bar">
                        <div style={{ width: `23%` }}
                        className="bg-yellow-500 h-5 rounded"
                        ></div>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
        </section>
    
        <section className="container mx-auto  flex justify-center items-center">
        <div className="bg-main border-primary shadow-accent p-4">

          <h4 className="text-2xl font-bold text-primary mb-6">
            Debt ID: 291254
          </h4>
            <div className="mb-4">
                <ul>
                    <li>
                        <b>Customer ID: </b>CO_6087459
                    </li>
                    <li>
                        <b>Customer Name:</b> Ben Smith
                    </li>
                    <li>
                        <b>Amount:</b> $46.34
                    </li>
                    <li>
                        <b>Status:</b> Not settled
                    </li>
                    <li>
                    <b>Progress:</b> 45% Paid

                    <div className="progress-bar">
                        <div style={{ width: `45%` }}
                        className="bg-yellow-500 h-5 rounded"
                        ></div>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
        </section>

        <section className="container mx-auto  flex justify-center items-center">
        <div className="bg-main border-primary shadow-accent p-4">

          <h4 className="text-2xl font-bold text-primary mb-6">
            Debt ID: 235912
          </h4>
            <div className="mb-4">
                <ul>
                    <li>
                        <b>Customer ID: </b>CO_3456087
                    </li>
                    <li>
                        <b>Customer Name:</b> Ann Adams
                    </li>
                    <li>
                        <b>Amount:</b> $378.90
                    </li>
                    <li>
                        <b>Status:</b> Settled
                    </li>
                    <li>
                    <b>Progress:</b> 100% Paid

                    <div className="progress-bar">
                        <div style={{ width: `100%` }}
                        className="bg-green-500 h-5 rounded"
                        ></div>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
        </section>
                
        </div>


      </>
      );
}