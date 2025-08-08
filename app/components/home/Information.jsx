'use client'
import React from 'react'

const services = [
  {
    title: "Government/Semi-Government Sector",
    description:
      "We provide specialized legal advisory and representation to government entities, ministries, and public institutions. Our team assists in drafting legislation, managing regulatory compliance, and representing government bodies in national and international disputes."
  },
 
  {
    title: "Individual Clients",
    description:
      "For individuals, we offer legal counsel in family law, real estate transactions, wills & inheritance, personal dispute resolution, and protection of personal rights. We ensure each client receives personalized and confidential service."
  },
  {
    title: "Corporate & Business Clients",
    description:
      "We serve corporations, startups, and multinational companies with a full spectrum of business law services — including mergers & acquisitions, commercial contracts, labor law compliance, intellectual property protection, and litigation support."
  },
  {
    title: "General Legal Services",
    description:
      "Beyond specialized sectors, Al-Khaldi Law Firm covers civil and criminal litigation, arbitration & mediation, real estate law, maritime law, tax law, and cross-border legal advisory. We combine deep legal expertise with a commitment to ethical practice."
  }
]

const Information = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Legal Expertise
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Al-Khaldi Law Firm offers a comprehensive range of legal services tailored to the needs of government bodies, organizations, businesses, and individuals — with a steadfast commitment to integrity, confidentiality, and results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-amber-500 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Information
