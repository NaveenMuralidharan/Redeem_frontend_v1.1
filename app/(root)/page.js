import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto">
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-[#FF6F61] inline-block shadow-[4px_4px_0_0_#333333]">
        Recover Debts with Ease and Build Consumer Goodwill
      </h2>
      <p className="text-xl mb-8">
        Redeem helps you reclaim outstanding debts by enabling consumers to round up their daily transactions and repay you monthly with the collected sums. 
        Say goodbye to costly collection processes and hello to improved repayment rates.
           </p>
      <a
        href="#contact"
        className="bg-[#FF6F61] text-[#FFFBEB] py-3 px-6 text-xl font-semibold shadow-[4px_4px_0_0_#333333] hover:shadow-[6px_6px_0_0_#333333] transition-all duration-150"
      >
        Get Started
      </a>
      <section id="features" className="mt-16">
        <h3 className="text-4xl font-bold mb-8">Why Choose Redeem?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#FFFBEB] border-4 border-[#333333] p-6 shadow-[6px_6px_0_0_#333333]">
            <h4 className="text-2xl font-semibold mb-4">Automated Recovery</h4>
            <p>
              Leverage automated micro-payments for seamless debt recovery, saving time and effort.
            </p>
          </div>
          <div className="bg-[#FFFBEB] border-4 border-[#333333] p-6 shadow-[6px_6px_0_0_#333333]">
            <h4 className="text-2xl font-semibold mb-4">Consumer Friendly</h4>
            <p>
              Enable consumers to pay without added pressure, maintaining a positive relationship.
            </p>
          </div>
          <div className="bg-[#FFFBEB] border-4 border-[#333333] p-6 shadow-[6px_6px_0_0_#333333]">
            <h4 className="text-2xl font-semibold mb-4">Cost-Effective</h4>
            <p>
              Reduce the costs of traditional debt collection processes with innovative solutions.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
