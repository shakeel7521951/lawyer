'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director, TechCorp',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    text: 'The service was exceptional from start to finish. The team went above and beyond to deliver exactly what we needed.',
    stars: [1, 1, 1, 1, 1]
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateSoft',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
    text: "We've seen a 40% increase in productivity since implementing their solution. The onboarding process was seamless.",
    stars: [1, 1, 1, 1, 0.5]
  },
  {
    name: 'Emma Rodriguez',
    role: 'CEO, DesignHub',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    text: 'Their attention to detail and customer support is unmatched. We\'ve partnered with them for all our digital needs.',
    stars: [1, 1, 1, 1, 0]
  },
  {
    name: 'David Wilson',
    role: 'Operations Manager, GlobalLogix',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&h=200&q=80',
    text: 'The ROI was evident within the first quarter. Their platform has become indispensable to our operations.',
    stars: [1, 1, 1, 1, 1]
  }
];

const colors = {
  darkNavy: '#0D1B2A',
  gold: '#D4AF37',
  light: '#F9F9F9',
  darkGray: '#1C1C1C'
};

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const autoSlide = useRef(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCards(3);
      else if (width >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      if (prev + 1 > testimonials.length - visibleCards) {
        setDirection(-1);
        return prev - 1;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      if (prev - 1 < 0) {
        setDirection(1);
        return prev + 1;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    autoSlide.current = setInterval(() => {
      if (direction === 1) {
        nextSlide();
      } else {
        prevSlide();
      }
    }, 4000);

    return () => clearInterval(autoSlide.current);
  }, [direction, visibleCards]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: colors.light }}>
      <div className="max-w-7xl w-full mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: colors.darkNavy }}>Client Testimonials</h2>
          <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: colors.gold }}></div>
          <p className="text-xl max-w-xl mx-auto" style={{ color: colors.darkGray }}>
            Hear what our customers say about their experience with our products and services.
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                  <div
                    className="p-8 rounded-xl border border-[#D4AF37] shadow-lg h-full  transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    style={{
                      background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                     
                    }}
                  >
                    {/* Stars */}
                    <div className="flex items-center mb-4 space-x-1" style={{ color: colors.gold }}>
                      {t.stars.map((s, i) =>
                        s === 1 ? <FaStar key={i} /> : s === 0.5 ? <FaStarHalfAlt key={i} /> : <FaRegStar key={i} />
                      )}
                    </div>

                    {/* Text */}
                    <p className="mb-6 italic text-gray-700">{`"${t.text}"`}</p>

                    {/* User */}
                    <div className="flex items-center">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2"
                        style={{ borderColor: colors.gold }}
                      />
                      <div>
                        <h4 className="font-semibold" style={{ color: colors.darkNavy }}>{t.name}</h4>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: testimonials.length - visibleCards + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'scale-125 shadow-lg' : ''}`}
                style={{
                  backgroundColor: idx === currentIndex ? colors.gold : '#ccc'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
