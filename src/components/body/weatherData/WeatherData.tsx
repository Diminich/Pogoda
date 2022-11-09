import { useSelector } from 'react-redux';
import { CityDailyWeatherData, CityCurrentWeatherData, CityHourlyWeatherData } from '../../../redux/reducersTypes/reducersTypes';
import { AppStateType } from '../../../redux/redux-store';
import { TomorrowWetherData } from './tomorrowWetherData/TomorrowWeatherData';
import { DailyWetherData } from './dailyWetherData/DailyWetherData';
import { TodayWeatherData } from './todayWetherData/TodayWetherData';
import { useParams } from 'react-router-dom';

export const WeatherData: React.FC = () => {
    const currentWeatherData = useSelector<AppStateType, CityCurrentWeatherData[]>(state => state.bodySearchCityPage.cityCurrentWeatherData);
    const hourlyWeatherData = useSelector<AppStateType, CityHourlyWeatherData[]>(state => state.bodySearchCityPage.cityHourlyWeatherData);
    const dailyWeatherData = useSelector<AppStateType, CityDailyWeatherData[]>(state => state.bodySearchCityPage.cityDailyWeatherData);
    const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);
    let { pathId } = useParams();

    switch (pathId) {
        case 'today': {
            return <TodayWeatherData todayWeatherData={currentWeatherData} footerWetherData={hourlyWeatherData} path={pathId} currentLanguage={currentLanguage} />
        }

        case 'tomorrow': {
            return <TomorrowWetherData tomorrowWetherData={dailyWeatherData} footerWetherData={hourlyWeatherData} path={pathId} currentLanguage={currentLanguage} />
        }

        case 'daily': {
            return <DailyWetherData dailyWeatherData={dailyWeatherData} currentLanguage={currentLanguage} />
        }

        default: {
            return <></>
        }
    }
};