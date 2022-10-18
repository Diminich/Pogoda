import { useIntl } from "react-intl";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCityWeatherData } from "../../../redux/bodySearchCity-reducer";
import { AppStateType } from '../../../redux/redux-store';
import { actionBodySearchCity } from '../../../redux/bodySearchCity-reducer';
import { searchInputError } from "./searchInputError";
import { RenderSearchInput } from "./renderSearchInput/RenderSearchInput";

export const SearchInput: React.FC = () => {
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
            dispatch(actionBodySearchCity.isLoading(true));
        }
    };

    const changeNameCity = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actionBodySearchCity.setCityName(e.currentTarget.value));
    };

    searchInputError(dispatch, error);

    return (
        <div className='searchInput'>
            <RenderSearchInput
                intl={intl}
                changeNameCity={changeNameCity}
                cityName={cityName}
                isLoading={isLoading}
                onSearchCity={onSearchCity}
                isActiveError={isActiveError}
                error={error} />
        </div>
    )
};