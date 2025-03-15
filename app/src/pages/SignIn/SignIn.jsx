import React from "react";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    // <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 lg:px-24">
    <SectionContainer>
      <div className="flex flex-col md:flex-row items-center justify-center my-10">
        {/* Left Side - Sign In Form */}
        {/* <div className="w-full md:w-1/2 max-w-md"> */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Sign in to Alpha</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-900 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="correct horse battery staple"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="bg-[#26875C] text-white py-3 px-6 hover:bg-green-700 transition"
            >
              Sign in
            </button>
          </form>
          <p className="text-gray-900 mt-4 text-sm">
            Need an account?{" "}
            <Link to="/freetrial" className="text-green-600 font-semibold">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Side - Image & UI Components */}
        {/* <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 lg:translate-x-10">
          <img
            src="/images/hero.png"
            alt="UI Mockup"
            className="max-w-full h-auto scale-110"
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

export default SignIn;
