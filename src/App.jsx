import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Experiance from "./sections/Experiance";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Clients />
			<Experiance />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
