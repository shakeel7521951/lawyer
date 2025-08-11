'use client'
import React, { useState, useEffect } from 'react'
import { GoDotFill } from "react-icons/go"
import Link from 'next/link'

const homeAry = [
  {
    id: 1,
    bgimg: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1400&auto=format&fit=crop&q=80",
    welcome: "Trusted Legal Excellence",
    name: "Al Khaldi Law Firm",
    btn: "Explore Our Services",
    path: "/services",
    description: "Premier legal counsel for government entities, corporations, and individuals across the GCC region.",
    overlay: "bg-gradient-to-r from-[#0D1B2A]/90 to-[#0D1B2A]/60"
  },
  {
    id: 2,
    bgimg: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&auto=format&fit=crop&q=80",
    welcome: "Strategic Legal Partners",
    name: "Al Khaldi Law Firm",
    btn: "Schedule Consultation",
    path: "/contact",
    description: "Integrating traditional legal expertise with cutting-edge business solutions for your success.",
    overlay: "bg-gradient-to-r from-[#1C1C1C]/90 to-[#0D1B2A]/60"
  }
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const goToSlide = (index) => {
    setCurrent(index)
  }

  // Auto-slide with pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrent((prev) => (prev + 1) % homeAry.length)
      }
    }, 2000)
    return () => clearInterval(timer)
  }, [isHovered])

  return (
    <div 
      className="relative w-full min-h-[90vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {homeAry.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${item.bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Gradient overlay */}
          <div className={`absolute inset-0 ${item.overlay}`}></div>

          {/* Text content */}
          <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
            <div className="max-w-2xl space-y-6">
              <p className="text-xl md:text-2xl font-light text-[#D4AF37] tracking-widest animate-fadeIn">
                {item.welcome}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight animate-fadeIn delay-100">
                {item.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light max-w-lg animate-fadeIn delay-200">
                {item.description}
              </p>
              <div className="flex flex-col mb-20 sm:mb-10 items-center sm:items-start  sm:flex-row gap-4 animate-fadeIn delay-300">
                <Link href={item.path}>
                  <button className="sm:px-8 px-3 sm:py-4 py-2 text-sm whitespace-nowrap bg-[#D4AF37] text-[#0D1B2A] font-semibold rounded-sm hover:bg-amber-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    {item.btn}
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="sm:px-8 px-3 sm:py-4 py-2  text-sm border-2 whitespace-nowrap border-[#D4AF37] text-white font-semibold rounded-sm hover:bg-[#D4AF37]/10 transition-all duration-300">
                    Emergency Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {homeAry.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 ${current === index ? "text-[#D4AF37] scale-125" : "text-white/60 hover:text-white/90"}`}
          >
            <GoDotFill size={28} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Hero;