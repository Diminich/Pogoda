import { useIntl } from 'react-intl';
import { CityDailyWeatherData, CityHourlyWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import { formatTime } from '../../../utils';
import FooterWetherData from '../footerWetherData/FooterWetherData';
import { RenderTomorrowWeatherData } from './renderTomorrowWeatherData/RenderTomorrowWeatherData';

interface TomorrowWetherDataProps {
    tomorrowWetherData: CityDailyWeatherData[];
    footerWetherData: CityHourlyWeatherData[];
    path: string;
    currentLanguage: string;
}

export const TomorrowWetherData: React.FC<TomorrowWetherDataProps> = ({ tomorrowWetherData, footerWetherData, path, currentLanguage }) => {
    const intl = useIntl();

    return (
        <div className='tomorrowWetherData'>
            <div className='tomorrowWetherData__wrapperRenderTomorrowWetherData'>
                {tomorrowWetherData.slice(1, 2).map(({ dt, temp, weather }, index) => {
                    const [{ description, icon }] = weather;
                    const timeUTC = formatTime(dt, 'dddd, MMMM D', currentLanguage);
                    const refactorDayTemp = Math.round(temp.day);
                    const refactorNightTemp = Math.round(temp.night);

                    return <RenderTomorrowWeatherData
                        timeUTC={timeUTC}
                        refactorDayTemp={refactorDayTemp}
                        refactorNightTemp={refactorNightTemp}
                        description={description}
                        icon={icon}
                        intl={intl}
                        index={index}
                    />
                })}
            </div>
            <FooterWetherData weatherData={footerWetherData} path={path} />
        </div>
    )
};