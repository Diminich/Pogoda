import { useIntl } from "react-intl";
import { CityDailyWeatherData } from "../../../../../redux/reducersTypes/reducersTypes";
import { Span } from "../../../../htmlTags/Span";
import { formatTime, i18Function } from "../../../../componentsUtils";

interface TomorrowWeatherDetailsProps {
  details: CityDailyWeatherData;
  currentLanguage: string;
}

export const TomorrowWeatherDetails: React.FC<TomorrowWeatherDetailsProps> = ({
  details,
  currentLanguage,
}) => {
  const intl = useIntl();
  const [{ description, icon }] = details.weather;
  const timeUTC = formatTime(details.dt, "dddd, MMMM D", currentLanguage);

  return (
    <>
      <div className="renderTomorrowWeatherData">
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
        <Span className="descriptionWetherText" text={description} />
      </div>
      <div className="renderTomorrowIconData">
        <img
          className="iconWether"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="iconWether"
        />
      </div>
    </>
  );
};
