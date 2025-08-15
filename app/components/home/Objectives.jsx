"use client";
import React, { useState, useEffect, useRef } from "react";
import { Scale, Target, Users, Shield, Award, ChevronRight, CheckCircle } from "lucide-react";

const objectives = [
	{
		id: 1,
		title: "Establish Sound Legal Practice",
		description:
			"We strive to etch our name in the legal arena by meticulously establishing an entity rooted in sound legal practice, respecting laws and institutions, and executing the vision of His Highness the Amir of the State.",
		icon: Scale,
		color: "from-[#c0b688] to-[#9f8660]",
	},
	{
		id: 2,
		title: "Complete Professional Competence",
		description:
			"Our professionalism in client services is achieved through complete competence, experience, and unwavering credibility in all legal matters while expediting legal and judicial procedures without compromising service quality.",
		icon: Target,
		color: "from-[#9f8660] to-[#494c52]",
	},
	{
		id: 3,
		title: "Engage with Local Community",
		description:
			"We engage with our local environment by understanding community needs and providing legal assistance to those in need, promoting legal awareness for all members of society.",
		icon: Users,
		color: "from-[#494c52] to-[#c0b688]",
	},
	{
		id: 4,
		title: "Expand International Practice",
		description:
			"On an international scale, we broaden our client base and expand our practice to a wider geographic scope, enhancing our position as a legal institution within the Qatari and international community.",
		icon: Shield,
		color: "from-[#c0b688] to-[#9f8660]",
	},
	{
		id: 5,
		title: "Innovation in Legal Services",
		description:
			"We embrace new methods in our tasks to suit the current scientific and societal progress, breaking away from traditional legal practices with innovative approaches that align with technological advancements.",
		icon: Award,
		color: "from-[#9f8660] to-[#494c52]",
	},
];

const Objectives = () => {
	const [activeObjective, setActiveObjective] = useState(0);
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

	// Auto-progress through objectives
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveObjective((prev) => (prev + 1) % objectives.length);
		}, 4000);
		return () => clearInterval(interval);
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
				className="relative w-full bg-gradient-to-br from-[#494c52] via-[#494c52] to-[#9f8660] py-16 sm:py-20 overflow-hidden"
			>
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0 bg-repeat opacity-40"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`,
						}}
					></div>
				</div>

				{/* Floating Elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-20 left-10 w-2 h-2 bg-[#c0b688] rounded-full animate-pulse opacity-40"></div>
					<div className="absolute top-40 right-20 w-1 h-1 bg-[#c0b688] rounded-full animate-pulse opacity-30 delay-1000"></div>
					<div className="absolute bottom-32 left-32 w-3 h-3 bg-[#9f8660] rounded-full animate-pulse opacity-35 delay-500"></div>
					<div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-25 delay-700"></div>
				</div>

				<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header */}
					<div
						className={`text-center mb-16 transition-all duration-700 ${
							isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
					>
						{/* Badge */}
						<div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-[#c0b688]/30 mb-6">
							<Target className="w-4 h-4 text-[#c0b688]" />
							<span
								className="text-[#c0b688] font-semibold text-sm tracking-wider"
								style={{ fontFamily: "'Inter', sans-serif" }}
							>
								OUR MISSION
							</span>
						</div>

						{/* Title */}
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
							Strategic{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0b688] to-[#9f8660]">
								Objectives
							</span>
							<br />
							for Legal Excellence
						</h2>

						{/* Description */}
						<p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
							At{" "}
							<span className="font-semibold text-[#c0b688]">الخالدي Al-Khaldi</span>, our mission is guided by five core objectives that ensure exceptional legal services, client success, and professional excellence across the GCC region.
						</p>
					</div>

					{/* Vertical Zigzag Layout */}
					<div
						className={`transition-all duration-700 delay-300 ${
							isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
					>
						{/* Vertical Connecting Line */}
						<div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-white/20 hidden lg:block">
							<div
								className="w-full bg-gradient-to-b from-[#c0b688] to-[#9f8660] transition-all duration-2000 ease-out"
								style={{ height: `${((activeObjective + 1) / objectives.length) * 100}%` }}
							></div>
						</div>

						<div className="space-y-16 lg:space-y-24 relative">
							{objectives.map((objective, index) => (
								<div
									key={objective.id}
									className={`relative transition-all duration-700 ${
										index <= activeObjective ? "opacity-100 translate-y-0" : "opacity-60 translate-y-8"
									}`}
									style={{ transitionDelay: `${index * 200}ms` }}
								>
									{/* Desktop Zigzag Layout */}
									<div className="hidden lg:block">
										<div className={`grid grid-cols-2 gap-16 items-center ${index % 2 === 0 ? "" : "direction-rtl"}`}>
											{/* Content Side */}
											<div className={`${index % 2 === 0 ? "order-1" : "order-2"} space-y-6`}>
												<div
													className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
														index === activeObjective ? "border-[#c0b688]/50 bg-white/15" : ""
													} group cursor-pointer`}
													onClick={() => setActiveObjective(index)}
												>
													{/* Number Badge */}
													<div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
														{objective.id}
													</div>

													<div className="space-y-4">
														<div className="flex items-center space-x-4">
															<div
																className={`w-16 h-16 bg-gradient-to-br ${objective.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
															>
																<objective.icon className="w-8 h-8 text-white" />
															</div>
															<div>
																<h3 className="text-2xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
																	{objective.title}
																</h3>
															</div>
														</div>

														<p className="text-white/90 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
															{objective.description}
														</p>

														{/* Active indicator */}
														{index === activeObjective && (
															<div className="flex items-center space-x-2 mt-4">
																<CheckCircle className="w-5 h-5 text-[#c0b688]" />
																<span className="text-[#c0b688] text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
																	Currently Active
																</span>
															</div>
														)}
													</div>
												</div>
											</div>

											{/* Connecting Circle Side */}
											<div className={`${index % 2 === 0 ? "order-2" : "order-1"} flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
												<div className="relative">
													{/* Large Central Circle */}
													<div
														className={`w-24 h-24 rounded-full border-4 transition-all duration-500 ${
															index <= activeObjective
																? "border-[#c0b688] bg-gradient-to-br from-[#c0b688] to-[#9f8660]"
																: "border-white/30 bg-white/10"
														} flex items-center justify-center shadow-2xl cursor-pointer group hover:scale-110`}
														onClick={() => setActiveObjective(index)}
													>
														<objective.icon className={`w-10 h-10 transition-colors duration-300 ${index <= activeObjective ? "text-white" : "text-white/50"}`} />

														{/* Pulse effect for active */}
														{index === activeObjective && (
															<div className="absolute inset-0 rounded-full bg-[#c0b688] animate-ping opacity-30"></div>
														)}
													</div>

													{/* Connecting Line to Center */}
													<div
														className={`absolute top-1/2 transform -translate-y-0.5 w-16 h-1 bg-white/20 ${
															index % 2 === 0 ? "-right-16" : "-left-16"
														}`}
													>
														<div
															className={`h-full bg-gradient-to-r from-[#c0b688] to-[#9f8660] transition-all duration-500 ${
																index <= activeObjective ? "w-full" : "w-0"
															}`}
														></div>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* Mobile Layout */}
									<div className="lg:hidden">
										<div className="flex items-start space-x-4">
											{/* Connecting line for mobile */}
											{index < objectives.length - 1 && (
												<div className="absolute left-8 top-20 w-0.5 h-24 bg-white/20">
													<div
														className={`w-full bg-gradient-to-b from-[#c0b688] to-[#9f8660] transition-all duration-500 ${
															index < activeObjective ? "h-full" : "h-0"
														}`}
													></div>
												</div>
											)}

											{/* Circle */}
											<div
												className={`w-16 h-16 rounded-full border-4 transition-all duration-500 ${
													index <= activeObjective
														? "border-[#c0b688] bg-gradient-to-br from-[#c0b688] to-[#9f8660]"
														: "border-white/30 bg-white/10"
												} flex items-center justify-center shadow-lg flex-shrink-0`}
											>
												<objective.icon className={`w-6 h-6 transition-colors duration-300 ${index <= activeObjective ? "text-white" : "text-white/50"}`} />
											</div>

											{/* Content */}
											<div
												className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 transition-all duration-500 flex-1 ${
													index === activeObjective ? "border-[#c0b688]/50 bg-white/15" : ""
												}`}
											>
												<div className="flex items-start justify-between mb-3">
													<h3 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
														{objective.title}
													</h3>
													<div className="w-8 h-8 bg-gradient-to-br from-[#c0b688] to-[#9f8660] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg flex-shrink-0">
														{objective.id}
													</div>
												</div>
												<p className="text-white/90 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
													{objective.description}
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Progress Indicator */}
						{/*<div className="flex justify-center mt-12 space-x-2">*/}
						{/*	{objectives.map((_, index) => (*/}
						{/*		<button*/}
						{/*			key={index}*/}
						{/*			onClick={() => setActiveObjective(index)}*/}
						{/*			className={`w-3 h-3 rounded-full transition-all duration-300 ${*/}
						{/*				index === activeObjective ? "bg-[#c0b688] scale-125" : "bg-white/30 hover:bg-[#c0b688]/50"*/}
						{/*			}`}*/}
						{/*		/>*/}
						{/*	))}*/}
						{/*</div>*/}
					</div>

					{/* Bottom CTA */}
					{/*<div*/}
					{/*	className={`text-center mt-16 transition-all duration-700 delay-500 ${*/}
					{/*		isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"*/}
					{/*	}`}*/}
					{/*>*/}
					{/*	<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white border border-white/20">*/}
					{/*		<h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>*/}
					{/*			Experience Our Commitment to Excellence*/}
					{/*		</h3>*/}
					{/*		<p className="text-lg text-white/90 mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>*/}
					{/*			Let Al-Khaldi guide you through your legal journey with our proven objectives and unwavering dedication.*/}
					{/*		</p>*/}
					{/*		<button className="bg-gradient-to-r from-[#c0b688] to-[#9f8660] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#9f8660] hover:to-[#494c52] transition-all duration-300 transform hover:scale-105 shadow-lg">*/}
					{/*			Get Started Today*/}
					{/*		</button>*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>
			</section>
		</>
	);
};

export default Objectives;
