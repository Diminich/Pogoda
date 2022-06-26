import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const apiKey = "2326447fbf060bf923b3e5cd782514e1";

export const cityApi = {
  getCityCurrentWeatherData(nameCity: string) {
    return instance.get(`weather?q=${nameCity}&units=metric&appid=${apiKey}`);
  },

  getCityHoursData(
    lat: number | undefined,
    lon: number | undefined,
    languages: string,
  ) {
    return instance.get(
      `onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&lang=${languages}&appid=${apiKey}`
    );
  },
};
