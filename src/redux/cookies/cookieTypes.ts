/** @format */

export const CREATE_COOKIE = "CREATE_COOKIE";
export const CREATE_NUM_OF_COOKIE = "CREATE_NUM_OF_COOKIE";
export const DELETE_COOKIE = "DELETE_COOKIE";
export const DELETE_NUM_OF_COOKIE = "DELETE_NUM_OF_COOKIE";

export interface CreateCookieAction {
	type: typeof CREATE_COOKIE;
}

export interface CreateNumOfCookieAction {
	type: typeof CREATE_NUM_OF_COOKIE;
	payload: number;
}

export interface DeleteCookieAction {
	type: typeof DELETE_COOKIE;
	payload: number;
}

export interface DeleteNumOfCookieAction {
	type: typeof DELETE_NUM_OF_COOKIE;
	payload: number;
}

export type CookieActionTypes = CreateCookieAction | CreateNumOfCookieAction | DeleteCookieAction | DeleteNumOfCookieAction;
