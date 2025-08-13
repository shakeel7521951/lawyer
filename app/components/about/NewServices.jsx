"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaBuilding,
  FaBalanceScale,
  FaPassport,
  FaLightbulb,
  FaBullhorn,
  FaLaptopCode,
  FaCogs,
  FaMicrophone,
  FaCity,
  FaUsers,
  FaTimes
} from "react-icons/fa";

const NewServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coreServices = [
    { 
      icon: <FaBuilding size={28} />, 
      title: "Company Formation",
      about: "Company formation is the legal process of establishing and registering a business entity with the authorities to operate in a specific jurisdiction. In Qatar, it requires approvals from the Ministry of Commerce and Industry and other relevant bodies. The process defines the legal structure — such as LLC, branch office, or sole proprietorship — and involves preparing Articles of Association, choosing a trade name, and securing licenses. Recent regulations allow 100% foreign ownership in many sectors, opening wider opportunities for investors. A properly formed company ensures compliance with laws, tax rules, and labor regulations. It also protects assets, limits liabilities, and builds market credibility. Al Khaldi Law Firm guides clients through every step — from planning to final licensing. Our goal is to ensure a smooth, secure, and compliant business setup in Qatar." 
    },
    { 
      icon: <FaCity size={28} />, 
      title: "PRO & Government Services",
      about: "Our PRO services streamline all government-related processes in Qatar, including document attestation, license renewals, and ministry approvals. We handle paperwork with various government departments, saving you time and ensuring compliance. Our team stays updated with changing regulations to provide accurate guidance and expedited services for all your governmental requirements." 
    },
    { 
      icon: <FaPassport size={28} />, 
      title: "Visa & Licensing",
      about: "We provide comprehensive visa processing services for employees, investors, and family members. Our licensing services cover all necessary permits for business operations in Qatar, including trade licenses, professional licenses, and industry-specific approvals. We ensure all documentation meets Qatari legal requirements for smooth processing." 
    },
    { 
      icon: <FaLightbulb size={28} />, 
      title: "Business Strategy",
      about: "Our business strategy services help you navigate the Qatari market with tailored solutions. We analyze market conditions, regulatory frameworks, and competitive landscapes to develop strategies for market entry, expansion, and operational efficiency. Our consultants work closely with you to align business objectives with local opportunities." 
    },
    { 
      icon: <FaBullhorn size={28} />, 
      title: "Digital Marketing",
      about: "Through our Nerou Digital Solutions, we offer cutting-edge digital marketing services tailored for the Qatari market. Our services include SEO, social media marketing, content strategy, and targeted advertising campaigns designed to enhance your online presence and customer engagement in the region." 
    },
    { 
      icon: <FaLaptopCode size={28} />, 
      title: "Website & App Development (Nerou)",
      about: "Our Nerou team specializes in creating responsive websites and mobile applications that meet Qatari market needs. We focus on user experience, local cultural relevance, and technical excellence to deliver digital solutions that enhance your business operations and customer interactions." 
    },
    { 
      icon: <FaCogs size={28} />, 
      title: "CRM & Automation (Nerou System)",
      about: "Our custom CRM solutions and automation systems streamline your business processes, improve customer relationships, and enhance operational efficiency. We implement tailored systems that integrate with local Qatari business practices and regulatory requirements." 
    },
    { 
      icon: <FaMicrophone size={28} />, 
      title: "Podcast / Media Branding",
      about: "We offer comprehensive media branding services including podcast production, content creation, and digital media strategies. Our team helps establish your brand voice in the Qatari market through professional media production and strategic content distribution." 
    },
  ];

  const qatarInclusions = [
    "100% Ownership",
    "Municipality Licensing",
    "Bank Account Setup",
    "PRO / Ministry Works",
    "Sponsor Services"
  ];

  const NeuroServ = [
    {
      id: 1,
      icon: "💻",
      name: "Website Development",
      about: `We create modern, responsive websites tailored to your business goals.
Our designs ensure a seamless user experience across all devices.
We focus on speed, SEO, and secure coding practices.
From corporate sites to e-commerce, we deliver performance-driven solutions.
Custom features and integrations enhance your online capabilities.
Our goal is to make your brand stand out with a strong web presence.`
    },
    {
      id: 2,
      icon: "📱",
      name: "Mobile App Development (iOS/Android)",
      about: `We build intuitive, high-performance mobile apps for iOS and Android.
Our team ensures smooth navigation and engaging interfaces.
Apps are developed with scalability and security in mind.
We integrate essential features like push notifications and payments.
Custom solutions cater to your business or personal requirements.
From concept to launch, we handle the entire development process.`
    },
    {
      id: 3,
      icon: "🤖",
      name: "Voice AI Systems",
      about: `We design AI-powered voice assistants for smarter customer interaction.
Our systems understand natural language and respond accurately.
Voice automation improves service speed and reduces workload.
We integrate AI into apps, websites, and call systems.
Customizable commands suit your industry's unique needs.
This technology delivers a futuristic and efficient user experience.`
    },
    {
      id: 4,
      icon: "📲",
      name: "WhatsApp Automation",
      about: `We automate customer engagement through WhatsApp messaging.
Our systems handle queries, bookings, and follow-ups instantly.
Integration with CRMs ensures smooth data management.
Automation boosts response speed and customer satisfaction.
Custom workflows adapt to your business needs.
This is the fastest way to connect with clients effectively.`
    },
    {
      id: 5,
      icon: "📊",
      name: "CRM Dashboards",
      about: `We create custom CRM dashboards for real-time business insights.
Data visualization helps track sales, leads, and performance.
Our dashboards are interactive and easy to navigate.
Integration with your systems ensures smooth data flow.
Custom filters and reports make decision-making faster.
This boosts efficiency and improves business management.`
    },
    {
      id: 6,
      icon: "📈",
      name: "Performance Reports",
      about: `We deliver detailed performance reports for data-driven growth.
Reports track KPIs, sales, and marketing effectiveness.
Custom formats suit your team's needs and workflow.
Visual graphs make data easy to understand.
Regular reporting helps identify trends and improvements.
We turn raw data into actionable business strategies.`
    }
  ];

  const audienceServices = [
    {
      audience: "Corporate Clients",
      img:"/about/corporate.jpeg",
      description:
        "End-to-end business formation, legal structuring, tax advisory, and digital transformation strategies to help companies scale in Qatar and globally.",
      path: "/corporate"
    },
    {
      audience: "Government & Semi-Government",
      img:"/about/govt.jpeg",
      description:
        "Trusted consultancy for strategic partnerships, compliance, procurement processes, and innovative technology adoption through Nerou Digital Solutions.",
      path: "/Govtorgan"
    },
    {
      audience: "Individual Entrepreneurs",
      img:"/about/individual.jpeg",
      description:
        "From freelance licensing to full company setup, visa processing, and personal brand development — we make business ownership seamless.",
      path: "/indualCustomer"
    },
    {
      audience: "Legal Support",
      img:"/about/legalsprt.jpeg",
      description:
        "Comprehensive legal guidance for businesses and individuals, ensuring compliance, protecting interests, and resolving disputes efficiently.",
      path: "/legalsupport"
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="py-16 px-6 lg:px-20 bg-[#0D1B2A] text-white relative">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#D4AF37]">
            Our Services
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Al Khaldi Law Firm is your trusted legal and business advisory authority in Qatar — 
            delivering corporate, governmental, and individual solutions, powered by our exclusive 
            tech partner <span className="text-[#D4AF37]">Nerou Digital Solutions</span>.
          </p>
        </div>

        {/* Nerou Intro */}
        <div className="bg-[#1B263B] p-8 rounded-2xl shadow-lg mb-14">
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">
            Powered by Nerou Digital Solutions
          </h3>
          <p className="text-gray-300 mb-4">
            As our exclusive technology partner, Nerou delivers advanced digital capabilities to modernize and grow your business:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NeuroServ.map((item) => (
              <div 
                key={item.id} 
                className="group hover:scale-105 transition border border-gray-600 p-4 rounded-lg hover:bg-[#1B263B]/80 transition cursor-pointer"
                onClick={() => handleServiceClick(item)}
              >
                <p className="text-2xl">{item.icon}</p>
                <h3 className="text-lg font-semibold mt-2 mb-3">{item.name}</h3>
                <button className="px-3 py-1 text-sm font-medium rounded cursor-pointer group-hover:bg-[#D4AF37] group-hover:text-[#0D1B2A] transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Inclusions */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Qatar Business Advantages</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-300">
            {qatarInclusions.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-14">
          {coreServices.map((service) => (
            <div
              key={service.title}
              className="bg-[#1B263B] p-6 group rounded-xl text-center hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div className="flex justify-center mb-3 text-[#D4AF37]">
                {service.icon}
              </div>
              <h4 className="text-sm font-semibold">{service.title}</h4>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-sm px-4 py-2 bg-[#D4AF37] text-[#0D1B2A] font-semibold rounded-sm cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Audience Segments */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-6">
          {audienceServices.map((group) => (
            <div
              key={group.audience}
              className="bg-[#1B263B] p-6 group rounded-xl shadow-lg flex flex-col justify-between transition-all"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={group.img}
                  alt={group.audience}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h4 className="text-lg font-bold text-[#D4AF37] mt-4 mb-2">
                {group.audience}
              </h4>
              <p className="text-gray-300 text-sm mb-4">{group.description}</p>
              <Link href={group.path}>
                <button className="w-full border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#0D1B2A] font-semibold py-2 px-4 rounded-lg transition">
                  More Info
                </button>
              </Link>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Service Details */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1B263B] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#D4AF37] transition-colors"
            >
              <FaTimes size={24} />
            </button>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                {typeof selectedService.icon === 'string' ? (
                  <div className="bg-[#D4AF37]/20 p-3 rounded-full text-2xl">
                    {selectedService.icon}
                  </div>
                ) : (
                  <div className="bg-[#D4AF37]/20 p-3 rounded-full">
                    <div className="text-[#D4AF37]">
                      {selectedService.icon}
                    </div>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#D4AF37]">
                  {selectedService.title || selectedService.name}
                </h3>
              </div>
              
              <div className="prose prose-invert text-gray-300 whitespace-pre-line">
                {selectedService.about}
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={closeModal}
                  className="px-6 py-2 bg-[#D4AF37] text-[#0D1B2A] font-semibold rounded-lg hover:bg-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewServices;