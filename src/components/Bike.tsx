/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

const Bike = ({ match }: any) => {
	const { id } = match.params;

	const bike = useSelector((state: any) =>
		state.bike.arrOfBikes.find((bike: any) => {
			return bike.id == id;
		})
	);
	const dispatch = useDispatch();
	const modalRoot = document.getElementById("modal") as HTMLElement;
	return ReactDOM.createPortal(
		<div>
			<div>Name: {bike.bike}</div>
			<div>Color: {bike.color}</div>
			<div>Price: {bike.price}</div>
		</div>,
		modalRoot
	);
};

export default React.memo(Bike);
