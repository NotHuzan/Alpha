import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

const FreeTrial = () => {
  const navigate = useNavigate();

  return (
    // <div className="flex items-center justify-center min-h-screen bg-white px-4">
    <SectionContainer>
      <div className="flex items-center justify-center my-10 bg-white">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-semibold">Get your Pro trial started</h1>
          <p className="text-gray-600 my-2 font-medium">
            Enter your work email below:
          </p>

          <form>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full sm:w-4/5 font-medium mt-4 px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full sm:w-4/5 font-medium mt-4 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
              onClick={() => navigate("/companyname")}
            >
              Continue
            </button>
          </form>

          <div className="flex items-center my-6 w-full sm:w-4/5 mx-auto">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full sm:w-4/5 mx-auto font-medium flex items-center justify-center border border-gray-500 py-2 rounded-lg hover:bg-gray-100 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue With Google
          </button>

          <button className="w-full sm:w-4/5 mx-auto font-medium flex items-center justify-center border border-gray-500 py-2 rounded-lg mt-4 hover:bg-gray-100 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5 mr-2"
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
