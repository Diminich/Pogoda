import { WeatherType } from "../../../../redux/reducersTypes/reducersTypes";
import RenderDailyWetherData from "./renderDailyWeatherData/RenderDailyWeatherData";
import RenderHorlyWetherData from "./renderHourlyWeatherData/RenderHourlyWeatherData";

interface RenderWetherDataProps {
    spanId: number;
    weather: WeatherType[];
    classNameRenderWeatherData: { readonly [key: string]: string; };
    forecastWether: string;
    refactorTemp: number;
    daylyTempMax: number;
    daylyTempMin: number;
    timeUTC: string;
}

const RenderWetherData: React.FC<RenderWetherDataProps> = ({ spanId, weather, forecastWether, daylyTempMax, daylyTempMin, refactorTemp, timeUTC }) => {

    if (forecastWether !== 'Daily') {
        return <RenderHorlyWetherData
            spanId={spanId}
            weather={weather}
            refactorTemp={refactorTemp}
            timeUTC={timeUTC} />
    } else {
        return <RenderDailyWetherData
            spanId={spanId}
            weather={weather}
            daylyTempMax={daylyTempMax}
            daylyTempMin={daylyTempMin}
            timeUTC={timeUTC} />
    }
}

export default RenderWetherData;