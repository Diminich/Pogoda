import { useIntl } from "react-intl";
import { CityCurrentWeatherData } from "../../../../../redux/reducersTypes/reducersTypes";
import { Span } from "../../../../htmlTags/Span";
import { formatTime, i18Function } from "../../../../componentsUtils";

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

  return (
    <>
      <div className="renderTodayWeatherData">
        <Span className="time" text={timeUTC} />
        <div className="wrapperTodayTemp">
          <Span
            className="tempDay"
            text={`${i18Function(intl, "body.day")} ${details.day}`}
            specialCharacters={"\u00b0"}
          />
          <Span className="braillePattern" specialCharacters={"\u2802"} />
          <Span
            className="tempDay"
            text={`${i18Function(intl, "body.night")} ${details.night}`}
            specialCharacters={"\u00b0"}
          />
        </div>
        <div className="wrapperCurrentTodayTemp">
          <Span className="currentTemp" text={details.temp} />
          <Span
            className="specialCharactersCurrentTemp"
            specialCharacters={"\u2103"}
          />
        </div>
        <Span
          className="feelsLike"
          text={`${i18Function(intl, "body.feelsLike")} ${
            details.feels_like
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
