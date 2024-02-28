export type InitialStateHeaderType = {
  currentLanguage: string;
  messages: TranslateLanguagesType;
};

export type TranslateLanguagesType = {
  ru: TranslateLanguage;
  en: TranslateLanguage;
};

type TranslateLanguage = {
  "body.search": string;
};

export type InitialStateBodySearchCityType = {
  cityName: string;
  citySearchCoords: CitySearchCoordsType | null;
  cityCurrentWeatherData: CityCurrentWeatherData[];
  cityHourlyWeatherData: CityHourlyWeatherData[];
  cityDailyWeatherData: CityDailyWeatherData[];
  isActiveError: boolean;
  error: number;
  isLoading: boolean;
};

export type CitySearchCoordsType = {
  lat: number;
  lon: number;
};

export type WeatherType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type TempType = {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
};

type RainType = {
  "1h": number
};

export type CityCurrentWeatherData = {
  dt: number,
  sunrise: number,
  sunset: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  dew_point: number,
  uvi: number,
  clouds: number,
  visibility: number,
  wind_speed: number,
  wind_deg: number,
  weather: WeatherType[];
  rain: RainType;
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
  pop: number;
};

export type CityHourlyWeatherData = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherType[];
  pop: number;
};

type Feels_likeType = {
  day: number;
  night: number;
  eve: number;
  morn: number;
};

export type CityDailyWeatherData = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: TempType;
  feels_like: Feels_likeType;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherType[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
};