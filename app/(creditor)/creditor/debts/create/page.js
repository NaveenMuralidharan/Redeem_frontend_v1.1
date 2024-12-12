'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function CreditorDebtCreate() {
    
    const [isReported, setIsReported] = useState(false); // State for conditional fields
    const [debtLink, setDebtLink] = useState(""); // State to store the generated debt link
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
    const router = useRouter();

    const handleReportedChange = (event) => {
        setIsReported(event.target.value === 'true'); // Convert string to boolean
    };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Simulate creating a debt and generating a link
      const generatedDebtLink = "http://localhost:3000/debtor/debts/view/1234";
  
      setDebtLink(generatedDebtLink);
      setIsSubmitted(true);
    };
  
    const navigateToDashboard = () => {
      router.push("/creditor/debts");
    };

    return (
        <>
        <section>
        <h2 className="text-2xl font-bold text-primary mb-6">
            Create a New Debt Contract:
        </h2>
        <div>
            <ul>
                <li>1. Enter debtor details, payment terms and incentive conditions. </li> 
                <li>2. Once created, we will provide you with a unique debt link which can be emailed to the debtor. </li> 
                <li>3. This unique debt link is then used by the debtors to 
                    accept the debt contract and begin making payments.
                </li>
            </ul>
        </div>
          <br></br>
          
            </section>

            <hr></hr>
            <br></br>


        <section className="container mx-auto  flex justify-center items-center">
        <div className="w-full max-w-md bg-main border-primary shadow-accent p-8">
          
          <p>Section 1: Debt Information: </p>
            <hr></hr>
            <br></br>
          
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="customerID" className="block text-primary font-bold mb-2">
                Customer ID:
              </label>
              <input
                type="text"
                id="customerID"
                name="customerID"
                required
                placeholder="Your organization's unique customer identifier"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="customerFirstName" className="block text-primary font-bold mb-2">
              Customer First Name
              </label>
              <input
                type="text"
                id="customerFirstName"
                name="customerFirstName"
                required
                placeholder="Enter Customer's first name"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="customerLastName" className="block text-primary font-bold mb-2">
              Customer Last Name
              </label>
              <input
                type="text"
                id="customerLastName"
                name="customerLastName"
                required
                placeholder="Enter Customer's last name"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="customerEmail" className="block text-primary font-bold mb-2">
              Customer Email ID
              </label>
              <input
                type="email"
                id="customerEmail"
                name="customerEmail"
                required
                placeholder="Enter Customer's email"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="debtAmount" className="block text-primary font-bold mb-2">
                Debt Amount
              </label>
              <input
                type="number"
                id="debtAmount"
                name="debtAmount"
                required
                placeholder="Enter Debt Amount"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="debtOrigin" className="block text-primary font-bold mb-2">
                Debt Origin Company
              </label>
              <input
                type="text"
                id="debtOrigin"
                name="debtOrigin"
                required
                placeholder="Original debt owner"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="debtStatement" className="block text-primary font-bold mb-2">
                Debt Statement (optional)
              </label>
              <input
                type="file"
                id="debtStatement"
                name="debtStatement"
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>

            <br></br>
            <p>Section 2: Repayment Terms: </p>
            <hr></hr>

            <div className="mb-4">
              <label htmlFor="paymentDeadline" className="block text-primary font-bold mb-2">
                Repayment Deadline:
              </label>
                <p>Redeem will round off debtor's transactions every 2 weeks and deposit it in your account. If they are still short of repayment by the deadline, Redeem will prompt them to make up the difference or 
                    re-negotiate terms.
                </p>
              <input
                type="date"
                id="paymentDeadline"
                name="paymentDeadline"
                required
                className="w-full p-3 border border-primary shadow-accent"
              />
            </div>


            <div className="mb-4">
              <label htmlFor="reportedToCredit" className="block text-primary font-bold mb-2">
                Has the debt been reported to credit bureaus?
              </label>
              <select
                id="reportedToCredit"
                name="reportedToCredit"
                required
                onChange={handleReportedChange}
                className="w-full p-3 border border-primary shadow-accent"
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            {isReported && (
              <>
                          <div className="bg-[#FF6F61] text-[#FFFBEB] py-3 px-6 text-xl font-semibold shadow-[4px_4px_0_0_#333333] hover:shadow-[6px_6px_0_0_#333333] transition-all duration-150"
            >
             Reporting incentives encourage timely repayment by offering debtors a chance to improve their credit status, boosting recovery rates and fostering trust.

            </div>
                <div className="mb-4">
                  <label htmlFor="reportedStatus" className="block text-primary font-bold mb-2">
                    Current Credit Bureau Status:
                  </label>
                  <select
                    id="reportedStatus"
                    name="reportedStatus"
                    required
                    className="w-full p-3 border border-primary shadow-accent"
                  >
                    <option value="delinquent">Delinquent</option>
                    <option value="default">Default</option>
                    <option value="charge-off">Charge-Off</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="updatedStatus" className="block text-primary font-bold mb-2">
                    Status to Change to Upon Full Repayment:
                  </label>
                  <select
                    id="updatedStatus"
                    name="updatedStatus"
                    required
                    className="w-full p-3 border border-primary shadow-accent"
                  >
                    <option value="paid">Paid</option>
                    <option value="settled">Settled</option>
                    <option value="current">Current</option>
                  </select>
                </div>
              </>
            )}


            <br></br>

            {/* <button
                type="submit"
                className="w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
            >
                Create Debt
            </button> */}

            {isSubmitted ? (
              <>
                <p className="text-green-600 font-bold">
                  Your debt was successfully created.
                </p>
                <div>
                <b>Next Steps:</b>
                  <ol>
                    <li>
                       1. Share the link below with your debtor.
                    </li>
                    <li>
                      2. Your debtor will accept the debt and follow the simple steps to complete onboarding.
                    </li>
                    <li>
                      3. They'll link their bank account and start making payments.           
                    </li>
                  </ol>
                </div>
                <p>
                  <b>Debt Link:</b> <a href={debtLink} className="text-blue-500 underline">{debtLink}</a>
                </p>
                <button
                  type="button"
                  onClick={navigateToDashboard}
                  className="w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
                >
                  Go to Debt Dashboard
                </button>
              </>
            ) : (
              <button
                type="submit"
                className="w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
              >
                Create Debt
              </button>
            )}


          </form>
        </div>
        </section>
      </>
      );
}