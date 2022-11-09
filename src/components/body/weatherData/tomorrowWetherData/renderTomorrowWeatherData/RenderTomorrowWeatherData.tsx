import { IntlShape } from "react-intl";
import { Span } from "../../../../htmlTags/Span";
import { i18nFuction } from "../../../../utils";


interface RenderTomorrowWeatherDataProps {
    timeUTC: string;
    refactorTemp: { [key: string]: number };
    description: string
    icon: string;
    intl: IntlShape;
    index: number;
}

export const RenderTomorrowWeatherData: React.FC<RenderTomorrowWeatherDataProps> = ({ timeUTC, refactorTemp, description, icon, intl, index }) => {

    return (
        <>
            <div className="renderTomorrowWeatherData" key={index}>
                <Span className="time" text={timeUTC} />
                <div>
                    <Span className='tempDay' text={`${i18nFuction(intl, 'body.day')} ${refactorTemp.day}`} specialCharacters={'\u00b0'} />
                    <Span className='braillePattern' specialCharacters={'\u2802'} />
                    <Span className='tempDay' text={`${i18nFuction(intl, 'body.night')} ${refactorTemp.night}`} specialCharacters={'\u00b0'} />
                </div>
                <Span className='descriptoin' text={description} />
            </div>
            <div className='renderTomorrowIconData'>
                <img className='iconWether' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />
            </div>
        </>
    )
};