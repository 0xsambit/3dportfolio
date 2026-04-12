import { cn } from "../../lib/utils";
import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const TechCard = ({ name, icon, color, className }) => {
	const ref = useRef(null);
	const [isHovered, setIsHovered] = useState(false);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const lightSize = 80;
	const lightX = useTransform(x, (value) => value - lightSize / 2);
	const lightY = useTransform(y, (value) => value - lightSize / 2);

	const handleMouseMove = (event) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		x.set(event.clientX - rect.left);
		y.set(event.clientY - rect.top);
	};

	return (
		<div
			ref={ref}
			className={cn(
				"relative overflow-hidden rounded-xl border border-white/10 bg-black-200 p-5",
				"transition-all duration-300 hover:border-white/20 hover:-translate-y-0.5",
				"flex items-center gap-4 cursor-default",
				className
			)}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Mouse-following light */}
			{isHovered && (
				<motion.div
					className="absolute rounded-full pointer-events-none"
					style={{
						width: lightSize,
						height: lightSize,
						background: "rgba(255, 255, 255, 0.08)",
						filter: "blur(30px)",
						x: lightX,
						y: lightY,
					}}
				/>
			)}

			<div className="relative z-10 flex items-center gap-4 w-full">
				<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
					<img src={icon} alt={name} className="w-6 h-6 object-contain" />
				</div>
				<span className="text-sm font-medium text-white-800">{name}</span>
				<div
					className="w-2 h-2 rounded-full ml-auto flex-shrink-0"
					style={{ backgroundColor: color }}
				/>
			</div>
		</div>
	);
};

export { TechCard };
