export const navLinks = [
	{
		id: 1,
		name: "Home",
		href: "#home",
	},
	{
		id: 2,
		name: "About",
		href: "#about",
	},
	{
		id: 3,
		name: "Work",
		href: "#work",
	},
	{
		id: 4,
		name: "Contact",
		href: "#contact",
	},
];

export const clientReviews = [
	{
		id: 1,
		name: "Emily Johnson",
		position: "Marketing Director at GreenLeaf",
		img: "assets/review1.png",
		review:
			"Working with Sambit was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
	},
	{
		id: 2,
		name: "Mark Rogers",
		position: "Founder of TechGear Shop",
		img: "assets/review2.png",
		review:
			"Sambit's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
	},
	{
		id: 3,
		name: "John Dohsas",
		position: "Project Manager at UrbanTech ",
		img: "assets/review3.png",
		review:
			"I can’t say enough good things about Sambit. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
	},
	{
		id: 4,
		name: "Ether Smith",
		position: "CEO of BrightStar Enterprises",
		img: "assets/review4.png",
		review:
			"Sambit was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
	},
];

export const myProjects = [
	{
		title: "RipTide - Recreational Beach Finder App",
		desc: "RipTide is a mobile application designed to ensure the safety and enhance the experience of coastal tourists by providing real-time suitability information for beaches in India. ",
		subdesc:
			"Built as a unique Software-as-a-Service app with React Native, Tailwind CSS, JavaScript, Framer Motion and Convex, RipTide is designed for optimal performance and scalability.",
		href: "https://github.com/0xsambit/RipTide",
		texture: "/textures/project/project1.mp4",
		logo: "/assets/project-logo1.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "Framer Motion",
				path: "/assets/framer.png",
			},
		],
	},
	{
		title: "Interactive Animated Slider",
		desc: "This project is an interactive animated slider that allows you to create and customize sliders for your website or app.",
		subdesc:
			"Built with simple HTML , CSS and Javascript , but very ease to use it React too.",
		href: "https://0xsambit.github.io/slider_1", // Ensure this URL is correct and accessible
		texture: "/textures/project/slider.mp4",
		logo: "/assets/project-logo1.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
		],
	},
	{
		title: "Interpreter for Custom Language",
		desc: "This project is a Rust-based interpreter that allows you to execute custom scripts and programs written in a specific programming language.",
		subdesc:
			"Built with Rust, this interpreter is designed to be fast, efficient, and easy to use. It supports a wide range of features, including variables, loops, conditionals, and functions.",
		href: "https://github.com/0xsambit/Interpreter-Rust",
		texture: "/textures/project/project2.mp4",
		logo: "/assets/project-logo2.png",
		logoStyle: {
			backgroundColor: "#13202F",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #2F6DB54D",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [
			{
				id: 1,
				name: "Rust",
				path: "/assets/rust.png",
			},
		],
	},
	{
		title: "Interactive Rotating Slider",
		desc: "This project is an interactive rotating slider that allows you to create and customize sliders for your website or app.",
		subdesc:
			"Built with simple HTML , CSS and Javascript , but very ease to use it React too.",
		href: "https://0xsambit.github.io/rotate_slider", // Ensure this URL is correct and accessible
		texture: "/textures/project/rotate.mp4",
		logo: "/assets/project-logo1.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
		],
	},
	{
		title: "Developer Portfolio Website",
		desc: "This project is a personal 3d portfolio website that showcases my skills, projects, and experience as a web developer. It is designed to be visually appealing, user-friendly, and responsive.",
		subdesc:
			"Built with React.js, Three.js, Tailwind CSS and Framer Motion, this website features a 3D interactive design, smooth animations, and a clean, modern layout. It is optimized for performance and accessibility.",
		href: "https://0xsambit.vercel.app",
		texture: "/textures/project/portfolio.mp4",
		logo: "/assets/project-logo3.png",
		logoStyle: {
			backgroundColor: "#60f5a1",
			background:
				"linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
			border: "0.2px solid rgba(208, 213, 221, 1)",
			boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
		},
		spotlight: "/assets/spotlight3.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "Framer Motion",
				path: "/assets/framer.png",
			},
		],
	},
	{
		title: "Aora - A video streaming platform",
		desc: "Aora is a video streaming App that allows users to watch, upload, and share videos with friends and family. It features a user-friendly interface, personalized recommendations, and a secure payment system.",
		subdesc:
			"Built with React Native, Tailwind CSS and Appwrite, Aora is designed to be fast, reliable, and easy to use. It supports a wide range of features, including video playback, search, and user profiles.",
		href: "https://github.com/0xsambit/Aora",
		texture: "/textures/project/project4.mp4",
		logo: "/assets/project-logo4.png",
		logoStyle: {
			backgroundColor: "#0E1F38",
			border: "0.2px solid #0E2D58",
			boxShadow: "0px 0px 60px 0px #2F67B64D",
		},
		spotlight: "/assets/spotlight4.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
		],
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

export const workExperiences = [
	{
		id: 1,
		name: "To-Let Globe",
		pos: "Lead Web Developer",
		duration: "June 2024 - Present",
		title:
			"To-Let Globe is a real estate platform that connects property owners with tenants. As the lead web developer, I am responsible for overseeing the development of the platform, ensuring that it meets the needs of our users and business goals.",
		icon: "/assets/tolet.jpeg",
		animation: "victory",
	},
	{
		id: 2,
		name: "GirlScript Foundation",
		pos: "Open Source Contributor",
		duration: "June 2024 - August 2024",
		title:
			"GirlScript Foundation is a non-profit organization that aims to provide opportunities. I contributed to various open-source projects, including the GirlScript Summer of Code, and helped mentor students in web development.",
		icon: "/assets/gssoc.jpg",
		animation: "clapping",
	},
	{
		id: 3,
		name: "HackNITR 2024 Hackathon",
		pos: "Junior Web Developer",
		duration: "March 2024",
		title:
			"HackNITR 2024 is an annual hackathon organized by the NIT, Rourkela. I participated as a junior web developer and worked on a team project to create a Javascript library that helps non-coders use the feel of using Github easy without any coding knowledge.",
		icon: "/assets/hacknittr.png",
		animation: "salute",
	},
];
