/** @format */

import { SELL_CAKE, BuyCakeAction, SellCakeAction } from "./cakeTypes";
import { BUY_CAKE } from "./cakeTypes";
import { bindActionCreators } from "redux";

export const buyCake = (number: number = 1): BuyCakeAction => {
	return {
		type: BUY_CAKE,
		payload: number,
	};
};

export const sellCake = (number: number = 1): SellCakeAction => {
	return {
		type: SELL_CAKE,
		payload: number,
	};
};
