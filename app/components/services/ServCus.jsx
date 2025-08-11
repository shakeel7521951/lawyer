'use client';
import React from 'react';
import { FaUserTie, FaBuilding, FaUniversity, FaBalanceScale } from 'react-icons/fa';

const ServCus = () => {
  const serviceData = [
    {
      id: 1,
      title: 'Individual Clients',
      icon: <FaUserTie className="text-amber-400" />,
      image: '/about/mt.avif',
      description: 'Personalized legal solutions for family matters, estate planning, and individual representation.',
      btnText: 'Learn More',
      link: '/IndvidualCustomer',
    },
    {
      id: 2,
      title: 'Government Entities',
      icon: <FaUniversity className="text-amber-400" />,
      image: '/about/abh.jpg',
      description: 'Specialized counsel for public sector compliance, contracts, and regulatory frameworks.',
      btnText: 'Explore Services',
      link: '/governorg',
    },
    {
      id: 3,
      title: 'Corporate Solutions',
      icon: <FaBuilding className="text-amber-400" />,
      image: '/about/h3.avif',
      description: 'End-to-end legal services for businesses of all sizes, from startups to multinationals.',
      btnText: 'Discover More',
      link: '/corporate',
    },
    {
      id: 4,
      title: ' Legal Support',
      icon: <FaBalanceScale className="text-amber-400" />,
      image: '/contact/abhe.jpg',
      description: 'Comprehensive counsel including litigation, transactions, and international matters.',
      btnText: 'Learn More',
      link: '/legalsupport',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored Legal Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategic legal solutions designed for your specific needs and objectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              </div>
              
              <div className="p-5 text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-900/10 p-3 rounded-full text-2xl">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-block px-5 py-2 text-sm font-medium text-amber-600 hover:text-amber-700 border border-amber-200 rounded-full hover:bg-amber-50 transition-colors duration-200"
                >
                  {item.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServCus;