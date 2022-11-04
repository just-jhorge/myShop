import React from "react";

const Backdrop = ({ children, open }) => {
	return (
		<div
			className={`${
				open ? "block" : "hidden"
			} absolute h-screen w-full bg-black/70 z-30`}
		>
			{children}
		</div>
	);
};

export default Backdrop;
