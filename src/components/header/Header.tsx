import styles from './header.module.scss';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { action } from '../../redux/header-reducer';
import HeaderModal from './headerModal/HeaderModal';
const { Option } = Select;

const Header: React.FC = () => {
    const dispath = useDispatch();
    const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);
    const setCurrentLanguage = (value: string) => {
        dispath(action.setLanguage(value))
    }
    
    return (
        <div className={styles.wrapperHeader}>
            <Select defaultValue={currentLanguage} showArrow={false} bordered={false}
                className={styles.select}
                onChange={setCurrentLanguage}>
                <Option value="ru">RU</Option>
                <Option value="en">EN</Option>
            </Select>
           <HeaderModal />
        </div>
    );
}

export default Header;