import { useIntl } from "react-intl";
import { ChangeEvent, useEffect, KeyboardEvent } from "react";
import { useSelector } from "react-redux";
import { AppStateType, useAppDispath } from "../../../redux/redux-store";
import { searchInputError } from "./searchInputError";
import { SearchInputDetailsProps } from "./searchInputDetails/SearchInputDetails";
import {
  isLoadingWeatherDataAction,
  setCityNameAction,
} from "../../../redux/actions/bodySearchCityActions";
import { getCityCoords } from "../../../redux/asyncThunk/asyncThunk";

interface SearchInputProps {
  renderSearchInputDetails: (props: SearchInputDetailsProps) => React.ReactElement;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  renderSearchInputDetails,
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
      dispatch(getCityCoords());
    }
  }, [isLoadingWeatherData, dispatch]);

  useEffect(() => {
    searchInputError(dispatch, error);
  }, [error, dispatch]);

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

  return renderSearchInputDetails({
    intl,
    onSearchCity,
    cityName,
    isLoadingWeatherData,
    changeNameCity,
    isActiveError,
    pressEnter,
  });
};
