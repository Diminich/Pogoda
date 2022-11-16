import { ByttonsToggleWeather } from './byttonsToggleWeather/ByttonsToggleWeather';
import { SearchInputDetails } from './searchInput/searchInputDetails/SearchInputDetails';
import { SearchInputContainer } from './searchInput/SearchInputContainer';
import { DailyWetherData } from './weatherData/dailyWetherData/DailyWetherData';
import { TodayWeather } from './weatherData/todayWether/TodayWether';
import { TomorrowWetherData } from './weatherData/tomorrowWetherData/TomorrowWeatherData';
import { WeatherDataContainer } from './weatherData/WeatherDataContainer';

export const Body: React.FC = () => {
    return (
        <div className='Body'>
            <SearchInputContainer renderSearchInput={(props) => <SearchInputDetails {...props} />} />
            <ByttonsToggleWeather />
            <WeatherDataContainer
                renderTodayWeather={(props) => <TodayWeather {...props} />}
                renderTomorrowWether={(props) => <TomorrowWetherData {...props} />}
                renderDailyWether={(props) => <DailyWetherData {...props} />}
            />
        </div>
    )
};