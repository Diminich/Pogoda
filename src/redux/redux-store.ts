import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import bodySearchCityReducer from "./bodySearchCity-reducer";
import headerReducer from "./header-reducer";
import { useDispatch } from "react-redux";

const reducers = combineReducers({
  headerReducerPage: headerReducer,
  bodySearchCityPage: bodySearchCityReducer,
});

const store = configureStore({ reducer: reducers });

export const useAppDispath = () => useDispatch<typeof store.dispatch>();

export type AppStateType = ReturnType<typeof store.getState>;

export default store;
