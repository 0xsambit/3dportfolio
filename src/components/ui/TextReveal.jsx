import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

const Word = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className="relative mx-1 lg:mx-2">
			<span className="absolute opacity-20">{children}</span>
			<motion.span style={{ opacity }} className="text-white">
				{children}
			</motion.span>
		</span>
	);
};

const TextReveal = ({ text, className }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start 0.9", "start 0.25"],
	});

	const words = text.split(" ");

	return (
		<p
			ref={targetRef}
			className={cn(
				"flex flex-wrap text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed",
				className
			)}
		>
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;
				return (
					<Word key={i} progress={scrollYProgress} range={[start, end]}>
						{word}
					</Word>
				);
			})}
		</p>
	);
};

export { TextReveal };
