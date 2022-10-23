import { WeatherType } from "../../../../../redux/reducersTypes/reducersTypes";
import { Span } from "../../../../htmlTags/Span";


interface RenderTomorrowWeatherDataProps {
    spanId: number;
    weather: WeatherType[];
    refactorTemp: number;
    timeUTC: string;
}

export const RenderTomorrowWeatherData: React.FC<RenderTomorrowWeatherDataProps> = ({ spanId, weather, refactorTemp, timeUTC }) => {
    return (
        <div key={spanId} className='weatherDataHorley'>
            <div>
                <Span text={refactorTemp} />&deg;
            </div>
            {weather.map(({ id, icon }) => <img className='weatherDataHorley__icon' key={id} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />)}
            <Span text={timeUTC} />
        </div>
    )
};