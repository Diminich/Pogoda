import moment from 'moment';
import { CityHourlyWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import { RenderTomorrowWeatherData } from './renderTomorrowWeatherData/RenderTomorrowWeatherData';

interface TomorrowWetherDataProps {
    hourlyWeatherData: CityHourlyWeatherData[];
    forecastWeather: string;
}

export const TomorrowWetherData: React.FC<TomorrowWetherDataProps> = ({ hourlyWeatherData, forecastWeather }) => {
    let endFirstDayIndex = hourlyWeatherData.findIndex(({ dt }) => moment(dt * 1000).format('HH:mm') === '06:00');
    const endSecondDayIndex = hourlyWeatherData.slice(++endFirstDayIndex).findIndex((time) => moment(time!.dt * 1000).format('HH:mm') === '06:00');

    return (
        <>
            {hourlyWeatherData.map(({ dt, temp, weather }, index) => {
                const timeUTC = moment(dt * 1000).format('HH:mm');
                const refactorTemp = Math.round(temp);

                if (index < endFirstDayIndex && forecastWeather === 'Today') {
                    return (
                        <RenderTomorrowWeatherData
                            spanId={index}
                            weather={weather}
                            refactorTemp={refactorTemp}
                            timeUTC={timeUTC} />
                    )
                } else if (index >= endFirstDayIndex && index <= (endSecondDayIndex + endFirstDayIndex) && forecastWeather === 'Tomorrow') {
                    return (
                        <RenderTomorrowWeatherData
                            spanId={index}
                            weather={weather}
                            refactorTemp={refactorTemp}
                            timeUTC={timeUTC} />
                    )
                }
            })}
        </>
    )
};