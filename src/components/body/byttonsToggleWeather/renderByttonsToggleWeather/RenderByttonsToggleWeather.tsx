
import { Link } from 'react-router-dom';
import { Span } from '../../../htmlTags/Span';

interface RenderByttonsToggleWeatherProps {
    nameButton: string;
    path: string;
    pathId: string;
    textButton: string;
    index: number;
}

export const RenderByttonsToggleWeather: React.FC<RenderByttonsToggleWeatherProps> = ({ nameButton, path, pathId, textButton, index }) => {

    return (
        <Link key={index} to={path}>
            <Span
                className={nameButton === pathId ? 'buttonsToggleWeather__active' : 'buttonsToggleWeather__default'}
                text={textButton}
            />
        </Link>
    )
};