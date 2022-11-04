import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CartContext } from "../contexts/CartContext";
import { SlBag } from "react-icons/sl";
import ThemeContext from "../contexts/ThemeContext";
import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.svg";

const Navbar = ({ openSideNav, changeTheme, openCart }) => {
	const { theme } = useContext(ThemeContext);
	const { cartQuantity } = useContext(CartContext);

	return (
		<nav
			className={`${
				theme == "dark"
					? "bg-gray-700 border-b border-gray-500"
					: "bg-slate-100"
			}  px-3 sm:px-0 h-14 drop-shadow-md w-full fixed z-20 transition-all duration-300`}
		>
			<div className="container mx-auto h-full flex items-center justify-between">
				<div className="flex items-center justify-center gap-3 md:gap-0">
					<div className="md:hidden" onClick={openSideNav}>
						<HiOutlineMenuAlt1 className="text-2xl" />
					</div>
					<div className="text-2xl font-bold">MyShop</div>
				</div>
				<div className="hidden md:flex items-center justify-center gap-x-5">
					<Link to="/">Home</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/contact">Contact</Link>
				</div>
				<div className="flex items-center justify-center gap-x-5">
					<div className="relative cursor-pointer" onClick={openCart}>
						<SlBag className="text-2xl" />
						<div
							className={`${
								theme == "dark" ? "bg-white text-black" : "bg-black text-white"
							} absolute flex items-center justify-center text-xs -top-2 -right-3 h-[1.35rem] w-[1.35rem] rounded-full transition-all duration-300`}
						>
							{cartQuantity}
						</div>
					</div>
					<button className="cursor-pointer" onClick={changeTheme}>
						<img
							className="h-8"
							src={theme == "dark" ? sun : moon}
							alt="Theme Switcher"
						/>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
