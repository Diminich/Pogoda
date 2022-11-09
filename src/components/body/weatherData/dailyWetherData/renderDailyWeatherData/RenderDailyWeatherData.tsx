import { Span } from "../../../../htmlTags/Span";


interface RenderDailyWetherDataProps {
    id: number;
    description: string;
    icon: string;
    refactorTemp: { [key: string]: number };
    timeUTC: string;
}

export const RenderDailyWeatherData: React.FC<RenderDailyWetherDataProps> = ({ id, description, icon, refactorTemp, timeUTC }) => {

    return (
        <div key={id} className='collWetherData'>
            <div className="wrpperTimeDescription">
                <Span className="time" text={timeUTC} />
                <Span className="description" text={description} />
            </div>
            <div className="wrapperIconTemp">
                <img className='iconWether' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />
                <div className="wrapperTempDay">
                    <Span className="tempDay" text={refactorTemp.day} specialCharacters={'\u00b0'} />
                    <Span className="tempNight" text={refactorTemp.night} specialCharacters={'\u00b0'} />
                </div>
            </div>
        </div>
    )
};