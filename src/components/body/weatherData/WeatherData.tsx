import { useSelector } from 'react-redux';
import { CityHourlyWeatherData, CityDailyWeatherData } from '../../../redux/reducersTypes/reducersTypes';
import { AppStateType } from '../../../redux/redux-store';
import { HourlyWetherData } from './hourlyWetherData/HourlyWeatherData';
import { DailyWetherData } from './dailyWetherData/DailyWetherData';

export const WeatherData: React.FC = () => {
    const hourlyWeatherData = useSelector<AppStateType, CityHourlyWeatherData[]>(state => state.bodySearchCityPage.cityHourlyWeatherData);
    const dailyWeatherData = useSelector<AppStateType, CityDailyWeatherData[]>(state => state.bodySearchCityPage.cityDailyWeatherData);
    const forecastWeather = useSelector<AppStateType, string>(state => state.bodySearchCityPage.forecastWeather);
    const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);

    if (forecastWeather === 'Today' || forecastWeather === 'Tomorrow') {
        if (hourlyWeatherData.length !== 0) {
            return (
                <div className='weatherData'>
                    <HourlyWetherData hourlyWeatherData={hourlyWeatherData} forecastWeather={forecastWeather} />
                </div>
            )
        } else {
            return (
                <div className='weatherData'>
                    <span className='weatherData__noData'>Нет данных</span>
                </div>
            )
        }
    } else {
        if (dailyWeatherData.length !== 0) {
            return (
                <div className='weatherData'>
                    <DailyWetherData dailyWeatherData={dailyWeatherData} currentLanguage={currentLanguage} />
                </div>
            )
        } else {
            return (
                <div className='weatherData'>
                    <span className='weatherData__noData'>Нет данных</span>
                </div>
            )
        }
    }
};