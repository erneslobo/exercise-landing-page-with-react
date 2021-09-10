import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src={"https://picsum.photos/286/180"}
				alt={"Card image cap"}
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.cardtext}</p>
				<hr />
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	cardtext: PropTypes.string
};
