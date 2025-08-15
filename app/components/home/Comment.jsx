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
		text: "Working with Al Khaldi on legislative consultations and governance practices has been outstanding. Their understanding of regulatory compliance and institutional requirements exceeded our expectations. Professional excellence at its finest.",
		img: "https://randomuser.me/api/portraits/women/46.jpg",
		rating: 5,
		service: "Government Relations",
	},
	{
		id: 3,
		name: "Khalid Al-Mansouri",
		role: "Private Individual",
		company: "Family Legal Matters",
		text: "The team handled my family law case with complete confidentiality and professionalism. Their expertise in civil and criminal law, combined with their ethical standards, gave me confidence throughout the entire process.",
		img: "https://randomuser.me/api/portraits/men/65.jpg",
		rating: 5,
		service: "Individual Services",
	},
	{
		id: 4,
		name: "Noura Al-Thani",
		role: "Risk Manager",
		company: "Qatar National Bank",
		text: "Al Khaldi's banking legal services and AML compliance consultations have been invaluable. Their risk management expertise and professional associations network ensure we meet all international standards with confidence.",
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
		<>
			{/* Google Fonts */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
				rel="stylesheet"
			/>

			<section
				ref={sectionRef}
				className="relative w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 overflow-hidden"
			>
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div className="absolute inset-0 bg-repeat opacity-20" style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23494c52' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
					}}></div>
				</div>

				{/* Floating Elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-30"></div>
					<div className="absolute top-40 right-20 w-1 h-1 bg-[#9f8660] rounded-full animate-pulse opacity-25 delay-1000"></div>
					<div className="absolute bottom-32 left-32 w-3 h-3 bg-[#494c52] rounded-full animate-pulse opacity-20 delay-500"></div>
					<div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#c0b688] rounded-full animate-pulse opacity-15 delay-700"></div>
				</div>

				<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

					{/* Header */}
					<div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

						{/* Badge */}
						<div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-6 py-2 border border-[#c0b688]/20 mb-6">
							<Users className="w-4 h-4 text-[#9f8660]" />
							<span className="text-[#494c52] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
								CLIENT TESTIMONIALS
							</span>
						</div>

						{/* Title */}
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#494c52] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
							What Our{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
								Clients Say
							</span>
							<br />
							About الخالدي
						</h2>

						{/* Description */}
						<p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
							Hear from our satisfied clients across government, corporate, and individual sectors who have experienced Al-Khaldi's commitment to legal excellence.
						</p>
					</div>

					{/* Main Testimonial Showcase */}
					<div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

						{/* Featured Testimonial - Dark Card */}
						<div className="relative mb-8">
							<div className="bg-gradient-to-br from-[#494c52] to-[#9f8660] rounded-2xl p-6 sm:p-8 border border-[#c0b688]/20 shadow-2xl">

								{/* Noise Effect */}
								<div className="absolute inset-0 opacity-10 rounded-3xl">
									<div className="absolute inset-0 bg-repeat opacity-40" style={{
										backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`
									}}></div>
								</div>

								{/* Quote Icon */}
								<div className="relative z-10 flex justify-center mb-6">
									<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/30">
										<Quote className="w-6 h-6 text-white" />
									</div>
								</div>

								<div className="relative z-10 grid lg:grid-cols-3 gap-6 items-center">

									{/* Client Photo & Info */}
									<div className="lg:col-span-1 text-center">
										<div className="relative inline-block mb-4">
											<img
												src={testimonials[currentTestimonial].img}
												alt={testimonials[currentTestimonial].name}
												className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-3 border-[#c0b688] object-cover shadow-xl"
											/>
											<div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center shadow-lg">
												<CheckCircle className="w-4 h-4 text-white" />
											</div>
										</div>

										<h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
											{testimonials[currentTestimonial].name}
										</h3>
										<p className="text-[#c0b688] font-medium mb-1 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
											{testimonials[currentTestimonial].role}
										</p>
										<p className="text-white/70 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
											{testimonials[currentTestimonial].company}
										</p>

										{/* Rating */}
										<div className="flex justify-center space-x-1 mt-3">
											{[...Array(5)].map((_, i) => (
												<Star key={i} className="w-3 h-3 text-[#c0b688] fill-current" />
											))}
										</div>
									</div>

									{/* Testimonial Content */}
									<div className="lg:col-span-2 space-y-4">
										<blockquote className="text-lg sm:text-xl text-white/95 leading-relaxed italic" style={{ fontFamily: "'Crimson Text', serif" }}>
											"{testimonials[currentTestimonial].text}"
										</blockquote>

										<div className="flex items-center space-x-3">
											<div className="w-6 h-6 bg-[#c0b688]/20 rounded-lg flex items-center justify-center">
												<CheckCircle className="w-3 h-3 text-[#c0b688]" />
											</div>
											<span className="text-[#c0b688] font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
												Service: {testimonials[currentTestimonial].service}
											</span>
										</div>
									</div>
								</div>

								{/* Navigation Arrows */}
								<div className="relative z-10 flex justify-center space-x-4 mt-6">
									<button
										onClick={prevTestimonial}
										className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#494c52] transition-all duration-300 transform hover:scale-110"
									>
										<ChevronLeft className="w-4 h-4" />
									</button>
									<button
										onClick={nextTestimonial}
										className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#494c52] transition-all duration-300 transform hover:scale-110"
									>
										<ChevronRight className="w-4 h-4" />
									</button>
								</div>
							</div>
						</div>

						{/* Testimonial Grid - Dark Cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
							{testimonials.map((testimonial, index) => (
								<div
									key={testimonial.id}
									className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
										index === currentTestimonial ? 'scale-105' : ''
									}`}
									onClick={() => setCurrentTestimonial(index)}
								>
									<div className={`bg-gradient-to-br from-[#494c52] to-[#9f8660] rounded-xl p-4 border transition-all duration-300 shadow-lg hover:shadow-xl ${
										index === currentTestimonial 
											? 'border-[#c0b688] ring-2 ring-[#c0b688]/30' 
											: 'border-[#c0b688]/20 hover:border-[#c0b688]/50'
									}`}>

										<div className="text-center space-y-3">
											<img
												src={testimonial.img}
												alt={testimonial.name}
												className="w-12 h-12 rounded-full border-2 border-[#c0b688] object-cover mx-auto"
											/>

											<div>
												<h4 className="text-white font-semibold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
													{testimonial.name}
												</h4>
												<p className="text-[#c0b688] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
													{testimonial.role}
												</p>
											</div>

											<div className="flex justify-center space-x-1">
												{[...Array(5)].map((_, i) => (
													<Star key={i} className="w-2.5 h-2.5 text-[#c0b688] fill-current" />
												))}
											</div>

											{/* Active indicator */}
											{index === currentTestimonial && (
												<div className="w-1.5 h-1.5 bg-[#c0b688] rounded-full mx-auto animate-pulse"></div>
											)}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Progress Dots */}
						<div className="flex justify-center space-x-3 mt-6">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentTestimonial(index)}
									className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
										index === currentTestimonial 
											? 'bg-[#c0b688] scale-125' 
											: 'bg-gray-300 hover:bg-[#c0b688]/50'
									}`}
								/>
							))}
						</div>
					</div>

					{/* Stats Section */}
					{/*<div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>*/}
					{/*	<div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300 text-center">*/}
					{/*		<div className="text-3xl font-bold text-[#494c52] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>98%</div>*/}
					{/*		<div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Client Satisfaction</div>*/}
					{/*	</div>*/}
					{/*	<div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300 text-center">*/}
					{/*		<div className="text-3xl font-bold text-[#494c52] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>500+</div>*/}
					{/*		<div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Happy Clients</div>*/}
					{/*	</div>*/}
					{/*	<div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300 text-center">*/}
					{/*		<div className="text-3xl font-bold text-[#494c52] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>25+</div>*/}
					{/*		<div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Years Experience</div>*/}
					{/*	</div>*/}
					{/*	<div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#c0b688]/30 transition-all duration-300 text-center">*/}
					{/*		<div className="text-3xl font-bold text-[#494c52] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>6</div>*/}
					{/*		<div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>GCC Countries</div>*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>
			</section>
		</>
	);
};

export default Comment;
