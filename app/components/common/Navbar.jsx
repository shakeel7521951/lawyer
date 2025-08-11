'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serSt, setserSt] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className="bg-[#0D1B2A] text-white sticky top-0 z-50 transition-all duration-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-3 group">
            <div className="h-10 w-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0D1B2A] font-bold text-lg transition-transform duration-300 group-hover:rotate-12">
              AK
            </div>
            <span className="text-2xl font-bold tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
              Al-Khaldi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex space-x-5">
              <Link 
                className="px-4 py-2 text-white hover:text-[#D4AF37] transition-all duration-300 font-semibold text-lg relative group"
                href="/"
              >
                Home
                <span className="absolute left-0 bottom-0 h-1 bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                className="px-4 py-2 text-white hover:text-[#D4AF37] transition-all duration-300 font-semibold text-lg relative group"
                href="/about"
              >
                About
                <span className="absolute left-0 bottom-0 h-1 bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setserSt(true)}
                onMouseLeave={() => setserSt(false)}
              >
                <Link 
                  href="/services"
                  className="px-4 py-2 text-white hover:text-[#D4AF37] transition-all duration-300 font-semibold text-lg relative flex items-center"
                >
                  Services
                  <span className="absolute left-0 bottom-0 h-1 bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-300"></span>
                  <FaChevronDown className={`ml-2 transition-transform ${serSt ? 'transform rotate-180' : ''}`} />
                </Link>
                
                {serSt && (
                  <div 
                    className="absolute bg-[#0D1B2A] pt-2 pb-4 pl-4 pr-8 top-full left-0 rounded-b-lg shadow-xl animate-fadeIn"
                  >
                    <ul className='flex flex-col gap-3'>
                      <li>
                        <Link 
                          href="/IndvidualCustomer" 
                          className="whitespace-nowrap hover:text-[#D4AF37] transition-all duration-200 font-semibold text-white flex items-center"
                        >
                          <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></span>
                          Individual Clients
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/governorg" 
                          className="whitespace-nowrap hover:text-[#D4AF37] transition-all duration-200 font-semibold text-white flex items-center"
                        >
                          <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></span>
                          Government
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/corporate" 
                          className="whitespace-nowrap hover:text-[#D4AF37] transition-all duration-200 font-semibold text-white flex items-center"
                        >
                          <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></span>
                          Corporate
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/legalsupport" 
                          className="whitespace-nowrap hover:text-[#D4AF37] transition-all duration-200 font-semibold text-white flex items-center"
                        >
                          <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></span>
                          Legal Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link 
                className="px-4 py-2 text-white hover:text-[#D4AF37] transition-all duration-300 font-semibold text-lg relative group"
                href="/blog"
              >
                Blog
                <span className="absolute left-0 bottom-0 h-1 bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                className="px-4 py-2 text-white hover:text-[#D4AF37] transition-all duration-300 font-semibold text-lg relative group"
                href="/whyus"
              >
                Why Us
                <span className="absolute left-0 bottom-0 h-1 bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <button className="px-10 py-3 cursor-pointer text-white bg-[#D4AF37] font-semibold rounded-sm hover:bg-amber-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-centermr-10 md:mr-0 justify-center p-3 rounded-md text-white hover:text-[#D4AF37] focus:outline-none transition-all duration-200"
              aria-label="Main menu"
            >
              {open ? (
                <FaTimes className="h-7 w-7" />
              ) : (
                <FaBars className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden mobile-menu-container overflow-y-scroll bg-[#0D1B2A] shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-3">
          <Link 
            className="block px-4 py-4 text-xl font-bold text-white hover:text-[#D4AF37] hover:bg-[#1B263B] rounded-lg transition-all duration-200"
            href="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            className="block px-4 py-4 text-xl font-bold text-white hover:text-[#D4AF37] hover:bg-[#1B263B] rounded-lg transition-all duration-200"
            href="/about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          
          <div>
            <Link 
              className="w-full flex justify-between items-center px-4 py-4 text-xl font-bold text-white hover:text-[#D4AF37] hover:bg-[#1B263B] rounded-lg transition-all duration-200"
              onClick={() => setserSt(!serSt)}
              href="/services"
            >
              Services
              <FaChevronDown className={`transition-transform ${serSt ? 'transform rotate-180' : ''}`} />
            </Link>
            
            {serSt && (
              <div className="pl-6 pr-4 py-2 space-y-3 bg-[#1B263B] rounded-lg mt-1">
                <Link 
                  href="/IndvidualCustomer"
                  className="block px-4 py-3 text-lg font-bold text-white hover:text-[#D4AF37] rounded-lg transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  Individual Clients
                </Link>
                <Link 
                  href="/governorg"
                  className="block px-4 py-3 text-lg font-bold text-white hover:text-[#D4AF37] rounded-lg transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  Government
                </Link>
                <Link 
                  href="/corporate"
                  className="block px-4 py-3 text-lg font-bold text-white hover:text-[#D4AF37] rounded-lg transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  Corporate
                </Link>
                <Link 
                  href="/legalsupport"
                  className="block px-4 py-3 text-lg font-bold text-white hover:text-[#D4AF37] rounded-lg transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  Legal Support
                </Link>
              </div>
            )}
          </div>

          <Link 
            className="block px-4 py-4 text-xl font-bold text-white hover:text-[#D4AF37] hover:bg-[#1B263B] rounded-lg transition-all duration-200"
            href="/blog"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <Link 
            className="block px-4 py-4 text-xl font-bold text-white hover:text-[#D4AF37] hover:bg-[#1B263B] rounded-lg transition-all duration-200"
            href="/whyus"
            onClick={() => setOpen(false)}
          >
            Why Us
          </Link>

          <Link
            className="block mt-4 px-4 py-4 text-xl font-bold text-center bg-[#D4AF37] text-[#0D1B2A] hover:bg-[#E8C252] rounded-lg shadow transition-all duration-200"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;