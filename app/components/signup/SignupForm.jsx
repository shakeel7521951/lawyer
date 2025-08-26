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
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SignupForm() {
  const { t } = useTranslation("signup/signupform");
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("individual");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Safe translation array
  const accountTypes = t("form.account_types", { returnObjects: true }) || [];

  return (
    <div className="min-h-screen flex items-center justify-center py-30 px-4 sm:px-8 md:px-12 lg:px-16 sm:py-36 bg-[#494c52]">
      <div
        className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-[#c0b688]"
        data-aos="zoom-in-down"
      >
        {/* Header */}
        <div className="bg-[#c0b688] py-5 px-4 sm:px-8 text-center">
          <h1 className="text-[#9f8660] font-serif text-2xl sm:text-3xl font-bold">
            {t("header.title")}
          </h1>
          <p className="text-white text-sm mt-2 tracking-wide">
            {t("header.subtitle")}
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-10">
          <h2
            className="text-2xl sm:text-3xl font-serif font-bold text-[#494c52] mb-8 text-center"
            data-aos="fade-up"
          >
            {t("form.heading")}
          </h2>

          {/* Account Type Selector */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Array.isArray(accountTypes) &&
              accountTypes.map((label, idx) => {
                const icons = [FaUser, FaBuilding, FaLandmark];
                const Icon = icons[idx];
                const type =
                  idx === 0
                    ? "individual"
                    : idx === 1
                    ? "corporate"
                    : "government";

                return (
                  <button
                    key={label}
                    onClick={() => setAccountType(type)}
                    className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg border transition-all duration-200 font-semibold text-sm
                      ${
                        accountType === type
                          ? "bg-[#c0b688] text-white border-[#9f8660]"
                          : " text-[#494c52] border-[#9f8660] hover:border-[#c0b688] hover:text-[#0D1B2A]"
                      }`}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                );
              })}
          </div>

          {/* Input Fields */}
          {[
            {
              label:
                accountType === "individual"
                  ? t("form.fields.individual.full_name.label")
                  : accountType === "corporate"
                  ? t("form.fields.corporate.company_name.label")
                  : t("form.fields.government.department_name.label"),
              placeholder:
                accountType === "individual"
                  ? t("form.fields.individual.full_name.placeholder")
                  : accountType === "corporate"
                  ? t("form.fields.corporate.company_name.placeholder")
                  : t("form.fields.government.department_name.placeholder"),
              icon:
                accountType === "individual"
                  ? FaUser
                  : accountType === "corporate"
                  ? FaBuilding
                  : FaUserTie,
              type: "text"
            },
            {
              label: t("form.fields.email.label"),
              placeholder: t("form.fields.email.placeholder"),
              icon: FaEnvelope,
              type: "email"
            },
            {
              label: t("form.fields.phone.label"),
              placeholder: t("form.fields.phone.placeholder"),
              icon: FaPhoneAlt,
              type: "tel"
            }
          ].map(({ label, placeholder, icon: Icon, type }, idx) => (
            <div className="mb-5" key={idx}>
              <label className="block text-[#494c52] font-semibold mb-2">
                {label}
              </label>
              <div className="relative">
                <Icon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#494c52]"
                  size={18}
                />
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full pl-10 pr-4 py-2 border border-[#9f8660] rounded-lg focus:ring-1 focus:ring-[#494c52] transition-all duration-200 outline-none"
                />
              </div>
            </div>
          ))}

          {/* Password & Confirm Password */}
          {[
            { label: t("form.fields.password.label") },
            { label: t("form.fields.confirm_password.label") }
          ].map(({ label }, idx) => (
            <div className="mb-5" key={label}>
              <label className="block text-[#494c52] font-semibold mb-2">
                {label}
              </label>
              <div className="relative">
                <FaLock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#494c52]"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-10 py-2 border border-[#9f8660] rounded-lg focus:ring-2 focus:ring-[#494c52] transition-all duration-200 outline-none"
                />
                {idx === 0 && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#494c52] hover:text-[#9f8660]"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
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
              className="mt-1 sm:mt-0 h-4 w-4 text-[#494c52] border-[#9f8660] rounded focus:ring-[#494c52]"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              {t("form.terms.text")}
              <Link href="#" className="text-[#9f8660] hover:underline">
                {t("form.terms.links.0")}
              </Link>{" "}
              {t("form.terms.links.1")}{" "}
              <Link href="#" className="text-[#9f8660] hover:underline">
                {t("form.terms.links.2")}
              </Link>
            </label>
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white font-semibold py-2 px-4 rounded-lg transform hover:scale-101 transition-all duration-300 shadow-lg hover:shadow-xl">
            {t("form.buttons.signup")}
          </button>

          {/* Already have an account */}
          <div className="text-center mt-4 text-[#0D1B2A]">
            {t("form.footer.prompt")}{" "}
            <Link
              href="/login"
              className="text-[#494c52] hover:text-[#9f8660] hover:underline font-medium"
            >
              {t("form.footer.login_link")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
