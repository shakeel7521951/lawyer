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
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function ContactForm() {

  const {t}= useTranslation("contact/contact")
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    consultationLanguage: "",
    caseCategory: "",
    caseDetails: "",
    uploadedFiles: [],
    consultationMethod: "",
    preferredDateTime: "",
    urgencyLevel: "",
    consentGiven: false,
    honeypot: "", // Hidden field for spam protection
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
    email: "info@alkhaldilaw firm.net",
    website: "www.alkhaldilaw firm.net",
    whatsapp: "+97466164000",
  };

  const serviceTypes = [
    t("form.corporate"),
    t("form.govt"),
    t("form.individual"),
    t("form.banking"),
    t("form.arbitration"),
    t("form.risk"),
    t("form.compliance"),
    t("form.other"),
  // Form options
  const consultationLanguages = [
    { value: "english", label: "English" },
    { value: "arabic", label: "Arabic" },
    { value: "both", label: "Both" },
  ];

  const caseCategories = [
    { value: "contracts", label: "Contracts" },
    { value: "employment", label: "Employment" },
    { value: "family", label: "Family" },
    { value: "real-estate", label: "Real Estate" },
    { value: "business", label: "Business" },
    { value: "criminal", label: "Criminal" },
    { value: "corporate", label: "Corporate Services" },
    { value: "banking", label: "Banking Legal Services" },
    { value: "arbitration", label: "Arbitration" },
    { value: "other", label: "Other" },
  ];

  const consultationMethods = [
    { value: "in-person", label: "In-Person" },
    { value: "online", label: "Online" },
    { value: "phone", label: "Phone Call" },
  ];

  const urgencyLevels = [
    { value: "normal", label: "Normal" },
    { value: "urgent", label: "Urgent" },
    { value: "very-urgent", label: "Very Urgent" },
  ];

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Check honeypot (spam protection)
    if (formData.honeypot) {
      return false;
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.consultationLanguage) {
      newErrors.consultationLanguage = "Please select consultation language";
    }

    if (!formData.caseCategory) {
      newErrors.caseCategory = "Please select case category";
    }

    if (!formData.caseDetails.trim()) {
      newErrors.caseDetails = "Case details are required";
    } else if (formData.caseDetails.trim().length < 20) {
      newErrors.caseDetails =
        "Please provide more detailed case information (at least 20 characters)";
    }

    if (!formData.consultationMethod) {
      newErrors.consultationMethod = "Please select consultation method";
    }

    if (!formData.preferredDateTime) {
      newErrors.preferredDateTime = "Please select preferred date and time";
    }

    if (!formData.urgencyLevel) {
      newErrors.urgencyLevel = "Please select urgency level";
    }

    if (!formData.consentGiven) {
      newErrors.consentGiven = "Please accept the consent agreement";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];

    const validFiles = files.filter((file) => {
      if (!allowedTypes.includes(file.type)) {
        alert(
          `File ${file.name} is not supported. Please upload PDF, Word, or Image files only.`
        );
        return false;
      }
      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        alert(
          `File ${file.name} is too large. Please upload files under 10MB.`
        );
        return false;
      }
      return true;
    });

    setFormData((prev) => ({
      ...prev,
      uploadedFiles: [...prev.uploadedFiles, ...validFiles].slice(0, 5), // Max 5 files
    }));
  };

  // Remove uploaded file
  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format consultation details for WhatsApp
      const whatsappMessage = formatWhatsAppMessage();

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
          consultationLanguage: "",
          caseCategory: "",
          caseDetails: "",
          uploadedFiles: [],
          consultationMethod: "",
          preferredDateTime: "",
          urgencyLevel: "",
          consentGiven: false,
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

  // Format message for WhatsApp
  const formatWhatsAppMessage = () => {
    const fileNames =
      formData.uploadedFiles.length > 0
        ? formData.uploadedFiles.map((file) => file.name).join(", ")
        : "No files attached";

    return `🏛️ CONSULTATION BOOKING REQUEST - AL KHALDI Law Firm

📝 PERSONAL INFORMATION:
• Full Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email}

🗣️ CONSULTATION PREFERENCES:
• Language: ${
      consultationLanguages.find(
        (l) => l.value === formData.consultationLanguage
      )?.label
    }
• Method: ${
      consultationMethods.find((m) => m.value === formData.consultationMethod)
        ?.label
    }
• Preferred Date/Time: ${new Date(formData.preferredDateTime).toLocaleString()}

⚖️ CASE INFORMATION:
• Category: ${
      caseCategories.find((c) => c.value === formData.caseCategory)?.label
    }
• Urgency: ${
      urgencyLevels.find((u) => u.value === formData.urgencyLevel)?.label
    }

📋 CASE DETAILS:
${formData.caseDetails}

📎 DOCUMENTS: ${fileNames}

✅ Consent: Client confirms information accuracy and understands this does not create a lawyer-client relationship until formally accepted.

--
Sent via AL KHALDI Law Firm Contact Form`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const openWhatsApp = () => {
    const message = `Hello AL KHALDI Law Firm,\n\nI would like to inquire about legal services.\n\nName: ${
      formData.fullName || "[Your Name]"
    }\nCase Category: ${
      caseCategories.find((c) => c.value === formData.caseCategory)?.label ||
      "[Case Category]"
    }\nMessage: ${formData.caseDetails || "[Your Message]"}\n\nThank you.`;
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
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23494c52' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                        CONSULTATION BOOKING
                      </span>
                    </div>

                    <h2
                      className="text-3xl lg:text-4xl font-bold text-[#494c52] mb-4 leading-tight"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                     {t("form.sendmsg")}
                      Book Your Legal{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f8660] to-[#c0b688]">
                        Consultation
                      </span>
                    </h2>

                    <p
                      className="text-lg text-gray-600 leading-relaxed"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                     {t("form.desc")}
                      Get expert legal advice tailored to your specific needs.
                      Our team will respond within 24 hours to discuss your
                      case.
                    </p>
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus && (
                    <div
                      className={`mb-6 p-4 rounded-xl border ${
                        submitStatus === "success"
                          ? "bg-green-50 border-green-200 text-green-800"
                          : "bg-red-50 border-red-200 text-red-800"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {submitStatus === "success" ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <AlertCircle className="w-5 h-5" />
                        )}
                        <span
                          className="font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {submitStatus === "success"
                            ? "Consultation request sent successfully! We'll get back to you soon via WhatsApp."
                            : "Error sending consultation request. Please try again or contact us directly."}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Form */}
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
                      style={{ display: "none" }}
                      tabIndex="-1"
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    {/* Personal Information Section */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3
                        className="text-lg font-semibold text-[#494c52] mb-4 flex items-center space-x-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        <User className="w-5 h-5 text-[#9f8660]" />
                        <span>Personal Information</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Full Name *
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
                              placeholder="Enter your full name"
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
                        {/* Phone Number */}
                        <div>
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Phone Number (WhatsApp) *
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
                        <div className="md:col-span-2">
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Email Address *
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
                              placeholder="Enter your email address"
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
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label
                          className="block text-sm font-medium text-[#494c52] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("form.phone")} *
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
                    {/* Consultation Preferences Section */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3
                        className="text-lg font-semibold text-[#494c52] mb-4 flex items-center space-x-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        <MessageSquare className="w-5 h-5 text-[#9f8660]" />
                        <span>Consultation Preferences</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Consultation Language */}
                        <div>
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Preferred Consultation Language *
                          </label>
                          <select
                            name="consultationLanguage"
                            value={formData.consultationLanguage}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 ${
                              errors.consultationLanguage
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 hover:border-[#c0b688]/50"
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            <option value="">Select language</option>
                            {consultationLanguages.map((lang) => (
                              <option key={lang.value} value={lang.value}>
                                {lang.label}
                              </option>
                            ))}
                          </select>
                          {errors.consultationLanguage && (
                            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                              <AlertCircle className="w-4 h-4" />
                              <span>{errors.consultationLanguage}</span>
                            </p>
                          )}
                        </div>

                        {/* Consultation Method */}
                        <div>
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Preferred Consultation Method *
                          </label>
                          <select
                            name="consultationMethod"
                            value={formData.consultationMethod}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 ${
                              errors.consultationMethod
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 hover:border-[#c0b688]/50"
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            <option value="">Select method</option>
                            {consultationMethods.map((method) => (
                              <option key={method.value} value={method.value}>
                                {method.label}
                              </option>
                            ))}
                          </select>
                          {errors.consultationMethod && (
                            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                              <AlertCircle className="w-4 h-4" />
                              <span>{errors.consultationMethod}</span>
                            </p>
                          )}
                        </div>

                        {/* Preferred Date & Time */}
                        <div>
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Preferred Date & Time *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="datetime-local"
                              name="preferredDateTime"
                              value={formData.preferredDateTime}
                              onChange={handleChange}
                              min={new Date().toISOString().slice(0, 16)}
                              className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 ${
                                errors.preferredDateTime
                                  ? "border-red-300 bg-red-50"
                                  : "border-gray-200 hover:border-[#c0b688]/50"
                              }`}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                          </div>
                          {errors.preferredDateTime && (
                            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                              <AlertCircle className="w-4 h-4" />
                              <span>{errors.preferredDateTime}</span>
                            </p>
                          )}
                        </div>

                      {/* Service Type */}
                      <div>
                        <label
                          className="block text-sm font-medium text-[#494c52] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t("form.serviceType")} *
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        {/* Urgency Level */}
                        <div>
                          <label
                            className="block text-sm font-medium text-[#494c52] mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Urgency Level *
                          </label>
                          <select
                            name="urgencyLevel"
                            value={formData.urgencyLevel}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 ${
                              errors.urgencyLevel
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 hover:border-[#c0b688]/50"
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            <option value="">{t("form.selectServ")}</option>
                            {serviceTypes.map((service) => (
                              <option key={service} value={service}>
                                {service}
                            <option value="">Select urgency</option>
                            {urgencyLevels.map((level) => (
                              <option key={level.value} value={level.value}>
                                {level.label}
                              </option>
                            ))}
                          </select>
                          {errors.urgencyLevel && (
                            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                              <AlertCircle className="w-4 h-4" />
                              <span>{errors.urgencyLevel}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className="block text-sm font-medium text-[#494c52] mb-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {t("form.Msg")} *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 resize-none ${
                          errors.message
                            ? "border-red-300 bg-red-50"
                            : "border-gray-200 hover:border-[#c0b688]/50"
                        }`}
                        placeholder={t("form.mesgDesc")}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    {/* Case Information Section */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3
                        className="text-lg font-semibold text-[#494c52] mb-4 flex items-center space-x-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        <Scale className="w-5 h-5 text-[#9f8660]" />
                        <span>Case Information</span>
                      </h3>

                      {/* Case Category */}
                      <div className="mb-4">
                        <label
                          className="block text-sm font-medium text-[#494c52] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Case Category *
                        </label>
                        <select
                          name="caseCategory"
                          value={formData.caseCategory}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 ${
                            errors.caseCategory
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 hover:border-[#c0b688]/50"
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <option value="">Select case category</option>
                          {caseCategories.map((category) => (
                            <option key={category.value} value={category.value}>
                              {category.label}
                            </option>
                          ))}
                        </select>
                        {errors.caseCategory && (
                          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.caseCategory}</span>
                          </p>
                        )}
                      </div>

                      {/* Case Details */}
                      <div className="mb-4">
                        <label
                          className="block text-sm font-medium text-[#494c52] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Case Details *
                        </label>
                        <textarea
                          name="caseDetails"
                          value={formData.caseDetails}
                          onChange={handleChange}
                          rows="4"
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c0b688]/50 focus:border-[#c0b688] transition-all duration-300 resize-none ${
                            errors.caseDetails
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 hover:border-[#c0b688]/50"
                          }`}
                          placeholder="Please provide a clear and detailed description of your legal case, including relevant facts, timeline, and any specific concerns you have..."
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        />
                        {errors.caseDetails && (
                          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.caseDetails}</span>
                          </p>
                        )}
                      </div>

                      {/* File Upload */}
                      <div>
                        <label
                          className="block text-sm font-medium text-[#494c52] mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Upload Documents (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#c0b688]/50 transition-colors duration-300">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p
                            className="text-sm text-gray-600 mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Upload relevant documents (PDF, Word, Images)
                          </p>
                          <p
                            className="text-xs text-gray-500 mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Max file size: 10MB, Max files: 5
                          </p>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="file-upload"
                          />
                          <label
                            htmlFor="file-upload"
                            className="inline-flex items-center px-4 py-2 bg-[#c0b688]/10 text-[#9f8660] rounded-lg hover:bg-[#c0b688]/20 transition-colors duration-200 cursor-pointer"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            Choose Files
                          </label>
                        </div>

                        {/* Display uploaded files */}
                        {formData.uploadedFiles.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {formData.uploadedFiles.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200"
                              >
                                <div className="flex items-center space-x-2">
                                  <FileText className="w-4 h-4 text-[#9f8660]" />
                                  <span
                                    className="text-sm text-gray-700 truncate"
                                    style={{
                                      fontFamily: "'Inter', sans-serif",
                                    }}
                                  >
                                    {file.name}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="text-red-500 hover:text-red-700 transition-colors duration-200"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Consent Section */}
                    <div className="bg-[#c0b688]/5 border border-[#c0b688]/20 rounded-xl p-6">
                      <h3
                        className="text-lg font-semibold text-[#494c52] mb-4 flex items-center space-x-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        <Shield className="w-5 h-5 text-[#9f8660]" />
                        <span>Consent & Agreement</span>
                      </h3>

                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="consentGiven"
                          checked={formData.consentGiven}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 text-[#c0b688] bg-gray-100 border-gray-300 rounded focus:ring-[#c0b688]/50 focus:ring-2"
                        />
                        <div>
                          <p
                            className="text-sm text-gray-700 leading-relaxed"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            I confirm that the information provided is accurate
                            and that this request does not create a
                            lawyer-client relationship until formally accepted
                            by AL KHALDI Law Firm. I understand that this
                            consultation booking is subject to availability and
                            confirmation from the firm.
                          </p>
                          {errors.consentGiven && (
                            <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                              <AlertCircle className="w-4 h-4" />
                              <span>{errors.consentGiven}</span>
                            </p>
                          )}
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
                          {isSubmitting ? t("form.sending") : t("form.sendMsg")}
                          {isSubmitting
                            ? "Sending..."
                            : "Send Consultation Request"}
                        </span>
                      </button>

                      {/* <button
                        type="button"
                        onClick={openWhatsApp}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513" />
                        </svg>
                        <span>{t("form.wtsp")}</span>
                      </button>
                        <span>WhatsApp</span>
                      </button> */}
                    </div>
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
                            <span>Sun - Thu:</span>
                            <span className="text-[#c0b688]">
                              8:00 AM - 6:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between text-white/90">
                            <span>Friday:</span>
                            <span className="text-[#c0b688]">
                              2:00 PM - 6:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between text-white/90">
                            <span>Saturday:</span>
                            <span className="text-white/60">Closed</span>
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
