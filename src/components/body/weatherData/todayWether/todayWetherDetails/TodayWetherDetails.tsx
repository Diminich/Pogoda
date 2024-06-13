import { useIntl } from "react-intl";
import { CityCurrentWeatherData } from "../../../../../redux/reducersTypes/reducersTypes";
import { Span } from "../../../../htmlTags/Span";
import { formatTime, i18Function, refactorParams } from "../../../../utils";

interface todayWeatherDetailsProps {
  details: CityCurrentWeatherData;
  currentLanguage: string;
}

export const TodayWeatherDetails: React.FC<todayWeatherDetailsProps> = ({
  details,
  currentLanguage,
}) => {
  const intl = useIntl();
  const [{ description, icon }] = details.weather;
  const timeUTC = formatTime(details.dt, "D MMMM, HH:mm", currentLanguage);
  const refactorTemp = refactorParams({
    day: details.day,
    night: details.night,
    currentTemp: details.temp,
    feels_like: details.feels_like,
  });

  return (
    <>
      <div className="renderTodayWeatherData">
        <Span className="time" text={timeUTC} />
        <div className="wrapperTodayTemp">
          <Span
            className="tempDay"
            text={`${i18Function(intl, "body.day")} ${refactorTemp.day}`}
            specialCharacters={"\u00b0"}
          />
          <Span className="braillePattern" specialCharacters={"\u2802"} />
          <Span
            className="tempDay"
            text={`${i18Function(intl, "body.night")} ${refactorTemp.night}`}
            specialCharacters={"\u00b0"}
          />
        </div>
        <div className="wrapperCurrentTodayTemp">
          <Span className="currentTemp" text={refactorTemp.currentTemp} />
          <Span
            className="specialCharactersCurrentTemp"
            specialCharacters={"\u2103"}
          />
        </div>
        <Span
          className="feelsLike"
          text={`${i18Function(intl, "body.feelsLike")} ${
            refactorTemp.feels_like
          }`}
          specialCharacters={"\u00b0"}
        />
      </div>
      <div className="renderTodayIconData">
        <img
          className="iconWether"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="iconWether"
        />
        <Span className="descriptionWetherText" text={description} />
      </div>
    </>
  );
};
