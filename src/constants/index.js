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
		title: "Interpreter for Custom Language",
		desc:
			"This project is a Rust-based interpreter that allows you to execute custom scripts and programs written in a specific programming language.",
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
		title: "Winix",
		desc:
			"Winix is a simple, Rust based cli tool that lets you feel Linux commands on Windows. ",
		subdesc:
			"Built with Rust, this cli is designed to be fast, efficient, and easy to use. It supports a wide range of features, including variables, loops, conditionals, and functions.",
		href: "https://github.com/0xsambit/winix",
		texture: "/textures/project/project.mp4",
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
		title: "Mobibharat Seller",
		desc:
			"Mobibharat Seller is a comprehensive platform designed for sellers to manage their online stores with ease.",
		subdesc:
			"Built with React Native, this platform offers a seamless user experience across devices. It includes features like product management, order tracking, and customer engagement tools, qr code generation, and more.",
		href: "/",
		texture: "/",
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
				name: "React",
				path: "/assets/react.svg",
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
		name: "Tensor Solution Tech Pvt Ltd",
		pos: "Application Developer Intern",
		duration: "Feb 2025 - Present",
		title:
			"At Tensor, theey specialize in harnessing the power of advanced technologies to empower businesses and individuals alike. With a team of skilled professionals and a commitment to innovation, they deliver tailor-made solutions that drive growth, efficiency, and success.",
		icon: "/assets/tensor.jpeg",
		animation: "victory",
	},
	{
		id: 2,
		name: "To-Let Globe",
		pos: "Lead Web Developer",
		duration: "Feb 2024 - July 2024",
		title:
			"To-Let Globe is a real estate platform that connects property owners with tenants. As the lead web developer, I am responsible for overseeing the development of the platform, ensuring that it meets the needs of our users and business goals.",
		icon: "/assets/tolet.jpeg",
		animation: "clapping",
	},
	{
		id: 3,
		name: "GirlScript Foundation",
		pos: "Open Source Contributor",
		duration: "June 2024 - August 2024",
		title:
			"GirlScript Foundation is a non-profit organization that aims to provide opportunities. I contributed to various open-source projects, including the GirlScript Summer of Code, and helped mentor students in web development.",
		icon: "/assets/gssoc.jpg",
		animation: "clapping",
	},
	{
		id: 4,
		name: "HackNITR 2024 Hackathon",
		pos: "Junior Web Developer",
		duration: "March 2024",
		title:
			"HackNITR 2024 is an annual hackathon organized by the NIT, Rourkela. I participated as a junior web developer and worked on a team project to create a Javascript library that helps non-coders use the feel of using Github easy without any coding knowledge.",
		icon: "/assets/hacknittr.png",
		animation: "salute",
	},
];
