import { Span } from "../../../../htmlTags/Span";

interface TodayWeatherByHoursDetailsProps {
  icon: string;
  temp: number;
  timeUTC: string;
}

export const TodayWeatherByHoursDetails: React.FC<
  TodayWeatherByHoursDetailsProps
> = ({ icon, temp, timeUTC }) => {
  return (
    <div className="footerWetherData__renderFooterWetherData">
      <Span className="temp" text={temp} specialCharacters={"\u00b0"} />
      <img
        className="icon"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="iconWether"
      />
      <Span className='time' text={timeUTC} />
    </div>
  );
};
