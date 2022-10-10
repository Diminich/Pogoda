import { useSelector } from 'react-redux';
import { CityCurrentWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import { AppStateType } from '../../../../redux/redux-store';
import RenderCurrentWeatherData from '../renderWetherData/renderCurrentWeatherData/RenderCurrentWeatherData';

const CurrentWeatherData: React.FC = () => {
    const currentWeatherData = useSelector<AppStateType, CityCurrentWeatherData[]>(state => state.bodySearchCityPage.cityCurrentWeatherData);
    const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);

    return (
        <div className='currentWeatherData'>
            <RenderCurrentWeatherData
                currentWeatherData={currentWeatherData}
                currentLanguage={currentLanguage} />
        </div>
    )
}

export default CurrentWeatherData;