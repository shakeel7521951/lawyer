'use client'
import React from 'react'

const Paragraph = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Committed to Excellence in Legal Services
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Al-Khaldi Law Firm, we pride ourselves on delivering tailored legal
            solutions that meet the diverse needs of our clients. From complex corporate
            transactions and cross-border disputes to personal legal matters and
            government advisory services, we bring decades of experience and unwavering
            dedication to every case.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We represent government bodies, semi-government organizations, multinational
            corporations, and individual clients with the same level of commitment —
            ensuring confidentiality, precision, and a results-driven approach. Our
            expertise spans civil and criminal litigation, arbitration, contract law,
            real estate, and regulatory compliance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you seek strategic legal advice or representation in court, Al-Khaldi
            Law Firm stands ready as your trusted partner in navigating the complexities
            of law.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full h-[400px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Al Khaldi Law Firm"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

      </div>
    </section>
  )
}

export default Paragraph;
