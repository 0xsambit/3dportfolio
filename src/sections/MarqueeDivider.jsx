import { ParallaxText } from "../components/ui/ParallaxText";
import { marqueeItems } from "../constants/index";

const MarqueeDivider = () => {
	const topRow = marqueeItems.join(" • ");
	const bottomRow = [...marqueeItems].reverse().join(" • ");

	return (
		<section className="py-12 overflow-hidden">
			<div className="space-y-4">
				<ParallaxText
					baseVelocity={-3}
					className="text-5xl sm:text-6xl md:text-7xl text-transparent"
					style={{
						WebkitTextStroke: "1px rgba(255,255,255,0.12)",
					}}
				>
					<span
						className="text-transparent"
						style={{
							WebkitTextStroke: "1px rgba(255,255,255,0.12)",
						}}
					>
						{topRow}
					</span>
				</ParallaxText>
				<ParallaxText
					baseVelocity={3}
					className="text-5xl sm:text-6xl md:text-7xl text-transparent"
				>
					<span
						className="text-transparent"
						style={{
							WebkitTextStroke: "1px rgba(255,255,255,0.08)",
						}}
					>
						{bottomRow}
					</span>
				</ParallaxText>
			</div>
		</section>
	);
};

export default MarqueeDivider;
