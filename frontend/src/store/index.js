import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./users/user.reducer";

const rootReducer = combineReducers({
    users:userReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
