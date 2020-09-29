/** @format */

import React from "react";

const CookiesCounter = (props: any) => {
	console.log("CookiesCounter rendering!");
	return <div className='CakesCounter'>Number of Cookies: {props.count}</div>;
};

export default React.memo(CookiesCounter);
