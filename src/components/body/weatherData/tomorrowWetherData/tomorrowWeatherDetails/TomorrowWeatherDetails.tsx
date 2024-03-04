import { useIntl } from "react-intl";
import { CityDailyWeatherData } from "../../../../../redux/reducersTypes/reducersTypes";
import { Span } from "../../../../htmlTags/Span";
import { formatTime, i18nFuction, refactorParams } from "../../../../utils";

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
  const refactorTemp = refactorParams({
    day: details.temp.day,
    night: details.temp.night,
  });
  return (
    <>
      <div className="renderTomorrowWeatherData">
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
        <Span className="descriptoin" text={description} />
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
