import About from "./sections/About";
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
		</main>
	);
};

export default App;
