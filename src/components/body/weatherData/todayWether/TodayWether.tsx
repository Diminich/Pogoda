import { CityCurrentWeatherData, CityHourlyWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import { TodayWeatherByHourles } from '../todayWeatherByHourles/TodayWeatherByHouers';
import { TodayWeatherDetails } from './todayWetherDetails/TodayWetherDetails';

interface TodayWetherDataProps {
    currentWeatherData: CityCurrentWeatherData[];
    hourlyWetherData: CityHourlyWeatherData[];
    pathId: string;
    currentLanguage: string;
}

export const TodayWeather: React.FC<TodayWetherDataProps> = ({ currentWeatherData, hourlyWetherData, pathId, currentLanguage }) => {
    return (
        <div className='todayWeatherData'>
            <div className='todayWeatherData__wrapperRenderTodayWetherData'>
                {currentWeatherData.map((weatherDetails, index) => <TodayWeatherDetails details={weatherDetails} index={index} currentLanguage={currentLanguage} />)}
            </div>
            <TodayWeatherByHourles weatherData={hourlyWetherData} path={pathId} />
        </div>
    )
};