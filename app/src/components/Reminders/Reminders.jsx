import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";

const Reminders = () => {
  return (
    <SectionContainer class="bg-white">
      {/* <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"> */}
      {/* <div class="items-center py-8 md:grid md:grid-cols-2 sm:py-16">
        <div class="mt-4 md:mt-0 md:w-[65%] md:text-left text-center">
          <h2 class="mb-4 text-3xl sm:text-[40px] tracking-tight font-normal text-gray-900">
            Automate Reminders
          </h2>
          <p class="mb-6 font-normal text-gray-500 sm:text-lg">
            Create your account and get started on our platform to relieve your
            stress
          </p>
        </div>
        <img class="w-full" src="/images/reminder.png" alt="dashboard image" />
      </div> */}
      <div class="flex flex-col items-center justify-between py-8 sm:py-16 md:flex-row">
        <div class="mt-4 md:mt-0 md:w-[35%] text-center md:text-left">
          <h2 class="mb-4 text-3xl sm:text-[40px] tracking-tight font-normal text-gray-900">
            Automate Reminders
          </h2>
          <p class="mb-6 font-normal text-gray-500 sm:text-lg">
            Create your account and get started on our platform to relieve your
            stress
          </p>
        </div>
        <div className="h-auto sm:h-auto w-full md:w-[55%]">
          <img
            class="w-full h-full"
            src="/images/reminder.png"
            alt="dashboard image"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Reminders;
