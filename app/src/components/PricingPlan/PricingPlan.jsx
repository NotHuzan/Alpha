
import React, { useState } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import { useNavigate } from "react-router-dom";

const PricingPlan = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(true);

  const togglePlan = () => {
    setIsAnnual(!isAnnual);
  };

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      annualPrice: 290,
      description: "Best option for personal use & for your next project.",
      features: [
        "Email Notifications",
        "Team, plus...",
        "Contextual Work",
        "optimization",
        "99% Uptime",
      ],
    },
    {
      name: "Company",
      monthlyPrice: 99,
      annualPrice: 990,
      description: "Relevant for multiple users, extended & premium support.",
      features: ["Email Notifications", "Team, plus...", "Contextual Work"],
    },
    {
      name: "Enterprise",
      monthlyPrice: 499,
      annualPrice: 4990,
      description:
        "Best for large scale uses and extended redistribution rights.",
      features: [
        "Email Notifications",
        "Team, plus...",
        "Contextual Work",
        "optimization",
      ],
    },
  ];

  return (
    <SectionContainer>
      <div className="text-center relative py-12">
        <h2 className="text-4xl md:text-6xl font-normal text-gray-900">
          One tool for your <br /> whole team needs
        </h2>
        <p className="text-gray-500 mt-4 sm:text-lg">
          Try free for 30 days to start connected with your team <br /> Cancel
          anytime. No credit card required
        </p>
        <div className="sm:hidden absolute top-[100%] left-[-8%] z-[0] sm:w-auto sm:h-auto w-16 h-32">
          <img src="/images/pricingLine.png" alt="" className="w-full h-full" />
        </div>
        <div className="sm:hidden absolute top-7 right-[-8%] sm:w-auto sm:h-auto w-16 h-32">
          <img src="/images/pricingLine.png" alt="" className="w-full h-full" />
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center items-center mb-20">
        <span className="text-gray-900 font-semibold mr-2">Annual Plans</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isAnnual}
            onChange={togglePlan}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:-translate-x-[18px] peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:right-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#26875C]"></div>
        </label>
        <span className="text-gray-900 font-semibold ml-2">Monthly Plans</span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 text-center bg-white rounded-lg shadow border border-gray-200 flex flex-col"
          >
            <div className="flex w-full justify-between">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="text-3xl font-semibold mb-0 text-gray-700">
                ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
              </div>
            </div>
            <p className="text-left mb-4 text-gray-500">Upto 20 people</p>
            <hr className="text-gray-300" />
            {/* <p className="text-gray-500 mb-6">{plan.description}</p> */}
            <div className="flex flex-col justify-between h-full">
              <ul className="text-left space-y-3 my-6 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-500">
                    <svg
                      className="w-5 h-5 text-[#26875C] mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div>
                <button
                  className="w-full py-3 text-[#26875C] hover:text-white hover:bg-[#26875C] rounded-sm border-2 border-[#26875C] font-semibold cursor-pointer"
                  onClick={() => navigate("/freetrial")}
                >
                  Start free
                </button>
                <button
                  className="mt-2 w-full py-3 text-gray-500 hover:text-[#26875C] font-semibold cursor-pointer"
                  onClick={() => navigate("/freetrial")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-24 mb-12">
        <h2 className="mb-4 text-3xl font-medium tracking-tight text-gray-900">
          All support plans come with lite versions of chat and guide
        </h2>
        <p className="text-gray-500 sm:text-lg lg:px-48">
          Prices shown are billed anually. For custom pricing contact customer
          support and above subscriptions include Explore lite reporting and
          trials
        </p>
        <a
          href="#"
          className="text-[#26875C] mt-8 inline-block font-normal underline"
        >
          Contact Support
        </a>
      </div>
    </SectionContainer>
  );
};

export default PricingPlan;
