import moment from 'moment';
import 'moment/locale/ru';
import { CityDailyWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import { RenderDailyWeatherData } from './renderDailyWeatherData/RenderDailyWeatherData';

interface DailyWetherDataProps {
    dailyWeatherData: CityDailyWeatherData[];
    currentLanguage: string;
}

export const DailyWetherData: React.FC<DailyWetherDataProps> = ({ dailyWeatherData, currentLanguage }) => {
    moment.locale(currentLanguage);
    return (
        <>
            {dailyWeatherData.map(({ dt, temp, weather, }, index) => {
                const timeUTC = moment(dt * 1000).format(`DD MMMM`);
                const refactorTempMax = Math.round(temp.max);
                const refactorTempMin = Math.round(temp.min);
                return (
                    <RenderDailyWeatherData
                        spanId={index}
                        weather={weather}
                        daylyTempMax={refactorTempMax}
                        daylyTempMin={refactorTempMin}
                        timeUTC={timeUTC} />
                )
            })}
        </>
    )
};