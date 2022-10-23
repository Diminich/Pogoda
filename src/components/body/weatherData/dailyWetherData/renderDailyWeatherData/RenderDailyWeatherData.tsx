import { WeatherType } from "../../../../../redux/reducersTypes/reducersTypes";
import { Span } from "../../../../htmlTags/Span";


interface RenderDailyWetherDataProps {
    spanId: number;
    weather: WeatherType[];
    daylyTempMax: number;
    daylyTempMin: number;
    timeUTC: string;
}

export const RenderDailyWeatherData: React.FC<RenderDailyWetherDataProps> = ({ spanId, weather, daylyTempMax, daylyTempMin, timeUTC }) => {

    return (
        <div key={spanId} className='weatherDataDaily'>
            <div className='weatherDataDaily__dailyTemp'>
                <div><Span text={daylyTempMax} />&deg;</div>
                <div><Span text={daylyTempMin} />&deg;</div>
            </div>
            {weather.map(({ id, icon }) => {
                return (
                    <div className='weatherDataDaily__weatherDataDailyIcon'>
                        <img key={id} className='weatherDataDaily__icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />
                        <Span text={timeUTC} />
                    </div>
                )
            }
            )}

        </div>
    )
};