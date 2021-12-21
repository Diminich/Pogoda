import styles from './body.module.scss';
import { useIntl } from "react-intl";
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { requestCityCoord } from '../../redux/bodySearchCity-reducer';
import { useDispatch, useSelector } from 'react-redux';
// import { CitySearchName } from '../../redux/reducersTypes/reducersTypes';
// import { AppStateType } from '../../redux/redux-store';

const Body: React.FC = () => {
    const [searchCityName, setSearchCityName] = useState('');
    const intl = useIntl();
    const dispatch = useDispatch();
    const { Search } = Input;

    // const app = useSelector<AppStateType, CitySearchName>(state => state.bodySearchCityPage.cityCoord);
    // console.log(app);
    
    useEffect(() => {
        if (searchCityName.length > 0) {
            dispatch(requestCityCoord(searchCityName));
        }
    }, [searchCityName, dispatch]);

    const onSearchCity = (cityName: string) => {
        setSearchCityName(cityName)
    }

    return (
        <div className={styles.wrapeprBody}>
            <Search
                className={styles.searchInput}
                bordered={false}
                placeholder={intl.formatMessage({ id: 'body.search' })}
                enterButton={intl.formatMessage({ id: 'body.searchButton' })}
                size='middle'
                allowClear
                loading={false}
                onSearch={onSearchCity} />
        </div>
    )
}

export default Body;