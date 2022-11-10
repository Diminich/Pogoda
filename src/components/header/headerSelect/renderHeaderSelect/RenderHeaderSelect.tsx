
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useDispatch } from 'react-redux';
import { requestCityWeatherData } from '../../../../redux/bodySearchCity-reducer';
import { actionHeader } from '../../../../redux/header-reducer';

interface RenderHeaderSelectProps {
    currentLanguage: string;
    // setCurrentLanguage: (value: string) => void;
}

export const RenderHeaderSelect: React.FC<RenderHeaderSelectProps> = ({ currentLanguage,  }) => {
   
    return (
        <></>
        // <Select
        //     labelId="demo-simple-select-label"
        //     id="demo-simple-select"
        //     value={currentLanguage}
        //     onChange={setCurrentLanguage}
        // >
        //     <MenuItem value="ru">RU</MenuItem>
        //     <MenuItem value="en">EN</MenuItem>
        // </Select>
    );
};