import React from "react";

export const Jumbotron = () => {
	return (
		<div
			className="p-4 shadow-4 rounded-3"
			style={{ backgroundColor: "hsl(0, 0%, 94%)" }}>
			<h2>Hello world!</h2>
			<p>
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<p>
				It uses utility classNamees for typography and spacing to space
				content out within the larger container.
			</p>
			<button type="button" className="btn btn-primary">
				Learn more
			</button>
		</div>
	);
};
