/** @format */

export const BUY_CAKE = "BUY_CAKE";
export const SELL_CAKE = "SELL_CAKE";

export interface BuyCakeAction {
	type: typeof BUY_CAKE;
	payload: number;
}

export interface SellCakeAction {
	type: typeof SELL_CAKE;
	payload: number;
}

export type CakeActionTypes = BuyCakeAction | SellCakeAction;
