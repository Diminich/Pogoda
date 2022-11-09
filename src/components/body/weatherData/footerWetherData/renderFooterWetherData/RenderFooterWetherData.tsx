import { Span } from "../../../../htmlTags/Span";


interface RenderFooterWeatherDataProps {
    spanId: number;
    icon: string;
    refactorTemp: { [key: string]: number };
    timeUTC: string;
}

export const RenderFooterWeatherData: React.FC<RenderFooterWeatherDataProps> = ({ spanId, icon, refactorTemp, timeUTC }) => {
    return (
        <div key={spanId} className='footerWetherData__renderFooterWetherData'>
            <Span text={refactorTemp.temp} specialCharacters={'\u00b0'} />
            <img className='icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='iconWether' />
            <Span text={timeUTC} />
        </div>
    )
};