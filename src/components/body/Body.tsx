import styles from './body.module.scss';
import ByttonsToggleWeather from './byttonsToggleWeather/ByttonsToggleWeather';
import SearchInput from './serachInput/SearchInput';
import WeatherData from './weatherData/WeatherData';
import CurrentWeatherData from './weatherData/сurrentWetherData/CurrentWetherData';

const Body: React.FC = () => {
    return (
        <div className={styles.wrapeprBody}>
            <SearchInput />
            <ByttonsToggleWeather />
            <CurrentWeatherData />
            <WeatherData />
        </div>
    )
}

export default Body;