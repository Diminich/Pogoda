import axios from "axios";
import { CitySearchCoordsType } from "../redux/reducersTypes/reducersTypes";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const apiKey = "2326447fbf060bf923b3e5cd782514e1";

interface GetCityData {
  current: any;
  daily: any;
  hourly: any;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

interface GetCityCoord {
  coord: CitySearchCoordsType;
}

export const cityApi = {
  getCityCurrentWeatherData(nameCity: string) {
    return instance
      .get<GetCityCoord>(`weather?q=${nameCity}&units=metric&appid=${apiKey}`)
      .then((res) => {
        return res.data.coord;
      });
  },

  getCityHoursData(
    lat: number | undefined,
    lon: number | undefined,
    languages: string
  ) {
    return instance
      .get<GetCityData>(
        `onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&lang=${languages}&appid=${apiKey}`
      )
      .then((res) => {
        return res.data;
      });
  },
};
