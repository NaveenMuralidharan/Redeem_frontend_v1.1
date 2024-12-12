'use client';

import React, { useState, useEffect } from 'react';

export default function CreditorTransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Mock transaction data
    const mockTransactions = Array.from({ length: 20 }, (_, index) => {
      const purchaseAmount = (Math.random() * 50 + 5).toFixed(2); // Random purchase amount between $5 and $55
      const roundedAmount = Math.ceil(purchaseAmount) - purchaseAmount; // Calculate the rounded-off difference
      return {
        date: new Date(Date.now() - index * 86400000).toLocaleDateString(), // Random dates in the past 20 days
        accountName: `Account ${index + 1}`,
        institutionName: `Institution ${index % 5 + 1}`,
        purchaseName: `Purchase Item ${index + 1}`,
        purchaseAmount: parseFloat(purchaseAmount),
        roundedDifference: parseFloat(roundedAmount.toFixed(2)),
      };
    });
    setTransactions(mockTransactions);
  }, []);

  const totalPurchaseSum = transactions.reduce((sum, t) => sum + t.purchaseAmount, 0).toFixed(2);
  const totalRoundedSum = transactions.reduce((sum, t) => sum + t.roundedDifference, 0).toFixed(2);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Transaction Data</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Account Name</th>
            <th className="border border-gray-300 p-2">Institution Name</th>
            <th className="border border-gray-300 p-2">Purchase Name</th>
            <th className="border border-gray-300 p-2">Purchase Amount ($)</th>
            <th className="border border-gray-300 p-2">Rounded Difference ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{transaction.date}</td>
              <td className="border border-gray-300 p-2">{transaction.accountName}</td>
              <td className="border border-gray-300 p-2">{transaction.institutionName}</td>
              <td className="border border-gray-300 p-2">{transaction.purchaseName}</td>
              <td className="border border-gray-300 p-2">{transaction.purchaseAmount.toFixed(2)}</td>
              <td className="border border-gray-300 p-2">{transaction.roundedDifference.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">Total Purchase Sum: ${totalPurchaseSum}</p>
        <p className="text-lg font-semibold">Total Rounded Sum: ${totalRoundedSum}</p>
      </div>
    </div>
  );
}
