import moment from 'moment';
import 'moment/locale/ru';
import { useIntl } from 'react-intl';
import { CityCurrentWeatherData } from '../../../../../redux/reducersTypes/reducersTypes';
import Span from '../../../../htmlTags/Span';

interface RenderCurrentWetherDataProps {
    currentWeatherData: CityCurrentWeatherData[];
    currentLanguage: string;
    classNameRenderCurrentData: { readonly [key: string]: string; };
}

const RenderCurrentWeatherData: React.FC<RenderCurrentWetherDataProps> = ({ currentWeatherData, currentLanguage, classNameRenderCurrentData }) => {
    moment.locale(currentLanguage);
    const intl = useIntl();
    const styles = classNameRenderCurrentData;
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
                        <div key={index} className={styles.wrapeprRenderCurrentWeatherData}>
                            {timeUTC}
                            <div>
                                <Span text={`${intl.formatMessage({ id: 'body.day' })} ${refactorMaxTemp}`} />&deg;&#8593;
                                {' · '}
                                <Span text={`${intl.formatMessage({ id: 'body.night' })} ${refactorMinTemp}`} />&deg;&#8595;
                            </div>
                            <div className={styles.wrapperCurrentTemp}>
                                {refactorCurrentTemp}&#8451;
                            </div>
                            <div>
                                <Span text={`${intl.formatMessage({ id: 'body.feelsLike' })} ${refactorАeelsTemp}`} />&deg;
                            </div>
                        </div>
                        <div className={styles.wrapeprRenderCurrentIconData}>
                            {weather.map(({ id, icon, description }) => {
                                return (
                                    <>
                                        <div className={styles.werapperIconWether}>
                                            <img key={id} className={styles.iconWether} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />
                                        </div>
                                        <Span classNameSpan={styles.descriptionWitherText} text={description} />
                                    </>
                                )
                            })}
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default RenderCurrentWeatherData;