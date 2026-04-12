import { cn } from "../../lib/utils";

const BentoGrid = ({ children, className }) => {
	return (
		<div
			className={cn(
				"grid w-full auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-3",
				className
			)}
		>
			{children}
		</div>
	);
};

const BentoCard = ({ title, description, icon, className, children }) => {
	return (
		<div
			className={cn(
				"group relative p-6 rounded-xl overflow-hidden transition-all duration-300",
				"border border-white/10 bg-black-200",
				"hover:shadow-[0_2px_12px_rgba(37,99,235,0.08)]",
				"hover:-translate-y-0.5 will-change-transform",
				className
			)}
		>
			{/* Dot pattern on hover */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
			</div>

			<div className="relative flex flex-col h-full">
				{icon && (
					<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 mb-4 group-hover:bg-accent/10 transition-colors duration-300">
						{icon}
					</div>
				)}
				{children ? (
					children
				) : (
					<div className="flex flex-col flex-1">
						{title && (
							<h3 className="font-semibold text-white text-lg tracking-tight mb-2">
								{title}
							</h3>
						)}
						{description && (
							<p className="text-sm text-white-600 leading-relaxed">
								{description}
							</p>
						)}
					</div>
				)}
			</div>

			{/* Gradient border glow on hover */}
			<div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
		</div>
	);
};

export { BentoGrid, BentoCard };
