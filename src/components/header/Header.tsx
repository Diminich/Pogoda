import { HeaderModal } from './headerModal/HeaderModal';
import { HeaderSelect } from './headerSelect/HeaderSelect';

export const Header: React.FC = () => {
    return (
        <div className='header'>
            <HeaderSelect />
            <HeaderModal />
        </div>
    );
};