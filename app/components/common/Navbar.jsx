'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serSt, setserSt] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !e.target.closest('.mobile-menu-container')) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <nav className={`bg-[#001f3f] text-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl py-0' : 'shadow-lg py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with brand name - Left side */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2 group">
            <img
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/220px-Reddit_Logo_Icon.svg.png"
              alt="Law Firm Logo"
            />
            <span className="text-xl font-semibold tracking-tight group-hover:text-[#FFD700] transition-colors duration-300">
              Lawyer
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8 lg:space-x">
              <Link 
                className="px-3 py-2 text-white hover:text-[#FFD700] transition-all duration-300 font-medium relative group"
                href="/"
              >
                Home
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-[#FFD700] w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link 
                className="px-3 py-2 text-white hover:text-[#FFD700] transition-all duration-300 font-medium relative group"
                href="/about"
              >
                About
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-[#FFD700] w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative list-none"
                onMouseEnter={() => setserSt(true)}
                onMouseLeave={() => setserSt(false)}
              >
                <Link 
                  className="px-3 py-2 text-white hover:text-[#FFD700] transition-all duration-300 font-medium relative group flex items-center"
                  href="/services"
                >
                  Services
                  <span className="absolute left-1/2 bottom-0 h-0.5 bg-[#FFD700] w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${serSt ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {serSt && (
                  <div 
                    className="absolute bg-[#001F3F] pt-2 pb-3 pl-4 pr-8 top-full left-0 rounded-b-lg shadow-xl border-t-2 border-[#FFD700]/30 animate-fadeIn"
                    onMouseEnter={() => setserSt(true)}
                    onMouseLeave={() => setserSt(false)}
                  >
                    <ul className='flex flex-col gap-3'>
                      <li>
                        <Link 
                          href="/IndvidualCustomer" 
                          className="whitespace-nowrap hover:text-[#FFD700] transition-all duration-200 font-medium text-white flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          Individual Customers
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/governorg" 
                          className="whitespace-nowrap hover:text-[#FFD700] transition-all duration-200 font-medium text-white flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          Govt Organization
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/corporate" 
                          className="whitespace-nowrap hover:text-[#FFD700] transition-all duration-200 font-medium text-white flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          Corporate Business
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
                  <Link 
                className="px-3 py-2 text-white hover:text-[#FFD700] transition-all duration-300 font-medium relative group"
                href="/blog"
              >
                Blog
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-[#FFD700] w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link 
                className="px-3 py-2 text-white hover:text-[#FFD700] transition-all duration-300 font-medium relative group"
                href="/whyus"
              >
                Why Us
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-[#FFD700] w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
            
            </div>
          </div>

          {/* Contact Button - Right side */}
         <div className="hidden md:flex items-center">
  <Link
    href="/contact"
    className="relative overflow-hidden group rounded-lg px-6 py-2.5 border-2 border-[#FFD700] text-white font-medium transition-all duration-500 ease-out hover:duration-300"
  >
    {/* Shine effect */}
    <span className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
    
    {/* Animated border effect */}
    <span className="absolute inset-0 border-t-2 border-b-2 border-transparent group-hover:border-[#FFD700] transition-all duration-500 ease-out hover:duration-300">
      <span className="absolute top-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-500 ease-out hover:duration-300"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-500 ease-out hover:duration-300"></span>
    </span>
    
    {/* Text with gold shine on hover */}
    <span className="relative z-10 flex items-center justify-center gap-1">
      <span className="group-hover:text-[#FFD700] transition-colors duration-300">Contact</span>
      <svg 
        className="w-4 h-4 -mr-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
    
    {/* Gold fill effect on hover */}
    <span className="absolute inset-0 w-0 bg-[#FFD700] group-hover:w-full transition-all duration-300 ease-in-out -z-10"></span>
  </Link>
</div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFD700] focus:outline-none transition-all duration-200"
              aria-label="Main menu"
            >
              {open ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden mobile-menu-container bg-[#001a35] shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
          <Link 
            className="px-4 py-3 text-center rounded-lg text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-all duration-200 font-medium border-b border-[#003366]"
            href="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            className="px-4 py-3 text-center rounded-lg text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-all duration-200 font-medium border-b border-[#003366]"
            href="/about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          
          {/* Mobile Services Dropdown */}
          <div className="border-b border-[#003366]">
            <button 
              className="w-full px-4 py-3 text-center rounded-lg text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-all duration-200 font-medium flex items-center justify-center"
              onClick={() => setserSt(!serSt)}
            >
              Services
              <svg 
                className={`ml-2 w-4 h-4 transition-transform duration-200 ${serSt ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {serSt && (
              <div className="pl-6 pr-4 py-2 space-y-2 bg-[#001f3f] rounded-lg m-2">
                <Link 
                  href="/IndvidualCustomer"
                  className="block px-3 py-2 rounded-md text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-all duration-200 text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  Individual Customers
                </Link>
                <Link 
                  href="/governorg"
                  className="block px-3 py-2 rounded-md text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-all duration-200 text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  Govt Organization
                </Link>
                <Link 
                  href="/corporate"
                  className="block px-3 py-2 rounded-md text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-all duration-200 text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  Corporate Business
                </Link>
              </div>
            )}
          </div>
              <Link 
                className="px-3 py-2 text-white text-center hover:text-[#FFD700] transition-all duration-300 font-medium relative group"
                href="/blog"
              >
                Blog
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-[#FFD700] w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
          <Link 
            className="px-4 py-3 text-center rounded-lg text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-all duration-200 font-medium border-b border-[#003366]"
            href="/whyus"
            onClick={() => setOpen(false)}
          >
            Why Us
          </Link>
          <Link
            className="mt-2 mx-2 px-4 py-3 rounded-lg border-2 border-[#FFD700] text-white hover:bg-[#FFD700] hover:text-[#001f3f] transition-all duration-200 font-medium text-center active:scale-95"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;