import { techStack } from "../constants/index";
import { TechCard } from "../components/ui/TechCard";
import { ScrollReveal } from "../components/ui/ScrollReveal";

const TechStack = () => {
	return (
		<section className="c-space my-20">
			<ScrollReveal direction="up">
				<h2 className="head-text mb-2">Tools & Technologies</h2>
				<p className="text-white-600 text-base mb-10 max-w-xl">
					The technologies I use to bring ideas to life — from frontend interfaces
					to systems-level programming.
				</p>
			</ScrollReveal>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{techStack.map((tech, index) => (
					<ScrollReveal
						key={tech.name}
						direction="up"
						delay={index * 0.05}
					>
						<TechCard
							name={tech.name}
							icon={tech.icon}
							color={tech.color}
						/>
					</ScrollReveal>
				))}
			</div>
		</section>
	);
};

export default TechStack;
