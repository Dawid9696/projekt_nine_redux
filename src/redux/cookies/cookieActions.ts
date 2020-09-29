/** @format */

import { CookieActionTypes, CREATE_COOKIE, CREATE_NUM_OF_COOKIE, DELETE_COOKIE, DELETE_NUM_OF_COOKIE } from "./cookieTypes";

export const createCookie = (): CookieActionTypes => {
	return {
		type: CREATE_COOKIE,
	};
};

export const createNumOfCookie = (number: number = 1): CookieActionTypes => {
	return {
		type: CREATE_NUM_OF_COOKIE,
		payload: number,
	};
};

export const deleteCookie = (number: number = 1): CookieActionTypes => {
	return {
		type: DELETE_COOKIE,
		payload: number,
	};
};

export const deleteNumOfCookie = (number: number = 1): CookieActionTypes => {
	return {
		type: DELETE_NUM_OF_COOKIE,
		payload: number,
	};
};
