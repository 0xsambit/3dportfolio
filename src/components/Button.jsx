import { cn } from "../lib/utils";

const Button = ({
	name,
	isBeam = false,
	containerClass,
	variant = "solid",
	href,
	onClick,
}) => {
	const baseClasses =
		"flex gap-3 items-center justify-center cursor-pointer p-3 rounded-lg transition-all active:scale-95 font-medium text-sm";

	const variants = {
		solid: "bg-accent text-white hover:bg-accent-light",
		outline: "border border-white/20 text-white hover:bg-white/5",
		ghost: "text-white-600 hover:text-white hover:bg-white/5",
	};

	const classes = cn(baseClasses, variants[variant], containerClass);

	const content = (
		<>
			{isBeam && (
				<span className="relative flex h-3 w-3">
					<span className="btn-ping" />
					<span className="btn-ping_dot" />
				</span>
			)}
			{name}
		</>
	);

	if (href) {
		return (
			<a href={href} className={classes}>
				{content}
			</a>
		);
	}

	return (
		<button className={classes} onClick={onClick}>
			{content}
		</button>
	);
};

export default Button;
