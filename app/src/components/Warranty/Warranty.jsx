import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";

const Warranty = () => {
  return (
    <SectionContainer className="bg-white">
      
      <div className="items-center py-8 grid md:grid-cols-2 sm:py-16 grid-flow-dense">
        <img className="w-full" src="/images/warranty2.png" alt="dashboard image order-last md:order-first" />
        
        <div className="mt-4 md:mt-0 md:w-[65%] md:mx-auto md:text-left text-center order-first md:order-last">
          <h2 className="mb-4 text-3xl sm:text-[40px] tracking-tight font-normal text-gray-900">
            Warranty Claims
          </h2>
          <p className="mb-6 font-normal text-gray-500 sm:text-lg">
            Create your account and get started on our platform to relieve your
            stress
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Warranty;
