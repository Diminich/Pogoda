import styles from './byttonsToggleWeather.module.scss';
import { actionBodySearchCity } from '../../../redux/bodySearchCity-reducer';
import { useDispatch } from 'react-redux';
import Span from '../../htmlTags/Span';
import { useEffect, useState } from 'react';
import { NameButtonsToggleWether } from '../../constant';

const ByttonsToggleWeather: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string>('Today');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionBodySearchCity.setForecastWeather(activeButton));
    }, [activeButton, dispatch])

    const onClickButton = (nameActiveButton: string) => {
        setActiveButton(nameActiveButton)
    }

    return (
        <div className={styles.wrapperButtonsToggleWeather}>
            {NameButtonsToggleWether().map(({ nameActiveButton, textButton }, index) => {
                return (
                    <Span
                        key={index}
                        classNameSpan={nameActiveButton === activeButton ? styles.activeButtonsToggleWeather : styles.buttonsToggleWeather}
                        text={textButton}
                        onClickSpan={() => onClickButton(nameActiveButton)} />
                )
            })}
        </div>
    )
}

export default ByttonsToggleWeather;