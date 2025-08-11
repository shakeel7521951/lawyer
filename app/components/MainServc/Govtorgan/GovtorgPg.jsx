import React from 'react';
import { FaBalanceScale, FaHandshake, FaGavel, FaRegFileAlt } from 'react-icons/fa';
import Link from 'next/link'
const govtServices = [
  {
    title: 'Administrative Law & Public Policy',
    icon: <FaBalanceScale />,
    description:
      'Expert advice on regulatory frameworks and governmental procedures.',
  },
  {
    title: 'Contract Review & Negotiation',
    icon: <FaRegFileAlt />,
    description:
      'Drafting and legal review of inter-agency and third-party contracts.',
  },
  {
    title: 'Public-Private Partnership Support',
    icon: <FaHandshake />,
    description:
      'Legal facilitation and compliance support for PPP ventures.',
  },
  {
    title: 'Constitutional & Regulatory Guidance',
    icon: <FaGavel />,
    description:
      'Navigating government entities through constitutional compliance.',
  },
];

const GovtorgPg = () => {
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
            for ministries, authorities, and semi-governmental bodies in Qatar. We specialize in regulation, policy, and national legal infrastructure — with precision, professionalism, and bilingual expertise.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {govtServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#0D1B2A] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="text-yellow-400 text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-white text-sm">{service.description}</p>
            </div>
          ))}
        </div>

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
              With deep experience working with Qatar’s public sector, we understand the legal landscape that shapes governmental action. From high-stakes projects to daily operations, our firm ensures complete compliance, confidentiality, and clarity.
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
              Connect with our legal team today — we're ready to serve your department or organization with elite, bilingual legal expertise.
            </p>
          </div>
         <Link href="/contact"> <button className="bg-yellow-500 cursor-pointer text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-300">
            Contact Our Legal Team
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default GovtorgPg;
