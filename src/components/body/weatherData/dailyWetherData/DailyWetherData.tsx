import { CityDailyWeatherData } from '../../../../redux/reducersTypes/reducersTypes';
import { RenderDailyWeatherDetails } from './dailyWeatherDetails/RenderDailyWeatherDetails';

export interface DailyWetherDataProps {
    dailyWeatherData: CityDailyWeatherData[];
    currentLanguage: string;
}

export const DailyWetherData: React.FC<DailyWetherDataProps> = ({ dailyWeatherData, currentLanguage }) => {
    return (
        <div className='weatherDataDaily'>
            {dailyWeatherData.map((weatherDetails, index) => <RenderDailyWeatherDetails details={weatherDetails} index={index} currentLanguage={currentLanguage} />)}
        </div>
    )
};