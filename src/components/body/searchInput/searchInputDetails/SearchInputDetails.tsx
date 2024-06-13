import { KeyboardEvent } from "react";
import { IntlShape } from "react-intl";
import {
  SearchButton,
  SearchInput,
} from "../../../styled/body/searchInputStyled";
import { i18Function } from "../../../utils";

export interface SearchInputProps {
  intl: IntlShape;
  onSearchCity: () => void;
  cityName: string;
  isLoadingWeatherData: boolean;
  changeNameCity: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isActiveError: boolean;
  pressEnter: (e: KeyboardEvent<HTMLDivElement>) => void;
}

export const SearchInputDetails: React.FC<SearchInputProps> = ({
  intl,
  onSearchCity,
  cityName,
  isLoadingWeatherData,
  changeNameCity,
  isActiveError,
  pressEnter,
}) => {
  return (
    <div className="searchInput">
      <SearchInput
        autoComplete="off"
        focused={false}
        error={isActiveError}
        placeholder={i18Function(intl, "body.search")}
        value={cityName}
        onKeyPress={(e) => pressEnter(e)}
        onChange={(e) => changeNameCity(e)}
        helperText={isActiveError && i18Function(intl, "body.error")}
      />
      <SearchButton
        onClick={onSearchCity}
        disabled={cityName === ""}
        loading={isLoadingWeatherData}
        loadingPosition="center"
        variant="contained"
      >
        {i18Function(intl, "body.searchButton")}
      </SearchButton>
    </div>
  );
};
