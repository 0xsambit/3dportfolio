import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";

const AnimatedNavLink = ({ href, children, onClick }) => {
	return (
		<a
			href={href}
			onClick={onClick}
			className="group relative inline-block overflow-hidden h-5 flex items-center text-sm"
		>
			<div className="flex flex-col transition-transform duration-300 ease-out transform group-hover:-translate-y-1/2">
				<span className="text-white-600">{children}</span>
				<span className="text-white">{children}</span>
			</div>
		</a>
	);
};

const FloatingNav = ({ items, className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [visible, setVisible] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		setVisible(latest > 100);
	});

	return (
		<motion.header
			className={cn(
				"fixed top-6 left-1/2 -translate-x-1/2 z-50",
				"flex flex-col items-center",
				"px-6 py-3 backdrop-blur-xl",
				"rounded-full border border-white/10 bg-black-200/60",
				"w-[calc(100%-2rem)] sm:w-auto",
				"transition-[border-radius] duration-300",
				isOpen ? "rounded-xl" : "rounded-full",
				className
			)}
			initial={{ y: -100, opacity: 0 }}
			animate={{
				y: visible ? 0 : -100,
				opacity: visible ? 1 : 0,
			}}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<div className="flex items-center justify-between w-full gap-x-8">
				{/* Logo */}
				<a
					href="#home"
					className="text-white font-bold text-lg hover:text-accent transition-colors whitespace-nowrap"
				>
					Sambit
				</a>

				{/* Desktop nav links */}
				<nav className="hidden sm:flex items-center space-x-6">
					{items.map((item) => (
						<AnimatedNavLink key={item.id} href={item.href}>
							{item.name}
						</AnimatedNavLink>
					))}
				</nav>

				{/* CTA */}
				<a
					href="#contact"
					className="hidden sm:block px-4 py-1.5 text-sm font-medium bg-accent text-white rounded-full hover:bg-accent-light transition-colors whitespace-nowrap"
				>
					Let's Talk
				</a>

				{/* Mobile hamburger */}
				<button
					className="sm:hidden flex items-center justify-center w-8 h-8 text-white-600"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? "Close Menu" : "Open Menu"}
				>
					{isOpen ? (
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					) : (
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					)}
				</button>
			</div>

			{/* Mobile dropdown */}
			<div
				className={cn(
					"sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden",
					isOpen ? "max-h-[500px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"
				)}
			>
				<nav className="flex flex-col items-center space-y-4 w-full">
					{items.map((item) => (
						<a
							key={item.id}
							href={item.href}
							className="text-white-600 hover:text-white transition-colors text-center"
							onClick={() => setIsOpen(false)}
						>
							{item.name}
						</a>
					))}
					<a
						href="#contact"
						className="px-6 py-2 text-sm font-medium bg-accent text-white rounded-full hover:bg-accent-light transition-colors"
						onClick={() => setIsOpen(false)}
					>
						Let's Talk
					</a>
				</nav>
			</div>
		</motion.header>
	);
};

export { FloatingNav };
