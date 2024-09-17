import React, { useRef, useState } from "react";

const Contact = () => {
	const formRef = useRef();

	const [loading, setLoading] = useState(false);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = () => {};
	const handleSubmit = () => {};
	return (
		<section className='c-space my-20'>
			<div className='relative min-h-screen flex items-center justify-center flex-col'>
				<img
					src='/assets/terminal.png'
					alt='terminal'
					className='absolute inset-0 min-h-screen'
				/>
				<div className='contact-container '>
					<h3 className='head-text pt-14'>Let's Talk</h3>
					<p className='text-lgg text-white-600 mt-3'>
						Whether you're looking to build a new website or app , improve your
						existing platform, or bring a unique , project to life, I'm here to
						help
					</p>
					<form
						action=''
						ref={formRef}
						onSubmit={handleSubmit}
						className='mt-12 flex flex-col space-y-7'>
						<label className='space-y-3'>
							<span className='field-label'>Full Name</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								className='field-input'
								required
								placeholder='John Doe'
							/>
						</label>
						<label className='space-y-3'>
							<span className='field-label'>Email</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								className='field-input'
								required
								placeholder='johndoe@gmail.com'
							/>
						</label>
						<label className='space-y-3'>
							<span className='field-label'>Full Name</span>
							<textarea
								name='message'
								value={form.message}
								onChange={handleChange}
								className='field-input'
								required
								rows={5}
								placeholder='Hi, I am interested in...'
							/>
						</label>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
