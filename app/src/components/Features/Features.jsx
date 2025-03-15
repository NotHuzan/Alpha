import React, { useState } from "react";
import {
  Home,
  Calendar,
  Package,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import SectionContainer from "../SectionContainer/SectionContainer";

const tabs = [
  {
    id: 1,
    name: "Warranty Claims",
    icon: <Home size={18} />,
    image: "/images/feature.png",
  },
  {
    id: 2,
    name: "Appointments",
    icon: <Calendar size={18} />,
    image: "/images/feature.png",
  },
  {
    id: 3,
    name: "Inventory Management",
    icon: <Package size={18} />,
    image: "/images/feature.png",
  },
  {
    id: 4,
    name: "Invoicing & Payment",
    icon: <CreditCard size={18} />,
    image: "/images/feature.png",
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(2); // Default to "Appointments"

  return (
    <SectionContainer>
      <div className="py-8 sm:py-16">
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-3xl sm:text-[40px] font-normal tracking-tight text-gray-900">
            Powerful features
          </h2>
          <p className="text-gray-500 sm:text-lg">
            Create your account and get started on our <br />
            platform to relieve your stress
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between md:space-x-6 py-12">
          {/* Sidebar Navigation */}
          <div className="grid grid-cols-2 md:flex md:flex-col mb-4 md:mb-0 space-x-4 md:space-x-0 md:space-y-4 w-full md:w-70">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center md:justify-between justify-center w-full md:w-auto px-2 md:px-4 py-4 rounded-lg transition-all duration-200
              ${activeTab === tab.id ? "bg-white shadow-md" : "text-gray-500"}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="hidden md:inline-flex items-center space-x-2">
                  {tab.icon}
                  <span
                    className={
                      activeTab === tab.id ? "font-semibold text-black" : ""
                    }
                  >
                    {tab.name}
                  </span>
                </span>
                <span className="md:hidden text-sm md:text-base">
                  {tab.name}
                </span>
                {activeTab === tab.id && (
                  <ChevronRight
                    size={18}
                    className="text-gray-500 hidden md:inline"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Display Active Tab Image */}
          <div className="h-64 sm:h-auto">
            <img
              src={tabs.find((tab) => tab.id === activeTab)?.image}
              alt="Tab Content"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Features;
