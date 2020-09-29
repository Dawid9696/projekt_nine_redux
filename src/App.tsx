/** @format */

import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import stores from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bike from "./components/Bike";

function App() {
	return (
		<Provider store={stores.store}>
			<div className='App'>
				<Router>
					<PersistGate persistor={stores.persistor}>
						<Switch>
							<Route path={"/"} exact component={Home} />
							<Route path={"/bike/:id"} exact component={Bike} />
						</Switch>
						<Home cake />
					</PersistGate>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
