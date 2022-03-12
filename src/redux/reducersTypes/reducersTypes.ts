export type InitialStateHeaderType = {
  currentLanguage: string;
  messages: TranslateLanguagesType;
};

export type TranslateLanguagesType = {
  ru: TranslateLanguage;
  en: TranslateLanguage;
};

type TranslateLanguage = {
  "header.signIn": string;
  "header.signUp": string;

  "body.search": string;
};

export type InitialStateBodySearchCityType = {
  cityCoord: CitySearchNameType | null;
  cityDataHourly: Array<cityDataHourlyType | undefined>;
  // cityDataToday: Array<cityDataHourlyType | undefined>;
  // cityDataTomorrow: Array<cityDataHourlyType | undefined>;
  cityDataDaily: cityDataDailyType[];
  error: number;
  isLoading: boolean;
  forecastWether: string;
};

export type CitySearchNameType = {
  lat: number;
  lon: number;
};

export type cityDataHourlyType = {
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
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  pop: number;
};

export type cityDataDailyType = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
};
