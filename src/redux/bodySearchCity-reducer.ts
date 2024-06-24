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
      state.cityCurrentWeatherData = action.payload;
    })
    .addCase(setCityHourlyWeatherDataAction, (state, action) => {
      state.cityHourlyWeatherData = action.payload;
    })
    .addCase(setCityDailyWeatherDataAction, (state, action) => {
      state.cityDailyWeatherData = action.payload;
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
