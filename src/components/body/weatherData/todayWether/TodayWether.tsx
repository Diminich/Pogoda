import {
  CityCurrentWeatherData,
  CityHourlyWeatherData,
} from "../../../../redux/reducersTypes/reducersTypes";
import { TodayWeatherByHourles } from "../todayWeatherByHourles/TodayWeatherByHouers";
import { TodayWeatherDetails } from "./todayWetherDetails/TodayWetherDetails";

export interface TodayWetherDataProps {
  currentWeatherData: CityCurrentWeatherData[];
  hourlyWetherData: CityHourlyWeatherData[];
  pathId: string;
  currentLanguage: string;
}

export const TodayWeather: React.FC<TodayWetherDataProps> = ({
  currentWeatherData,
  hourlyWetherData,
  pathId,
  currentLanguage,
}) => {
  return (
    <div className="todayWeatherData">
      <div className="todayWeatherData__wrapperRenderTodayWetherData">
        {currentWeatherData.map((weatherDetails, index) => (
          <TodayWeatherDetails
            key={index}
            details={weatherDetails}
            currentLanguage={currentLanguage}
          />
        ))}
      </div>
      <TodayWeatherByHourles weatherData={hourlyWetherData} path={pathId} />
    </div>
  );
};
