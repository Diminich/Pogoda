import { InitialStateBodySearchCityType } from "./reducersTypes/reducersTypes";
import { createReducer } from "@reduxjs/toolkit";
import {
  isActiveErrorAction,
  isLoadingWeatherDataAction,
  setCityCurrentWeatherDataAction,
  setCityDailyWeatherDataAction,
  setCityHourlyWeatherDataAction,
  setCityNameAction,
  setCitySearchCoordsAction,
  setErrorAction,
} from "./actions/bodySearchCityActions";
import {
  formatTime,
  refactorParams,
  upperCaseFirstLetter,
} from "../components/utils";

const initialState: InitialStateBodySearchCityType = {
  cityName: "",
  citySearchCoords: null,
  cityCurrentWeatherData: [],
  cityHourlyWeatherData: [],
  cityDailyWeatherData: [],
  isActiveError: false,
  error: 0,
  isLoadingWeatherData: false,
};

const bodySearchCityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityNameAction, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(setCitySearchCoordsAction, (state, action) => {
      state.citySearchCoords = action.payload;
    })
    .addCase(setCityCurrentWeatherDataAction, (state, action) => {
      state.cityCurrentWeatherData = [
        {
          ...action.payload,
          ...state.cityDailyWeatherData.find(
            (dailyWeatherData) => dailyWeatherData
          )!.temp,
          weather: action.payload.weather.map((weather) => {
            return {
              ...weather,
              description: upperCaseFirstLetter(weather.description),
            };
          }),
        },
      ];
    })
    .addCase(setCityHourlyWeatherDataAction, (state, action) => {
      state.cityHourlyWeatherData = [
        ...action.payload
          .map((hourlyWeatherData) => {
            return {
              ...hourlyWeatherData,
              timeUTC: formatTime(hourlyWeatherData.dt, "HH:mm"),
              temp: refactorParams({ refactorTemp: hourlyWeatherData.temp })
                .refactorTemp,
              weather: hourlyWeatherData.weather.map((weather) => {
                return {
                  ...weather,
                  description: upperCaseFirstLetter(weather.description),
                };
              }),
            };
          })
          .slice(1),
      ];
    })
    .addCase(setCityDailyWeatherDataAction, (state, action) => {
      state.cityDailyWeatherData = [
        ...action.payload
          .map((dailyWeatherData) => {
            return {
              ...dailyWeatherData,
              weather: dailyWeatherData.weather.map((weather) => {
                return {
                  ...weather,
                  description: upperCaseFirstLetter(weather.description),
                };
              }),
            };
          })
          .slice(0, -1),
      ];
    })
    .addCase(isActiveErrorAction, (state, action) => {
      state.isActiveError = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(isLoadingWeatherDataAction, (state, action) => {
      state.isLoadingWeatherData = action.payload;
    });
});

export default bodySearchCityReducer;
