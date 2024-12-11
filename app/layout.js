import "./globals.css";

export const metadata = {
  title: 'Redeem credit | Debt Recovery Simplified',
  description: 'Effortlessly recover debts with Redeem credit, enabling micro-payment solutions for your consumers.',
};

export default function RootLayout({ children }) {
  return (
        // <html lang="en">
        //       <body className="min-h-screen bg-gray-50">
        //         <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 px-8">
        //           <div className="container mx-auto flex justify-between items-center">
        //             <h1 className="text-2xl font-bold">Redeem.credit</h1>
        //             <nav>
        //               <a href="#features" className="text-white px-4 hover:underline">
        //                 Features
        //               </a>
        //               <a href="#about" className="text-white px-4 hover:underline">
        //                 About Us
        //               </a>
        //               <a href="#contact" className="text-white px-4 hover:underline">
        //                 Contact
        //               </a>
        //             </nav>
        //           </div>
        //         </header>
        //         <main>{children}</main>
        //         <footer className="bg-gray-800 text-white py-8">
        //           <div className="container mx-auto px-6 text-center">
        //             <p className="mb-4">
        //               Contact Us at <a href="mailto:support@micropay.com" className="underline">support@micropay.com</a>
        //             </p>
        //             <p>&copy; 2024 MicroPay. All Rights Reserved.</p>
        //           </div>
        //         </footer>
        //       </body>
        //     </html>
        <html lang="en">
        <body className="min-h-screen bg-[#FFFBEB] font-sans text-[#333333]">
          <header className="bg-[#FF6F61] text-[#FFFBEB] p-6 shadow-[4px_4px_0_0_#333333]">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-3xl font-bold uppercase tracking-wide">
              <a href="/" className="hover:underline">
                REDEEM
              </a>
                </h1>
              <nav className="flex space-x-6">
                <a href="/features" className="hover:underline">
                  How it works
                </a>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </nav>
            </div>
          </header>
          <main className="p-8">{children}</main>
          <footer className="bg-[#333333] text-[#FFFBEB] p-6 mt-12 shadow-[4px_4px_0_0_#FF6F61]">
            <div className="container mx-auto text-center">
              <p className="mb-4">
                Contact Us at{' '}
                <a href="mailto:support@redeemcredit.com" className="underline">
                  support@redeemcredit.com
                </a>
              </p>
              <p>&copy; 2024 Redeem. All Rights Reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    
  );
}
