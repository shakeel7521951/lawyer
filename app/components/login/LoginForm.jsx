"use client";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; 
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LoginForm() {
  const {t} = useTranslation ('login/loginform')
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // sirf ek baar chale
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-32 bg-[#494c52]">
      {/* Luxury Card */}
      <div
        className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden border border-[#c0b688]"
        data-aos="zoom-in-up"
      >
        {/* Gold Header */}
        <div className="bg-[#c0b688] py-6 px-4 sm:px-8 text-center">
          <h1 className="text-[#9f8660] font-serif text-2xl sm:text-3xl font-bold">
            {t("header.title")}
          </h1>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <h2
            className="mb-6 text-center text-2xl sm:text-3xl font-serif font-bold text-[#494c52]"
            data-aos="zoom-out"
          >
            {t("welcome_section.heading")}
          </h2>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-[#494c52] font-semibold mb-2">
              {t("form_fields.email.label")}
            </label>
            <div className="relative">
              <FaEnvelope
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#494c52]"
                size={18}
              />
              <input
                type="email"
                placeholder={t("form_fields.email.placeholder")}
                className="w-full pl-10 pr-4 py-2 border border-[#9f8660] rounded-lg focus:ring-1 focus:ring-[#494c52] transition-all duration-200 outline-none"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-[#494c52] font-semibold mb-2">
              {t("form_fields.password.label")}
            </label>
            <div className="relative">
              <FaLock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#494c52]"
                size={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-10 py-2 border border-[#9f8660] outline-none rounded-lg focus:ring-1 focus:ring-[#494c52] transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0D1B2A]"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <Link
              href="/forgot-password"
              className="text-[#494c52] hover:text-[#9f8660] hover:underline text-sm"
            >
              {t("links.forgot_password")}
            </Link>
          </div>

          {/* Login Button */}
          <button className="w-full bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white font-bold py-2 px-4 rounded transform hover:scale-101 transition-all duration-300 shadow-lg hover:shadow-xl">
            {t("buttons.login")}
          </button>

          {/* Signup Link */}
          <div className="mt-6 text-center text-[#0D1B2A]">
            <span>{t("links.signup_prompt")}</span>
            <Link
              href="/signup"
              className="text-[#494c52] hover:text-[#9f8660] hover:underline font-medium"
            >
              {t("links.signup_link")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
