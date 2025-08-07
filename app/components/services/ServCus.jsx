'use client';
import React from 'react';
import { FaUserTie, FaBuilding, FaUniversity } from 'react-icons/fa';

const ServCus = () => {
  const serviceData = [
    {
      id: 1,
      title: 'Individual Customers',
      icon: <FaUserTie size={50} className="text-gold" />,
      image:
        'https://media.istockphoto.com/id/2167817669/photo/young-banker-giving-female-client-financial-advice.webp?a=1&b=1&s=612x612&w=0&k=20&c=rQ5WhTxbsG64ER74CIMJF3C5pvbAEQGp4SegUamyjS8=',
      description:
        'Legal guidance for personal matters, family issues, documentation, and legal representation tailored to individual needs.',
      btnText: 'Learn More',
      link: '/IndvidualCustomer',
    },
    {
      id: 2,
      title: 'Government Organizations',
      icon: <FaUniversity size={50} className="text-gold" />,
      image:
        'https://images.unsplash.com/photo-1669131196184-a567e41f7236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGl0dXRpb258ZW58MHx8MHx8fDA%3D',
      description:
        'Dedicated services for public sector legalities, government contracts, regulation compliance, and advisory.',
      btnText: 'Explore Services',
      link: '/governorg',
    },
    {
      id: 3,
      title: 'Corporate Business',
      icon: <FaBuilding size={50} className="text-gold" />,
      image:
        'https://media.istockphoto.com/id/1471444483/photo/customer-satisfaction-survey-concept-users-rate-service-experiences-on-online-application.webp?a=1&b=1&s=612x612&w=0&k=20&c=vTedWOsRo4-O5hO_ZblfrCYNEHvmdTcU6cPCW8I1u60=',
      description:
        'Professional legal services for startups to large enterprises in compliance, contracts, and corporate governance.',
      btnText: 'Discover More',
      link: '/corporate',
    },
  ];

  return (
    <div className="bg-white text-black py-16 px-4 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-navy">
        Our Legal Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceData.map((item) => (
          <div
            key={item.id}
            className="bg-navy text-white  bg-blue-950 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-center text-gold mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-center text-white">
                {item.description}
              </p>
              <div className="mt-6 text-center">
                <a
                  href={item.link}
                  className="inline-block bg-gold hover:bg-amber-400 hover:text-black text-navy font-semibold px-6 py-2 rounded-full transition-colors duration-300"
                >
                  {item.btnText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServCus;
