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
import { isloadingLanguageAction } from "../actions/headerActions";
import { AppStateType } from "../redux-store";
import { GetThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";

type thunkApi = GetThunkAPI<{
  state: AppStateType;
  dispatch?: Dispatch<UnknownAction> | undefined;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
}>;

const errorMessage = (error: Error, dispatch: Dispatch<UnknownAction>) => {
  const statusCode = Number(error.message.match(/\d+/));
  dispatch(isLoadingWeatherDataAction(false));
  dispatch(setErrorAction(statusCode));
};

const getData = async ({ getState, dispatch }: thunkApi) => {
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
  }
};

export const getWeatherData = createAsyncThunk<
  void,
  void,
  { state: AppStateType }
>("getCoords", async (_, thunkApi) => {
  try {
    const { data } = await cityApi.getCityCurrentWeatherData(
      thunkApi.getState().bodySearchCityPage.cityName
    );
    thunkApi.dispatch(setCitySearchCoordsAction(data.coord));
    getData(thunkApi);
  } catch (error) {
    errorMessage(error as Error, thunkApi.dispatch);
  }
});

export const changeLanguages = createAsyncThunk<
  void,
  void,
  { state: AppStateType }
>("changeLanguages", async (_, thunkApi) => {
  try {
    await getData(thunkApi);
    thunkApi.dispatch(isloadingLanguageAction(false));
  } catch (error) {
    errorMessage(error as Error, thunkApi.dispatch);
  }

});
