"use client";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaBuilding,
  FaLandmark,
  FaUserTie,
  FaPhoneAlt
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("individual");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-12 bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-[#0D1B2A]">

        {/* Header */}
        <div className="bg-[#0D1B2A] py-5 px-4 sm:px-8 text-center">
          <h1 className="text-[#D4AF37] font-serif text-2xl sm:text-3xl font-bold">Al Khaldi Law Firm</h1>
          <p className="text-white text-sm mt-2 tracking-wide">Trusted Legal Excellence Since 2004</p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1B2A] mb-8 text-center">
            Create Your Account
          </h2>

          {/* Account Type Selector */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { type: "individual", icon: FaUser, label: "Individual" },
              { type: "corporate", icon: FaBuilding, label: "Corporate" },
              { type: "government", icon: FaLandmark, label: "Government" }
            ].map(({ type, icon: Icon, label }) => (
              <button
                key={type}
                onClick={() => setAccountType(type)}
                className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg border transition-all duration-200 font-semibold text-sm
                  ${accountType === type
                    ? "bg-[#D4AF37] text-[#0D1B2A] border-[#D4AF37]"
                    : "border-gray-300 text-gray-600 hover:border-[#D4AF37] hover:text-[#0D1B2A]"}`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>

          {/* Input Fields */}
          {[
            {
              label:
                accountType === "individual"
                  ? "Full Name"
                  : accountType === "corporate"
                  ? "Company Name"
                  : "Department Name",
              placeholder:
                accountType === "individual"
                  ? "John Doe"
                  : accountType === "corporate"
                  ? "Company LLC"
                  : "Ministry of...",
              icon:
                accountType === "individual"
                  ? FaUser
                  : accountType === "corporate"
                  ? FaBuilding
                  : FaUserTie,
              type: "text"
            },
            {
              label: "Email Address",
              placeholder: "example@example.com",
              icon: FaEnvelope,
              type: "email"
            },
            {
              label: "Phone Number",
              placeholder: "+974 1234 5678",
              icon: FaPhoneAlt,
              type: "tel"
            }
          ].map(({ label, placeholder, icon: Icon, type }, idx) => (
            <div className="mb-5" key={idx}>
              <label className="block text-[#0D1B2A] font-semibold mb-2">{label}</label>
              <div className="relative">
                <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0D1B2A]" size={18} />
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#D4AF37] transition-all duration-200 outline-none"
                />
              </div>
            </div>
          ))}

          {/* Password & Confirm Password */}
          {["Password", "Confirm Password"].map((label, idx) => (
            <div className="mb-5" key={label}>
              <label className="block text-[#0D1B2A] font-semibold mb-2">{label}</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0D1B2A]" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] transition-all duration-200 outline-none"
                />
                {idx === 0 && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0D1B2A]"
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Terms */}
          <div className="flex items-start sm:items-center mb-6">
            <input
              id="terms"
              type="checkbox"
              className="mt-1 sm:mt-0 h-4 w-4 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37]"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I agree to the{" "}
              <Link href="#" className="text-[#D4AF37] hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#D4AF37] hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Sign Up */}
          <button className="w-full bg-[#0D1B2A] hover:bg-[#D4AF37] hover:text-[#0D1B2A] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
            Sign Up
          </button>

          {/* Already have an account */}
          <div className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#D4AF37] hover:text-[#0D1B2A] hover:underline font-medium">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
