'use client'
import React, { useState } from "react";
import { FaUserShield, FaMoneyCheckAlt, FaRegHandshake } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import Link from "next/link";

const individualServices = [
  {
    icon: <FaUserShield className="text-4xl" />,
    title: "Secure Banking",
    desc: "Experience peace of mind with our highly secure digital and in-person banking services tailored for individuals.",
    detail:
      "Secure Banking is all about protecting your money, your data, and your peace of mind. Through advanced measures like multi-factor authentication, end-to-end encryption, and real-time fraud detection, every transaction you make is safeguarded. ",
  },
  {
    icon: <FaMoneyCheckAlt className="text-4xl" />,
    title: "Personal Loans",
    desc: "We offer fast, reliable, and easy-to-apply personal loans to meet your short or long-term needs.",
    detail:
      "Personal Loans are a flexible and convenient way to get the funds you need for life’s important moments. Whether it’s for home improvements, medical expenses, education, debt consolidation, or a dream vacation, our loans are designed to fit your unique needs.",
  },
  {
    icon: <FaRegHandshake className="text-4xl" />,
    title: "Investment Plans",
    desc: "Grow your savings with our diverse investment options curated especially for individual clients.",
    detail:
      "Investment Plans are designed to help you grow and protect your wealth over time, no matter your financial goals. Whether you’re planning for retirement, saving for your children’s education, or building long-term assets, our tailored investment options give you the flexibility and security you need. ",
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: "24/7 Customer Support",
    desc: "Get professional support anytime. Our support agents are here to assist you with banking queries.",
    detail:
      "24/7 Customer Support ensures that you always have a helping hand whenever you need it, no matter the time or day. Our dedicated support team is available round the clock to assist you with account inquiries, transaction issues, product information, and technical guidance. ",
  },
];

const Individual = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const showDetails = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-[#0D1B2A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Services for{" "}
          <span className="text-yellow-500">Individual Customers</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Whether you’re saving for your future, buying your first car, or
          looking for expert advice, our services are designed to meet your
          personal financial goals.
        </p>
      </div>

      {/* Image and Info */}
      <div className="flex flex-col md:flex-row items-center gap-10 p-6 md:p-12">
        <img
          src="/about/mt.avif"
          alt="Individual Banking"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-700">
            Tailored Banking Solutions
          </h2>
          <p>
            We value each individual’s unique journey. Our personalized
            approach ensures you have access to modern banking tools, secure
            transactions, and financial literacy resources.
          </p>
          <p>
            With user-friendly mobile apps, responsive customer service, and a
            variety of products, you can bank the way that suits you best —
            whether online or in-branch.
          </p>
        </div>
      </div>

      {/* Services Cards */}
      <div className="bg-gray-100 py-10 px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-8">
          Our Key Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {individualServices.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:scale-105 cursor-pointer p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 text-center"
              onClick={() => showDetails(service)}
            >
              <div className="mb-4 text-yellow-600">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
           
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>
           
            <h2 className="text-2xl font-bold mb-2">
              {selectedService.title}
            </h2>
            <p className="text-gray-700 mb-3">{selectedService.desc}</p>
            <p className="text-gray-600">{selectedService.detail}</p>
               <div>
                <p className="text-sm mt-10 mb-5">To Know About Us More, Click Below:</p>
                <Link href="/about"><button className="px-4 py-2 bg-yellow-500 font-semibold rounded-sm hover:bg-yellow-400 cursor-pointer">About US</button></Link>
              </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-[#0D1B2A] text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Ready to start your journey with us?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Open your account today or talk to our advisors to find the best
          financial solutions made just for you.
        </p>
        <Link href="/contact">
          <button className="bg-white cursor-pointer text-yellow-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Individual;
