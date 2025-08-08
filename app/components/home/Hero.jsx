'use client'
import React, { useState, useEffect } from 'react'
import { GoDotFill } from "react-icons/go"
import Link from 'next/link'

const homeAry = [
  {
    id: 1,
    bgimg: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1000&auto=format&fit=crop&q=60",
    welcome: "Welcome to",
    name: "Al Khaldi Law Firm",
    btn: "About Us",
    path: "/about",
    description: "Your trusted legal partner with decades of experience in delivering justice and excellence."
  },
  {
    id: 2,
    bgimg: "https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3xlbnwwfHwwfHx8MA%3D%3D",
    welcome: "Welcome to",
    name: "Al Khaldi Law Firm",
    btn: "Contact Us",
    path: "/contact",
    description: "Get in touch with our expert legal team for personalized consultation and support."
  }
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % homeAry.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + homeAry.length) % homeAry.length)
  }

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
      className="relative w-full min-h-[80vh] overflow-hidden"
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${item.bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Text content with responsive padding */}
          <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
            <div className="max-w-2xl space-y-6">
              <p className="text-xl md:text-2xl font-light text-gray-300 animate-fadeIn">
                {item.welcome},
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-400 leading-tight animate-fadeIn delay-100">
                {item.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 font-light animate-fadeIn delay-200">
                {item.description}
              </p>
              <div className="animate-fadeIn delay-300">
                <Link href={item.path}>
                  <button className="px-8 cursor-pointer py-3 bg-transparent border-2 border-amber-400 text-white font-semibold rounded-sm hover:bg-amber-400 hover:text-black transition-all duration-300 transform  focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50">
                    {item.btn}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots with animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {homeAry.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 ${current === index ? "text-amber-400 scale-125" : "text-white/60 hover:text-white/90"}`}
          >
            <GoDotFill size={24} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Hero