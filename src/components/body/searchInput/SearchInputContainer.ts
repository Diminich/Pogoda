import { useIntl } from "react-intl";
import { ChangeEvent, useEffect, KeyboardEvent } from "react";
import { useSelector } from "react-redux";
import { AppStateType, useAppDispath } from "../../../redux/redux-store";
import { searchInputError } from "./searchInputError";
import { SearchInputProps } from "./searchInputDetails/SearchInputDetails";
import {
  isLoadingWeatherDataAction,
  setCityNameAction,
} from "../../../redux/actions/bodySearchCityActions";
import { getWeatherData } from "../../../redux/asyncThunk/asyncThunk";

interface SearchInputContainerProps {
  renderSearchInput: (props: SearchInputProps) => React.ReactElement;
}

export const SearchInputContainer: React.FC<SearchInputContainerProps> = ({
  renderSearchInput,
}) => {
  const cityName = useSelector<AppStateType, string>(
    (state) => state.bodySearchCityPage.cityName
  );
  const error = useSelector<AppStateType, number>(
    (state) => state.bodySearchCityPage.error
  );
  const isActiveError = useSelector<AppStateType, boolean>(
    (state) => state.bodySearchCityPage.isActiveError
  );
  const isLoadingWeatherData = useSelector<AppStateType, boolean>(
    (state) => state.bodySearchCityPage.isLoadingWeatherData
  );
  const dispatch = useAppDispath();
  const intl = useIntl();

  useEffect(() => {
    if (isLoadingWeatherData) {
      dispatch(getWeatherData());
    }
  }, [isLoadingWeatherData, dispatch]);

  const onSearchCity = () => {
    if (cityName) {
      dispatch(isLoadingWeatherDataAction(true));
    }
  };

  const pressEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      dispatch(isLoadingWeatherDataAction(true));
    }
  };

  const changeNameCity = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setCityNameAction(e.currentTarget.value));
  };

  searchInputError(dispatch, error);

  return renderSearchInput({
    intl,
    onSearchCity,
    cityName,
    isLoadingWeatherData,
    changeNameCity,
    isActiveError,
    pressEnter,
  });
};
