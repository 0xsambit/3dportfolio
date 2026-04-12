import { workExperiences } from "../constants/index";
import { Timeline } from "../components/ui/ModernTimeline";
import { ScrollReveal } from "../components/ui/ScrollReveal";

const Experience = () => {
	return (
		<section className="c-space my-20" id="experience">
			<ScrollReveal direction="up">
				<h2 className="head-text mb-2">Experience & Journey</h2>
				<p className="text-white-600 text-base mb-10 max-w-xl">
					From hackathons to startup founding — my path in tech so far.
				</p>
			</ScrollReveal>

			<ScrollReveal direction="up" delay={0.2}>
				<Timeline items={workExperiences} />
			</ScrollReveal>
		</section>
	);
};

export default Experience;
