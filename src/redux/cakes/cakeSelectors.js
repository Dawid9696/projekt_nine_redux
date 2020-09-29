/** @format */

import { createSelector } from "reselect";

const selectCake = (state) => state.cake;

export const selectCakeItem = createSelector(selectCake, (cake) => cake.numOfCakes);
