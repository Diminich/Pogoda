import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import thunkMiddleware from 'redux-thunk';
import bodySearchCityReducer from "./bodySearchCity-reducer";
import headerReducer from "./header-reducer";

const reducers = combineReducers({
    headerReducerPage: headerReducer,
    bodySearchCityPage: bodySearchCityReducer,
});

// const store = createStore(reducers, applyMiddleware(thunkMiddleware));
const store = configureStore({ reducer: reducers })

export type AppStateType = ReturnType<typeof store.getState>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export default store