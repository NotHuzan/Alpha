import { useState } from "react";
import { FaPlayCircle, FaStar, FaMoneyBill, FaUsers } from "react-icons/fa";
import SectionContainer from "../SectionContainer/SectionContainer";

const faqs = {
  "Getting Started": [
    {
      question: "How do I sign up?",
      answer: "You can sign up by clicking the Sign Up button on the homepage.",
    },
    {
      question: "How to get started?",
      answer:
        "Follow our guide to set up your account and start using our service.",
    },
  ],
  "Using Alpha": [
    {
      question: "What is Alpha?",
      answer:
        "Alpha is our latest feature for enhanced navigation and usability.",
    },
    {
      question: "How do I enable Alpha?",
      answer: "Go to settings and toggle the Alpha feature.",
    },
  ],
  "Subscription & Billing": [
    {
      question: "How much does it cost?",
      answer: "Our plans start at $9.99 per month.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription anytime from the billing section.",
    },
  ],
  Administration: [
    {
      question: "How do I manage users?",
      answer: "Admins can add or remove users in the admin panel.",
    },
    {
      question: "Can I change permissions?",
      answer: "Yes, roles and permissions can be modified under settings.",
    },
  ],
};

const icons = {
  "Getting Started": {
    icon: <FaPlayCircle className="text-[#26875C] text-xl" />,
    description: "Welcome to Oval! Get started faster by learning some basics.",
  },
  "Using Alpha": {
    description: "Learn how Alpha works, from navigation to everything.",
    icon: <FaStar className="text-[#26875C] text-xl" />,
  },
  "Subscription & Billing": {
    description:
      "Have questions about our plans or billing? Find answers here.",
    icon: <FaMoneyBill className="text-[#26875C] text-xl" />,
  },
  Administration: {
    description:
      "Master the ins-and-outs of team and user management within Oval.",
    icon: <FaUsers className="text-[#26875C] text-xl" />,
  },
};


const FAQSection = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <SectionContainer>
    <div className="max-w-2xl mx-auto space-y-5 my-10">
      {Object.keys(faqs).map((category) => (
        <div key={category}>
          <button
            className={`flex items-center w-full p-6 bg-white rounded-lg border border-gray-300 shadow-sm transition-all 
              ${activeTab === category ? "border-green-500 shadow-md" : ""}`}
            onClick={() =>
              setActiveTab(activeTab === category ? null : category)
            }
          >
            <span className="mr-5">{icons[category].icon}</span>
            <div>
              <h3 className="font-semibold text-left text-lg">{category}</h3>
              <p className="text-gray-500 text-left">{icons[category].description}</p>
            </div>
          </button>

          {activeTab === category && (
            <div className="mt-2 p-4 bg-gray-100 rounded-lg">
              {faqs[category].map((faq, index) => (
                <div key={index} className="mb-2">
                  <h4 className="font-medium text-lg">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </SectionContainer>
  );
};
export default FAQSection;
