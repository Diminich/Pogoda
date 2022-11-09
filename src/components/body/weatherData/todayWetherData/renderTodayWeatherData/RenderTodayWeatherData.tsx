import { Span } from '../../../../htmlTags/Span';
import { i18nFuction } from '../../../../utils';

interface RenderTodayWetherDataProps {
    timeUTC: string;
    refactorTemp: { [key: string]: number };
    description: string;
    icon: string;
    index: number;
    intl: any;
}

export const RenderTodayWeatherData: React.FC<RenderTodayWetherDataProps> = ({ timeUTC, refactorTemp, description, icon, index, intl }) => {

    return (
        <>
            <div key={index} className='renderTodayWeatherData'>
                <Span className='time' text={timeUTC} />
                <div>
                    <Span className='tempDay' text={`${i18nFuction(intl, 'body.day')} ${refactorTemp.day}`} specialCharacters={'\u00b0'} />
                    <Span className='braillePattern' specialCharacters={'\u2802'} />
                    <Span className='tempDay' text={`${i18nFuction(intl, 'body.night')} ${refactorTemp.night}`} specialCharacters={'\u00b0'} />
                </div>
                <div className='wrapperTodayTemp'>
                    <Span className='todayTemp' text={refactorTemp.currentTemp} />
                    <Span className='specialCharactersTodayTemp' specialCharacters={'\u2103'} />
                </div>
                <Span className='feelsLike' text={`${i18nFuction(intl, 'body.feelsLike')} ${refactorTemp.feels_like}`} specialCharacters={'\u00b0'} />
            </div>
            <div className='renderTodayIconData'>
                <img className='iconWether' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />
                <Span className='descriptionWetherText' text={description} />
            </div>
        </>
    )
};