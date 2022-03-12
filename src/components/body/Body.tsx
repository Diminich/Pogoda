import styles from './body.module.scss';
import ByttonsToggleWether from './byttonsToggleWether/ByttonsToggleWether';
import DataWether from './dataWether/DataWether';
import SearchInput from './serachInput/SearchInput';

const Body: React.FC = () => {
    return (
        <div className={styles.wrapeprBody}>
            <SearchInput />
            <ByttonsToggleWether />
            <DataWether />
        </div>
    )
}

export default Body;