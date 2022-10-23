import { WeatherType } from "../../../../redux/reducersTypes/reducersTypes";
import { RenderDailyWeatherData } from "../dailyWetherData/renderDailyWeatherData/RenderDailyWeatherData";
import { RenderTomorrowWeatherData } from "../tomorrowWetherData/renderTomorrowWeatherData/RenderTomorrowWeatherData";
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
        return <RenderTomorrowWeatherData
            spanId={spanId}
            weather={weather}
            refactorTemp={refactorTemp}
            timeUTC={timeUTC} />
    } else {
        return <RenderDailyWeatherData
            spanId={spanId}
            weather={weather}
            daylyTempMax={daylyTempMax}
            daylyTempMin={daylyTempMin}
            timeUTC={timeUTC} />
    }
}

export default RenderWetherData;