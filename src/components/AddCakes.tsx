/** @format */

import React from "react";

const AddCakes = ({ children, handleClick }: any) => {
	console.log("ADD_CAKE render!");
	return (
		<button className='AddCakes' onClick={handleClick}>
			{children}
		</button>
	);
};

export default React.memo(AddCakes);
