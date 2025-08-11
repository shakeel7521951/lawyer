"use client";
import React, { useState } from "react";
import Link from "next/link";

const legalServices = [
  {
    icon: "🏢",
    title: "Company Formation",
    description: "End-to-end assistance in registering and setting up your business across GCC countries.",
    detail: `Starting a business in the GCC region requires more than just an idea — it demands precise legal compliance and structured execution.
We guide you through every step of the company formation process, from choosing the right legal structure to preparing the required documentation.
Our experts handle trade name registration, licensing procedures, and approvals from relevant government authorities.
We ensure you meet all tax registration requirements and adhere to labor laws from the very beginning.
Our approach minimizes delays and prevents costly mistakes during setup.
We also assist in selecting the most favorable jurisdiction for your business goals.
From mainland to free zone establishments, we tailor the process to your needs.
Ultimately, we make business formation smooth, compliant, and hassle-free.`,
  },
  {
    icon: "📑",
    title: "PRO & Government Services",
    description: "Professional liaison with government departments for efficient business operations.",
    detail: `Government processes in the GCC can be complex and time-consuming without expert assistance.
Our PRO services act as your direct link to ministries, embassies, and regulatory bodies.
We handle document clearances, attestations, and translations with precision.
Our team ensures your applications are submitted in the correct format to avoid rejections.
We also track deadlines for renewals to maintain your compliance status.
Whether you need labor approvals or municipality permits, we coordinate the process end-to-end.
Our local knowledge speeds up procedures that would otherwise take months.
With us, your interactions with government offices are always smooth and efficient.`,
  },
  {
    icon: "🛂",
    title: "Visa & Licensing",
    description: "Comprehensive support for work visas, residence permits, and trade licenses.",
    detail: `Navigating visa and licensing requirements in the GCC can be overwhelming for businesses and employees.
We manage the full process for obtaining work visas, residence permits, and family sponsorships.
Our team prepares and submits applications with accurate documentation to avoid delays.
We assist in medical tests, biometric registrations, and ID card issuance.
For trade licenses, we ensure compliance with the specific rules of each jurisdiction.
We also handle renewals promptly to avoid penalties or operational disruptions.
Our services extend to special permits required for certain industries.
From start to finish, we keep your workforce and operations legally secure.`,
  },
  {
    icon: "📊",
    title: "Business Strategy",
    description: "Tailored strategies for market entry, growth, and competitive positioning.",
    detail: `A strong business strategy is essential for long-term success in the GCC's competitive markets.
We begin with in-depth market research to identify opportunities and challenges.
Our analysts evaluate your industry trends and competitor landscape.
We define clear objectives aligned with your business vision and resources.
We develop actionable plans for revenue growth and brand positioning.
Our strategies adapt to the fast-changing regulatory and economic environment.
We also guide you on risk management and sustainability practices.
With a clear roadmap, your business can thrive and expand confidently.`,
  },
  {
    icon: "📱",
    title: "Digital Marketing",
    description: "Creative campaigns to boost brand visibility and customer engagement.",
    detail: `Digital marketing is the key to reaching today’s tech-savvy customers.
We craft targeted campaigns to connect with your audience where they are most active.
Our services include SEO optimization for higher search engine rankings.
We design engaging content that builds trust and loyalty over time.
Social media management ensures your brand voice is consistent across platforms.
Paid ad strategies maximize your return on investment with precise targeting.
We track performance metrics to refine campaigns for better results.
From awareness to conversion, we make your online presence impactful.`,
  },
  {
    icon: "💻",
    title: "Website & App Development",
    description: "Custom websites and apps designed for your business needs.",
    detail: `A professional digital platform is vital for brand credibility in the modern market.
We design and develop websites that are fast, responsive, and user-friendly.
Our apps are tailored to your business model for seamless user experiences.
Security features are built in to protect customer data and transactions.
We optimize for mobile performance to reach users on all devices.
Our developers integrate the latest technology for smooth functionality.
We also offer ongoing maintenance to keep your platform updated.
From concept to launch, we ensure your digital presence stands out.`,
  },
  {
    icon: "⚙️",
    title: "CRM & Automation",
    description: "Automated systems to manage leads, clients, and workflows.",
    detail: `Efficient customer management is the backbone of modern business success.
We implement CRM solutions that centralize all client information in one place.
Automation tools reduce manual work and improve operational speed.
Our systems help track leads, sales, and customer interactions in real time.
We integrate CRM with your existing tools for seamless workflow.
Data analytics provide insights for better decision-making and sales strategies.
Custom automation rules ensure tasks are completed without delays.
With our solutions, you save time, reduce errors, and enhance customer satisfaction.`,
  },
  {
    icon: "🎙️",
    title: "Podcast / Media Branding",
    description: "Media content creation to boost your brand voice.",
    detail: `In a crowded market, unique media content helps your brand stand out.
We produce professional podcasts that engage and inform your audience.
Our branding strategies create a consistent and memorable brand voice.
We assist in scriptwriting, recording, and post-production for high-quality output.
Distribution across major platforms ensures maximum reach.
We also design promotional content to grow your listener base.
Our creative team aligns media projects with your marketing goals.
With us, your brand’s message resonates with authenticity and impact.`,
  },
];


const LegalSupport = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-white text-[#0D1B2A]">
      {/* Hero Section */}
      <section className="relative bg-[#0D1B2A] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Start Your Business in the GCC <br />
            <span className="text-[#D4AF37]">From Setup to Success</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Comprehensive legal and business solutions across Qatar, Oman, and Saudi Arabia
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#D4AF37] hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1"
            >
              Start My Business
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 border-2 border-white rounded-sm transition-all duration-300"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Comprehensive Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalServices.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className="cursor-pointer bg-[#F9F9F9] p-6 rounded-lg border border-[#0D1B2A]/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-[#0D1B2A]/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Overlay Detail */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center p-6 overflow-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative mt-20 shadow-xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute cursor-pointer top-3 right-3 text-2xl text-gray-500 hover:text-black"
            >
              ✕
            </button>
            
            <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
            <p className="text-[#0D1B2A]/80 leading-relaxed">{selectedService.detail}</p>
                <div>
                <p className="text-sm mt-10 mb-5">To Know About Us More, Click Below:</p>
                <Link href="/about"><button className="px-4 py-2 bg-yellow-500 font-semibold rounded-sm hover:bg-yellow-400 cursor-pointer">About US</button></Link>
              </div>
          </div>
        </div>
      )}

      {/* ...rest of your sections remain unchanged */}
    </div>
  );
};

export default LegalSupport;
