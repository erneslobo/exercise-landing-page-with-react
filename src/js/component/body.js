import React from "react";
import { Card } from "./card";

export const Body = () => {
	return (
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
	);
};
