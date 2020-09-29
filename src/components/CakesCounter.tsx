/** @format */

import React, { useState, forwardRef, useImperativeHandle } from "react";

const CakesCounter = forwardRef((props: any, ref) => {
	const [counter, setCounter] = useState<number>(0);
	console.log("CakesCounter rendering!");
	useImperativeHandle(ref, () => ({
		loguj,
	}));
	const loguj = () => setCounter(counter + 1);
	return (
		<div className='CakesCounter'>
			Number of Cakes: {props.count} ii {counter}
		</div>
	);
});

export default React.memo(CakesCounter);
