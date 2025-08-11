"use client";
import React, { useState } from "react";
import { FaBalanceScale, FaHandshake, FaGavel, FaRegFileAlt } from "react-icons/fa";
import Link from "next/link";

const govtServices = [
  {
    title: "Administrative Law & Public Policy",
    icon: <FaBalanceScale className="text-4xl" />,
    description: "Expert advice on regulatory frameworks and governmental procedures.",
    detail:
      "Our Administrative Law & Public Policy service offers comprehensive guidance on navigating government regulations and public sector procedures. We assist ministries, authorities, and agencies in developing policies that comply with national laws and international best practices. Our team ensures clarity in administrative decision-making processes, reducing legal risks. We provide strategic counsel for drafting, reviewing, and implementing regulations that align with public interests. This includes representation in administrative hearings and dispute resolution forums. Our approach is proactive, helping clients anticipate and address potential challenges before they escalate. We also provide specialized training for officials to improve policy-making efficiency. By leveraging deep sector knowledge, we bridge the gap between legal frameworks and practical governance. Our bilingual team ensures clarity for both Arabic and English-speaking stakeholders. Every step of our process is rooted in transparency, compliance, and accountability. We aim to strengthen institutional capacity while safeguarding public trust.",
  },
  {
    title: "Contract Review & Negotiation",
    icon: <FaRegFileAlt className="text-4xl" />,
    description: "Drafting and legal review of inter-agency and third-party contracts.",
    detail:
      "Our Contract Review & Negotiation service ensures your agreements are clear, enforceable, and legally sound. We examine every clause to identify potential risks and ensure compliance with governing laws. Our team drafts contracts that protect your interests while promoting fair terms for all parties involved. We handle both local and international agreements, bridging cross-border legal requirements. During negotiations, we represent your position with precision, ensuring optimal outcomes. We aim to minimize disputes by resolving potential conflicts in the drafting stage. From service-level agreements to major procurement deals, our expertise covers a wide spectrum of contractual arrangements. We provide structured feedback and suggest improvements that enhance clarity and enforceability. Our lawyers work closely with your internal teams to align contract terms with your operational needs. Every document undergoes thorough legal vetting. Our goal is to ensure smooth execution and long-term contract stability. With us, you can sign agreements with full confidence and legal backing.",
  },
  {
    title: "Public-Private Partnership Support",
    icon: <FaHandshake className="text-4xl" />,
    description: "Legal facilitation and compliance support for PPP ventures.",
    detail:
      "Our Public-Private Partnership (PPP) Support service bridges the gap between government objectives and private sector capabilities. We guide clients through the full lifecycle of PPP projects, from feasibility assessment to final execution. Our team ensures all legal frameworks are met, minimizing compliance risks. We assist in structuring agreements that balance profitability for private investors with public benefit goals. Our lawyers navigate procurement processes, bid evaluations, and negotiations with transparency. We provide due diligence to assess the financial and operational viability of each venture. By fostering strong collaboration between stakeholders, we help projects progress smoothly. We address potential disputes proactively, ensuring contractual harmony. Our bilingual team ensures that all documentation is clear for local and international partners. From infrastructure to service-based projects, we bring sector-specific knowledge. We are committed to creating PPPs that deliver sustainable value for communities. Our approach combines legal precision with strategic vision for national development.",
  },
  {
    title: "Constitutional & Regulatory Guidance",
    icon: <FaGavel className="text-4xl" />,
    description: "Navigating government entities through constitutional compliance.",
    detail:
      "Our Constitutional & Regulatory Guidance service helps institutions operate within the bounds of national constitutions and regulatory laws. We provide clear interpretations of complex legal provisions, ensuring full compliance. Our team assists in drafting regulations, policies, and governance frameworks that align with constitutional principles. We advise on matters related to human rights, administrative justice, and separation of powers. Our lawyers represent government bodies in constitutional courts and advisory committees. We ensure decision-making processes meet legal and ethical standards. By analyzing legislative impacts, we help shape laws that serve public interests. We offer training programs to enhance institutional understanding of constitutional requirements. Our bilingual expertise ensures clarity across all communications. We work closely with policymakers to integrate legal safeguards into national strategies. Our approach promotes good governance, transparency, and accountability. Every piece of advice is grounded in thorough legal research. We aim to uphold the rule of law while supporting institutional effectiveness.",
  },
];

const GovtorgPg = () => {
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
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Banner */}
        <div className="relative mb-16">
          <img
            src="/GovtImageBanner.jpg"
            alt="Government Services"
            className="w-full h-72 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-[#0D1B2A] bg-opacity-60 flex items-center justify-center rounded-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              Government & Semi-Government Legal Services
            </h1>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-16 text-center">
          <p className="text-lg text-black max-w-3xl mx-auto">
            Al Khaldi Law Firm provides trusted and confidential legal services
            for ministries, authorities, and semi-governmental bodies in Qatar.
            We specialize in regulation, policy, and national legal
            infrastructure — with precision, professionalism, and bilingual
            expertise.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {govtServices.map((service, index) => (
            <div
              key={index}
              onClick={() => showDetails(service)}
              className="bg-[#0D1B2A] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center group cursor-pointer"
            >
              <div className="text-yellow-400 text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white text-sm">{service.description}</p>
            </div>
          ))}
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
              <p className="text-gray-700 mb-3">
                {selectedService.description}
              </p>
              <p className="text-gray-600">{selectedService.detail}</p>
              <div>
                <p className="text-sm mt-10 mb-5">
                  To know more about us, click below:
                </p>
                <Link href="/about">
                  <button className="px-4 py-2 bg-yellow-500 font-semibold rounded-sm hover:bg-yellow-400 cursor-pointer">
                    About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Two Column Info */}
        <div className="flex flex-col md:flex-row gap-10 mb-20 items-center">
          <img
            src="/about/abh.jpg"
            alt="Trusted by Government"
            className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              Trusted by Ministries & Public Institutions
            </h2>
            <p className="text-black">
              With deep experience working with Qatar’s public sector, we
              understand the legal landscape that shapes governmental action.
              From high-stakes projects to daily operations, our firm ensures
              complete compliance, confidentiality, and clarity.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0D1B2A] p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Looking for Expert Government Legal Counsel?
            </h3>
            <p className="text-gray-200">
              Connect with our legal team today — we're ready to serve your
              department or organization with elite, bilingual legal expertise.
            </p>
          </div>
          <Link href="/contact">
            <button className="bg-yellow-500 cursor-pointer text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-300">
              Contact Our Legal Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GovtorgPg;
