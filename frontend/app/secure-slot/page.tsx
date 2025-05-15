"use client";
import Link from "next/link";
import { useState } from "react";
// import { Copy, CheckCircle } from 'lucide-react';

export default function PaymentCheckout() {
  const [copied, setCopied] = useState(false);
  const [paid, setPaid] = useState(false);

  // Bank details
  const bankDetails = {
    bankName: "MONIEPOINT",
    accountNumber: "6458597340",
    accountName: "GL CORP",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);

    // Reset copy status after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {paid ? (
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800">
            Payment Successful!
          </h1>
          <p className="mt-2 text-gray-600">
            Thank you for your payment. Please send the payment receipt to us
            and attach the email and number you used during the application to
            it to secure your slot.
          </p>
          <button className="px-3 py-2 mt-3 bg-blue-700 rounded text-white cursor-pointer">
            <Link href="wa.link/va56ad">Contact Us</Link>
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Payment Checkout For Frontend Scholarship Bootcamp
            </h1>
            <p className="mt-2 text-gray-600">
              Please make your payment to the account below to secure your slot.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-lg font-medium text-gray-800">
                  {bankDetails.bankName}
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Account Number
              </label>
              <div className="flex items-center justify-between px-2 bg-gray-50 rounded-md">
                <p className="text-lg font-medium text-gray-800">
                  {bankDetails.accountNumber}
                </p>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center justify-center p-2 text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="Copy account number"
                >
                  {copied ? (
                    <button className="px-2 py-1 bg-green-600 text-white rounded-md">
                      Copied!
                    </button>
                  ) : (
                    <button className="px-2 py-1 bg-blue-600 text-white rounded-md">
                      Copy
                    </button>
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-green-600">Copied to clipboard!</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Account Name
              </label>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-lg font-medium text-gray-800">
                  {bankDetails.accountName}
                </p>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Amount
              </label>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-lg font-medium text-gray-800">₦5100</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => setPaid(true)}
              className="w-full px-4 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              I&apos;ve Made My Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
