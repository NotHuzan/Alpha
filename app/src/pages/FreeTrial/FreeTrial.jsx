import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

const FreeTrial = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    if (email.trim()) {
      navigate("/companyname");
    }
  };

  return (
    <SectionContainer>
      <div className="flex items-center justify-center my-10 bg-white md:mt-0">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-medium">Get your Pro trial started</h1>
          <p className="text-gray-600 my-2 font-medium">
            Enter your work email below:
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-4/5 font-medium mt-4 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className={`w-full sm:w-4/5 font-medium mt-4 bg-green-700 text-white py-2 rounded-lg transition ${
                email.trim()
                  ? "hover:bg-green-800 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!email.trim()}
            >
              Continue
            </button>
          </form>

          <div className="flex items-center my-6 w-full sm:w-4/5 mx-auto">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full sm:w-4/5 mx-auto font-medium flex items-center justify-center border border-gray-400 py-2 rounded-lg hover:bg-gray-100 transition">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5 mr-3"
            />
            Continue With Google
          </button>

          <button className="w-full sm:w-4/5 mx-auto font-medium flex items-center justify-center border border-gray-400 py-2 rounded-lg mt-4 hover:bg-gray-100 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5 mr-3"
            />
            Continue With Apple
          </button>

          <p className="mt-6 text-sm text-gray-600 font-medium">
            Already using Alpha?
            <br />{" "}
            <Link to="/signin" className="text-blue-600">
              Sign in to an existing workspace
            </Link>
          </p>

          <div className="mt-12 text-xs text-gray-500">
            <a href="#" className="mr-4">
              Privacy & Terms
            </a>
            <a href="#" className="mr-4">
              Contact Us
            </a>
            {/* <span>⚙ Change region</span> */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FreeTrial;
