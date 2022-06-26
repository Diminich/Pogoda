import styles from './hourlyWeatherData.module.scss';
import moment from 'moment';
import { CityHourlyWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import RenderHorlyWeatherData from '../renderWetherData/renderHourlyWeatherData/RenderHourlyWeatherData';

interface HourlyWetherDataProps {
    hourlyWeatherData: CityHourlyWeatherData[];
    forecastWeather: string;
}

const HourlyWetherData: React.FC<HourlyWetherDataProps> = ({ hourlyWeatherData, forecastWeather }) => {
    let endFirstDayIndex = hourlyWeatherData.findIndex(({ dt }) => moment(dt * 1000).format('HH:mm') === '06:00');
    const endSecondDayIndex = hourlyWeatherData.slice(++endFirstDayIndex).findIndex((time) => moment(time!.dt * 1000).format('HH:mm') === '06:00');

    return (
        <>
            {hourlyWeatherData.map(({ dt, temp, weather }, index) => {
                const timeUTC = moment(dt * 1000).format('HH:mm');
                const refactorTemp = Math.round(temp);
                if (index < endFirstDayIndex && forecastWeather === 'Today') {
                    return (
                        <RenderHorlyWeatherData
                            spanId={index}
                            classNameRenderWeatherData={styles}
                            weather={weather}
                            refactorTemp={refactorTemp}
                            timeUTC={timeUTC} />
                    )
                } else if (index >= endFirstDayIndex && index <= (endSecondDayIndex + endFirstDayIndex) && forecastWeather === 'Tomorrow') {
                    return (
                        <RenderHorlyWeatherData
                            spanId={index}
                            classNameRenderWeatherData={styles}
                            weather={weather}
                            refactorTemp={refactorTemp}
                            timeUTC={timeUTC} />
                    )
                }
            })}
        </>
    )
}

export default HourlyWetherData;