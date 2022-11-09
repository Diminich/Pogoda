import { Dispatch } from "redux";
import { cityApi } from "../Api/Api";
import {
  CityHourlyWeatherData,
  CityDailyWeatherData,
  CitySearchCoordsType,
  CityCurrentWeatherData,
  InitialStateBodySearchCityType,
} from "./reducersTypes/reducersTypes";
import { AppStateType, InferActionTypes } from "./redux-store";

const SET_CITY_NAME = "SET_CITY_NAME";
const SET_CITY_SEARCH_COORDS = "SET_CITY_SEARCH_COORDS";
const SET_CITY_CURRENT_WEATHER_DATA = "SET_CITY_CURRENT_WEATHER_DATA";
const SET_CITY_DATA_HOURLY = "SET_CITY_DATA_HOURLY";
const SET_CITY_DATA_DAILY = "SET_CITY_DATA_DAILY";
const IS_ACTIVE_ERROR = "IS_ACTIVE_ERROR";
const SET_ERROR = "SET_ERROR";
const IS_LOADING = "IS_LOADING";

const initialState: InitialStateBodySearchCityType = {
  cityName: '',
  citySearchCoords: null,
  cityCurrentWeatherData: [],
  cityHourlyWeatherData: [],
  cityDailyWeatherData: [],
  isActiveError: false,
  error: 0,
  isLoading: false
};

type InitialStateType = typeof initialState;
// type IsLoading = typeof initialState['isLoading'];
type ActionTypes = InferActionTypes<typeof actionBodySearchCity>;

const bodySearchCityReducer = (
  state: InitialStateType = initialState,
  actionBodySearchCity: ActionTypes
): InitialStateType => {
  switch (actionBodySearchCity.type) {
    case SET_CITY_NAME: {
      return {
        ...state,
        cityName: actionBodySearchCity.cityName
      };
    }

    case SET_CITY_SEARCH_COORDS: {
      return {
        ...state,
        citySearchCoords: actionBodySearchCity.citySearchCoords
      };
    }

    case SET_CITY_CURRENT_WEATHER_DATA: {
      return {
        ...state,
        cityCurrentWeatherData: [{ ...actionBodySearchCity.cityCurrentWeatherData, ...state.cityDailyWeatherData.find((el) => el)!.temp }]
      };
    }

    case SET_CITY_DATA_HOURLY: {
      return {
        ...state,
        cityHourlyWeatherData: [...actionBodySearchCity.cityHourlyWeatherData.slice(1)]
      };
    }

    case SET_CITY_DATA_DAILY: {
      return {
        ...state,
        cityDailyWeatherData: actionBodySearchCity.cityDailyWeatherData.slice(0, -1)
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        error: actionBodySearchCity.setError
      };
    }

    case IS_ACTIVE_ERROR: {
      return {
        ...state,
        isActiveError: actionBodySearchCity.isActiveError
      };
    }

    case IS_LOADING: {
      return {
        ...state,
        isLoading: actionBodySearchCity.isLoading
      };
    }

    default:
      return state;
  }
};

export const actionBodySearchCity = {
  setCityName: (cityName: string) =>
  ({
    type: SET_CITY_NAME,
    cityName,
  } as const),

  setCitySearchCoords: (citySearchCoords: CitySearchCoordsType) =>
  ({
    type: SET_CITY_SEARCH_COORDS,
    citySearchCoords,
  } as const),

  setCityCurrentWeatherData: (cityCurrentWeatherData: CityCurrentWeatherData) =>
  ({
    type: SET_CITY_CURRENT_WEATHER_DATA,
    cityCurrentWeatherData,
  } as const),

  setCityHourlyWeatherData: (cityHourlyWeatherData: CityHourlyWeatherData[]) =>
  ({
    type: SET_CITY_DATA_HOURLY,
    cityHourlyWeatherData,
  } as const),

  setCityDailyWeatherData: (cityDailyWeatherData: CityDailyWeatherData[]) =>
  ({
    type: SET_CITY_DATA_DAILY,
    cityDailyWeatherData,
  } as const),

  isActiveError: (isActiveError: boolean) =>
  ({
    type: IS_ACTIVE_ERROR,
    isActiveError,
  } as const),

  setError: (setError: number) =>
  ({
    type: SET_ERROR,
    setError,
  } as const),

  isLoading: (isLoading: boolean) =>
  ({
    type: IS_LOADING,
    isLoading,
  } as const),
};

export const requestCityWeatherData = () => {
  return async (dispatch: Dispatch, getState: () => AppStateType) => {
    try {
      const currentWetherData = await cityApi.getCityCurrentWeatherData(getState().bodySearchCityPage.cityName);
      dispatch(actionBodySearchCity.setCitySearchCoords(currentWetherData.data.coord));
      const { lat, lon } = getState().bodySearchCityPage.citySearchCoords || {};
      const languages = getState().headerReducerPage.currentLanguage;
      const cityData = await cityApi.getCityHoursData(
        lat,
        lon,
        languages
      );
      dispatch(actionBodySearchCity.setCityHourlyWeatherData(cityData.data.hourly));
      dispatch(actionBodySearchCity.setCityDailyWeatherData(cityData.data.daily));
      dispatch(actionBodySearchCity.setCityCurrentWeatherData(cityData.data.current));
      dispatch(actionBodySearchCity.isLoading(false));
      dispatch(actionBodySearchCity.setError(0));
    } catch (error: any) {
      const statusCode = Number(error.message.match(/\d+/));
      dispatch(actionBodySearchCity.isLoading(false));
      dispatch(actionBodySearchCity.setError(statusCode));
    }
  };
};

export default bodySearchCityReducer;