/** @format */

import React, { useCallback, useRef } from "react";
import { connect, useSelector, useDispatch, shallowEqual } from "react-redux";
import { bindActionCreators, Dispatch, AnyAction } from "redux";
import * as cakeActions from "../redux/cakes/cakeActions";
import { createCookie, createNumOfCookie } from "../redux/cookies/cookieActions";
import { selectCakeItem } from "../redux/cakes/cakeSelectors";
import { CakeActionTypes } from "../redux/cakes/cakeTypes";

//IMPORTS
import CookiesCounter from "./CookiesCounter";
import ButtonCookies from "./AddCookies";
import CakesCounter from "./CakesCounter";
import AddCakes from "./AddCakes";
import { AppDispatch } from "../redux/store";

const Home = (props: any) => {
	//REDUX HOOKS
	const numOfCookies = useSelector((state: any) => state.cookie.numOfCookies);
	const dispatch: any = useDispatch();

	const createCookieFunction = useCallback(() => dispatch(createCookie()), dispatch);
	const createNumOfCookieFunction = useCallback(() => dispatch(createNumOfCookie(10)), dispatch);
	const buyCakeFunction = useCallback(() => props.actions.buyCake(), dispatch);
	const sellCakeFunction = useCallback(() => props.actions.sellCake(), dispatch);
	const inputRef = useRef<any>(null);
	return (
		<div className='Cookies'>
			<h3>CIASTA</h3>
			<CakesCounter ref={inputRef} count={props.numOfCakes} />
			<button onClick={() => inputRef.current.loguj()}>Konsola</button>
			<AddCakes handleClick={buyCakeFunction}>DODAJ CIASTO</AddCakes>
			<AddCakes handleClick={sellCakeFunction}>USUŃ CIASTO</AddCakes>
			<h3>CIASTKA</h3>
			<CookiesCounter count={numOfCookies} />
			<ButtonCookies handleClick={createCookieFunction}>DODAJ CIASTKO</ButtonCookies>
			<ButtonCookies handleClick={createNumOfCookieFunction}>DODAJ 10 CIASTEK</ButtonCookies>
		</div>
	);
};

const mapStateToProps = (state: number, ownProps: any) => {
	return {
		numOfCakes: selectCakeItem(state),
	};
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
	return { ...bindActionCreators(cakeActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
	return {
		...stateProps,
		router: ownProps,
		actions: dispatchProps,
	};
})(React.memo(Home));
