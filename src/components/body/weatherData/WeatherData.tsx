// import styles from './weatherData.module.scss';
import { useSelector } from 'react-redux';
import { CityHourlyWeatherData, CityDailyWeatherData } from '../../../redux/reducersTypes/reducersTypes';
import { AppStateType } from '../../../redux/redux-store';
import HourlyWeatherData from './hourlyWetherData/HourlyWeatherData';
import DailyWeatherData from './dailyWetherData/DailyWetherData';

const WeatherData: React.FC = () => {
    const hourlyWeatherData = useSelector<AppStateType, CityHourlyWeatherData[]>(state => state.bodySearchCityPage.cityHourlyWeatherData);
    const dailyWeatherData = useSelector<AppStateType, CityDailyWeatherData[]>(state => state.bodySearchCityPage.cityDailyWeatherData);
    const forecastWeather = useSelector<AppStateType, string>(state => state.bodySearchCityPage.forecastWeather);
    const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);

    if (forecastWeather === 'Today' || forecastWeather === 'Tomorrow') {
        if (hourlyWeatherData.length !== 0) {
            return (
                <div className='wrapeprWeatherData'>
                    <HourlyWeatherData hourlyWeatherData={hourlyWeatherData} forecastWeather={forecastWeather} />
                </div>
            )
        } else {
            return (
                <div className='wrapeprWeatherData'>
                    <span className='noData'>Нет данных</span>
                </div>
            )
        }
    } else {
        if (dailyWeatherData.length !== 0) {
            return (
                <div className='wrapeprWeatherData'>
                    <DailyWeatherData dailyWeatherData={dailyWeatherData} currentLanguage={currentLanguage} />
                </div>
            )
        } else {
            return (
                <div className='wrapeprWeatherData'>
                    <span className='noData'>Нет данных</span>
                </div>
            )
        }
    }
}

export default WeatherData;