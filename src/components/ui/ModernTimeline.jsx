import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Timeline = ({ items, className }) => {
	if (!items || items.length === 0) return null;

	return (
		<section className={cn("w-full max-w-3xl mx-auto py-8", className)}>
			<div className="relative">
				{/* Vertical line */}
				<div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/60 to-accent/10" />

				{/* Animated progress line */}
				<motion.div
					className="absolute left-[18px] top-0 w-[2px] bg-accent origin-top"
					initial={{ scaleY: 0 }}
					whileInView={{ scaleY: 1 }}
					transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
					viewport={{ once: true }}
				/>

				<div className="space-y-10">
					{items.map((item, index) => (
						<motion.div
							key={index}
							className="relative flex gap-6 items-start"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: [0.25, 0.46, 0.45, 0.94],
							}}
							viewport={{ once: true, margin: "-30px" }}
						>
							{/* Timeline node */}
							<div className="relative z-10 flex-shrink-0">
								{item.icon ? (
									<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-black-100 shadow-lg bg-black-200">
										<img
											src={item.icon}
											alt={item.name}
											className="w-full h-full object-cover"
										/>
									</div>
								) : (
									<div
										className={cn(
											"h-4 w-4 rounded-full border-2 border-black-100",
											"bg-gradient-to-r from-accent to-accent-light",
											"shadow-[0_0_12px_rgba(37,99,235,0.4)]",
											"transition-transform duration-200 hover:scale-110"
										)}
									/>
								)}
							</div>

							{/* Content card */}
							<div
								className={cn(
									"flex-1 rounded-lg p-5 backdrop-blur-sm",
									"bg-black-200/70 border border-white/10",
									"shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
									"hover:shadow-[0_10px_36px_rgba(0,0,0,0.4)] hover:border-white/20",
									"transition-all duration-300"
								)}
							>
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
									<div>
										<h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
											{item.name}
										</h3>
										<p className="text-sm text-white-600">
											{item.pos}
										</p>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-xs font-medium text-accent">
											{item.duration}
										</span>
										{item.status && (
											<span
												className={cn(
													"text-xs px-2 py-0.5 rounded-full",
													item.status === "active"
														? "bg-green-500/10 text-green-400 border border-green-500/20"
														: "bg-white/5 text-white-500 border border-white/10"
												)}
											>
												{item.status === "active" ? "Current" : "Completed"}
											</span>
										)}
									</div>
								</div>
								<p className="text-sm text-white-600 leading-relaxed">
									{item.title}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* End dot */}
				<motion.div
					className="absolute left-[15px] -bottom-4"
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.4,
						delay: items.length * 0.1 + 0.3,
						type: "spring",
						stiffness: 400,
					}}
					viewport={{ once: true }}
				>
					<div className="w-3 h-3 bg-accent rounded-full shadow-sm" />
				</motion.div>
			</div>
		</section>
	);
};

export { Timeline };
