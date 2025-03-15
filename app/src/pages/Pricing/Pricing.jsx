import React from "react";
import PricingPlan from "../../components/PricingPlan/PricingPlan";
const Pricing = () => {
  return (
    <div className="mb-6 bg-[#F8F8F8] relative">
      <div className="hidden sm:block absolute top-[20%] left-0 z-[0] sm:w-auto sm:h-auto w-16 h-32">
        <img src="/images/pricingLine.png" alt="" className="w-full h-full" />
      </div>
      <div className="hidden sm:block absolute top-[7%] right-[-0.3%] sm:w-auto sm:h-auto w-16 h-32">
        <img src="/images/pricingLine.png" alt="" className="w-full h-full" />
      </div>
      <PricingPlan />
    </div>
  );
};

export default Pricing;
