import moment from 'moment';
import 'moment/locale/ru';
import { CityDailyWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import RenderDailyWeatherData from '../renderWetherData/renderDailyWeatherData/RenderDailyWeatherData'
import styles from './dailyWetherData.module.scss'

interface dailyWetherDataProps {
    dailyWeatherData: CityDailyWeatherData[];
    currentLanguage: string;
}

const DailyWetherData: React.FC<dailyWetherDataProps> = ({ dailyWeatherData, currentLanguage }) => {
    moment.locale(currentLanguage);
    return (
        <>
            {dailyWeatherData.map(({ dt, temp, weather, }, index) => {
                const timeUTC = moment(dt * 1000).format(`DD MMMM`);
                const refactorTempMax = Math.round(temp.max);
                const refactorTempMin = Math.round(temp.min);
                return (
                    <RenderDailyWeatherData
                        spanId={index}
                        weather={weather}
                        daylyTempMax={refactorTempMax}
                        daylyTempMin={refactorTempMin}
                        classNameRenderWeatherData={styles}
                        timeUTC={timeUTC} />
                )
            })}
        </>
    )
}

export default DailyWetherData;