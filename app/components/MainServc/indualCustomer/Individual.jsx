import React from "react";
import { FaUserShield, FaMoneyCheckAlt, FaRegHandshake } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const individualServices = [
  {
    icon: <FaUserShield className="text-4xl" />,
    title: "Secure Banking",
    desc: "Experience peace of mind with our highly secure digital and in-person banking services tailored for individuals.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-4xl" />,
    title: "Personal Loans",
    desc: "We offer fast, reliable, and easy-to-apply personal loans to meet your short or long-term needs.",
  },
  {
    icon: <FaRegHandshake className="text-4xl" />,
    title: "Investment Plans",
    desc: "Grow your savings with our diverse investment options curated especially for individual clients.",
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: "24/7 Customer Support",
    desc: "Get professional support anytime. Our support agents are here to assist you with banking queries.",
  },
];

const Individual = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-blue-950 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Services for Individual Customers</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Whether you’re saving for your future, buying your first car, or looking for expert advice, our services are designed to meet your personal financial goals.
        </p>
      </div>

      {/* Image and Info */}
      <div className="flex flex-col md:flex-row items-center gap-10 p-6 md:p-12">
        <img
          src="https://media.istockphoto.com/id/2167817669/photo/young-banker-giving-female-client-financial-advice.webp?a=1&b=1&s=612x612&w=0&k=20&c=rQ5WhTxbsG64ER74CIMJF3C5pvbAEQGp4SegUamyjS8="
          alt="Individual Banking"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">Tailored Banking Solutions</h2>
          <p>
            We value each individual’s unique journey. Our personalized approach ensures you have access to modern banking tools, secure transactions, and financial literacy resources.
          </p>
          <p>
            With user-friendly mobile apps, responsive customer service, and a variety of products, you can bank the way that suits you best — whether online or in-branch.
          </p>
        </div>
      </div>

      {/* Services Cards */}
      <div className="bg-gray-100 py-10 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Key Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {individualServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 text-center">
              <div className="mb-4 text-blue-600">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-950 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to start your journey with us?</h2>
        <p className="mb-6 max-w-xl mx-auto">Open your account today or talk to our advisors to find the best financial solutions made just for you.</p>
        <button className="bg-white cursor-pointer text-indigo-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Individual;
