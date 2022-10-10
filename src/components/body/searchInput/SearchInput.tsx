import { useIntl } from "react-intl";
import { Input } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCityWeatherData } from "../../../redux/bodySearchCity-reducer";
import { AppStateType } from '../../../redux/redux-store';
import { actionBodySearchCity } from '../../../redux/bodySearchCity-reducer';
import RenderSearchInput from './renderSearchInput/RenderSearchInput';

const SearchInput: React.FC = () => {
    // const [activeError, setActiveError] = useState<boolean>(false);
    const cityName = useSelector<AppStateType, string>(state => state.bodySearchCityPage.cityName);
    const error = useSelector<AppStateType, number>(state => state.bodySearchCityPage.error);
    const isActiveError = useSelector<AppStateType, boolean>(state => state.bodySearchCityPage.isActiveError);
    const isLoading = useSelector<AppStateType, boolean>(state => state.bodySearchCityPage.isLoading);
    const dispatch = useDispatch();
    const intl = useIntl();

    const { Search } = Input;

    useEffect(() => {

        if (isLoading) {
            dispatch(requestCityWeatherData());
        }
    }, [isLoading, dispatch]);

    const onSearchCity = () => {
        if (cityName) {
            dispatch(actionBodySearchCity.isLoading(true));
        }
    }

    const changeNameCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(actionBodySearchCity.setCityName(e.currentTarget.value));
    }

    return (
        <div className='searchInput'>
            <RenderSearchInput
                intl={intl}
                Search={Search}
                changeNameCity={changeNameCity}
                cityName={cityName}
                isLoading={isLoading}
                onSearchCity={onSearchCity}
                isActiveError={isActiveError}
                error={error} />
        </div>
    )
}

export default SearchInput;