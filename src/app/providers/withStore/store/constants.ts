import { combineReducers } from "redux";

import { showHeaderInfoSlice } from "widgets/header/model";

export const rootReducer = combineReducers({
    [showHeaderInfoSlice.name]: showHeaderInfoSlice.reducer
});
