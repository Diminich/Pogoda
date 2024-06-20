import { Dispatch, UnknownAction, createAsyncThunk } from "@reduxjs/toolkit";
import { cityApi } from "../../Api/Api";
import {
  isLoadingWeatherDataAction,
  setCityCurrentWeatherDataAction,
  setCityDailyWeatherDataAction,
  setCityHourlyWeatherDataAction,
  setCitySearchCoordsAction,
  setErrorAction,
} from "../actions/bodySearchCityActions";
import { isLoadingLanguageAction } from "../actions/headerActions";
import { AppStateType } from "../redux-store";

const errorMessage = (error: Error, dispatch: Dispatch<UnknownAction>) => {
  const statusCode = Number(error.message.match(/\d+/));
  dispatch(isLoadingWeatherDataAction(false));
  dispatch(setErrorAction(statusCode));
};

const getWeatherData = createAsyncThunk<void, void, { state: AppStateType }>(
  "getData",
  async (_, { getState, dispatch }) => {
    try {
      const { lat, lon } = getState().bodySearchCityPage.citySearchCoords || {};
      const languages = getState().headerReducerPage.currentLanguage;
      const cityData = await cityApi.getCityHoursData(lat, lon, languages);
      dispatch(setCityHourlyWeatherDataAction(cityData.data.hourly));
      dispatch(setCityDailyWeatherDataAction(cityData.data.daily));
      dispatch(setCityCurrentWeatherDataAction(cityData.data.current));
      dispatch(isLoadingWeatherDataAction(false));
      dispatch(setErrorAction(0));
    } catch (error) {
      errorMessage(error as Error, dispatch);
      dispatch(isLoadingWeatherDataAction(false));
    }
  }
);

export const getCityCoords = createAsyncThunk<
  void,
  void,
  { state: AppStateType }
>("getCoords", async (_, { getState, dispatch }) => {
  try {
    const { data } = await cityApi.getCityCurrentWeatherData(
      getState().bodySearchCityPage.cityName
    );
    dispatch(setCitySearchCoordsAction(data.coord));
    dispatch(getWeatherData());
  } catch (error) {
    errorMessage(error as Error, dispatch);
  }
});

export const changeLanguages = createAsyncThunk<
  void,
  void,
  { state: AppStateType }
>("changeLanguages", async (_, { getState, dispatch }) => {
  try {
    if (getState().bodySearchCityPage.cityName) {
      dispatch(getWeatherData());
    }
    dispatch(isLoadingLanguageAction(false));
  } catch (error) {
    errorMessage(error as Error, dispatch);
    dispatch(isLoadingLanguageAction(false));
  }
});
