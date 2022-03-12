import styles from './hourlyWetherData.module.scss';
import moment from 'moment';
import { cityDataHourlyType } from '../../../../redux/reducersTypes/reducersTypes';

interface HourlyWetherDataProps {
    wetherDataHourly: Array<cityDataHourlyType | undefined>;
    // wetherDataToday: Array<cityDataHourlyType | undefined>;
    // wetherDataTomorrow: Array<cityDataHourlyType | undefined>;
    forecastWether: string;
}

const HourlyWetherData: React.FC<HourlyWetherDataProps> = ({ wetherDataHourly, forecastWether }) => {
    const ind = wetherDataHourly.findIndex((time) => moment(time!.dt * 1000).format('HH:mm') === '07:00');
    const todayArr = wetherDataHourly.slice(ind);
    const findIndexTodayArr = todayArr.findIndex((time) => moment(time!.dt * 1000).format('HH:mm') === '06:00');
    debugger
    //.findIndex((time) => moment(time!.dt * 1000).format('HH:mm') === '06:00');
    // console.log('indLast: ', indLast.map(el => moment(el!.dt * 1000).format('YYYY-MM-DD HH:mm')));
    console.log('todayArr: ', todayArr.map(el => moment(el!.dt * 1000).format('YYYY-MM-DD HH:mm')), 'findIndexTodayArr: ', findIndexTodayArr);
    return (
        <>
            {wetherDataHourly.map((dataDay, indexA) => {
                let timeUTC = moment(dataDay!.dt * 1000).format('MM-DD HH:mm');
                let refactorTemp = Math.round(dataDay!.temp);

                // .findIndex((time) => moment(time!.dt * 1000).format('HH:mm') === '07:00');


                if (indexA < ind && forecastWether === 'today') {
                    return (
                        <div key={indexA} className={styles.wrapperWetherDataHorley}>
                            <span>{refactorTemp}</span>
                            <span>{timeUTC}</span>
                        </div>
                    )
                } else if (forecastWether === 'tomorrow') {
                    return (
                        todayArr.map((dataDay, indexB) => {
                            let timeUTC = moment(dataDay!.dt * 1000).format('MM-DD HH:mm');
                            let refactorTemp = Math.round(dataDay!.temp);
                            if (indexB < 2) {
                                debugger
                                return (
                                    <div key={indexB} className={styles.wrapperWetherDataHorley}>
                                        <span>{refactorTemp}</span>
                                        <span>{timeUTC}</span>
                                    </div>
                                )
                            }
                        })
                    )
                }
            })}
        </>
    )
    // if (forecastWether === 'today') {
    //     return (
    //         <>
    //             {wetherDataToday.map((dataDay, index, array) => {
    //                 let timeUTC = moment(dataDay!.dt * 1000).format('HH:mm');
    //                 let refactorTemp = Math.round(dataDay!.temp);
    //                 let ind = array.findIndex((time) => moment(time!.dt * 1000).format('HH:mm') === '07:00');
    //                 if (index < ind) {
    //                     return (
    //                         <div key={index} className={styles.wrapperWetherDataHorley}>
    //                             <span>{refactorTemp}</span>
    //                             <span>{timeUTC}</span>
    //                         </div>
    //                     )
    //                 }

    //             })}
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             {wetherDataTomorrow.map((dataDay, index, array) => {
    //                 let timeUTC = moment(dataDay!.dt * 1000).format('HH:mm');  // YYYY-MM-DD
    //                 let refactorTemp = Math.round(dataDay!.temp);
    //                 let ind = array.findIndex((time) => moment(time!.dt * 1000).format('HH:mm') === '07:00');
    //                 if (index > ind) {
    //                     return (
    //                         <div key={index} className={styles.wrapperWetherDataHorley}>
    //                             <span>{refactorTemp}</span>
    //                             <span>{timeUTC}</span>
    //                         </div>
    //                     )
    //                 }

    //             })}
    //         </>
    //     )
    // }
}

export default HourlyWetherData;