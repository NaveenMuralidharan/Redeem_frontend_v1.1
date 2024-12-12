// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';


// export default function CreditorDebtCreate() {
    
//     const [isReported, setIsReported] = useState(false); // State for conditional fields
//     const [debtLink, setDebtLink] = useState(""); // State to store the generated debt link
//     const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
//     const router = useRouter();

//     const handleReportedChange = (event) => {
//         setIsReported(event.target.value === 'true'); // Convert string to boolean
//     };

//     const handleSubmit = (event) => {
//       event.preventDefault();
  
//       // Simulate creating a debt and generating a link
//       const generatedDebtLink = "http://localhost:3000/debtor/debts/view/1234";
  
//       setDebtLink(generatedDebtLink);
//       setIsSubmitted(true);
//     };
  
//     const navigateToDashboard = () => {
//       router.push("/creditor/debts");
//     };

//     return (
//         <>
//         <section>
//         <h2 className="text-2xl font-bold text-primary mb-6">
//             Congratulations! You've made the first step toward Redeeming your credit!
//         </h2>
//         <div>
//             <ul>
//                 <li>1. Review the details about your debt below. </li> 
//                 <li>2. Once created, we will provide you with a unique debt link which can be emailed to the debtor. </li> 
//                 <li>3. This unique debt link is then used by the debtors to 
//                     accept the debt contract and begin making payments.
//                 </li>
//             </ul>
//         </div>
//           <br></br>
          
//             </section>

//             <hr></hr>
//             <br></br>


//         <section className="container mx-auto  flex justify-center items-center">
//         <div className="w-full max-w-md bg-main border-primary shadow-accent p-8">
          
//           <p>Section 1: Debt Information: </p>
//             <hr></hr>
//             <br></br>
          
//           <form className="space-y-6" onSubmit={handleSubmit}>

//             <div className="mb-4">
//               <label htmlFor="customerID" className="block text-primary font-bold mb-2">
//                 Customer ID:
//               </label>
//               <input
//                 type="text"
//                 id="customerID"
//                 name="customerID"
//                 required
//                 placeholder="Your organization's unique customer identifier"
//                 className="w-full p-3 border border-primary shadow-accent"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="customerFirstName" className="block text-primary font-bold mb-2">
//               Customer First Name
//               </label>
//               <input
//                 type="text"
//                 id="customerFirstName"
//                 name="customerFirstName"
//                 required
//                 placeholder="Enter Customer's first name"
//                 className="w-full p-3 border border-primary shadow-accent"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="customerLastName" className="block text-primary font-bold mb-2">
//               Customer Last Name
//               </label>
//               <input
//                 type="text"
//                 id="customerLastName"
//                 name="customerLastName"
//                 required
//                 placeholder="Enter Customer's last name"
//                 className="w-full p-3 border border-primary shadow-accent"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="customerEmail" className="block text-primary font-bold mb-2">
//               Customer Email ID
//               </label>
//               <input
//                 type="email"
//                 id="customerEmail"
//                 name="customerEmail"
//                 required
//                 placeholder="Enter Customer's email"
//                 className="w-full p-3 border border-primary shadow-accent"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="debtAmount" className="block text-primary font-bold mb-2">
//                 Debt Amount
//               </label>
//               <input
//                 type="number"
//                 id="debtAmount"
//                 name="debtAmount"
//                 required
//                 placeholder="Enter Debt Amount"
//                 className="w-full p-3 border border-primary shadow-accent"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="debtOrigin" className="block text-primary font-bold mb-2">
//                 Debt Origin Company
//               </label>
//               <input
//                 type="text"
//                 id="debtOrigin"
//                 name="debtOrigin"
//                 required
//                 placeholder="Original debt owner"
//                 className="w-full p-3 border border-primary shadow-accent"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="debtStatement" className="block text-primary font-bold mb-2">
//                 Debt Statement (optional)
//               </label>
//               <input
//                 type="file"
//                 id="debtStatement"
//                 name="debtStatement"
//                 className="w-full p-3 border border-primary shadow-accent"
//               />
//             </div>

//             <br></br>
//             <p>Section 2: Repayment Terms: </p>
//             <hr></hr>

//             <div className="mb-4">
//               <label htmlFor="paymentDeadline" className="block text-primary font-bold mb-2">
//                 Repayment Deadline:
//               </label>
//                 <p>Redeem will round off debtor's transactions every week and deposit it in your account. If they are still short of repayment by the deadline, Redeem will prompt them to make up the difference or 
//                     re-negotiate terms.
//                 </p>
//               <input
//                 type="date"
//                 id="paymentDeadline"
//                 name="paymentDeadline"
//                 required
//                 className="w-full p-3 border border-primary shadow-accent"
//               />
//             </div>


//             <div className="mb-4">
//               <label htmlFor="reportedToCredit" className="block text-primary font-bold mb-2">
//                 Has the debt been reported to credit bureaus?
//               </label>
//               <select
//                 id="reportedToCredit"
//                 name="reportedToCredit"
//                 required
//                 onChange={handleReportedChange}
//                 className="w-full p-3 border border-primary shadow-accent"
//               >
//                 <option value="false">No</option>
//                 <option value="true">Yes</option>
//               </select>
//             </div>

//             {isReported && (
//               <>
//                           <div className="bg-[#FF6F61] text-[#FFFBEB] py-3 px-6 text-xl font-semibold shadow-[4px_4px_0_0_#333333] hover:shadow-[6px_6px_0_0_#333333] transition-all duration-150"
//             >
//              Reporting incentives encourage timely repayment by offering debtors a chance to improve their credit status, boosting recovery rates and fostering trust.

//             </div>
//                 <div className="mb-4">
//                   <label htmlFor="reportedStatus" className="block text-primary font-bold mb-2">
//                     Current Credit Bureau Status:
//                   </label>
//                   <select
//                     id="reportedStatus"
//                     name="reportedStatus"
//                     required
//                     className="w-full p-3 border border-primary shadow-accent"
//                   >
//                     <option value="delinquent">Delinquent</option>
//                     <option value="default">Default</option>
//                     <option value="charge-off">Charge-Off</option>
//                   </select>
//                 </div>

//                 <div className="mb-4">
//                   <label htmlFor="updatedStatus" className="block text-primary font-bold mb-2">
//                     Status to Change to Upon Full Repayment:
//                   </label>
//                   <select
//                     id="updatedStatus"
//                     name="updatedStatus"
//                     required
//                     className="w-full p-3 border border-primary shadow-accent"
//                   >
//                     <option value="paid">Paid</option>
//                     <option value="settled">Settled</option>
//                     <option value="current">Current</option>
//                   </select>
//                 </div>
//               </>
//             )}


//             <br></br>

//             {/* <button
//                 type="submit"
//                 className="w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
//             >
//                 Create Debt
//             </button> */}

//             {isSubmitted ? (
//               <>
//                 <p className="text-green-600 font-bold">
//                   Your debt was successfully created.</p>
//                 <p>
//                   Save the link below and send it to the debtor to accept the debt and follow instructions to be onboarded to the Redeem platform and link their bank account to start making payments. Details about repayment terms and conditions will be displayed to the debtor.
//                 </p>  
//                 <p>
//                   Debt Link: <a href={debtLink} className="text-blue-500 underline">{debtLink}</a>
//                 </p>
//                 <button
//                   type="button"
//                   onClick={navigateToDashboard}
//                   className="w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
//                 >
//                   Go to Debt Dashboard
//                 </button>
//               </>
//             ) : (
//               <button
//                 type="submit"
//                 className="w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
//               >
//                 Create Debt
//               </button>
//             )}


//           </form>
//         </div>
//         </section>
//       </>
//       );
// }

'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function DebtDetails() {
  const router = useRouter();
  const { debtId } = useParams(); // Extract debt ID from URL
  const [debtData, setDebtData] = useState(null); // State to store debt details
  const [loading, setLoading] = useState(true);
  const [acceptContract, setAcceptContract] = useState(false);

  // Mocked API fetch to simulate getting debt details
  useEffect(() => {
    async function fetchDebtDetails() {
      try {
        // Simulate an API call to fetch debt details by ID
        // const response = await fetch(`/api/debts/${debtId}`); // Replace with actual API route
        // const data = await response.json();
        // Mocked Debt Object for Simulation (Used in Development Phase):
        const mockDebtData = {
            id: '1234',
            customerID: 'CUST001',
            customerFirstName: 'John',
            customerLastName: 'Doe',
            customerEmail: 'johndoe@example.com',
            debtAmount: 500,
            debtOrigin: 'First Credit Bank',
            debtStatement: null, // URL to statement if provided
            paymentDeadline: '2025-01-01',
            reportedToCredit: true,
            reportedStatus: 'Delinquent',
            updatedStatus: 'Paid',
        };
        setDebtData(mockDebtData);
      } catch (error) {
        console.error('Error fetching debt details:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDebtDetails();
  }, [debtId]);

  if (loading) {
    return <p>Loading debt details...</p>;
  }

  if (!debtData) {
    return <p>Debt details not found.</p>;
  }

  const handleAccept = ()=>{
    setAcceptContract(true);
    console.log(acceptContract)
  }

  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-primary mb-6">
        Welcome to Redeem: Settle Your Debt Easily
      </h2>

      <section className="mb-16">
      <p className="mb-4 text-2xl">
          Redeem helps you repay debts seamlessly by rounding off your everyday
          transactions and applying those amounts to your balance. 
          
        </p>
        <p className="mb-4 text-2xl">
        Here's how it works:
        </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FFFBEB] border-4 border-[#333333] p-6 shadow-[6px_6px_0_0_#333333]">
              <h3 className="text-2xl font-semibold mb-4">1. Connect Your Bank Account</h3>
              <p>
              <strong></strong> Link your bank account securely
            to allow Redeem to round off transactions to the nearest dollar. 
              </p>
            </div>
            <div className="bg-[#FFFBEB] border-4 border-[#333333] p-6 shadow-[6px_6px_0_0_#333333]">
              <h3 className="text-2xl font-semibold mb-4">2. Automatic Rounding</h3>
              Each transaction rounds to the nearest
            dollar, and the difference goes towards your debt. 
            Accumulated sums are withdrawn every 2 weeks.
            </div>
            <div className="bg-[#FFFBEB] border-4 border-[#333333] p-6 shadow-[6px_6px_0_0_#333333]">
              <h3 className="text-2xl font-semibold mb-4">3. Track Progress</h3>
              Use Redeem's dashboard to monitor repayments and celebrate milestones.
            </div>
          </div>
        </section>


      <h3 className="text-xl font-semibold text-primary mb-4">Debt Details</h3>
      <div className="bg-white p-6 border border-primary shadow rounded-lg">
        <p><strong>Creditor:</strong> {debtData.debtOrigin}</p>
        <p><strong>Amount:</strong> ${debtData.debtAmount.toFixed(2)}</p>
        <p><strong>Repayment Deadline:</strong> {new Date(debtData.paymentDeadline).toLocaleDateString()}</p>
        <p><strong>Statement:</strong> {debtData.debtStatement ? <a href={debtData.debtStatement} target="_blank" className="text-accent underline">View Statement</a> : 'Not provided'}</p>
        <br></br>     
        {debtData.reportedToCredit ? (
          <>
            <div className='text-red-accent'>
                <p><b>Your credit score is on the line! Your debt was reported as "{debtData.reportedStatus}" to Credit Bureaus.</b></p>
            </div>
            <br></br>
            <div className='bg-green-accent'>    
                <p> If you repay your debt by the deadline, your creditor has agreed to update the debt status to "{debtData.updatedStatus}"! Note: Our Terms and Conditions ensure this reporting is done if you meet the repayment conditions.</p>
            </div>
          </>
          
        ) : (
            <>
                <p>Your credit score is on the line! Your debt has not been reported to the credit bureaus yet! Protect your credit score by meeting the repayment conditions.</p>
            </>
        )}
      </div>
    
      {/* <button
        onClick={handleAccept}
        className="mt-6 w-full bg-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
      >
        Accept Debt Contract
      </button> */}

    {acceptContract ? (
              <button
              onClick={() => router.push('/debtor/auth/signup')}
              className="mt-6 w-full bg-blue-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
            >
              SignUp
            </button>
    )
    
    :(
        <button
            onClick={handleAccept}
            className="mt-6 w-full bg-green-accent text-accent py-3 font-bold shadow-accent hover:shadow-hover"
        >
            Accept Debt Contract
        </button>
    )}

    </section>
  );
}


