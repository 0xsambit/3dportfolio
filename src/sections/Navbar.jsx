import { FloatingNav } from "../components/ui/FloatingNav";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
	return <FloatingNav items={navLinks} />;
};

export default Navbar;
