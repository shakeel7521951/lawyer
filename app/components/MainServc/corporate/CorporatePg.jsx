"use client";
import React, { useState } from "react";
import { FaBuilding, FaHandshake, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const corporateServices = [
  {
    icon: <FaBuilding size={40} className="text-gold" />,
    title: "Corporate Legal Advisory",
    desc: "Comprehensive legal counsel for mergers, acquisitions, contracts, and regulatory compliance to ensure your business runs smoothly.",
    detail:
      "Corporate Legal Advisory is the backbone of any successful business operation, ensuring every decision is legally sound and strategically advantageous. Our services cover a wide range of corporate needs — from mergers and acquisitions to drafting contracts, handling shareholder agreements, and ensuring compliance with local and international regulations. We focus on minimizing risks, safeguarding your interests, and facilitating smooth operations in every stage of your business journey. By combining in-depth legal expertise with a practical understanding of the corporate environment, we help you navigate complex legal frameworks with confidence.",
  },
  {
    icon: <FaHandshake size={40} className="text-gold" />,
    title: "Contract Management",
    desc: "Drafting, reviewing, and managing commercial contracts to mitigate risks and protect your company’s interests.",
    detail:
      "Contract Management is more than paperwork — it’s about ensuring every agreement your business enters into is fair, compliant, and beneficial. We provide end-to-end support, from drafting customized contracts that align with your operational goals, to reviewing third-party agreements and ensuring all terms are clear, enforceable, and legally sound. Our team keeps a close eye on renewal deadlines, compliance requirements, and potential loopholes that could impact your business. This proactive approach not only safeguards your company’s interests but also builds stronger, more transparent business relationships.",
  },
  {
    icon: <FaChartLine size={40} className="text-gold" />,
    title: "Business Structuring & Compliance",
    desc: "Guidance on corporate structuring, governance frameworks, and staying compliant with Qatar’s legal standards.",
    detail:
      "Business Structuring & Compliance ensures that your company is built on a solid legal foundation and operates within all regulatory boundaries. Whether you’re establishing a new entity, restructuring your corporate framework, or expanding into new markets, we provide tailored strategies to meet both local and international legal requirements. Our compliance services include governance audits, regulatory filings, risk assessments, and training for management teams to maintain best practices. With our guidance, your business can focus on growth while staying fully aligned with all applicable laws and regulations.",
  },
];

const CorporatePg = () => {
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
    <div className="bg-white text-black min-h-screen">
      {/* Hero Sections */}
      <div className="bg-[#0D1B2A] text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gold">Corporate Services</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Al Khaldi Law Firm provides specialized legal solutions for corporate clients, delivering
          strategic advice and operational legal support across all business domains.
        </p>
      </div>

      {/* Image & Intro */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center bg-white py-10 px-6">
        <img
          src="/about/h3.avif"
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
              className="bg-[#0D1B2A] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => showDetails(service)}
            >
              <div className="mb-4 text-yellow-500">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
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

            <h2 className="text-2xl font-bold mb-2">{selectedService.title}</h2>
            <p className="text-gray-700 mb-3">{selectedService.desc}</p>
            <p className="text-gray-600">{selectedService.detail}</p>

            <div>
              <p className="text-sm mt-10 mb-5">To Know About Us More, Click Below:</p>
              <Link href="/about">
                <button className="px-4 py-2 bg-yellow-500 font-semibold rounded-sm hover:bg-yellow-400 cursor-pointer">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-[#0D1B2A] text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Partner With Legal Experts</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Secure your corporate future with Al Khaldi Law Firm. Schedule a consultation today and
          experience legal excellence.
        </p>
        <Link href="/contact">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold cursor-pointer px-6 py-3 rounded-lg transition-colors duration-300">
            Book Consultation
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CorporatePg;
