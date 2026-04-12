import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import HeroCamera from "../components/HeroCamera";
import { Typewriter } from "../components/ui/Typewriter";
import { heroWords, calculateSizes } from "../constants/index";

const Hero = () => {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className="min-h-screen w-full flex flex-col relative" id="home">
			{/* Text content */}
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10">
				<motion.p
					className="text-white-600 text-lg sm:text-xl font-medium text-center font-generalsans"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Hi, I&apos;m Sambit{" "}
					<span className="waving-hand">👋</span>
				</motion.p>

				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<h1 className="hero_tag text-gray_gradient">
						I Build{" "}
						<Typewriter
							text={heroWords}
							speed={70}
							deleteSpeed={40}
							waitTime={2000}
							className="text-accent"
							cursorChar="_"
						/>
					</h1>
				</motion.div>

				<motion.p
					className="text-white-500 text-sm sm:text-base text-center max-w-xl mx-auto font-generalsans"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					Freshman in college. Running a startup. Writing code that matters.
				</motion.p>

				<motion.div
					className="flex items-center justify-center gap-4 mt-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
				>
					<a
						href="#projects"
						className="px-6 py-3 bg-accent text-white rounded-lg font-medium text-sm hover:bg-accent-light transition-colors"
					>
						View My Work
					</a>
					<a
						href="#contact"
						className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium text-sm hover:bg-white/5 transition-colors"
					>
						Get in Touch
					</a>
				</motion.div>
			</div>

			{/* 3D Scene */}
			<div className="w-full h-full absolute inset-0">
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 20]} />
						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								position={sizes.deskPosition}
								rotation={[0, -Math.PI, 0]}
								scale={sizes.deskScale}
							/>
						</HeroCamera>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>

			{/* Scroll indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 0.6 }}
			>
				<a href="#about" className="flex flex-col items-center gap-2 group">
					<span className="text-white-500 text-xs">Scroll down</span>
					<motion.div
						className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1"
						animate={{ opacity: [1, 0.5, 1] }}
						transition={{ duration: 2, repeat: Infinity }}
					>
						<motion.div
							className="w-1 h-2 bg-white/40 rounded-full"
							animate={{ y: [0, 8, 0] }}
							transition={{ duration: 1.5, repeat: Infinity }}
						/>
					</motion.div>
				</a>
			</motion.div>
		</section>
	);
};

export default Hero;
