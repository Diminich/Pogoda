import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const apiKey = "2326447fbf060bf923b3e5cd782514e1";

export const cityApi = {
  getCityCoord(nameCity: string) {
    return instance.get(`weather?q=${nameCity}&appid=${apiKey}`);
  },

  getCityHoursData(
    lat: number | undefined,
    lon: number | undefined,
    languages: string,
    forecastWether: string
  ) {
    return instance.get(
      `onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${`current,minutely,${forecastWether}`}&lang=${languages}&appid=${apiKey}`
    );
  },
};
