import { WeatherType } from "../../../../../redux/reducersTypes/reducersTypes";
import Span from "../../../../htmlTags/Span";


interface RenderDailyWetherDataProps {
    spanId: number;
    weather: WeatherType[];
    classNameRenderWeatherData: { readonly [key: string]: string; };
    daylyTempMax: number;
    daylyTempMin: number;
    timeUTC: string;
}

const RenderDailyWeatherData: React.FC<RenderDailyWetherDataProps> = ({ spanId, weather, classNameRenderWeatherData, daylyTempMax, daylyTempMin, timeUTC }) => {
    const styles = classNameRenderWeatherData;
    return (
        <div key={spanId} className={styles.wrapperWeatherDataDaily}>
            <div className={styles.wrapperDailyTemp}>
                <div><Span text={daylyTempMax} />&deg;</div>
                <div><Span text={daylyTempMin} />&deg;</div>
            </div>
            {weather.map(({ id, icon }) => {
                return (
                    <div className={styles.wrapperWeatherDataDailyIcon}>
                        <img key={id} className={styles.icon} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />
                        <Span text={timeUTC} />
                    </div>
                )
            }
            )}

        </div>
    )
}

export default RenderDailyWeatherData;