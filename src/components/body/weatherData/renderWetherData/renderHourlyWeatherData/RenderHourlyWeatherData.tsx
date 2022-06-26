import { WeatherType } from "../../../../../redux/reducersTypes/reducersTypes";
import Span from "../../../../htmlTags/Span";


interface RenderHorlyWeatherDataProps {
    spanId: number;
    weather: WeatherType[];
    classNameRenderWeatherData: { readonly [key: string]: string; };
    refactorTemp: number;
    timeUTC: string;
}

const RenderHorlyWeatherData: React.FC<RenderHorlyWeatherDataProps> = ({ spanId, weather, classNameRenderWeatherData, refactorTemp, timeUTC }) => {
    const styles = classNameRenderWeatherData;
    return (
        <div key={spanId} className={styles.wrapperWeatherDataHorley}>
            <div>
                <Span text={refactorTemp} />&deg;
            </div>
            {weather.map(({ id, icon }) => <img className={styles.wrapperWeatherDataHorleyIcon} key={id} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />)}
            <Span text={timeUTC} />
        </div>
    )
}

export default RenderHorlyWeatherData;