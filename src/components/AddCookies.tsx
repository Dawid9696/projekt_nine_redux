/** @format */

import React from "react";

const ButtonCookies = ({ children, handleClick }: any) => {
	console.log("ADD_COOKIE render!");
	return (
		<button className='ButtonCookies' onClick={handleClick}>
			{children}
		</button>
	);
};

export default React.memo(ButtonCookies);
