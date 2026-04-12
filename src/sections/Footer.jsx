const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="c-space pt-14 pb-6 border-t border-white/10">
			<div className="flex flex-col sm:flex-row justify-between items-center gap-6">
				{/* Brand */}
				<div>
					<p className="text-white font-bold text-lg">Sambit Singha</p>
					<p className="text-white-500 text-sm mt-1">
						Founder & Full-Stack Developer
					</p>
				</div>

				{/* Social Links */}
				<div className="flex gap-3">
					<a
						href="https://github.com/0xsambit"
						target="_blank"
						rel="noreferrer"
						className="social-icon hover:border-white/20 transition-colors"
					>
						<img
							src="/assets/github.svg"
							alt="github"
							className="w-1/2 h-1/2"
						/>
					</a>
					<a
						href="https://x.com/sambitsingha01"
						target="_blank"
						rel="noreferrer"
						className="social-icon hover:border-white/20 transition-colors"
					>
						<img
							src="/assets/twitter.svg"
							alt="twitter"
							className="w-1/2 h-1/2"
						/>
					</a>
					<a
						href="https://linkedin.com/in/sambitsingha"
						target="_blank"
						rel="noreferrer"
						className="social-icon hover:border-white/20 transition-colors"
					>
						<svg
							className="w-1/2 h-1/2"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
					</a>
				</div>

				{/* Copyright & Back to top */}
				<div className="flex flex-col items-center sm:items-end gap-2">
					<a
						href="#home"
						className="text-white-500 text-xs hover:text-accent transition-colors"
					>
						Back to top ↑
					</a>
					<p className="text-white-500 text-xs">
						© {currentYear} Sambit Singha. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
