import { cn } from "../../lib/utils";

const Marquee = ({ items, className, reverse = false }) => {
	return (
		<div
			className={cn(
				"relative flex w-full overflow-x-hidden",
				className
			)}
		>
			<div className={cn(
				"whitespace-nowrap py-4 flex",
				reverse ? "animate-marquee-reverse" : "animate-marquee"
			)}>
				{items.map((item, i) => (
					<span key={`a-${i}`} className="mx-6 text-4xl sm:text-5xl md:text-6xl font-bold text-transparent" style={{
						WebkitTextStroke: "1px rgba(255,255,255,0.15)",
					}}>
						{item}
					</span>
				))}
				{items.map((item, i) => (
					<span key={`b-${i}`} className="mx-6 text-4xl sm:text-5xl md:text-6xl font-bold text-transparent" style={{
						WebkitTextStroke: "1px rgba(255,255,255,0.15)",
					}}>
						{item}
					</span>
				))}
			</div>
		</div>
	);
};

export { Marquee };
