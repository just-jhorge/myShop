import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

const Cart = ({ open, close }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={`fixed flex-col items-center justify-center top-[4rem] right-[2%] md:right-[12%] shadow-xl h-80 w-72 rounded-md ${
				theme == "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-800"
			} ${open ? "flex" : "hidden "}`}
		>
			<div
				className={`w-full border-b text-center py-2 font-semibold ${
					theme == "dark" ? "border-gray-600" : "border-gray-300"
				}`}
			>
				<h3>Your Cart</h3>
			</div>
			<div className="w-full flex-1 flex flex-col items-start justify-start gap-y-3 overflow-y-auto p-4 text-sm">
				<div className="flex">
					<div className="h-5 w-5 rounded-md bg-red-500 mr-2" />
					<h3 className="mr-5">Apple Watch Series 3</h3>
					<div className="flex items-center justify-center gap-x-2">
						<button>-</button>
						<div>3</div>
						<button>+</button>
					</div>
				</div>
				<div className="flex">
					<div className="h-5 w-5 rounded-md bg-red-500 mr-2" />
					<h3 className="mr-5">Apple Watch Series 3</h3>
					<div className="flex items-center justify-center gap-x-2">
						<button>-</button>
						<div>3</div>
						<button>+</button>
					</div>
				</div>
				<div className="flex">
					<div className="h-5 w-5 rounded-md bg-red-500 mr-2" />
					<h3 className="mr-5">Apple Watch Series 3</h3>
					<div className="flex items-center justify-center gap-x-2">
						<button>-</button>
						<div>3</div>
						<button>+</button>
					</div>
				</div>
			</div>
			<div
				className={`w-full border-t py-4 flex items-center justify-center gap-x-5 ${
					theme == "dark" ? "border-gray-600" : "border-gray-300"
				}`}
			>
				<button onClick={close}>
					<Link to="/checkout">Checkout</Link>
				</button>
				<button onClick={close}>Cancel</button>
			</div>
		</div>
	);
};

export default Cart;
