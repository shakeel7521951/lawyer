"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  User,
  MessageSquare,
  Calendar,
  Clock,
  FileText,
  Upload,
  X,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Scale,
  Shield,
  Users,
} from "lucide-react";

export default function ConsultationForm({ isOpen, onClose }) {
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
      const whatsappUrl = `https://wa.me/97466164000?text=${encodeURIComponent(
        whatsappMessage
      )}`;
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
        onClose();
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
Sent via AL KHALDI Law Firm Consultation Form`;
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

  // Don't render if modal is not open
  if (!isOpen) return null;

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

      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-10 h-screen">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-[#494c52] to-[#9f8660] p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#c0b688]/30 rounded-full blur-xl"></div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Book Legal Consultation
                  </h2>
                  <p
                    className="text-[#c0b688] text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    AL KHALDI Law Firm & Legal Consultations
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
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
                      ? "Consultation request sent successfully! We'll contact you soon via WhatsApp."
                      : "Error sending consultation request. Please try again."}
                  </span>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                              style={{ fontFamily: "'Inter', sans-serif" }}
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
                      I confirm that the information provided is accurate and
                      that this request does not create a lawyer-client
                      relationship until formally accepted by AL KHALDI Law
                      Firm. I understand that this consultation booking is
                      subject to availability and confirmation from the firm.
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

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-8 py-4 rounded-xl font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>
                    {isSubmitting ? "Sending..." : "Send Consultation Request"}
                  </span>
                </button>

                <p
                  className="text-xs text-gray-500 text-center mt-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Your consultation request will be sent via WhatsApp to our
                  legal team
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
