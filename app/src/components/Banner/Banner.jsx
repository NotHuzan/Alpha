import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <div className="bg-[#26875C] text-white p-6 my-8 sm:my-16 rounded-2xl relative overflow-hidden h-64 md:h-64 flex items-center">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-20"></div> */}

        {/* Text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-4/5 mx-auto">
          <h2 className="mb-6 md:mb-0 text-3xl sm:text-[40px] font-medium z-10 lg:max-w-md md:max-w-sm">
            Don’t just work harder — work smarter
          </h2>

          {/* Button */}
          <button
            onClick={() => navigate("/freetrial")}
            className="bg-white text-black font-medium py-4 px-8 shadow-md z-10 cursor-pointer"
          >
            Start Free
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Banner;
