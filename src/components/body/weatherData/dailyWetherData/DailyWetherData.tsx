import { CityDailyWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import { formatCalendar, formatTime } from '../../../utils';
import { RenderDailyWeatherData } from './renderDailyWeatherData/RenderDailyWeatherData';

interface DailyWetherDataProps {
    dailyWeatherData: CityDailyWeatherData[];
    currentLanguage: string;
}

export const DailyWetherData: React.FC<DailyWetherDataProps> = ({ dailyWeatherData, currentLanguage }) => {
    return (
        <div className='weatherDataDaily'>
            {dailyWeatherData.map(({ dt, temp, weather, }, index) => {
                const [{ description, icon }] = weather;
                const timeUTC = index === 0 ? formatCalendar() : formatTime(dt, 'dddd, MMMM D', currentLanguage);
                const refactorTempDay = Math.round(temp.day);
                const refactorTempNight = Math.round(temp.night);

                return (
                    <RenderDailyWeatherData
                        id={index}
                        description={description}
                        icon={icon}
                        refactorTempDay={refactorTempDay}
                        refactorTempNight={refactorTempNight}
                        timeUTC={timeUTC} />
                )
            })}
        </div>
    )
};