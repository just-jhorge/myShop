import React from "react";
import ItemCard from "../components/ItemCard";

const Home = () => {
	return (
		<div className="container mx-auto px-5 md:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 pb-20">
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
		</div>
	);
};

export default Home;
