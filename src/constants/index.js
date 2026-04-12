export const navLinks = [
	{ id: 1, name: "Home", href: "#home" },
	{ id: 2, name: "About", href: "#about" },
	{ id: 3, name: "Projects", href: "#projects" },
	{ id: 4, name: "Experience", href: "#experience" },
	{ id: 5, name: "Contact", href: "#contact" },
];

export const heroWords = [
	"Technical Founder",
	"Full-Stack Developer",
	"Startup Builder",
	"Systems Thinker",
];

export const marqueeItems = [
	"React",
	"Next.js",
	"React Native",
	"Go",
	"Rust",
	"TypeScript",
	"Python",
	"Three.js",
	"Figma",
	"AWS",
	"Tailwind",
];

export const techStack = [
	{ name: "React", icon: "/assets/react.svg", color: "#61DAFB" },
	{ name: "TypeScript", icon: "/assets/typescript.png", color: "#3178C6" },
	{ name: "Rust", icon: "/assets/rust.png", color: "#CE422B" },
	{ name: "Tailwind CSS", icon: "/assets/tailwindcss.png", color: "#06B6D4" },
	{ name: "Figma", icon: "/assets/figma.svg", color: "#F24E1E" },
	{ name: "Framer Motion", icon: "/assets/framer.svg", color: "#0055FF" },
	{ name: "Three.js", icon: "/assets/react.svg", color: "#049EF4" },
	{ name: "GitHub", icon: "/assets/github.svg", color: "#FFFFFF" },
];

export const myProjects = [
	{
		title: "Epocheye",
		desc: "An AR-based heritage tourism platform that lets tourists explore historical sites through augmented reality overlays.",
		subdesc:
			"Built as a technical founder with STPI incubation backing, Epocheye uses React Native for the mobile app, Go for backend services, and AWS for cloud infrastructure. The platform follows a B2B2C model targeting tourist boards and the Archaeological Survey of India.",
		href: "https://epocheye.com",
		texture: "/textures/project/workzo.mp4",
		logo: "/assets/project-logo1.png",
		logoStyle: {
			backgroundColor: "#0E1A2B",
			border: "0.2px solid #1A3050",
			boxShadow: "0px 0px 60px 0px rgba(37,99,235,0.3)",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{ id: 1, name: "React Native", path: "/assets/react.svg" },
			{ id: 2, name: "Go", path: "/assets/github.svg" },
			{ id: 3, name: "TypeScript", path: "/assets/typescript.png" },
		],
	},
	{
		title: "Interpreter for Custom Language",
		desc: "A Rust-based interpreter that allows you to execute custom scripts and programs written in a specific programming language.",
		subdesc:
			"Built with Rust, this interpreter supports variables, loops, conditionals, and functions. Designed to be fast, efficient, and easy to extend.",
		href: "https://github.com/0xsambit/Interpreter-Rust",
		texture: "/textures/project/project2.mp4",
		logo: "/assets/project-logo2.png",
		logoStyle: {
			backgroundColor: "#13202F",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #2F6DB54D",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [{ id: 1, name: "Rust", path: "/assets/rust.png" }],
	},
	{
		title: "Winix",
		desc: "A Rust-based CLI tool that brings Linux commands to Windows.",
		subdesc:
			"Built with Rust for speed and efficiency, Winix bridges the gap between Linux and Windows development workflows.",
		href: "https://github.com/0xsambit/winix",
		texture: "/textures/project/project.mp4",
		logo: "/assets/project-logo2.png",
		logoStyle: {
			backgroundColor: "#13202F",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #2F6DB54D",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [{ id: 1, name: "Rust", path: "/assets/rust.png" }],
	},
	{
		title: "Workzo.io",
		desc: "A comprehensive job search platform that streamlines the entire job search process for professionals worldwide.",
		subdesc:
			"Features personalized job recommendations, ATS-friendly resume builder, job application tracking, and AI-powered job matching.",
		href: "https://workzo.io",
		texture: "/textures/project/workzo.mp4",
		logo: "/assets/project-logo2.png",
		logoStyle: {
			backgroundColor: "#13202F",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #2F6DB54D",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [
			{ id: 1, name: "React", path: "/assets/react.svg" },
			{ id: 2, name: "TypeScript", path: "/assets/typescript.png" },
		],
	},
];

export const workExperiences = [
	{
		id: 1,
		name: "Epocheye",
		pos: "Founder & Technical Lead",
		duration: "2025 - Present",
		title:
			"Building an AR-based heritage tourism platform with STPI incubation. Leading product development, architecture decisions, and fundraising. The platform enables tourists to explore historical sites through immersive AR overlays.",
		icon: "/assets/project-logo1.png",
		status: "active",
	},
	{
		id: 2,
		name: "Tensor Solution Tech Pvt Ltd",
		pos: "Application Developer Intern",
		duration: "Feb 2025 - Present",
		title:
			"At Tensor, they specialize in harnessing advanced technologies to empower businesses. Working with a team of skilled professionals to deliver tailor-made solutions that drive growth, efficiency, and success.",
		icon: "/assets/tensor.jpeg",
		status: "active",
	},
	{
		id: 3,
		name: "To-Let Globe",
		pos: "Lead Web Developer",
		duration: "Feb 2024 - July 2024",
		title:
			"To-Let Globe is a real estate platform connecting property owners with tenants. As lead web developer, oversaw platform development ensuring it met user needs and business goals.",
		icon: "/assets/tolet.jpeg",
		status: "completed",
	},
	{
		id: 4,
		name: "GirlScript Foundation",
		pos: "Open Source Contributor",
		duration: "June 2024 - August 2024",
		title:
			"Contributed to open-source projects during GirlScript Summer of Code, helping mentor students in web development and building community tools.",
		icon: "/assets/gssoc.jpg",
		status: "completed",
	},
	{
		id: 5,
		name: "HackNITR 2024",
		pos: "Hackathon Participant",
		duration: "March 2024",
		title:
			"Built a JavaScript library at NIT Rourkela's annual hackathon that simplifies GitHub interactions for non-coders, making version control accessible without coding knowledge.",
		icon: "/assets/hacknittr.png",
		status: "completed",
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -7, 0],
		cubePosition: isSmall
			? [4, -5, 0]
			: isMobile
			? [5, -5, 0]
			: isTablet
			? [5, -5, 0]
			: [9, -5.5, 0],
		reactLogoPosition: isSmall
			? [3, 4, 0]
			: isMobile
			? [5, 4, 0]
			: isTablet
			? [5, 4, 0]
			: [12, 3, 0],
		ringPosition: isSmall
			? [-5, 7, 0]
			: isMobile
			? [-10, 10, 0]
			: isTablet
			? [-12, 10, 0]
			: [-24, 10, 0],
		targetPosition: isSmall
			? [-5, -10, -10]
			: isMobile
			? [-9, -10, -10]
			: isTablet
			? [-11, -7, -10]
			: [-13, -13, -10],
	};
};
