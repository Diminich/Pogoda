interface ButtonsToggleWeatherContainerProps {
    renderButtonsToggleWeather: () => React.ReactElement;
}

export const ButtonsToggleWeatherContainer: React.FC<ButtonsToggleWeatherContainerProps> = ({ renderButtonsToggleWeather }) => {
    return renderButtonsToggleWeather()
};