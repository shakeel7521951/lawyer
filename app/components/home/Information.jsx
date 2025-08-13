"use client";
import React, { useState, useEffect, useRef } from "react";
import { Scale, Building2, Users, Shield, ChevronRight, Globe, Award, CheckCircle } from "lucide-react";

const services = [
	{
		id: 1,
		title: "Corporate Law",
		subtitle: "Business Solutions",
		description:
			"Strategic corporate legal services including mergers, acquisitions, and compliance for multinational corporations.",
		image: "/about/ab.jpeg",
		features: ["M&A Advisory", "Corporate Governance", "Compliance", "Contracts"],
		icon: Building2,
		color: "from-[#9f8660]/80 to-[#c0b688]/80",
	},
	{
		id: 2,
		title: "Government Relations",
		subtitle: "Public Sector",
		description:
			"Specialized legal counsel for government entities and regulatory compliance across the GCC region.",
		image: "/home/government.jpg",
		features: [
			"Regulatory Affairs",
			"Public Procurement",
			"Policy Development",
			"Administrative Law",
		],
		icon: Shield,
		color: "from-[#c0b688]/80 to-[#9f8660]/80",
	},
	{
		id: 3,
		title: "Individual Services",
		subtitle: "Personal Legal",
		description:
			"Comprehensive personal legal services covering family law, real estate, and immigration matters.",
		image: "/about/ab3.jpeg",
		features: ["Family Law", "Real Estate", "Immigration", "Personal Injury"],
		icon: Users,
		color: "from-[#494c52]/80 to-[#9f8660]/80",
	},
	{
		id: 4,
		title: "Legal Support",
		subtitle: "Advisory Services",
		description:
			"Full-spectrum legal support including litigation, arbitration, and ongoing advisory services.",
		image: "/about/ab4.jpeg",
		features: ["Litigation", "Arbitration", "Legal Research", "Advisory"],
		icon: Scale,
		color: "from-[#9f8660]/80 to-[#494c52]/80",
	},
];

const stats = [
	{ number: "25+", label: "Years Experience", icon: Award },
	{ number: "500+", label: "Cases Won", icon: CheckCircle },
	{ number: "1000+", label: "Clients Served", icon: Users },
	{ number: "6", label: "GCC Countries", icon: Globe },
];

const Information = () => {
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
				className="relative w-full bg-gradient-to-b from-white to-gray-50 py-16 overflow-hidden"
			>
				<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header Section */}
					<div
						className={`text-center mb-16 transition-all duration-700 ${
							isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
					>
						{/* Badge */}
						<div className="inline-flex items-center space-x-2 bg-[#c0b688]/10 rounded-full px-6 py-2 border border-[#c0b688]/20 mb-6">
							<Scale className="w-4 h-4 text-[#9f8660]" />
							<span className="text-[#494c52] font-semibold text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
								LEGAL EXPERTISE
							</span>
						</div>

						{/* Title */}
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#494c52] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
							Strategic Legal Excellence
						</h2>

						{/* Subtitle */}
						<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
							Al-Khaldi provides comprehensive legal services combining traditional
							expertise with modern solutions across the GCC region.
						</p>
					</div>

					{/* Stats Section */}
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
						{stats.map((stat, index) => (
							<div
								key={index}
								className={`text-center transition-all duration-500 delay-${index * 100} ${
									isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
								}`}
							>
								<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
									<div className="w-12 h-12 bg-gradient-to-r from-[#c0b688] to-[#9f8660] rounded-lg flex items-center justify-center mx-auto mb-4">
										<stat.icon className="w-6 h-6 text-white" />
									</div>
									<div
										className="text-2xl font-bold text-[#494c52] mb-1"
										style={{ fontFamily: "'Cormorant Garamond', serif" }}
									>
										{stat.number}
									</div>
									<div className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
										{stat.label}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Services Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<div
								key={service.id}
								className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
									isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
								}`}
								style={{ transitionDelay: `${index * 150}ms` }}
							>
								{/* Card Container */}
								<div className="relative h-80 overflow-hidden">
									{/* Background Image */}
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
									/>

									{/* Smooth gradient overlay - stronger at bottom for text visibility */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 via-black/10 to-transparent"></div>

									{/* Content */}
									<div className="absolute inset-0 p-6 flex flex-col justify-between">
										{/* Top Section */}
										<div className="flex justify-between items-start">
											<div className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
												<service.icon className="w-6 h-6 text-white" />
											</div>
										</div>

										{/* Bottom Section */}
										<div className="space-y-4">
											<div>
												<p className="text-[#c0b688] text-sm font-medium uppercase tracking-wider mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
													{service.subtitle}
												</p>
												<h3
													className="text-2xl font-bold text-white mb-3 leading-tight"
													style={{ fontFamily: "'Cormorant Garamond', serif" }}
												>
													{service.title}
												</h3>
												<p className="text-white/95 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
													{service.description}
												</p>
											</div>

											{/* Features */}
											<div className="grid grid-cols-2 gap-2 mb-4">
												{service.features.map((feature, idx) => (
													<div key={idx} className="flex items-center space-x-2">
														<CheckCircle className="w-3 h-3 text-[#c0b688]" />
														<span className="text-white/90 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
															{feature}
														</span>
													</div>
												))}
											</div>

											{/* CTA */}
											<button className="flex items-center space-x-2 text-white hover:text-[#c0b688] transition-colors duration-300 group/btn">
												<span className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Learn More</span>
												<ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* CTA Section */}
					<div
						className={`mt-16 text-center transition-all duration-700 delay-600 ${
							isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
					>
						<div className="bg-gradient-to-r from-[#494c52] to-[#9f8660] rounded-2xl p-12 text-white">
							<h3
								className="text-2xl sm:text-3xl font-bold mb-4 leading-tight"
								style={{ fontFamily: "'Cormorant Garamond', serif" }}
							>
								Ready for Legal Excellence?
							</h3>
							<p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
								Trust Al-Khaldi for your legal matters across the GCC region
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button className="bg-white text-[#494c52] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
									Schedule Consultation
								</button>
								<button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
									View Services
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Information;
