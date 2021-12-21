import { Dispatch } from 'redux';
import { cityApi } from '../Api/Api';
import { cityDataType, CitySearchNameType, InitialStateBodySearchCityType } from "./reducersTypes/reducersTypes";
import store, { InferActionTypes } from "./redux-store";

const SET_CITY_СOORD = 'SET_CITY_СOORD';
const SET_CITY_DATA = 'SET_CITY_DATA';

const initialState: InitialStateBodySearchCityType = {
    cityCoord: {lat: 0, lon: 0},
    cityData: []
};

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof action>;

const bodySearchCityReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_CITY_СOORD:
            return {
                ...state,
                cityCoord: {lat: action.setCity.lat, lon: action.setCity.lon}
            };

        case SET_CITY_DATA: {
            return {
                ...state,
                cityData: []
            }
        }

        default:
            return state;
    }
};

const action = {
    setCityCoord: (setCity: CitySearchNameType) => ({
        type: SET_CITY_СOORD,
        setCity
    } as const),

    setCityData: (setCityData: cityDataType) => ({
        type: SET_CITY_DATA,
        setCityData
    } as const)
}

export const requestCityCoord = (nameCity: string) => {
    return async (dispatch: Dispatch) => {
        const cityCoord = await cityApi.getCityCoord(nameCity);
        dispatch(action.setCityCoord({lat: cityCoord.data.coord.lat, lon: cityCoord.data.coord.lon}));
        const {lat, lon} = store.getState().bodySearchCityPage.cityCoord
        const cityData = await cityApi.getCityHoursData(lat, lon)
        dispatch(action.setCityData(cityData.data))
    }
};


export default bodySearchCityReducer;