/** @format */

export const BUY_BIKE = "BUY_BIKE";

export interface BikeAction {
	type: typeof BUY_BIKE;
	payload: number;
}

export type BikeActionTypes = BikeAction;
