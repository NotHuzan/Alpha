import React from "react";
import { useNavigate } from "react-router-dom";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

const CompanyTeamName = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      {/* // <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 bg-white"> */}
      <div className="flex flex-col md:flex-row items-center justify-center my-10">
        {/* Left Section */}
        <div className="md:w-1/2 w-full text-left">
          <h1 className="text-3xl font-medium lg:text-[40px]">
            What’s the name of your company or team?
          </h1>
          <p className="text-gray-600 mt-6 text-lg">
            This will be the name of your working space—choose something that
            your crew will recognize
          </p>
          <form>
            <input
              type="text"
              placeholder="Ex: Friends Plumbing or Gardeners Pro"
              required
              className="w-full mt-6 px-4 py-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              onClick={() => navigate("/teaminvite")}
              className="mt-10 bg-[#26875C] text-white py-3 px-9 rounded-sm hover:bg-green-800 transition"
            >
              Next
            </button>
          </form>
        </div>

        {/* Right Section (Image) */}
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

export default CompanyTeamName;
