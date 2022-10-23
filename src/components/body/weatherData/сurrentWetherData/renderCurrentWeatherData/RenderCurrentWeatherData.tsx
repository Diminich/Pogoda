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
                            <Span classNameSpan='time' text={timeUTC} />
                            <div>
                                <Span classNameSpan='tempDay' text={`${i18nFuction(intl, 'body.day')} ${refactorMaxTemp}`} specialCharacters={'\u00b0'} />
                                <Span classNameSpan='braillePattern' specialCharacters={'\u2802'} />
                                <Span classNameSpan='tempDay' text={`${i18nFuction(intl, 'body.night')} ${refactorMinTemp}`} specialCharacters={'\u00b0'} />
                            </div>
                            <div className='wrapperCurrentTemp'>
                                <Span classNameSpan='currentTemp' text={refactorCurrentTemp} />
                                <Span classNameSpan='specialCharactersCurrentTemp' specialCharacters={'\u2103'} />
                            </div>
                            <Span classNameSpan='feelsLike' text={`${i18nFuction(intl, 'body.feelsLike')} ${refactorАeelsTemp}`} specialCharacters={'\u00b0'} />
                        </div>
                        <div className='currentWeatherData__renderCurrentIconData'>
                            {weather.map(({ id, icon, description }) => {
                                return (
                                    <>
                                        <img key={id} className='iconWether' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />
                                        <Span classNameSpan='descriptionWetherText' text={description} />
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