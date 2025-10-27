"use client";
import React, { useState, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  Building,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Calendar,
  FileText,
  Upload,
  Scale,
  Shield,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const {t}= useTranslation("contact/contact")
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    services: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  // AL KHALDI Law Firm contact information
  const firmInfo = {
    address:
      t("form.address"),
    phones: ["+974 6616 4000", "+974 4009 8889"],
    email: "info@alkhaldilawfirm.net",
    website: "www.alkhaldilawfirm.net",
    whatsapp: "+97466164000",
  };

  // Services options
  const servicesOptions = [
    { value: "corporate", label: t("form.corporate") },
    { value: "government", label: t("form.govt") },
    { value: "individual", label:t("form.individual")  },
    { value: "banking", label: t("form.banking") },
    { value: "arbitration", label: t("form.arbitration") },
    { value: "risk-management", label: t("form.risk") },
    { value: "compliance", label:t("form.compliance") },
    { value: "other", label: t("form.other") },
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simple validation
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName =t("form.nameRequired");
    if (!formData.phone) newErrors.phone = t("form.phoneRequ");
    if (!formData.email) newErrors.email =  t("form.emailRequ");
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    setErrors({});

    try {
      // Format WhatsApp message
      const whatsappMessage = `New Contact Request:\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nServices: ${formData.services}\nMessage: ${formData.message}`;

      // Open WhatsApp with the formatted message
      const whatsappUrl = `https://wa.me/${firmInfo.whatsapp.replace(
        /[^\d]/g,
        ""
      )}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank");

      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          services: "",
          message: "",
          honeypot: "",
        });
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = `Hello AL KHALDI Law Firm,\n\nI would like to inquire about legal services.\n\nName: ${
      formData.fullName || "[Your Name]"
    }\nServices: ${
      servicesOptions.find((s) => s.value === formData.services)?.label ||
      "[Service]"
    }\nMessage: ${formData.message || "[Your Message]"}\n\nThank you.`;
    const whatsappUrl = `https://wa.me/${firmInfo.whatsapp.replace(
      /[^\d]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <section
        id="contact-form"
        className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat opacity-20"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23494c52' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-100 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#c0b688]/20 to-[#9f8660]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-[#494c52]/10 to-[#c0b688]/10 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-4 py-2 border border-[#c0b688]/20 mb-4">
                      <Scale className="w-4 h-4 text-[#9f8660]" />
                      <span
                        className="text-[#494c52] font-medium text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                      {t("form.contactform")}
                      </span>
                    </div>
                  </div>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Honeypot for spam protection */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      style={{ display: "none" }}
                    />

                    {/* Personal Information Section */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3
                        className="text-lg font-semibold text-[#494c52] mb-4 flex items-center space-x-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        <User className="w-5 h-5 text-[#9f8660]" />
                        <span>{t("form.contactInfor")}</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {t("form.name")} *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 ${
                                errors.fullName
                                  ? "border-red-300 bg-red-50"
                                  : "border-gray-200 hover:border-[#c0b688]/50"
                              }`}
                              placeholder={t("form.inputName")}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                          </div>
                          {errors.fullName && (
                            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                              <AlertCircle className="w-4 h-4" />
                              <span>{errors.fullName}</span>
                            </p>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {t("form.phone")} ({t("form.wtsp")}) *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 ${
                                errors.phone
                                  ? "border-red-300 bg-red-50"
                                  : "border-gray-200 hover:border-[#c0b688]/50"
                              }`}
                              placeholder="+974 XXXX XXXX"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                          </div>
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                              <AlertCircle className="w-4 h-4" />
                              <span>{errors.phone}</span>
                            </p>
                          )}
                        </div>
                         {/* Email */}
                        <div>
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {t("form.email")} *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 ${
                                errors.email
                                  ? "border-red-300 bg-red-50"
                                  : "border-gray-200 hover:border-[#c0b688]/50"
                              }`}
                              placeholder={t("form.inputEmail")}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                          </div>
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                              <AlertCircle className="w-4 h-4" />
                              <span>{errors.email}</span>
                            </p>
                          )}
                        </div>

                        {/* Services */}
                        <div>
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                           {t("form.serviceType")}
                          </label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                              name="services"
                              value={formData.services}
                              onChange={handleChange}
                              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 hover:border-[#c0b688]/50 appearance-none"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              <option value="">{t("form.selectServ")}</option>
                              {servicesOptions.map((service) => (
                                <option key={service.value} value={service.value}>
                                  {service.label}
                                </option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {t("form.Msg")}
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full pl-11 pr-4 py-3 h-32 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 hover:border-[#c0b688]/50"
                              placeholder={t("form.mesgDesc")}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-8 py-3 rounded-xl font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Send className="w-5 h-5" />
                        )}
                        <span>
                          {isSubmitting
                            ? t("form.sending")
                            : t("form.sendReq")}
                        </span>
                      </button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {t("form.MsgSendSucfu")}
                        </p>
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {t("form.MsgSendErro")}
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Office Info */}
              <div className="bg-gradient-to-br from-[#494c52] to-[#9f8660] rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#c0b688]/30 rounded-full blur-lg"></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      الخالدي AL KHALDI
                    </h3>
                    <p
                      className="text-[#c0b688] font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                     {t("form.firm")}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4
                          className="font-semibold mb-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                        {t("form.officeAddress")}
                        </h4>
                        <p
                          className="text-white/90 text-sm leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {firmInfo.address}
                        </p>
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4
                          className="font-semibold mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("form.phone")}
                        </h4>
                       {firmInfo.phones.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone}`}
                            className="block text-[#c0b688] hover:text-white transition-colors duration-200 text-sm mb-1"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4
                          className="font-semibold mb-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("form.email")}
                        </h4>
                        <a
                          href={`mailto:${firmInfo.email}`}
                          className="text-[#c0b688] hover:text-white transition-colors duration-200 text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {firmInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h4
                          className="font-semibold mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("form.businessHour")}
                        </h4>
                        <div
                          className="space-y-1 text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <div className="flex justify-between text-white/90">
                            <span>{t("form.sunthur")}</span>
                            <span className="text-[#c0b688]">
                              8:00 AM - 6:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between text-white/90">
                            <span>{t("form.friday")}</span>
                            <span className="text-[#c0b688]">
                              2:00 PM - 6:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between text-white/90">
                            <span>{t("form.saturday")}</span>
                            <span className="text-white/60">{t("form.closed")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3
                  className="text-xl font-bold text-[#494c52] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                 {t("form.quickContact")}
                </h3>

                <div className="space-y-3">
                  <a
                    href={`tel:${firmInfo.phones[0]}`}
                    className="flex items-center space-x-3 p-3 bg-[#c0b688]/10 rounded-xl hover:bg-[#c0b688]/20 transition-colors duration-200 group"
                  >
                    <Phone className="w-5 h-5 text-[#9f8660] group-hover:scale-110 transition-transform duration-200" />
                    <span
                      className="font-medium text-[#494c52]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t("form.callNow")}
                    </span>
                  </a>

                  <a
                    href={`mailto:${firmInfo.email}`}
                    className="flex items-center space-x-3 p-3 bg-[#c0b688]/10 rounded-xl hover:bg-[#c0b688]/20 transition-colors duration-200 group"
                  >
                    <Mail className="w-5 h-5 text-[#9f8660] group-hover:scale-110 transition-transform duration-200" />
                    <span
                      className="font-medium text-[#494c52]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t("form.SendEmail")}
                    </span>
                  </a>

                  <button
                    onClick={openWhatsApp}
                    className="w-full flex items-center space-x-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200 group"
                  >
                    <svg
                      className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513" />
                    </svg>
                    <span
                      className="font-medium text-green-700"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                     {t("form.wtspChat")}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}