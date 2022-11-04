import React, { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Cart from "./Cart";

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const { theme, setTheme } = useContext(ThemeContext);

	const openSideNavHandler = () => {
		setIsOpen(true);
	};

	const closeSideNavHandler = () => {
		setIsOpen(false);
	};

	const switchThemeHandler = () => {
		setTheme(theme == "dark" ? "light" : "dark");
	};

	const openCartHandler = () => {
		setCartOpen(true);
	};

	const closeCartHandler = () => {
		setCartOpen(false);
	};

	const bg =
		theme == "dark"
			? "transition-all duration-300 bg-gray-800 text-gray-200"
			: "transition-all duration-300 bg-white text-black";

	return (
		<div className={`${bg} relative`}>
			<Navbar
				openSideNav={openSideNavHandler}
				changeTheme={switchThemeHandler}
				openCart={openCartHandler}
			/>
			<SideNav isOpen={isOpen} close={closeSideNavHandler} />
			<Cart open={cartOpen} close={closeCartHandler} />
			<main className="pt-20">{children}</main>
		</div>
	);
};

export default Layout;
