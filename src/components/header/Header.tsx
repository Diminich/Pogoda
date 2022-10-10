import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { actionHeader } from '../../redux/header-reducer';
import HeaderModal from './headerModal/HeaderModal';
import { requestCityWeatherData } from '../../redux/bodySearchCity-reducer';
const { Option } = Select;

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);
    const setCurrentLanguage = (value: string) => {
        dispatch(actionHeader.setLanguage(value));
        dispatch(requestCityWeatherData());
    }

    return (
        <div className='wrapperHeader'>
            <Select defaultValue={currentLanguage} showArrow={false} bordered={false}
                className='select'
                onChange={setCurrentLanguage}>
                <Option value="ru">RU</Option>
                <Option value="en">EN</Option>
            </Select>
            <HeaderModal />
        </div>
    );
}

export default Header;