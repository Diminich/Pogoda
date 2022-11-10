import { MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { requestCityWeatherData } from '../../../redux/bodySearchCity-reducer';
import { actionHeader } from '../../../redux/header-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { LanguagesSelect } from '../../styled/headerSelectStyled';

export const HeaderSelect: React.FC = () => {
    const dispatch = useDispatch();
    const cityName = useSelector<AppStateType, string>(state => state.bodySearchCityPage.cityName)
    const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);
    const setCurrentLanguage = (e: any) => {
        dispatch(actionHeader.setLanguage(e.target.value as string));
        cityName !== '' && dispatch(requestCityWeatherData());
    }

    return (
        <LanguagesSelect
            autoWidth={true}
            value={currentLanguage}
            onChange={setCurrentLanguage}
            IconComponent={() => null}
        >
            <MenuItem value='ru'>RU</MenuItem>
            <MenuItem value='en'>EN</MenuItem>
        </LanguagesSelect>
    );
};