// import styles from './body.module.scss';
import ByttonsToggleWeather from './byttonsToggleWeather/ByttonsToggleWeather';
import SearchInput from './searchInput/SearchInput';
import WeatherData from './weatherData/WeatherData';
import CurrentWeatherData from './weatherData/сurrentWetherData/CurrentWetherData';

const Body: React.FC = () => {
    return (
        <div className='wrapeprBody'>
            <SearchInput />
            <ByttonsToggleWeather />
            <CurrentWeatherData />
            <WeatherData />
        </div>
    )
}

export default Body;