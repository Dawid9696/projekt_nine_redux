/** @format */

import { BUY_BIKE } from "./bikeTypes";
import { BikeActionTypes } from "./bikeTypes";

interface StateProps {
	id: number;
	bike: string;
	color: string;
	price: number;
}

type StatePropsTypes = { arrOfBikes: StateProps[] };

const initialState = {
	arrOfBikes: [
		{ id: 1, bike: "Kross", color: "red", price: 3399 },
		{ id: 2, bike: "Endor", color: "blue", price: 5550 },
		{ id: 3, bike: "MTB", color: "black", price: 7000 },
		{ id: 4, bike: "Kolażówka", color: "green", price: 1000 },
	],
};

const bikeReducer = (state: StatePropsTypes = initialState, action: BikeActionTypes): StatePropsTypes => {
	switch (action.type) {
		case BUY_BIKE:
			return {
				...state,
				arrOfBikes: state.arrOfBikes.filter((bike) => {
					return bike.id != action.payload;
				}),
			};

		default:
			return state;
	}
};

export default bikeReducer;
