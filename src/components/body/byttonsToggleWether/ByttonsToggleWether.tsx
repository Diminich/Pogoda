import styles from './byttonsToggleWether.module.scss'
import Button from "../../htmlTags/Button";
import { actionBodySearchCity } from '../../../redux/bodySearchCity-reducer';
import { useDispatch } from 'react-redux';

const ByttonsToggleWether: React.FC = () => {
    const dispatch = useDispatch();

    const onClickTodayButton = () => {
        dispatch(actionBodySearchCity.setForecastWether('today'));
    }

    const onClickTomorrowButton = () => {
        dispatch(actionBodySearchCity.setForecastWether('tomorrow'));
    }

    const onClickWeekButton = () => {
        dispatch(actionBodySearchCity.setForecastWether('daily'));
    }
    return (
        <div className={styles.wrapperButtonsToggleWether}>
            <Button classNameButton={styles.today} text={'Today'} onClick={() => onClickTodayButton()} />
            <Button classNameButton={styles.toworow} text={'Tomorrow'} onClick={() => onClickTomorrowButton()} />
            <Button classNameButton={styles.week} text={'Week'} onClick={() => onClickWeekButton()} />
        </div>
    )
}

export default ByttonsToggleWether;