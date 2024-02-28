import { useIntl } from "react-intl";
import { ChangeEvent, useEffect, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCityWeatherData } from "../../../redux/bodySearchCity-reducer";
import { AppStateType } from '../../../redux/redux-store';
import { searchInputError } from "./searchInputError";
import { SearchInputProps } from "./searchInputDetails/SearchInputDetails";
import { isLoadingAction, setCityNameAction } from "../../../redux/actions/bodySearchCityActions";

interface SearchInputContainerProps {
    renderSearchInput: (props: SearchInputProps) => React.ReactElement
}

export const SearchInputContainer: React.FC<SearchInputContainerProps> = ({ renderSearchInput }) => {
    const cityName = useSelector<AppStateType, string>(state => state.bodySearchCityPage.cityName);
    const error = useSelector<AppStateType, number>(state => state.bodySearchCityPage.error);
    const isActiveError = useSelector<AppStateType, boolean>(state => state.bodySearchCityPage.isActiveError);
    const isLoading = useSelector<AppStateType, boolean>(state => state.bodySearchCityPage.isLoading);
    const dispatch = useDispatch();
    const intl = useIntl();

    useEffect(() => {
        if (isLoading) {
            dispatch(requestCityWeatherData());
        }
    }, [isLoading, dispatch]);

    const onSearchCity = () => {
        if (cityName) {
            dispatch(isLoadingAction(true));
        }
    };

    const pressEnter = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            dispatch(isLoadingAction(true));
        }
    };

    const changeNameCity = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(setCityNameAction(e.currentTarget.value));
    };

    searchInputError(dispatch, error);

    return renderSearchInput({ intl, onSearchCity, cityName, isLoading, changeNameCity, isActiveError, pressEnter });
};