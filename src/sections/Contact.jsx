import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ScrollReveal } from "../components/ui/ScrollReveal";

const Contact = () => {
	const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_f3siqdc",
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xu5x7pd",
				{
					from_name: form.name,
					to_name: "Sambit",
					from_email: form.email,
					to_email: "sambitsingha777@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "66ESb4i-n_U0dHYb-"
			);
			setLoading(false);
			alert("Message sent successfully!");
			setForm({ name: "", email: "", message: "" });
		} catch (error) {
			setLoading(false);
			console.log(error);
			alert("Something went wrong. Please try again.");
		}
	};

	return (
		<section className="c-space my-20" id="contact">
			<ScrollReveal direction="up">
				<div className="max-w-xl mx-auto">
					<h2 className="head-text mb-2">Let&apos;s Build Something Together</h2>
					<p className="text-white-600 text-base mb-10">
						Whether you&apos;re looking to build a new product, collaborate on an
						open-source project, or just want to chat — I&apos;d love to hear from
						you.
					</p>

					<div className="rounded-xl border border-white/10 bg-black-200 p-8">
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="flex flex-col space-y-6"
						>
							<label className="space-y-2">
								<span className="text-sm text-white-600 font-medium">
									Full Name
								</span>
								<input
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									className="w-full bg-black-300 px-4 py-3 rounded-lg placeholder:text-white-500 text-sm text-white-800 border border-white/5 focus:border-accent/50 focus:outline-none transition-colors"
									required
									placeholder="John Doe"
								/>
							</label>
							<label className="space-y-2">
								<span className="text-sm text-white-600 font-medium">
									Email
								</span>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									className="w-full bg-black-300 px-4 py-3 rounded-lg placeholder:text-white-500 text-sm text-white-800 border border-white/5 focus:border-accent/50 focus:outline-none transition-colors"
									required
									placeholder="johndoe@gmail.com"
								/>
							</label>
							<label className="space-y-2">
								<span className="text-sm text-white-600 font-medium">
									Your Message
								</span>
								<textarea
									name="message"
									value={form.message}
									onChange={handleChange}
									className="w-full bg-black-300 px-4 py-3 rounded-lg placeholder:text-white-500 text-sm text-white-800 border border-white/5 focus:border-accent/50 focus:outline-none transition-colors resize-none"
									required
									rows={5}
									placeholder="Hi, I'm interested in..."
								/>
							</label>
							<button
								className="w-full bg-accent text-white py-3 rounded-lg font-medium text-sm hover:bg-accent-light transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
								type="submit"
								disabled={loading}
							>
								{loading ? (
									<>
										<svg
											className="animate-spin h-4 w-4"
											viewBox="0 0 24 24"
											fill="none"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											/>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
											/>
										</svg>
										Sending...
									</>
								) : (
									"Send Message"
								)}
							</button>
						</form>
					</div>
				</div>
			</ScrollReveal>
		</section>
	);
};

export default Contact;
