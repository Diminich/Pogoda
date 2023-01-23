import { useIntl } from 'react-intl';
import { nameButtonsToggleWether } from '../../constants';
import { ButtonsToggleWeatherDetails } from './buttonsToggleWeatherDetails/ButtonsToggleWeatherDetails';

export const ButtonsToggleWeather: React.FC = () => {
    const intl = useIntl();

    return (
        <div className='buttonsToggleWeather'>
            {nameButtonsToggleWether(intl).map(({ nameButton, path, textButton }, index) => <ButtonsToggleWeatherDetails
                nameButton={nameButton} path={path} textButton={textButton} index={index} />)}
        </div>

    )
};