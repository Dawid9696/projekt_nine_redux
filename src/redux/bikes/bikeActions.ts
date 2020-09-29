/** @format */

import { BUY_BIKE, BikeAction } from "./bikeTypes";

export const buyCake = (number: number = 1): BikeAction => {
	return {
		type: BUY_BIKE,
		payload: number,
	};
};
