import { useIntl } from 'react-intl';
import { CityCurrentWeatherData, CityHourlyWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import { formatTime, refactorParams } from '../../../utils';
import FooterWetherData from '../footerWetherData/FooterWetherData';
import { RenderTodayWeatherData } from './renderTodayWeatherData/RenderTodayWeatherData';

interface TodayWetherDataProps {
    todayWeatherData: CityCurrentWeatherData[];
    footerWetherData: CityHourlyWeatherData[];
    path: string;
    currentLanguage: string;
}

export const TodayWeatherData: React.FC<TodayWetherDataProps> = ({ todayWeatherData, footerWetherData, path, currentLanguage }) => {
    const intl = useIntl();

    return (
        <div className='todayWeatherData'>
            <div className='todayWeatherData__wrapperRenderTodayWetherData'>
                {todayWeatherData.map(({ dt, day, night, temp, feels_like, weather }, index) => {
                    const [{ description, icon }] = weather;
                    const timeUTC = formatTime(dt, 'MMMM, HH:mm', currentLanguage);
                    const refactorTemp = refactorParams({ 'day': day, 'night': night, 'currentTemp': temp, 'feels_like': feels_like });

                    return <RenderTodayWeatherData
                        timeUTC={timeUTC}
                        refactorTemp={refactorTemp}
                        description={description}
                        icon={icon}
                        index={index}
                        intl={intl}
                    />
                })}
            </div>
            <FooterWetherData weatherData={footerWetherData} path={path} />
        </div>
    )
};