import { SearchInputDetails } from "./searchInput/searchInputDetails/SearchInputDetails";
import { SearchInputContainer } from "./searchInput/SearchInputContainer";
import { DailyWetherData } from "./weatherData/dailyWetherData/DailyWetherData";
import { TodayWeather } from "./weatherData/todayWether/TodayWether";
import { TomorrowWetherData } from "./weatherData/tomorrowWetherData/TomorrowWeatherData";
import { WeatherDataContainer } from "./weatherData/WeatherDataContainer";
import { ButtonsToggleWeather } from "./buttonsToggleWeather/ButtonsToggleWeather";
import { useSelector } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { Loading } from "../styled/body/loading";

export const Body: React.FC = () => {
  const isLoadingChangeLanguage = useSelector<AppStateType, boolean>(
    (state) => state.headerReducerPage.isLoadingLanguages
  );

  const isLoadingWeatherData = useSelector<AppStateType, boolean>(
    (state) => state.bodySearchCityPage.isLoadingWeatherData
  );

  return (
    <div className="Body">
      <SearchInputContainer
        renderSearchInput={(props) => <SearchInputDetails {...props} />}
      />
      {isLoadingChangeLanguage ? (
        <Loading size={50} />
      ) : (
        <>
          <ButtonsToggleWeather />
          {isLoadingWeatherData ? (
            <Loading size={50} />
          ) : (
            <WeatherDataContainer
              renderTodayWeather={(props) => <TodayWeather {...props} />}
              renderTomorrowWether={(props) => (
                <TomorrowWetherData {...props} />
              )}
              renderDailyWether={(props) => <DailyWetherData {...props} />}
            />
          )}
        </>
      )}
    </div>
  );
};
