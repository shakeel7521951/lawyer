"use client"
import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Al Khaldi Law Firm maintains the highest standards of professionalism and deep expertise in the Qatari legal system. Their team provided exceptional guidance through our complex corporate merger.",
      initials: "AM",
      name: "Ahmed Al-Mansoori",
      title: "CEO, Al-Mansoori Group"
    },
    {
      id: 2,
      quote: "Working with Al Khaldi Law Firm has been transformative for our business in Qatar. Their strategic approach and government relations expertise helped us navigate complex regulations seamlessly.",
      initials: "SJ",
      name: "Sarah Johnson",
      title: "Regional Director, TechGlobal Inc."
    },
    {
      id: 3,
      quote: "The team at Al Khaldi Law Firm demonstrated unparalleled knowledge of Qatari commercial law during our expansion. Their bilingual capabilities and cultural understanding were invaluable assets.",
      initials: "MR",
      name: "Mohammed Rahman",
      title: "General Manager, Gulf Investments"
    },
    {
      id: 4,
      quote: "We've engaged Al Khaldi for multiple high-stakes transactions. Their attention to detail and ability to anticipate legal challenges saved us significant time and resources.",
      initials: "EA",
      name: "Emma Anderson",
      title: "Legal Counsel, International Bank"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide every 5 seconds
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % (testimonials.length - 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % (testimonials.length - 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + (testimonials.length - 1)) % (testimonials.length - 1));
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">CLIENT TESTIMONIALS</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Trusted by <span className="text-blue-700">Leading</span> Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
                style={{ width: '50%' }}
              >
                <div className="group relative bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
                  
                  <div className="relative p-10 h-full flex flex-col">
                    <div className="text-yellow-500 text-4xl mb-6 opacity-20">
                      <FaQuoteLeft />
                    </div>
                    <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-8 flex-grow">
                      {testimonial.quote}
                    </blockquote>
                    
                    <div className="flex items-center mt-auto">
                      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl mr-6">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-blue-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-blue-700" />
          </button>
          
          {/* Indicators */}
          <div className="flex space-x-2">
            {Array.from({ length: testimonials.length - 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-blue-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-blue-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;