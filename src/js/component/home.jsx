import React from "react";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./jumbotrop.js";

//create your first component
const Home = () => {
	return (
		<div className="container px-0">
			<Navbar />
			<Jumbotron />
		</div>
	);
};

export default Home;
