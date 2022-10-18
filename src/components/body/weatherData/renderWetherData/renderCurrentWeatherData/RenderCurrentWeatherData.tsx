import moment from 'moment';
import 'moment/locale/ru';
import { useIntl } from 'react-intl';
import { CityCurrentWeatherData } from '../../../../../redux/reducersTypes/reducersTypes';
import { Span } from '../../../../htmlTags/Span';
import { i18nFuction } from '../../../../utils';

interface RenderCurrentWetherDataProps {
    currentWeatherData: CityCurrentWeatherData[];
    currentLanguage: string;
}

export const RenderCurrentWeatherData: React.FC<RenderCurrentWetherDataProps> = ({ currentWeatherData, currentLanguage }) => {
    moment.locale(currentLanguage);
    const intl = useIntl();
    return (
        <>
            {currentWeatherData.map(({ dt, max, min, temp, feels_like, weather }, index) => {
                const timeUTC = moment(dt * 1000).format('DD MMMM, HH:mm');
                const refactorMaxTemp = Math.round(max);
                const refactorMinTemp = Math.round(min);
                const refactorCurrentTemp = Math.round(temp);
                const refactorАeelsTemp = Math.round(feels_like);

                return (
                    <>
                        <div key={index} className='currentWeatherData__renderCurrentWeatherData'>
                            {timeUTC}
                            <div>
                                <Span text={`${i18nFuction(intl, 'body.day')} ${refactorMaxTemp}`} />&deg;&#8593;
                                {' · '}
                                <Span text={`${i18nFuction(intl, 'body.night')} ${refactorMinTemp}`} />&deg;&#8595;
                            </div>
                            <div className='currentWeatherData__currentTemp'>
                                {refactorCurrentTemp}&#8451;
                            </div>
                            <div>
                                <Span text={`${i18nFuction(intl, 'body.feelsLike')} ${refactorАeelsTemp}`} />&deg;
                            </div>
                        </div>
                        <div className='currentWeatherData__renderCurrentIconData'>
                            {weather.map(({ id, icon, description }) => {
                                return (
                                    <>
                                        <div className='currentWeatherData__wrapperIconWether'>
                                            <img key={id} className='currentWeatherData__iconWether' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />
                                        </div>
                                        <Span classNameSpan='currentWeatherData__descriptionWitherText' text={description} />
                                    </>
                                )
                            })}
                        </div>
                    </>
                )
            })}
        </>
    )
};