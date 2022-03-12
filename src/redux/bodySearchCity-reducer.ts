import { Dispatch } from "redux";
import { cityApi } from "../API/api";
import {
  cityDataHourlyType,
  cityDataDailyType,
  CitySearchNameType,
  InitialStateBodySearchCityType,
} from "./reducersTypes/reducersTypes";
import { AppStateType, InferActionTypes } from "./redux-store";

const SET_CITY_СOORD = "SET_CITY_СOORD";
const SET_CITY_DATA_HOURLY = "SET_CITY_DATA_HOURLY";
const SET_CITY_DATA_DAILY = "SET_CITY_DATA_DAILY";
const SET_ERROR = "SET_ERROR";
const IS_LOADING = "IS_LOADING";
const SET_FORECAST_WETHER = "SET_FORECAST_WETHER";

const initialState: InitialStateBodySearchCityType = {
  cityCoord: null,
  cityDataHourly: [],
  // cityDataToday: [],
  // cityDataTomorrow: [],
  cityDataDaily: [],
  error: 0,
  isLoading: false,
  forecastWether: "today",
};

type InitialStateType = typeof initialState;
// type IsLoading = typeof initialState['isLoading'];
type ActionTypes = InferActionTypes<typeof actionBodySearchCity>;

const bodySearchCityReducer = (
  state: InitialStateType = initialState,
  actionBodySearchCity: ActionTypes
): InitialStateType => {
  switch (actionBodySearchCity.type) {
    case SET_CITY_СOORD:
      return {
        ...state,
        cityCoord: actionBodySearchCity.cityCoord,
      };

    case SET_CITY_DATA_HOURLY: {
      return {
        ...state,
        cityDataHourly: actionBodySearchCity.cityDataHourly
        // cityDataToday: actionBodySearchCity.cityDataHourly.filter(
        //   (el, index) => {
        //     if (index < 24) {
        //       return el;
        //     }
        //   }
        // ),
        // cityDataTomorrow: actionBodySearchCity.cityDataHourly.filter(
        //   (el, index) => {
        //     if (index > 23) {
        //       return el;
        //     }
        //   }
        // ),
      };
    }

    case SET_CITY_DATA_DAILY: {
      return {
        ...state,
        cityDataDaily: actionBodySearchCity.cityDataDaily,
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        error: actionBodySearchCity.setError,
      };
    }

    case IS_LOADING: {
      return {
        ...state,
        isLoading: actionBodySearchCity.isLoading,
      };
    }

    case SET_FORECAST_WETHER: {
      return {
        ...state,
        forecastWether: actionBodySearchCity.setForecastWether,
      };
    }

    default:
      return state;
  }
};

export const actionBodySearchCity = {
  setCityCoord: (cityCoord: CitySearchNameType) =>
    ({
      type: SET_CITY_СOORD,
      cityCoord,
    } as const),

  setCityDataHourly: (cityDataHourly: cityDataHourlyType[]) =>
    ({
      type: SET_CITY_DATA_HOURLY,
      cityDataHourly,
    } as const),

  setCityDataDaily: (cityDataDaily: cityDataDailyType[]) =>
    ({
      type: SET_CITY_DATA_DAILY,
      cityDataDaily,
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

  setForecastWether: (setForecastWether: string) =>
    ({
      type: SET_FORECAST_WETHER,
      setForecastWether,
    } as const),
};

export const requestCityCoord = (nameCity: string) => {
  return async (dispatch: Dispatch, getState: () => AppStateType) => {
    try {
      const cityCoord = await cityApi.getCityCoord(nameCity);
      dispatch(actionBodySearchCity.setCityCoord(cityCoord.data.coord));
      const getStateBodySearchCityPage = getState().bodySearchCityPage;
      const { lat, lon } = getStateBodySearchCityPage.cityCoord || {};
      const languages = getState().headerReducerPage.currentLanguage;
      const forecastWether =
        getStateBodySearchCityPage.forecastWether === "tomorrow" ||
        getStateBodySearchCityPage.forecastWether === "today"
          ? "daily"
          : "hourly";
      const cityData = await cityApi.getCityHoursData(
        lat,
        lon,
        languages,
        forecastWether
      );
      forecastWether === "daily"
        ? dispatch(actionBodySearchCity.setCityDataHourly(cityData.data.hourly))
        : dispatch(actionBodySearchCity.setCityDataDaily(cityData.data.daily));
      dispatch(actionBodySearchCity.isLoading(false));
      dispatch(actionBodySearchCity.setError(0));
    } catch (error: any) {
      // console.log(JSON.stringify(error));
      const statusCode = Number(error.message.match(/\d+/));
      dispatch(actionBodySearchCity.isLoading(false));
      dispatch(actionBodySearchCity.setError(statusCode));
    }
  };
};

export default bodySearchCityReducer;
