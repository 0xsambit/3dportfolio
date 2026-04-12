import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import MarqueeDivider from "./sections/MarqueeDivider";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<MarqueeDivider />
			<About />
			<TechStack />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
