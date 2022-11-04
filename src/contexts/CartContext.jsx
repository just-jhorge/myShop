import React, { useState, createContext } from "react";

export const CartContext = createContext({
	items: [],
	cartItems: [],
	cartQuantity: 0,
});

const CartContextWrapper = ({ children }) => {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartQuantity, setCartQuantity] = useState(0);

	const addToCart = () => {
		// logic to add item to cart
		setCartQuantity((prevState) => prevState + 1);
	};

	const removeFromCart = () => {
		// logic to remove item from cart
		setCartQuantity((prevState) => prevState - 1);
	};

	const contextValue = {
		items,
		setItems,
		cartQuantity,
		setCartQuantity,
		addToCart,
		removeFromCart,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export default CartContextWrapper;
