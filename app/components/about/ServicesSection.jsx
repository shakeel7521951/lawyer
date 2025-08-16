// components/ServicesSection.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";

const servicesData = [
	{
		title: "Corporate Legal Services",
		subtitle: "Comprehensive Legal Solutions for Corporations",
		icon: (
			<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
				<path
					fillRule="evenodd"
					d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
					clipRule="evenodd"
				/>
			</svg>
		),
		points: [
			"Providing legal consultations for the incorporation of companies",
			"Intellectual property rights, patents, trademarks, and copyrights protection",
			"Foreign investments and subsidiaries establishment consultations",
			"Governance and transparency best practices guidance",
			"Comprehensive tax law consultations for corporations",
			"Commercial disputes representation before all court levels",
			"Company policies and internal regulations preparation",
			"Commercial contracts and agreements drafting (Arabic & English)",
			"Financial institution financing contracts preparation",
			"Partnership, merger, and acquisition agreements drafting",
			"Lease and employment contracts preparation",
		],
	},
	{
		title: "Government & Quasi-Government Services",
		subtitle: "Specialized Legal Support for Public Institutions",
		icon: (
			<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
				<path
					fillRule="evenodd"
					d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm3 3a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"
					clipRule="evenodd"
				/>
			</svg>
		),
		points: [
			"Latest legislative developments consultations",
			"Governance and transparency best practices",
			"Regulatory bodies inquiries handling (Audit Bureau, investigation committees)",
			"Government tendering and bidding procedures compliance",
			"Government institutions asset investment consultations",
			"Executive regulations and internal policies review",
			"Institutional contracts and agreements preparation",
			"Judicial and international agreements drafting",
			"Real estate lease contracts preparation",
			"Regular legal management team consultations",
			"Institutional disputes court representation",
			"Arbitration and alternative dispute resolution services",
		],
	},
	{
		title: "Individual Legal Services",
		subtitle: "Personal Legal Support for Every Need",
		icon: (
			<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
				<path
					fillRule="evenodd"
					d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
					clipRule="evenodd"
				/>
			</svg>
		),
		points: [
			"Civil, criminal, and family cases consultations",
			"Sole proprietorships incorporation and management",
			"Bankruptcy and financial settlements assistance",
			"Intellectual property and patents consultations",
			"Labor disputes and compensation claims support",
			"Visa and residency applications for abroad",
			"Consumer protection and defective services consultations",
			"Expat properties and investments guidance",
			"Residential and commercial lease contracts",
			"Personal contracts and agreements review",
			"Outstanding debts collection services",
			"Wills, estates, and inheritance dispute resolution",
			"Comprehensive court representation across all case types",
			"Criminal cases representation at Public Prosecution",
			"Accident compensation and insurance dispute settlement",
		],
	},
	{
		title: "Banking Legal Services",
		subtitle: "Specialized Financial Sector Legal Solutions",
		icon: (
			<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
				<path
					fillRule="evenodd"
					d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm3 3a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"
					clipRule="evenodd"
				/>
			</svg>
		),
		intro: "Providing comprehensive legal and advisory services to financial institutions through effective client communication and solution-oriented approaches for debt collection and dispute resolution.",
		points: [
			"Banking contracts and agreements drafting (loans, mortgages, services)",
			"Non-performing loans and contractual disputes representation",
			"Bank mergers and acquisitions legal advisory",
			"Banking arbitration and amicable dispute settlement",
		],
	},
];

export default function ServicesSection() {
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
		<section
			ref={sectionRef}
			className="relative w-full bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] py-16 sm:py-20 overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div
					className="absolute inset-0 bg-repeat opacity-40"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
					}}
				></div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-40"></div>
				<div className="absolute top-40 right-20 w-1 h-1 bg-[#c0b688] rounded-full animate-pulse opacity-30 delay-1000"></div>
				<div className="absolute bottom-32 left-32 w-3 h-3 bg-[#9f8660] rounded-full animate-pulse opacity-35 delay-500"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12 sm:mb-16">
					<h2
						className={`text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c0b688] to-[#9f8660] mb-4 transition-all duration-1000 ${
							isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
						style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
					>
						Our Legal Services
					</h2>

					{/* Decorative underline */}
					<div className="flex items-center justify-center space-x-3 mt-4">
						<div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#c0b688]"></div>
						<div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
						<div
							className="text-[#c0b688] text-sm font-light tracking-[0.3em]"
							style={{ fontFamily: "'Cinzel', serif" }}
						>
							COMPREHENSIVE • PROFESSIONAL • TRUSTED
						</div>
						<div className="w-2 h-2 bg-[#c0b688] rounded-full animate-pulse"></div>
						<div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#c0b688]"></div>
					</div>

					<p
						className="text-lg text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed"
						style={{ fontFamily: "'Cormorant Garamond', serif" }}
					>
						Comprehensive legal solutions tailored to meet the diverse needs of our
						clients across all sectors
					</p>
				</div>

				{/* Services Grid */}
				<div className="space-y-12">
					{servicesData.map((service, index) => (
						<div
							key={index}
							className={`transition-all duration-1000 delay-${
								index * 200 + 300
							} ${
								isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
							}`}
						>
							<div className="bg-white/10 backdrop-blur-sm border border-[#c0b688]/20 rounded-3xl overflow-hidden hover:border-[#c0b688]/40 transition-all duration-500 group">
								{/* Header */}
								<div className="bg-gradient-to-r from-white/20 via-white/10 to-[#c0b688]/20 px-8 py-8 text-white relative">
									<div className="absolute inset-0 bg-black/10"></div>
									<div className="relative flex items-center justify-between">
										<div className="flex items-center">
											<div className="w-16 h-16 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
												<div className="text-white">{service.icon}</div>
											</div>
											<div>
												<h3
													className="text-2xl md:text-3xl font-bold mb-2"
													style={{ fontFamily: "'Playfair Display', serif" }}
												>
													{service.title}
												</h3>
												<p
													className="text-[#c0b688] text-lg"
													style={{ fontFamily: "'Cinzel', serif" }}
												>
													{service.subtitle}
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Content */}
								<div className="p-8 md:p-12">
									{service.intro && (
										<div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-[#c0b688]/20 mb-8">
											<p className="text-white/90 leading-relaxed text-lg font-medium">
												{service.intro}
											</p>
										</div>
									)}

									{/* Services List */}
									<div className="grid md:grid-cols-2 gap-4">
										{service.points.map((point, idx) => (
											<div
												key={idx}
												className="flex items-start space-x-3 p-4 bg-white/10 rounded-xl border border-[#c0b688]/10 hover:border-[#c0b688]/20 transition-all duration-300"
											>
												<div className="flex-shrink-0 mt-1">
													<div className="w-2 h-2 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full"></div>
												</div>
												<p
													className="text-white/80 leading-relaxed text-sm"
													style={{ fontFamily: "'Cormorant Garamond', serif" }}
												>
													{point}
												</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
