import { NameButtonsToggleWether } from '../../../constants';
import { ButtonsToggleWeatherDetails } from './buttonsToggleWeatherDetails/ByttonsToggleWeatherDetails';

interface ButtonsToggleWeatherProps {

}

export const ButtonsToggleWeather: React.FC<ButtonsToggleWeatherProps> = () => {

    return (
        <div className='buttonsToggleWeather'>
            {NameButtonsToggleWether().map(({ nameButton, path, textButton }, index) => <ButtonsToggleWeatherDetails
                nameButton={nameButton} path={path} textButton={textButton} index={index} />)}
        </div>

    )
};