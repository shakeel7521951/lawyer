"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";


const ContactForm = () => {
    const initialFormState = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    };

    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const contactInfo = [
        { icon: FaPhoneAlt, title: 'Phone', items: ['+974 1234 5678', '+974 8765 4321'] },
        { icon: FaEnvelope, title: 'Email', items: ['contact@alkhaldilaw.com', 'support@alkhaldilaw.com'] },
        { icon: FaMapMarkerAlt, title: 'Address', items: ['Al Fardan Towers', 'West Bay, Doha, Qatar'] },
        { icon: FaClock, title: 'Working Hours', items: ['Sunday - Thursday: 8AM - 6PM', 'Friday - Saturday: Closed'] }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
                setFormData(initialFormState);
            }, 1500);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="md:flex">
                    {/* Contact Information Sidebar */}
                    <div className="md:w-1/3 bg-gradient-to-b from-[#001f3f] to-blue-900 p-10 text-white">
                        <h3 className="text-2xl font-bold mb-8 border-b border-gold-500 pb-4">Get in Touch</h3>
                        <div className="space-y-8">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-start group">
                                    <div className="border border-[#FFD700] p-3 rounded-full mr-4 flex-shrink-0 transition-all duration-300 group-hover:bg-[#FFD700] group-hover:scale-110 group-hover:shadow-lg">
                                        <item.icon className="text-xl group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gold-400">{item.title}</h4>
                                        {item.items.map((text, i) => (
                                            <p key={i} className="mt-1 text-gray-300">{text}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-2/3 p-10">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#001f3f] mb-2">Contact Our Legal Team</h2>
                        <p className="text-gray-600 mb-8">Complete the form below and we'll respond within 24 hours</p>

                        {submitSuccess && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 rounded">
                                <div className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <h4 className="font-medium text-green-800">Message Sent Successfully!</h4>
                                        <p className="text-sm text-green-700 mt-1">We've received your inquiry and will contact you shortly.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {['name', 'email', 'phone', 'subject'].map(field => (
                                    <div key={field}>
                                        <label htmlFor={field} className="block text-sm font-medium text-[#001f3f] mb-2">
                                            {field === 'phone' ? 'Phone' : `${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                                        </label>
                                        {field === 'subject' ? (
                                            <select
                                                id={field}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition`}
                                            >
                                                <option value="">Select a subject</option>
                                                {['Legal Consultation', 'Corporate Law', 'Litigation', 'Real Estate', 'Other'].map(option => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                                id={field}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition`}
                                                placeholder={
                                                    field === 'name' ? 'John Doe' : 
                                                    field === 'email' ? 'your.email@example.com' : 
                                                    field === 'phone' ? '+974 1234 5678' : ''
                                                }
                                            />
                                        )}
                                        {errors[field] && <p className="mt-2 text-sm text-red-600">{errors[field]}</p>}
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#001f3f] mb-2">Your Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition`}
                                    placeholder="Describe your legal needs..."
                                />
                                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;