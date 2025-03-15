import React from "react";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import { useNavigate } from "react-router-dom";

const TeamInviteForm = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      {/* // <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 bg-white"> */}
      <div className="flex flex-col md:flex-row items-center justify-between my-10">
        {/* Left Side - Form Section */}
        <form className="w-full md:w-1/2">
          <h1 className="text-3xl font-medium lg:text-[40px]">
            Who else is on this team?
          </h1>
          <p className="mt-8 text-[#000000E5] text-sm font-medium">
            Add your crew members by email
          </p>

          <textarea
            // required
            placeholder="alex@gmail.com, john@gmail.com"
            className="w-full mt-2 p-3 border border-[#B4B0B0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-36"
          ></textarea>

          <p className="mt-2 text-[#000000A6] font-medium">
            We will send an invitation to these email addresses and the link
            will expire in 7 days.
          </p>

          <div className="mt-8 flex items-center space-x-4">
            <button
              type="submit"
              onClick={() => navigate("/payment")}
              className="bg-[#26875C] py-3 px-9 text-white rounded-sm hover:bg-green-800 transition cursor-pointer"
            >
              Next
            </button>
            <button
              type="button"
              onClick={() => navigate("/payment")}
              className="text-[#666565E5] hover:underline text-xs font-medium cursor-pointer"
            >
              Skip this step
            </button>
          </div>
        </form>

        {/* Right Side - Image Section */}
        {/* <div className="hidden lg:block w-1/2">
        <img
          src="/images/hero.png" 
          alt="Team Invite Preview"
          className="w-full"
        />
      </div> */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center lg:translate-x-10 z-[-1]">
          <img
            src="/images/hero.png"
            alt="Dashboard Preview"
            className="scale-110 sm:scale-130 lg:scale-120"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default TeamInviteForm;
