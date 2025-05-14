"use client";
import { useState } from "react";
// import { Copy, CheckCircle } from 'lucide-react';

export default function PaymentCheckout() {
  const [copied, setCopied] = useState(false);

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
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Payment Checkout</h1>
          <p className="mt-2 text-gray-600">
            Please make your payment to the account below
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
                  <p>✅</p>
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
        </div>

        <div className="pt-6">
          <button className="w-full px-4 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
            I&apos;ve Made My Payment
          </button>
        </div>
      </div>
    </div>
  );
}
