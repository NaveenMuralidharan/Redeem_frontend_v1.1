'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';


export default function DebtorDebtsDashboard() {
    const router = useRouter();
    const params = useParams(); // Correctly get params from Next.js
    const debtId = params?.id; // Extract debt ID from URL
    const [debtData, setDebtData] = useState(null); // State to store debt details
    const [loading, setLoading] = useState(true);  
  // Mocked API fetch to simulate getting debt details
  useEffect(() => {
    async function fetchDebtDetails() {
      try {
        // Simulate an API call to fetch debt details by ID
        // const response = await fetch(`/api/debts/${debtId}`); // Replace with actual API route
        // const data = await response.json();
        // Mocked Debt Object for Simulation (Used in Development Phase):

        const mockDebtData = [{
            id: '1234',
            customerID: 'CUST001',
            customerFirstName: 'John',
            customerLastName: 'Doe',
            customerEmail: 'johndoe@example.com',
            debtAmount: 500,
            paidAmount: 0,
            status: 'Not settled',
            debtOrigin: 'First Credit Bank',
            debtStatement: null, // URL to statement if provided
            paymentDeadline: '2025-01-01',
            reportedToCredit: true,
            reportedStatus: 'Delinquent',
            updatedStatus: 'Paid',
            estimatedMonthly: 35,
            linkedAccount: 'Bank of USA - Checking'
        },
        {
            id: '5678',
            customerID: 'CUST002',
            customerFirstName: 'Jane',
            customerLastName: 'Smith',
            customerEmail: 'janesmith@example.com',
            debtAmount: 300,
            paidAmount: 100,
            status: 'Partially settled',
            debtOrigin: 'Second Credit Bank',
            debtStatement: null,
            paymentDeadline: '2024-12-31',
            reportedToCredit: false,
            reportedStatus: null,
            updatedStatus: 'Settled',
            estimatedMonthly: 20,
            linkedAccount: 'Bank of USA - Savings',
          },];

        const debtData = mockDebtData.find((debt) => debt.id == debtId);

        setDebtData(debtData);

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

  const handleViewTransactions = () => {
    router.push(`/debtor/transactions/${debtId}`);
  };


    return (
        <>
        <section>
        <h2 className="text-2xl font-bold text-primary mb-6">
            Debts Dashboard
          </h2>
          <p>View repayment status of your current debts</p>
 
            </section>
            <br></br>
            <hr></hr>
            <br></br>

        {/* debt cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}

        <section className="container mx-auto  flex justify-center items-center">
        <div className="bg-main border-primary shadow-accent p-4">

          <h4 className="text-2xl font-bold text-primary mb-6">
            {debtData.debtOrigin}
          </h4>
            <div className="mb-4">
                <ul>
                    <li>
                        <b>Debt Amount:</b> ${debtData.debtAmount}
                    </li>
                    <li>
                        <b>Paid Amount:</b> ${debtData.paidAmount}
                    </li>
                    <p className='text-red-accent'><strong>Repayment Deadline:</strong> {new Date(debtData.paymentDeadline).toLocaleDateString()}</p>

                    <li>
                        <b>Status:</b> {debtData.status}
                    </li>
                    <li>
                    <b>Progress:</b> {((debtData.paidAmount / debtData.debtAmount)*100).toFixed(1)}% Paid

                    {(debtData.paidAmount / debtData.debtAmount)*100 < 1 ? (<></>): (<>
                        
                        <div className="progress-bar w-full bg-gray-300 h-5 rounded relative border border-gray-400">
                            <div style={{ width: `${((debtData.paidAmount / debtData.debtAmount)).toFixed(1)*100}%` }}
                            className="bg-red-500 h-5 rounded-l" >
                            </div>
                        </div>
                    
                    </>)}

                    </li>

                    <li>
                        <b>Linked Account:</b> {debtData.linkedAccount}
                    </li>
                    <br></br>
                    <li>
                        <b>Repayment Capacity: </b>From your {debtData.linkedAccount} transactions, you’re estimated to pay $35/month through round-ups. If the full Debt Amount isn’t covered by the deadline, you’ll need to pay the difference or re-negotiate with {debtData.debtOrigin}.
                    </li>

                </ul>
                <br></br>
                <div>
                <h3 className='text-3xl'>Remember: </h3>    
                {debtData.reportedToCredit ? (
          <>
          <br></br>
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

            </div>

            <button onClick={handleViewTransactions} className="px-4 py-2 bg-green-accent text-white rounded-lg shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 transition duration-200">
            View Transactions
        </button>

        </div>

        
        </section>
                
        {/* </div> */}


      </>
      );
}