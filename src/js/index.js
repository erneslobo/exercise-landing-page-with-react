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
			<div className="my-5 mx-5 px-0">
				<Jumbotron />
				<div className="d-flex flex-wrap justify-content-between my-5">
					<Card
						title="Card title 1"
						cardtext="Text 1 Some quick example text to build on the card title and make up the bulk of the cards content."
					/>
					<Card
						title="Card title 2"
						cardtext="Text 2 Some quick example text to build on the card title and make up the bulk of the cards content."
					/>
					<Card
						title="Card title 3"
						cardtext="Text 3 Some quick example text to build on the card title and make up the bulk of the cards content."
					/>
					<Card
						title="Card title 4"
						cardtext="Text 4 Some quick example text to build on the card title and make up the bulk of the cards content."
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
