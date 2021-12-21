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
  cityCoord: CitySearchNameType
  cityData: cityDataType[]
};

export type CitySearchNameType = {
  lat: number;
  lon: number;
};

export type cityDataType = {
    "dt": number,
    "sunrise": number,
    "sunset": number,
    "moonrise": number,
    "moonset": number,
    "moon_phase": number,
    "temp": {
      "day": number,
      "min": number,
      "max": number,
      "night": number,
      "eve": number,
      "morn": number
    },
    "feels_like": {
      "day": number,
      "night": number,
      "eve": number,
      "morn": number
    },
    "pressure": number,
    "humidity": number,
    "dew_point": number,
    "wind_speed": number,
    "wind_deg": number,
    "weather": [
      {
        "id": number,
        "main": string,
        "description": string,
        "icon": string
      }
    ],
    "clouds": number,
    "pop": number,
    "rain": number,
    "uvi": number
}