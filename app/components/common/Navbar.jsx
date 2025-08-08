'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serSt,setserSt]=useState(false)

  return (
    <nav className="bg-[#001f3f] text-white shadow-lg sticky top-0 z-50 p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with brand name - Left side */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img
              className="h-8 w-8"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/220px-Reddit_Logo_Icon.svg.png"
              alt="Logo"
            />
            <span className="text-xl font-semibold">Lawyer</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-14">
              <Link 
                className="text-white hover:text-[#FFD700] transition-colors duration-300 font-medium relative group"
                href="/"
              >
                Home
                <span className="absolute left-0 bottom-0 h-0.5 bg-[#FFD700] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                className="text-white hover:text-[#FFD700] transition-colors duration-300 font-medium relative group"
                href="/about"
              >
                About
                <span className="absolute left-0 bottom-0 h-0.5 bg-[#FFD700] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <li className='relative list-none  '
              onMouseEnter={()=>setserSt(true)}
              onMouseLeave={()=>setserSt(false)}
              >
                <Link 
                className="text-white  hover:text-[#FFD700] transition-colors duration-300 font-medium relative group"
                href="/services"
                 onMouseEnter={()=>setserSt(true)}
              onMouseLeave={()=>setserSt(false)}
              >
                Services
                <span className="absolute left-0 bottom-0 h-0.5 bg-[#FFD700] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              {serSt &&
              
              <div className='absolute bg-[#001F3F] text-black pr-5 pl-2 pt-10 pb-5 top-5  left-0'
               onMouseEnter={()=>setserSt(true)}
              onMouseLeave={()=>setserSt(false)}
              >
                <ul className='flex flex-col gap-3'>
                  <Link href="/IndvidualCustomer"><li className='whitespace-nowrap hover:text-amber-400 transition font-semibold text-sm text-white'>Individual Customers</li></Link>
                  <Link href="/governorg"><li className='whitespace-nowrap hover:text-amber-400 transition font-semibold text-sm text-white'>Govt Organization</li></Link>
                  <Link href="/corporate"><li className='whitespace-nowrap hover:text-amber-400 transition font-semibold text-sm text-white'>Corporate Business</li></Link>
                </ul>
              </div>
              }
              </li>

              <Link 
                className="text-white hover:text-[#FFD700] transition-colors duration-300 font-medium relative group"
                href="/whyus"
              >
                Why Us
                <span className="absolute left-0 bottom-0 h-0.5 bg-[#FFD700] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Contact Button - Right side */}
          <div className="hidden md:flex">
            <Link
              className="rounded-lg px-4 py-2 border-2 border-[#FFD700] text-white hover:bg-[#FFD700] hover:text-[#001f3f] transition-all duration-300 font-medium hover:shadow-lg hover:shadow-[#FFD700]/30"
              href="/contact"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFD700] focus:outline-none transition duration-150 ease-in-out"
              aria-label="Main menu"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#001a35] shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col ">
            <Link 
              className="px-3 py-2 text-center rounded-md text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-colors duration-300 font-medium"
              href="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link 
              className="px-3 py-2 text-center  rounded-md text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-colors duration-300 font-medium"
              href="/about"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link 
              className="px-3 py-2 text-center  rounded-md text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-colors duration-300 font-medium"
              href="/Services"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link 
              className="px-3 py-2 text-center  rounded-md text-white hover:text-[#FFD700] hover:bg-[#00264d] transition-colors duration-300 font-medium"
              href="/whyus"
              onClick={() => setOpen(false)}
            >
              Why Us
            </Link>
            <Link
              className="mt-2 mx-3 px-3 py-2 rounded-md border-2 border-[#FFD700] text-white hover:bg-[#FFD700] hover:text-[#001f3f] transition-colors duration-300 font-medium text-center"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;