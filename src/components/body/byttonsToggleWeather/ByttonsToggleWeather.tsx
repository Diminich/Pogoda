import { NameButtonsToggleWether } from '../../constants';
import { useParams } from 'react-router-dom';
import { RenderByttonsToggleWeather } from './renderByttonsToggleWeather/RenderByttonsToggleWeather';

export const ByttonsToggleWeather: React.FC = () => {
    const { pathId = '' } = useParams();

    return (
        <div className='buttonsToggleWeather'>
            {NameButtonsToggleWether().map(({ nameButton, path, textButton }, index) => {
                return (
                    <RenderByttonsToggleWeather nameButton={nameButton} path={path} pathId={pathId} textButton={textButton} index={index} />
                )
            })}
        </div>
    )
};