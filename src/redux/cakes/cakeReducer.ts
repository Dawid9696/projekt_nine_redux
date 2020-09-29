/** @format */

import { BUY_CAKE, CakeActionTypes } from "./cakeTypes";
import { SELL_CAKE } from "./cakeTypes";

interface StateProps {
	numOfCakes: number;
}

const initialState = {
	numOfCakes: 20,
};

const cakeReducer = (state: StateProps = initialState, action: CakeActionTypes): StateProps => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - action.payload,
			};
		case SELL_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes + action.payload,
			};

		default:
			return state;
	}
};

export default cakeReducer;
