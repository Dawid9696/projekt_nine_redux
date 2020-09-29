/** @format */

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cakeReducer from "./cakes/cakeReducer";
import cookieReducer from "./cookies/cookieReducer";
import bikeReducer from "./bikes/bikeReducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cake", "cookie", "bike"],
};

export type AppState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
	cake: cakeReducer,
	cookie: cookieReducer,
	bike: bikeReducer,
});

export default persistReducer(persistConfig, rootReducer);
