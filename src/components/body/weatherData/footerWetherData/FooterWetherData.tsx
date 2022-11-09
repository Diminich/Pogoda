import { CityHourlyWeatherData } from "../../../../redux/reducersTypes/reducersTypes";
import { formatTime, refactorParams } from "../../../utils";
import { RenderFooterWeatherData } from "./renderFooterWetherData/RenderFooterWetherData";

interface FooterWetherDataProps {
    weatherData: CityHourlyWeatherData[];
    path: string;
}

const FooterWetherData: React.FC<FooterWetherDataProps> = ({ weatherData, path }) => {
    let endFirstDayIndex = weatherData.findIndex(({ dt }) => formatTime(dt, 'HH:mm') === '06:00');
    const endSecondDayIndex = weatherData.slice(++endFirstDayIndex).findIndex(({ dt }) => formatTime(dt, 'HH:mm') === '06:00');

    return (
        <div className="footerWetherData">
            {weatherData.map(({ dt, temp, weather }, index) => {
                const [{ icon }] = weather;
                const timeUTC = formatTime(dt, 'HH:mm');
                const refactorTemp = refactorParams({ 'temp': temp });

                if (index < endFirstDayIndex && path === 'today') {
                    return <RenderFooterWeatherData
                        spanId={index}
                        icon={icon}
                        refactorTemp={refactorTemp}
                        timeUTC={timeUTC} />

                } else if (index >= endFirstDayIndex && index <= (endSecondDayIndex + endFirstDayIndex) && path === 'tomorrow') {
                    return <RenderFooterWeatherData
                        spanId={index}
                        icon={icon}
                        refactorTemp={refactorTemp}
                        timeUTC={timeUTC} />
                }
            })}
        </div>
    )
}

export default FooterWetherData;