import React, { useState } from "react";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return; // Prevent submission if fields are empty
    navigate("/"); // Replace with actual sign-in logic
  };
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row items-center justify-center my-10 md:mt-0">
        {/* Left Side - Sign In Form */}
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-medium lg:text-[40px] mb-6">Sign in to Alpha</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-900 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="correct horse battery staple"
                required
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
