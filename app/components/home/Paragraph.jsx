'use client'
import React from 'react'

const Paragraph = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F9F9F9] to-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="order-2 md:order-1">
          <span className="inline-block px-4 py-2 bg-blue-100 text-[#0D1B2A] rounded-full text-sm font-semibold tracking-wider mb-4">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
            Redefining <span className="text-[#D4AF37]">Legal Excellence</span> in the GCC
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0D1B2A] to-[#D4AF37] mb-8"></div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Al-Khaldi isn't just a law firm - we're strategic partners in your GCC success. Our integrated approach combines legal expertise with business acumen, helping government entities, corporations, and entrepreneurs navigate complex regulations while seizing growth opportunities.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With offices in Qatar, Oman, and Saudi Arabia, we've guided 500+ businesses through seamless setup, compliance, and expansion. Our unique ecosystem connects legal services with Nerou's technology solutions and our "I Want to Grow" media platform for complete market readiness.
            </p>
            
            <ul className="grid grid-cols-2 gap-4 mt-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">100% Foreign Ownership</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">PRO & Government Services</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Visa & Licensing</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Digital Growth Systems</span>
              </li>
            </ul>
          </div>
          
          <button className="mt-10 px-8 py-3 bg-gradient-to-r from-[#0D1B2A] to-[#1C1C1C] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:from-[#D4AF37] hover:to-amber-600 transform hover:-translate-y-1">
            Explore Our Ecosystem
          </button>
        </div>

        {/* Right Image - Using regular img tag instead of Next.js Image */}
        <div className="relative order-1 md:order-2 w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlZ2FsJTIwb2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt="Al-Khaldi Law Firm Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] to-transparent opacity-40"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">500+ Successful Cases</h3>
            <p className="text-blue-100">Trusted by government entities and Fortune 500 companies</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Paragraph;