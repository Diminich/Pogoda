import { useSelector } from 'react-redux';
import { CityDailyWeatherData, CityCurrentWeatherData, CityHourlyWeatherData } from '../../../redux/reducersTypes/reducersTypes';
import { AppStateType } from '../../../redux/redux-store';
import { useParams } from 'react-router-dom';
import React from 'react';
import { TomorrowWetherDataProps } from './tomorrowWetherData/TomorrowWeatherData';
import { TodayWetherDataProps } from './todayWether/TodayWether';
import { DailyWetherDataProps } from './dailyWetherData/DailyWetherData';

interface WeatherDataContainerProps {
    renderTodayWeather: (props: TodayWetherDataProps) => React.ReactElement;
    renderTomorrowWether: (props: TomorrowWetherDataProps) => React.ReactElement;
    renderDailyWether: (props: DailyWetherDataProps) => React.ReactElement;
}

export const WeatherDataContainer: React.FC<WeatherDataContainerProps> = ({ renderTodayWeather, renderTomorrowWether, renderDailyWether }) => {
    const currentWeatherData = useSelector<AppStateType, CityCurrentWeatherData[]>(state => state.bodySearchCityPage.cityCurrentWeatherData);
    const hourlyWetherData = useSelector<AppStateType, CityHourlyWeatherData[]>(state => state.bodySearchCityPage.cityHourlyWeatherData);
    const dailyWeatherData = useSelector<AppStateType, CityDailyWeatherData[]>(state => state.bodySearchCityPage.cityDailyWeatherData);
    const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);
    let { pathId } = useParams();

    switch (pathId) {
        case 'today': {
            return renderTodayWeather({ currentWeatherData, hourlyWetherData, pathId, currentLanguage });
        }

        case 'tomorrow': {
            return renderTomorrowWether({ dailyWeatherData, hourlyWetherData, pathId, currentLanguage });
        }

        case 'daily': {
            return renderDailyWether({ dailyWeatherData, currentLanguage });
        }

        default: {
            return null;
        }
    }
};