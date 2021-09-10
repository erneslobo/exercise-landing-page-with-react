//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navbar } from "./component/Navbar";
import { Jumbotron } from "./component/jumbotrop";
import { Card } from "./component/card";
import { Footer } from "./component/footer";

const App = () => {
	return (
		<div className="container-fluid px-0">
			<Navbar />
			<div className="my-4 mx-5 px-0">
				<Jumbotron />
				<div className="d-flex flex-wrap justify-content-between mt-4">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
