import { CityHourlyWeatherData } from "../../../../redux/reducersTypes/reducersTypes";
import { TodayWeatherByHoursDetails } from "./todayWeatherByHoursDetails/TodayWeatherByHoursDetails";

interface TodayWeatherByHoursProps {
  weatherData: CityHourlyWeatherData[];
  path: string;
}

export const TodayWeatherByHours: React.FC<TodayWeatherByHoursProps> = ({
  weatherData,
  path,
}) => {
  const findEndDayIndex = (weatherData: CityHourlyWeatherData[]) => {
    let index = weatherData.findIndex(({ timeUTC }) => timeUTC === "06:00");
    return ++index;
  };
  const today = weatherData.filter((_, index) => {
    return findEndDayIndex(weatherData) <= 10
      ? index < 10
      : index < findEndDayIndex(weatherData);
  });
  const tomorrow = weatherData
    .slice(findEndDayIndex(today))
    .filter((_, index, currentArr) => {
      return index < findEndDayIndex(currentArr);
    });
  const returnDay = (day: CityHourlyWeatherData[]) => {
    return day.map(({ timeUTC, temp, weather }, index) => {
      const [{ icon }] = weather;
      return (
        <TodayWeatherByHoursDetails
          key={index}
          icon={icon}
          temp={temp}
          timeUTC={timeUTC}
        />
      );
    });
  };

  return (
    <div className="footerWetherData">
      {path === "today" ? returnDay(today) : returnDay(tomorrow)}
    </div>
  );
};
