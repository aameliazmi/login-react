import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";

export function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="./Table1">Table 1</a>
				<a href="./Table2">Table 2</a>  
				<a href="./Table3">Table 3</a>
                <a href="/">Login</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;