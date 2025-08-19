"use client";
import React, { useState, useEffect, useRef } from "react";
import { Quote, Star, Users, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
	{
		id: 1,
		name: "Ahmed Al-Rashid",
		role: "CEO",
		company: "Qatar Investment Holdings",
		text: "Al Khaldi provided exceptional corporate legal services for our company incorporation and IP protection. Their expertise in commercial law and attention to regulatory compliance made our business expansion seamless across the GCC region.",
		img: "https://randomuser.me/api/portraits/men/44.jpg",
		rating: 5,
		service: "Corporate Services",
	},
	{
		id: 2,
		name: "Dr. Fatima Al-Zahra",
		role: "Legal Director",
		company: "Ministry of Commerce & Industry",
		text: "Working with Al Khaldi on legislative consultations and governance practices has been outstanding. Their understanding of regulatory compliance and institutional requirements exceeded our expectations.",
		img: "https://randomuser.me/api/portraits/women/46.jpg",
		rating: 5,
		service: "Government Relations",
	},
	{
		id: 3,
		name: "Khalid Al-Mansouri",
		role: "Private Individual",
		company: "Family Legal Matters",
		text: "The team handled my family law case with complete confidentiality and professionalism. Their expertise in civil and criminal law gave me confidence throughout the entire process.",
		img: "https://randomuser.me/api/portraits/men/65.jpg",
		rating: 5,
		service: "Individual Services",
	},
	{
		id: 4,
		name: "Noura Al-Thani",
		role: "Risk Manager",
		company: "Qatar National Bank",
		text: "Al Khaldi's banking legal services and AML compliance consultations have been invaluable. Their risk management expertise ensures we meet all international standards.",
		img: "https://randomuser.me/api/portraits/women/32.jpg",
		rating: 5,
		service: "Legal Support Services",
	},
];

const Comment = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.2 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	// Auto-rotate testimonials
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	const nextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	return (
		<section
			ref={sectionRef}
			className="relative w-full bg-gradient-to-br from-slate-50 via-white to-gray-100 py-12 md:py-20 overflow-hidden"
		>
			{/* Beautiful Gradient Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#c0b688]/5 via-transparent to-[#494c52]/5"></div>

			{/* Subtle Pattern Overlay */}
			<div className="absolute inset-0 opacity-3">
				<div className="absolute inset-0" style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, #c0b688 1px, transparent 0)`,
					backgroundSize: '20px 20px'
				}}></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
					{/* Badge */}
					<div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-[#c0b688]/20 mb-6 shadow-sm">
						<Users className="w-4 h-4 text-[#9f8660]" />
						<span className="text-[#494c52] font-medium text-sm">
							CLIENT TESTIMONIALS
						</span>
					</div>

					{/* Simple, Clean Title */}
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#494c52] leading-tight">
						What Our{' '}
						<span className="text-[#c0b688]">Clients Say</span>
					</h2>

					{/* Simple Description */}
					<p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Trusted by government, corporate, and individual clients across Qatar
					</p>
				</div>

				{/* Main Testimonial Card */}
				<div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
					<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 mb-8">
						<div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-center">

							{/* Content on Left */}
							<div className="lg:col-span-2 space-y-4 order-2 lg:order-1">
								{/* Quote Icon */}
								<div className="w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-xl flex items-center justify-center mb-4">
									<Quote className="w-6 h-6 text-white" />
								</div>

								{/* Testimonial Text */}
								<blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
									"{testimonials[currentTestimonial].text}"
								</blockquote>

								{/* Service Badge */}
								<div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-4 py-2">
									<CheckCircle className="w-4 h-4 text-[#9f8660]" />
									<span className="text-[#494c52] font-medium text-sm">
										{testimonials[currentTestimonial].service}
									</span>
								</div>

								{/* Rating */}
								<div className="flex space-x-1">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-5 h-5 text-[#c0b688] fill-current" />
									))}
								</div>
							</div>

							{/* Large Client Image on Right */}
							<div className="lg:col-span-1 text-center order-1 lg:order-2">
								<div className="relative inline-block mb-4">
									<div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
										<img
											src={testimonials[currentTestimonial].img}
											alt={testimonials[currentTestimonial].name}
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center shadow-lg">
										<CheckCircle className="w-4 h-4 text-white" />
									</div>
								</div>

								<div className="space-y-1">
									<h3 className="text-xl md:text-2xl font-bold text-[#494c52]">
										{testimonials[currentTestimonial].name}
									</h3>
									<p className="text-[#c0b688] font-medium">
										{testimonials[currentTestimonial].role}
									</p>
									<p className="text-gray-500 text-sm">
										{testimonials[currentTestimonial].company}
									</p>
								</div>
							</div>
						</div>

						{/* Navigation */}
						<div className="flex justify-center space-x-4 mt-8">
							<button
								onClick={prevTestimonial}
								className="w-10 h-10 bg-gray-100 hover:bg-[#c0b688] rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
							>
								<ChevronLeft className="w-5 h-5" />
							</button>
							<button
								onClick={nextTestimonial}
								className="w-10 h-10 bg-gray-100 hover:bg-[#c0b688] rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
							>
								<ChevronRight className="w-5 h-5" />
							</button>
						</div>
					</div>

					{/* Testimonial Grid - Mobile Responsive */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className={`cursor-pointer transition-all duration-300 ${
									index === currentTestimonial ? 'scale-105' : 'hover:scale-105'
								}`}
								onClick={() => setCurrentTestimonial(index)}
							>
								<div className={`bg-white rounded-xl p-3 md:p-4 shadow-lg transition-all duration-300 ${
									index === currentTestimonial 
										? 'border-2 border-[#c0b688] shadow-xl' 
										: 'border border-gray-100 hover:border-[#c0b688]/50'
								}`}>
									<div className="text-center space-y-2">
										<img
											src={testimonial.img}
											alt={testimonial.name}
											className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#c0b688]/20 object-cover mx-auto"
										/>
										<div>
											<h4 className="text-[#494c52] font-semibold text-xs md:text-sm">
												{testimonial.name.split(' ')[0]}
											</h4>
											<p className="text-[#c0b688] text-xs">
												{testimonial.role.split(' ')[0]}
											</p>
										</div>
										<div className="flex justify-center space-x-1">
											{[...Array(3)].map((_, i) => (
												<Star key={i} className="w-2.5 h-2.5 text-[#c0b688] fill-current" />
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Progress Dots */}
					<div className="flex justify-center space-x-2 mt-6">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentTestimonial(index)}
								className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
									index === currentTestimonial 
										? 'bg-[#c0b688] scale-125' 
										: 'bg-gray-300 hover:bg-[#c0b688]/50'
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Comment;
