import { Link, useParams } from "react-router-dom";
import { Span } from "../../../htmlTags/Span";

interface ButtonsToggleWeatherDetailsProps {
  nameButton: string;
  path: string;
  textButton: string;
}

export const ButtonsToggleWeatherDetails: React.FC<
  ButtonsToggleWeatherDetailsProps
> = ({ nameButton, path, textButton }) => {
  const { pathId = "" } = useParams();

  return (
    <Link to={path} className="button">
      <Span
        className={
          nameButton === pathId
            ? "buttonsToggleWeather__active"
            : "buttonsToggleWeather__default"
        }
        text={textButton}
      />
    </Link>
  );
};
