import { ByttonsToggleWeather } from './byttonsToggleWeather/ByttonsToggleWeather';
import { SearchInput } from './searchInput/SearchInput';
import { WeatherData } from './weatherData/WeatherData';

export const Body: React.FC = () => {
    return (
        <div className='Body'>
            <SearchInput />
            <ByttonsToggleWeather />
            <WeatherData />
        </div>
    )
};