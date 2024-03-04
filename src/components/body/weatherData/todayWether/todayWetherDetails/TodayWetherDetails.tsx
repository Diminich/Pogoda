import { useIntl } from "react-intl";
import { CityCurrentWeatherData } from "../../../../../redux/reducersTypes/reducersTypes";
import { Span } from "../../../../htmlTags/Span";
import { formatTime, i18nFuction, refactorParams } from "../../../../utils";

interface todayWeatherDetaelsProps {
  details: CityCurrentWeatherData;
  currentLanguage: string;
}

export const TodayWeatherDetails: React.FC<todayWeatherDetaelsProps> = ({
  details,
  currentLanguage,
}) => {
  const intl = useIntl();
  const [{ description, icon }] = details.weather;
  const timeUTC = formatTime(details.dt, "MMMM, HH:mm", currentLanguage);
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
        <div>
          <Span
            className="tempDay"
            text={`${i18nFuction(intl, "body.day")} ${refactorTemp.day}`}
            specialCharacters={"\u00b0"}
          />
          <Span className="braillePattern" specialCharacters={"\u2802"} />
          <Span
            className="tempDay"
            text={`${i18nFuction(intl, "body.night")} ${refactorTemp.night}`}
            specialCharacters={"\u00b0"}
          />
        </div>
        <div className="wrapperTodayTemp">
          <Span className="todayTemp" text={refactorTemp.currentTemp} />
          <Span
            className="specialCharactersTodayTemp"
            specialCharacters={"\u2103"}
          />
        </div>
        <Span
          className="feelsLike"
          text={`${i18nFuction(intl, "body.feelsLike")} ${
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
