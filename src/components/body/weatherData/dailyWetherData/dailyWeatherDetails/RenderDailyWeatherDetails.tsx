import { CityDailyWeatherData } from "../../../../../redux/reducersTypes/reducersTypes";
import { Span } from "../../../../htmlTags/Span";
import { formatTime, refactorParams } from "../../../../utils";

interface RenderDailyWeatherDetailsProps {
  details: CityDailyWeatherData;
  currentLanguage: string;
}

export const RenderDailyWeatherDetails: React.FC<
  RenderDailyWeatherDetailsProps
> = ({ details, currentLanguage }) => {
  const [{ description, icon }] = details.weather;
  const timeUTC = formatTime(details.dt, "dddd, MMMM D", currentLanguage);
  const refactorTemp = refactorParams({
    day: details.temp.day,
    night: details.temp.night,
  });

  return (
    <div className="wrapperRenderDailyWetherData">
      <div className="wrapperTimeDescription">
        <Span className="time" text={timeUTC} />
        <Span className="description" text={description} />
      </div>
      <div className="wrapperIconTemp">
        <img
          className="iconWether"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="iconWether"
        />
        <div className="wrapperTempDay">
          <Span
            className="tempDay"
            text={refactorTemp.day}
            specialCharacters={"\u00b0"}
          />
          <Span
            className="tempNight"
            text={refactorTemp.night}
            specialCharacters={"\u00b0"}
          />
        </div>
      </div>
    </div>
  );
};
