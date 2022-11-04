import React, { useState } from "react";
import Layout from "./components/Layout";
import ThemeContext from "./contexts/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import CartContextWrapper from "./contexts/CartContext";

const App = () => {
	const [theme, setTheme] = useState("dark");
	const value = { theme, setTheme };

	return (
		<ThemeContext.Provider value={value}>
			<CartContextWrapper>
				<BrowserRouter>
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/shop" element={<Shop />} />
							<Route path="/checkout" element={<Checkout />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</Layout>
				</BrowserRouter>
			</CartContextWrapper>
		</ThemeContext.Provider>
	);
};

export default App;
