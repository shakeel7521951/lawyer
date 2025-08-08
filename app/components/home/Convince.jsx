import React from "react";
import { FaBalanceScale, FaHandshake, FaUserShield, FaClock } from "react-icons/fa";

const Convince = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-blue-600">Al Khaldi Law Firm</span>?
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Selecting the right legal partner is a decision that can greatly influence the outcome of your case. 
          At <strong>Al Khaldi Law Firm</strong>, we combine legal expertise, a client-first approach, 
          and a strong reputation to deliver results that matter. Here’s why we are your best choice.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
          alt="Law Consultation"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment to You</h2>
          <p className="text-gray-600 mb-4">
            We understand that legal issues can be stressful and complex. That’s why our team works tirelessly 
            to ensure your rights are protected, your voice is heard, and your case is handled with utmost professionalism.
          </p>
          <p className="text-gray-600">
            Our dedication goes beyond legal representation — we aim to be a trusted advisor, a strong advocate, 
            and a reliable partner in every step of your legal journey.
          </p>
        </div>
      </div>

      {/* Points Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaBalanceScale className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Legal Advice</h3>
          <p className="text-gray-600">
            Decades of combined legal experience in Qatar’s judicial system.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaHandshake className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Client-Centered Approach</h3>
          <p className="text-gray-600">
            We listen, understand, and work closely with you to achieve the best results.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaUserShield className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Strong Representation</h3>
          <p className="text-gray-600">
            Aggressive advocacy to protect your rights and interests.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaClock className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Efficient & Timely</h3>
          <p className="text-gray-600">
            Fast response and resolution without compromising on quality.
          </p>
        </div>
      </div>

      {/* Closing Paragraph */}
      <div className="mt-12 text-center max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          Choosing <strong>Al Khaldi Law Firm</strong> means choosing trust, transparency, and results. 
          Whether you are an individual, a corporate client, or a government entity, our mission is to deliver 
          unmatched legal solutions tailored to your needs. Let us be the partner you can rely on for every legal challenge you face.
        </p>
      </div>
    </div>
  );
};

export default Convince;
