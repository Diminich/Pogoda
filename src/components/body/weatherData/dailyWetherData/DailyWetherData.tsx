import { CityDailyWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import { formatCalendar, formatTime, refactorParams } from '../../../utils';
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
                const refactorTemp = refactorParams({ 'day': temp.day, 'night': temp.night });

                return (
                    <RenderDailyWeatherData
                        id={index}
                        description={description}
                        icon={icon}
                        refactorTemp={refactorTemp}
                        timeUTC={timeUTC} />
                )
            })}
        </div>
    )
};