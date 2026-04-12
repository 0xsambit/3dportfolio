import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { BentoGrid, BentoCard } from "../components/ui/BentoGrid";
import { TextReveal } from "../components/ui/TextReveal";
import { ScrollReveal } from "../components/ui/ScrollReveal";

const About = () => {
	const globeEl = useRef();
	const [hasCopy, setHasCopy] = useState(false);

	useEffect(() => {
		const globe = globeEl.current;
		if (globe) {
			globe.controls().autoRotate = true;
			globe.controls().autoRotateSpeed = 2;
		}
	}, []);

	const handleCopy = () => {
		navigator.clipboard.writeText("sambitsingha777@gmail.com");
		setHasCopy(true);
		setTimeout(() => setHasCopy(false), 2000);
	};

	return (
		<section className="c-space my-20" id="about">
			{/* Text Reveal */}
			<div className="mb-16">
				<TextReveal text="I believe great products come from founders who write their own code. I'm building Epocheye to prove that AR can make heritage tourism immersive and accessible." />
			</div>

			{/* Bento Grid */}
			<ScrollReveal direction="up" delay={0.1}>
				<BentoGrid className="auto-rows-[20rem] md:auto-rows-[22rem]">
					{/* Card 1 - Founder */}
					<BentoCard className="md:col-span-2 md:row-span-1">
						<div className="flex flex-col h-full justify-between">
							<div>
								<div className="flex items-center gap-2 mb-3">
									<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
									<span className="text-xs font-medium text-green-400 uppercase tracking-wider">
										Building
									</span>
								</div>
								<h3 className="text-2xl font-bold text-white mb-3">
									Founder at Epocheye
								</h3>
								<p className="text-white-600 leading-relaxed">
									Building an AR-based heritage tourism platform with STPI
									incubation backing. The platform enables tourists to explore
									historical sites through immersive augmented reality overlays,
									following a B2B2C model targeting tourist boards and the
									Archaeological Survey of India.
								</p>
							</div>
							<div className="flex gap-2 mt-4 flex-wrap">
								{["React Native", "Go", "AWS", "TypeScript"].map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</BentoCard>

					{/* Card 2 - Developer */}
					<BentoCard className="md:col-span-1 md:row-span-1">
						<div className="flex flex-col h-full">
							<img
								src="/assets/grid2.png"
								alt="tech-stack"
								className="w-full h-32 object-contain mb-4"
							/>
							<h3 className="text-lg font-semibold text-white mb-2">
								Full-Stack Developer
							</h3>
							<p className="text-sm text-white-600 leading-relaxed">
								2 years of experience across React, Next.js, React Native,
								and Rust. Currently focused on app development and systems
								programming.
							</p>
						</div>
					</BentoCard>

					{/* Card 3 - Globe */}
					<BentoCard className="md:col-span-1 md:row-span-1">
						<div className="flex flex-col h-full items-center justify-center">
							<div className="rounded-3xl w-full h-40 flex justify-center items-center">
								<Globe
									ref={globeEl}
									height={200}
									width={200}
									backgroundColor="rgba(0,0,0,0)"
									backgroundImageOpacity={0.5}
									showAtmosphere
									showGraticules
									globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
									bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
								/>
							</div>
							<div className="text-center mt-2">
								<p className="text-lg font-semibold text-white">Based in India</p>
								<p className="text-sm text-white-600">
									Remote work available across time zones
								</p>
							</div>
						</div>
					</BentoCard>

					{/* Card 4 - Passion */}
					<BentoCard className="md:col-span-1 md:row-span-1">
						<div className="flex flex-col h-full">
							<img
								src="/assets/grid3.png"
								alt="coding"
								className="w-full h-32 object-contain mb-4"
							/>
							<h3 className="text-lg font-semibold text-white mb-2">
								Passion for Building
							</h3>
							<p className="text-sm text-white-600 leading-relaxed">
								I love solving problems through code. From compilers in Rust to
								AR apps — coding isn&apos;t just my profession, it&apos;s how I think.
							</p>
						</div>
					</BentoCard>

					{/* Card 5 - Contact */}
					<BentoCard className="md:col-span-1 md:row-span-1">
						<div className="flex flex-col h-full items-center justify-center">
							<p className="text-white-600 text-sm mb-4">Reach out to me</p>
							<div
								className="flex items-center gap-2 cursor-pointer group"
								onClick={handleCopy}
							>
								<img
									src={hasCopy ? "assets/tick.svg" : "assets/copy.svg"}
									alt="copy"
									className="w-5 h-5"
								/>
								<p className="text-base font-medium text-white group-hover:text-accent transition-colors">
									sambitsingha777@gmail.com
								</p>
							</div>
							{hasCopy && (
								<p className="text-xs text-green-400 mt-2">Copied!</p>
							)}
						</div>
					</BentoCard>
				</BentoGrid>
			</ScrollReveal>
		</section>
	);
};

export default About;
