import React from 'react'
import Link from 'next/link'

const LegalSupport = () => {
  return (
    <div className="bg-white text-[#0D1B2A]">
      {/* Hero Section */}
      <section className="relative bg-[#0D1B2A] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Start Your Business in the GCC <br />
              <span className="text-[#D4AF37]">From Setup to Success</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Comprehensive legal and business solutions across Qatar, Oman, and Saudi Arabia
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-[#D4AF37] hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1">
                Start My Business
              </Link>
              <Link href="/contact" className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 border-2 border-white rounded-sm transition-all duration-300">
                Book Free Consultation
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-full mr-2"></div>
                <span>Licensed in Qatar, Oman & KSA</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-full mr-2"></div>
                <span>500+ Companies Helped</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Comprehensive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Company Formation", icon: "🏢" },
              { title: "PRO & Government Services", icon: "📑" },
              { title: "Visa & Licensing", icon: "🛂" },
              { title: "Business Strategy", icon: "📊" },
              { title: "Digital Marketing", icon: "📱" },
              { title: "Website & App Development", icon: "💻" },
              { title: "CRM & Automation", icon: "⚙️" },
              { title: "Podcast / Media Branding", icon: "🎙️" }
            ].map((service, index) => (
              <div key={index} className="bg-[#F9F9F9] p-6 rounded-lg border border-[#0D1B2A]/10 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-[#0D1B2A]/80">Professional services tailored for your business needs</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Country-Specific Setup */}
      <section className="bg-[#0D1B2A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Country-Specific Business Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { country: "Qatar", features: ["100% Ownership", "Municipality Licensing", "Bank Account Setup", "PRO/Ministry Works"] },
              { country: "Oman", features: ["100% Ownership", "Municipality Licensing", "Bank Account Setup", "Sponsor Services"] },
              { country: "Saudi Arabia", features: ["100% Ownership", "Municipality Licensing", "Bank Account Setup", "PRO Services"] }
            ].map((country, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">{country.country}</h3>
                <ul className="space-y-3 mb-8">
                  {country.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="bg-[#D4AF37] hover:bg-amber-500 text-black font-bold py-2 px-6 rounded-sm text-sm transition-all duration-300">
                  Start in {country.country} Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nerou Digital Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Nerou Digital Solutions</h2>
              <p className="text-lg mb-8">Our exclusive technology partner providing cutting-edge digital solutions for your business growth.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  "Website development",
                  "Mobile app development",
                  "Voice AI systems",
                  "WhatsApp automation",
                  "CRM dashboards",
                  "Performance reports"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
              
                <Link href="/contact" className="bg-transparent hover:bg-[#0D1B2A]/10 text-[#0D1B2A] font-bold py-3 px-6 border-2 border-[#0D1B2A] rounded-sm transition-all duration-300">
                  Request Demo
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

   

      {/* Success Stories */}
     

      {/* Start Now Section */}
      <section className="bg-[#D4AF37] text-[#0D1B2A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Let's launch your success in the Gulf</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">Get started with a free consultation to discuss your business needs</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            
              <Link href="/contact" className="bg-white hover:bg-white/90 text-[#0D1B2A] font-bold py-3 px-8 rounded-sm transition-all duration-300">
                Book Consultation
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default LegalSupport;