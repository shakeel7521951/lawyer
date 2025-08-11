'use client'
import React from 'react'
import { FaBuilding, FaUserTie, FaHandshake, FaScaleBalanced } from 'react-icons/fa6'
import Link from 'next/link'
const services = [
  {
    title: "Government & Semi-Government Services",
    description: "Full-service legal support for ministries and public institutions including legislative drafting, regulatory compliance, and international dispute resolution. Our team specializes in navigating complex government procedures with efficiency.",
    icon: <FaBuilding className="text-3xl" />,
    color: "from-blue-800 to-blue-900",
    path:"/Govtorgan"
  },
  {
    title: "Corporate Business Solutions",
    description: "End-to-end legal services for corporations and startups - from company formation and M&A to intellectual property protection and labor law compliance. We help businesses thrive in GCC markets.",
    icon: <FaHandshake className="text-3xl" />,
    color: "from-amber-600 to-amber-700",
     path:"/corporate"
  },
  {
    title: "Individual Client Services",
    description: "Personalized legal counsel for family law, real estate, inheritance, and personal rights protection. We provide expats and residents with tailored solutions for life in Qatar.",
    icon: <FaUserTie className="text-3xl" />,
    color: "from-emerald-600 to-emerald-700",
     path:"/indualCustomer"
  },
  {
    title: "Comprehensive Legal Support",
    description: "Full-spectrum legal services including civil litigation, arbitration, real estate law, and cross-border advisory. Our integrated approach combines legal expertise with business acumen.",
    icon: <FaScaleBalanced className="text-3xl" />,
    color: "from-purple-600 to-purple-700",
     path:"/legalsupport"
  }
]

const Information = () => {
  return (
    <section className="w-full  bg-gradient-to-b from-[#F9F9F9] to-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-[#0D1B2A] rounded-full text-sm font-semibold tracking-wider mb-4">
            OUR LEGAL ECOSYSTEM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">
            Strategic <span className="text-[#D4AF37]">Legal Solutions</span> for GCC Markets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0D1B2A] to-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Al-Khaldi provides integrated legal services combining traditional expertise with modern business solutions - ensuring compliance, protection, and growth for government, corporate, and individual clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white p-8 h-full">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
               <Link href={service.path} > <button className="px-6 py-2 cursor-pointer border border-[#0D1B2A] text-[#0D1B2A] font-medium rounded-full group-hover:bg-[#0D1B2A] group-hover:text-white transition-all flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button></Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 sm:mt-16 text-center">
          <button className="px-8 py-4 cursor-pointer bg-gradient-to-r from-[#0D1B2A] to-[#1C1C1C] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:from-[#D4AF37] hover:to-amber-600 transform hover:-translate-y-1">
            Book Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Information