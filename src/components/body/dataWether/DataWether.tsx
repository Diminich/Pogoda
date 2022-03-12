import styles from './dataWether.module.scss';
import { useSelector } from 'react-redux';
import { cityDataDailyType, cityDataHourlyType } from '../../../redux/reducersTypes/reducersTypes';
import { AppStateType } from '../../../redux/redux-store';
import HourlyWetherData from './hourlyWetherData/HourlyWetherData';
import DailyWetherData from './dailyWetherData/DailyWetherData';
import moment from 'moment';

const DataWether: React.FC = () => {
    const wetherDataHourly = useSelector<AppStateType, Array<cityDataHourlyType | undefined>>(state => state.bodySearchCityPage.cityDataHourly);
    // const wetherDataToday = useSelector<AppStateType, Array<cityDataHourlyType | undefined>>(state => state.bodySearchCityPage.cityDataToday);
    // const wetherDataTomorrow = useSelector<AppStateType, Array<cityDataHourlyType | undefined>>(state => state.bodySearchCityPage.cityDataTomorrow);
    const wetherDataDaily = useSelector<AppStateType, cityDataDailyType[]>(state => state.bodySearchCityPage.cityDataDaily);
    const forecastWether = useSelector<AppStateType, string>(state => state.bodySearchCityPage.forecastWether);
   
    // console.log('wetherDataToday: ', wetherDataToday, 'wetherDataTomorrow: ', wetherDataTomorrow);
    // wetherDataToday.map(el => console.log('wetherDataToday: ',moment(el!.dt * 1000).format('YYYY-MM-DD HH:mm')));
    // wetherDataTomorrow.map(el => console.log('wetherDataTomorrow: ',moment(el!.dt * 1000).format('YYYY-MM-DD HH:mm')));
    wetherDataHourly.map(el => console.log('wetherDataHourly: ',moment(el!.dt * 1000).format('YYYY-MM-DD HH:mm')));

    return (
        <div className={styles.wrapeprDataWether}>
            {wetherDataHourly.length !== 1 ?
                forecastWether !== 'daily' ?
                    <HourlyWetherData wetherDataHourly={wetherDataHourly} 
                    // wetherDataTomorrow={wetherDataTomorrow} 
                    forecastWether={forecastWether} />
                    : <DailyWetherData wetherDataDaily={wetherDataDaily} />
                : <span className={styles.noData}>Нет данных</span>}
        </div>
    )
}

export default DataWether;