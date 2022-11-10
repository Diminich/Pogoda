import { ByttonsToggleWeather } from './byttonsToggleWeather/ByttonsToggleWeather';
import { SearchInput } from './searchInput/SearchInput';
import { DailyWetherData } from './weatherData/dailyWetherData/DailyWetherData';
import { TodayWeather } from './weatherData/todayWether/TodayWether';
import { TomorrowWetherData } from './weatherData/tomorrowWetherData/TomorrowWeatherData';
import { WeatherDataContainer } from './weatherData/WeatherDataContainer';

export const Body: React.FC = () => {
    return (
        <div className='Body'>
            <SearchInput />
            <ByttonsToggleWeather />
            <WeatherDataContainer
                renderTodayWeather={(props) => <TodayWeather {...props} />}
                renderTomorrowWether={(props) => <TomorrowWetherData {...props} />}
                renderDailyWether={(props) => <DailyWetherData {...props} />}
            />
        </div>
    )
};