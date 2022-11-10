import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import bodySearchCityReducer from "./bodySearchCity-reducer";
import headerReducer from "./header-reducer";

const reducers = combineReducers({
    headerReducerPage: headerReducer,
    bodySearchCityPage: bodySearchCityReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof reducers>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export default store