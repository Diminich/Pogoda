import { InitialStateBodySearchCityType } from "./reducersTypes/reducersTypes";
import { createReducer } from "@reduxjs/toolkit";
import {
  isActiveErrorAction,
  isLoadingAction,
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
  isLoading: false,
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
          ...state.cityDailyWeatherData.find((el) => el)!.temp,
        },
      ];
    })
    .addCase(setCityHourlyWeatherDataAction, (state, action) => {
      state.cityHourlyWeatherData = [...action.payload.slice(1)];
    })
    .addCase(setCityDailyWeatherDataAction, (state, action) => {
      state.cityDailyWeatherData = action.payload.slice(0, -1);
    })
    .addCase(isActiveErrorAction, (state, action) => {
      state.isActiveError = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(isLoadingAction, (state, action) => {
      state.isLoading = action.payload;
    });
});

export default bodySearchCityReducer;
