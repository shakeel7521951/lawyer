"use client";
import React from "react";
import Image from "next/image";
import { FaBuilding, FaHandshake, FaChartLine } from "react-icons/fa";

const corporateServices = [
  {
    icon: <FaBuilding size={40} className="text-gold" />,
    title: "Corporate Legal Advisory",
    description:
      "Comprehensive legal counsel for mergers, acquisitions, contracts, and regulatory compliance to ensure your business runs smoothly.",
  },
  {
    icon: <FaHandshake size={40} className="text-gold" />,
    title: "Contract Management",
    description:
      "Drafting, reviewing, and managing commercial contracts to mitigate risks and protect your company’s interests.",
  },
  {
    icon: <FaChartLine size={40} className="text-gold" />,
    title: "Business Structuring & Compliance",
    description:
      "Guidance on corporate structuring, governance frameworks, and staying compliant with Qatar’s legal standards.",
  },
];

const CorporatePg = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-950 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gold">Corporate Services</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Al Khaldi Law Firm provides specialized legal solutions for corporate clients, delivering
          strategic advice and operational legal support across all business domains.
        </p>
      </div>

      {/* Image & Intro */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center bg-white py-10 px-6">
      <img
            src="https://media.istockphoto.com/id/1471444483/photo/customer-satisfaction-survey-concept-users-rate-service-experiences-on-online-application.webp?a=1&b=1&s=612x612&w=0&k=20&c=vTedWOsRo4-O5hO_ZblfrCYNEHvmdTcU6cPCW8I1u60="
            alt="Trusted by Government"
            className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
          />
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-navy mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700">
            We understand the legal landscape businesses face. Our firm ensures legal clarity in
            every transaction, partnership, and expansion. With tailored solutions and corporate
            diligence, we help you mitigate risk and seize opportunities.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="bg-navy text-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gold mb-10">Our Corporate Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {corporateServices.map((service, index) => (
            <div
              key={index}
              className="bg-blue-950 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-950 text-white  text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Partner With Legal Experts</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Secure your corporate future with Al Khaldi Law Firm. Schedule a consultation today and
          experience legal excellence.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-navy transition-colors duration-300">
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default CorporatePg;
