import React from "react";
import FAQSection from "../../components/FAQSection/FAQSection";

const FAQs = () => {
  return (
    <>
      <div className="flex justify-center items-center py-8 bg-[#F8F8F8] w-full h-96 relative">
        <h2 className="text-4xl md:text-6xl max-w-2xl mx-auto font-normal text-center text-black w-[65%]">
          FAQ: Advice and answers <br className="md:hidden" /> from our team
        </h2>
        <div className="absolute top-10 left-0 sm:w-auto sm:h-auto w-20 h-40">
            <img src="/images/line1.png" alt="" />
        </div>
        <div className="absolute bottom-0 right-0 sm:w-auto sm:h-auto w-20 h-40">
            <img src="/images/line2.png" alt="" />
        </div>
      </div>
      <FAQSection/>
    </>
  );
};

export default FAQs;
