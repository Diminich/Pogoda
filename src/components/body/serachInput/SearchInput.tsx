import styles from './searchInput.module.scss';
import { useIntl } from "react-intl";
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCityCoord } from "../../../redux/bodySearchCity-reducer";
import { AppStateType } from '../../../redux/redux-store';
import { actionBodySearchCity } from '../../../redux/bodySearchCity-reducer';

const SearchInput: React.FC = () => {
    const [searchCityName, setSearchCityName] = useState('');
    const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);
    const forecastWether = useSelector<AppStateType, string>(state => state.bodySearchCityPage.forecastWether);
    const error = useSelector<AppStateType, number>(state => state.bodySearchCityPage.error);
    const isLoading = useSelector<AppStateType, boolean>(state => state.bodySearchCityPage.isLoading);
    
    const dispatch = useDispatch();
    const intl = useIntl();
    const { Search } = Input;

    useEffect(() => {
        if (searchCityName.length > 0) {
            dispatch(requestCityCoord(searchCityName));
        }
    }, [searchCityName, currentLanguage, dispatch, forecastWether]);

    const onSearchCity = (cityName: string) => {
        setSearchCityName(cityName);
        dispatch(actionBodySearchCity.isLoading(true));
    }

    return (
        <>
            <Search
                className={styles.searchInput}
                bordered={false}
                placeholder={intl.formatMessage({ id: 'body.search' })}
                enterButton={intl.formatMessage({ id: 'body.searchButton' })}
                size='middle'
                allowClear
                loading={isLoading}
                onSearch={onSearchCity}
            />
            <span className={styles.errorMessage}>{error === 404 && intl.formatMessage({ id: 'body.error' })}</span>
        </>
    )
}

export default SearchInput;