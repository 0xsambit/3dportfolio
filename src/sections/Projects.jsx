import { myProjects } from "../constants/index";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { ScrollReveal } from "../components/ui/ScrollReveal";

const Projects = () => {
	return (
		<section className="c-space my-20" id="projects">
			<ScrollReveal direction="up">
				<h2 className="head-text mb-2">Featured Projects</h2>
				<p className="text-white-600 text-base mb-10 max-w-xl">
					A selection of projects that showcase my range — from AR platforms to
					Rust compilers.
				</p>
			</ScrollReveal>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{myProjects.map((project, index) => (
					<ScrollReveal key={project.title} direction="up" delay={index * 0.1}>
						<SpotlightCard
							className="p-6 h-full"
							spotlightColor={
								index === 0
									? "rgba(37, 99, 235, 0.2)"
									: "rgba(255, 255, 255, 0.1)"
							}
						>
							<div className="flex flex-col h-full">
								{/* Logo & Spotlight */}
								<div className="flex items-start justify-between mb-5">
									<div
										className="p-3 rounded-lg backdrop-blur-sm w-fit"
										style={project.logoStyle}
									>
										<img
											src={project.logo}
											alt={project.title}
											className="w-8 h-8"
										/>
									</div>
									{index === 0 && (
										<span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
											Flagship
										</span>
									)}
								</div>

								{/* Content */}
								<h3 className="text-xl font-bold text-white mb-2">
									{project.title}
								</h3>
								<p className="text-white-600 text-sm mb-2">{project.desc}</p>
								<p className="text-white-500 text-xs mb-5 flex-1">
									{project.subdesc}
								</p>

								{/* Tags & Link */}
								<div className="flex items-center justify-between mt-auto">
									<div className="flex items-center gap-2">
										{project.tags.map((tag) => (
											<div
												key={tag.id}
												className="w-8 h-8 rounded-md p-1.5 bg-white/5 flex items-center justify-center"
											>
												<img
													src={tag.path}
													alt={tag.name}
													className="w-full h-full object-contain"
												/>
											</div>
										))}
									</div>
									<a
										href={project.href}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-2 text-sm text-white-600 hover:text-accent transition-colors group"
									>
										<span>View Project</span>
										<svg
											className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</a>
								</div>
							</div>
						</SpotlightCard>
					</ScrollReveal>
				))}
			</div>
		</section>
	);
};

export default Projects;
