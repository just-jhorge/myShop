import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Backdrop from "./Backdrop";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const SideNav = ({ isOpen, close }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Backdrop open={isOpen}>
			<div
				className={`fixed h-full w-4/5 px-10 py-20 z-40  transition-all duration-500 ${
					theme == "dark" ? "bg-slate-800" : "bg-white"
				} ${isOpen ? "translate-x-0" : "-translate-x-[100vw]"} `}
			>
				<div onClick={close} className="absolute top-5 right-5 text-3xl">
					<MdClose />
				</div>
				<nav className="flex flex-col items-start justify-center text-3xl gap-y-10 pt-20">
					<Link to="/" onClick={close}>
						Home
					</Link>
					<Link to="/shop" onClick={close}>
						Shop
					</Link>
					<Link to="/contact" onClick={close}>
						Contact
					</Link>
				</nav>
			</div>
		</Backdrop>
	);
};

export default SideNav;
