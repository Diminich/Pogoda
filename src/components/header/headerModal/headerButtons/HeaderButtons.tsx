import { Dispatch, SetStateAction } from 'react';
import { IntlShape } from 'react-intl';
import Button from './../../../htmlTags/Button';
import styles from './headerButtons.module.scss';

interface HeaderButtonsProps {
    intl: IntlShape;
    setIsModalVisibleModalLoginSignIn: Dispatch<SetStateAction<boolean>>
    setIsModalVisibleModalLoginSignUp: Dispatch<SetStateAction<boolean>>
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({ intl, setIsModalVisibleModalLoginSignIn, setIsModalVisibleModalLoginSignUp }) => {

    return (
        <div className={styles.wrapperLogin}>
            <Button classNameButton={styles.button} onClick={() => setIsModalVisibleModalLoginSignIn(true)} text={intl.formatMessage({ id: 'header.signIn' })} />
            <Button classNameButton={styles.button} onClick={() => setIsModalVisibleModalLoginSignUp(true)} text={intl.formatMessage({ id: 'header.signUp' })} />
        </div>

    )
}

export default HeaderButtons;