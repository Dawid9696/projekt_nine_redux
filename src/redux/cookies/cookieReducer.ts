/** @format */

import * as COOKIE_TYPES from "./cookieTypes";
import { CookieActionTypes } from "./cookieTypes";

const initialState = {
	numOfCookies: 15,
};

type initialStateProp = { numOfCookies: number };

const cakeReducer = (state: initialStateProp = initialState, action: CookieActionTypes): initialStateProp => {
	switch (action.type) {
		case COOKIE_TYPES.CREATE_COOKIE:
			return {
				...state,
				numOfCookies: state.numOfCookies + 1,
			};
		case COOKIE_TYPES.CREATE_NUM_OF_COOKIE:
			return {
				...state,
				numOfCookies: state.numOfCookies + action.payload,
			};
		case COOKIE_TYPES.DELETE_COOKIE:
			return {
				...state,
				numOfCookies: state.numOfCookies - 1,
			};
		case COOKIE_TYPES.DELETE_NUM_OF_COOKIE:
			return {
				...state,
				numOfCookies: state.numOfCookies - action.payload,
			};

		default:
			return state;
	}
};

export default cakeReducer;
