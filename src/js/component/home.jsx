import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./jumbotrop";
import { Body } from "./body";
import { Footer } from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid px-0">
			<Navbar />
			<div className="my-5 mx-5 px-0">
				<Jumbotron />
				<Body />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
