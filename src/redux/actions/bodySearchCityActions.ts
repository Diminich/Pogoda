import { createAction } from "@reduxjs/toolkit";
import {
  CityCurrentWeatherData,
  CityDailyWeatherData,
  CityHourlyWeatherData,
  CitySearchCoordsType,
} from "../reducersTypes/reducersTypes";

export const setCityNameAction = createAction<string>("SET_CITY_NAME");
export const setCitySearchCoordsAction = createAction<CitySearchCoordsType>(
  "SET_CITY_SEARCH_COORDS"
);
export const setCityCurrentWeatherDataAction =
  createAction<CityCurrentWeatherData>("SET_CITY_CURRENT_WEATHER_DATA");
export const setCityHourlyWeatherDataAction = createAction<
  CityHourlyWeatherData[]
>("SET_CITY_DATA_HOURLY");
export const setCityDailyWeatherDataAction = createAction<
  CityDailyWeatherData[]
>("SET_CITY_DATA_DAILY");
export const isActiveErrorAction = createAction<boolean>("IS_ACTIVE_ERROR");
export const setErrorAction = createAction<number>("SET_ERROR");
export const isLoadingWeatherDataAction = createAction<boolean>("IS_LOADING_WEATHER_DATA");
