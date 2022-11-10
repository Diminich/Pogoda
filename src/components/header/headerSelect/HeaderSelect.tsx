import { useDispatch, useSelector } from 'react-redux';
import { requestCityWeatherData } from '../../../redux/bodySearchCity-reducer';
import { actionHeader } from '../../../redux/header-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { RenderHeaderSelect } from './renderHeaderSelect/RenderHeaderSelect';

export const HeaderSelect: React.FC = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);
    const setCurrentLanguage = (value: string) => {
        dispatch(actionHeader.setLanguage(value));
        dispatch(requestCityWeatherData());
    }

    return (
        <RenderHeaderSelect currentLanguage={currentLanguage} />
    );
};