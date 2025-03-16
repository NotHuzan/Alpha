import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import SectionContainer from "../SectionContainer/SectionContainer";

const Footer = () => {
  return (
    <SectionContainer>
      <footer className="rounded-none bg-white">
        {/* <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10"> */}
        <div className="">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            <div className="col-span-2">
              <a
                href="#"
                className="mb-2 flex items-center text-[#26875C] text-3xl font-semibold sm:mb-0"
              >
                LOGO
              </a>
              <ul className="mt-5 flex space-x-6">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <Twitter className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <Instagram className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Company
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About us
                  </a>
                </li>
                <li className="mb-4">
                  <Link to="/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Legal
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Product
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Appointments
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Warranty Claims
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Inventory Management
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Invoicing & Payment
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Help
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <Link to="/faqs" className="hover:underline">
                    Support
                  </Link>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Instructions
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    How it works
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
};

export default Footer;
