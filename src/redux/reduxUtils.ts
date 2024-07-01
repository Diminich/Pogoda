import { formatTime } from "../components/componentsUtils";
import {
  CityCurrentWeatherData,
  CityDailyWeatherData,
  CityHourlyWeatherData,
  WeatherType,
} from "./reducersTypes/reducersTypes";

export const upperCaseFirstLetter = (str: string) => {
  return str
    .split("")
    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
    .join("");
};

const refactorParams = ({ ...params }) => {
  let refactorTemp: { [key: string]: number } = {};
  for (const key in params) {
    refactorTemp[key] = Math.round(params[key]);
  }

  return refactorTemp;
};

const refactorWeather = (weather: WeatherType[]) => {
  return weather.map((weather) => {
    return {
      ...weather,
      description: upperCaseFirstLetter(weather.description),
    };
  });
};

export const refactorCurrentWeatherData = (
  currentWeatherData: CityCurrentWeatherData,
  dailyWeatherData: CityDailyWeatherData[]
) => {
  const getTempData = dailyWeatherData[0].temp;

  const refactorCurrentWeatherData = {
    ...currentWeatherData,
    weather: refactorWeather(currentWeatherData.weather),
  };

  return [
    {
      ...refactorCurrentWeatherData,
      ...getTempData,
      ...refactorParams({
        day: getTempData.day,
        night: getTempData.night,
        temp: refactorCurrentWeatherData.temp,
        feels_like: refactorCurrentWeatherData.feels_like,
      }),
    },
  ];
};

export const refactorHourlyWeatherData = (
  hourlyWeatherData: CityHourlyWeatherData[]
) => {
  const refactorWeatherData = hourlyWeatherData
    .map((hourlyWeatherData) => {
      return {
        ...hourlyWeatherData,
        timeUTC: formatTime(hourlyWeatherData.dt, "HH:mm"),
        temp: refactorParams({ refactorTemp: hourlyWeatherData.temp })
          .refactorTemp,
        weather: refactorWeather(hourlyWeatherData.weather),
      };
    })
    .slice(1);

  return refactorWeatherData;
};

export const refactorDailyWeatherData = (
  dailyWeatherData: CityDailyWeatherData[]
) => {
  const refactorWeatherData = dailyWeatherData
    .map((dailyWeatherData) => {
      return {
        ...dailyWeatherData,
        ...refactorParams({
          day: dailyWeatherData.temp.day,
          night: dailyWeatherData.temp.night,
        }),
        weather: refactorWeather(dailyWeatherData.weather),
      };
    })
    .slice(0, -1);

  return refactorWeatherData;
};
