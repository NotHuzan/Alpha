import React, { useState } from "react";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  // Format Card Number (Auto-space after every 4th digit)
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    value = value.slice(0, 16); // Limit to 16 digits
    value = value.replace(/(.{4})/g, "$1 ").trim(); // Add space every 4 digits
    setCardNumber(value);
  };

  // Format Expiration Date (MM/YY)
  const handleExpirationChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    value = value.slice(0, 4); // Limit to 4 digits
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`; // Auto-insert slash after 2 digits
    }
    setExpirationDate(value);
  };

  // Restrict Security Code to 3 digits
  const handleSecurityCodeChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setSecurityCode(value.slice(0, 3)); // Limit to 3 digits
  };

  return (
    <SectionContainer>
      {/* <div className="flex flex-col md:flex-row items-start justify-center min-h-screen"> */}
      <div className="flex flex-col md:flex-row items-start justify-between md:h-[700px]">
        {/* Left Side - Enterprise Plan */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-[45%] border border-gray-300 md:h-full">
          <div className="bg-[#26875C] rounded-lg p-6 flex items-center justify-center h-[162px] relative">
            <img
              src="/images/payment.png"
              alt="Illustration"
              // className="h-28 scale-145 translate-y-3 translate-x-[80%]"
              className="h-28 scale-145 top-10 absolute right-20"
            />
          </div>
          <div className="p-6">
            {/* Plan Title */}
            <h2 className="text-xl font-semibold text-black">
              <span className="font-extrabold">Enterprise</span>
            </h2>
            <p className="text-gray-600 text-sm flex items-center">
              Billed monthly <span className="ml-1">▼</span>
            </p>

            {/* Features List */}
            <div className="mt-4 space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center text-gray-700">
                  <span className="text-green-500 text-lg">✔</span>
                  <span className="ml-2">Email Notifications</span>
                </div>
              ))}
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Free Trial */}
            <div className="flex justify-between text-green-600 font-semibold">
              <span>Free 30 day trial</span>
              <span>$0</span>
            </div>

            {/* Trial Details */}
            <div className="mt-2 space-y-1 text-gray-700 text-sm">
              <div className="flex items-center">
                <span className="text-green-500">✔</span>
                <span className="ml-2">
                  We will remind you 3 days before the trial ends
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500">✔</span>
                <span className="ml-2">Cancel anytime</span>
              </div>
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Estimated Monthly Due */}
            <div className="flex justify-between w-full">
              <div>
                <p className="font-semibold text-gray-900">
                  Estimated monthly due
                </p>
                <p className="text-sm text-gray-500">
                  Starting 04/06/2025 (after trial)
                </p>
              </div>
              <p className="text-xl font-bold mt-1">
                $432 <span className="text-sm">USD</span>
              </p>
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Pricing Breakdown */}
            <div className="text-gray-700 text-sm space-y-1">
              <div className="flex justify-between">
                <span>Plan Discount</span>
                <span className="text-gray-900">$20</span>
              </div>
              <div className="flex justify-between">
                <span>Sales Tax</span>
                <span className="text-green-500">+ $5</span>
              </div>
              <div className="flex justify-between">
                <span>New User</span>
                <span className="text-gray-900">$9</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-lg w-full md:w-[45%] md:ml-6 md:h-full flex flex-col justify-between my-8 md:my-0">
          {/* Organization Info */}
          <div>
            <h2 className="text-xl font-semibold">1. Organization info</h2>
            <p className="text-sm text-gray-600 mb-4 mt-2">
              This info will be included on all billing invoices
            </p>
            <form className="space-y-6">
              {["Organization name", "Country", "Zip", "Postal Code"].map(
                (label) => (
                  <div key={label}>
                    <label className="block text-gray-700 mb-1">{label}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )
              )}
            </form>
          </div>

          <hr className="text-gray-300 my-6 md:my-0" />

          {/* Payment Method */}
          <div>
            <h2 className="text-xl font-semibold">2. Payment method</h2>
            <div className="space-y-4 mt-3">
              {/* Card Number */}
              <div className="relative">
                <label className="block text-gray-700 mb-1">Card number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                />
                {/* Replace with your card logos image */}
                <img
                  src="/images/cards.png"
                  alt="Card Logos"
                  className="absolute right-3 top-10 w-26 h-5"
                />
              </div>

              {/* Expiration Date & Security Code */}
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label className="block text-gray-700 mb-1">
                    Expiration date
                  </label>
                  <input
                    type="text"
                    value={expirationDate}
                    onChange={handleExpirationChange}
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-1/2 relative">
                  <label className="block text-gray-700 mb-1">
                    Security code
                  </label>
                  <input
                    type="text"
                    value={securityCode}
                    onChange={handleSecurityCodeChange}
                    placeholder="CVC"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  />
                  {/* Replace with your security icon image */}
                  <img
                    src="/images/cvc.png"
                    alt="Security Icon"
                    className="absolute right-3 top-10 w-7 h-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PaymentForm;
