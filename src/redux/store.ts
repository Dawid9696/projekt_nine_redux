/** @format */

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";
export type AppDispatch = typeof store.dispatch;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export default { store, persistor };
