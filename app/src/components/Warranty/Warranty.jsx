import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";

const Warranty = () => {
  return (
    <SectionContainer class="bg-white">
      {/* <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"> */}
      <div class="items-center py-8 grid md:grid-cols-2 sm:py-16 grid-flow-dense">
        <img class="w-full" src="/images/warranty2.png" alt="dashboard image order-last md:order-first" />
        {/* <img
          class="w-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        /> */}
        <div class="mt-4 md:mt-0 md:w-[65%] md:mx-auto md:text-left text-center order-first md:order-last">
          <h2 class="mb-4 text-3xl sm:text-[40px] tracking-tight font-normal text-gray-900">
            Warranty Claims
          </h2>
          <p class="mb-6 font-normal text-gray-500 sm:text-lg">
            Create your account and get started on our platform to relieve your
            stress
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Warranty;
