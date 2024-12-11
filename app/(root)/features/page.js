export const metadata = {
    title: 'Features | Redeem Debt Recovery',
    description: 'Explore the benefits of Redeem’s debt recovery platform for creditors. Learn how MicroPay works to make debt recovery simple and efficient.',
  };
  
  export default function Features() {
    return (
      <section className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-8 border-b-4 border-[#FF6F61] inline-block shadow-[4px_4px_0_0_#333333]">
          How It Works
        </h1>
  
        <p className="text-xl mb-12">
          Redeem empowers creditors with cutting-edge tools to streamline debt recovery. Leverage micro-payments, automation, and debtor-friendly solutions to achieve higher recovery rates and foster stronger relationships.
        </p>
  
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FFFBEB] border-4 border-[#333333] p-6 shadow-[6px_6px_0_0_#333333]">
              <h3 className="text-2xl font-semibold mb-4">1. Create a Debt Contract</h3>
              <p>
              Creditors can create tailored debt contracts, specifying repayment terms and incentives, such as avoiding credit bureau reporting or marking debts as settled upon completion.
              </p>
            </div>
            <div className="bg-[#FFFBEB] border-4 border-[#333333] p-6 shadow-[6px_6px_0_0_#333333]">
              <h3 className="text-2xl font-semibold mb-4">2. Engage Debtors with Micro-Payments</h3>
              <p>
              Debtors agree to round off their everyday transactions to the nearest dollar. These micro-transactions accumulate seamlessly throughout the month, making repayment easy and stress-free.              </p>
            </div>
            <div className="bg-[#FFFBEB] border-4 border-[#333333] p-6 shadow-[6px_6px_0_0_#333333]">
              <h3 className="text-2xl font-semibold mb-4">3. Automated Deposits</h3>
              <p>
              The collected micro-payments are automatically transferred into the creditor's account at the end of each month, eliminating manual collection efforts.
              </p>
            </div>
            <div className="bg-[#FFFBEB] border-4 border-[#333333] p-6 shadow-[6px_6px_0_0_#333333]">
              <h3 className="text-2xl font-semibold mb-4">4. Track Progress in Real-Time</h3>
              <p>
              Both creditors and debtors can track repayment progress through an intuitive dashboard, ensuring transparency and accountability every step of the way.
              </p>
            </div>
          </div>
        </section>
  
        
      </section>
    );
  }
  