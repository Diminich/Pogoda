import moment from 'moment';
import { cityDataDailyType } from '../../../../redux/reducersTypes/reducersTypes';
import styles from './dailyWetherData.module.scss'

interface dailyWetherDataProps {
    wetherDataDaily: cityDataDailyType[];
}

const DailyWetherData: React.FC<dailyWetherDataProps> = ({ wetherDataDaily }) => {
    return (
        <>
        {wetherDataDaily.map(({dt}, index) => {
             let timeUTC = moment(dt * 1000).format('HH:mm');
            return (
                <div key={index} className={styles.wrapperwetherDataDaily}>
                    <span>{timeUTC}</span>
                </div>
            )
        })}
           
        </>
    )
}

export default DailyWetherData;