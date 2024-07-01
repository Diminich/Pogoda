import {
  CityDailyWeatherData,
  CityHourlyWeatherData,
} from "../../../../redux/reducersTypes/reducersTypes";
import { TodayWeatherByHours } from "../todayWeatherByHours/TodayWeatherByHours";
import { TomorrowWeatherDetails } from "./tomorrowWeatherDetails/TomorrowWeatherDetails";

export interface TomorrowWetherDataProps {
  dailyWeatherData: CityDailyWeatherData[];
  hourlyWetherData: CityHourlyWeatherData[];
  pathId: string;
  currentLanguage: string;
}

export const TomorrowWetherData: React.FC<TomorrowWetherDataProps> = ({
  dailyWeatherData,
  hourlyWetherData,
  pathId,
  currentLanguage,
}) => {
  return (
    <div className="tomorrowWetherData">
      <div className="tomorrowWetherData__wrapperRenderTomorrowWetherData">
        {dailyWeatherData.slice(1, 2).map((weatherDetails, index) => (
          <TomorrowWeatherDetails
            key={index}
            details={weatherDetails}
            currentLanguage={currentLanguage}
          />
        ))}
      </div>
      {!!hourlyWetherData.length && <TodayWeatherByHours weatherData={hourlyWetherData} path={pathId} />}
    </div>
  );
};
