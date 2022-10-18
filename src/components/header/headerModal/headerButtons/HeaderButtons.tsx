import { Dispatch, SetStateAction } from 'react';
import { IntlShape } from 'react-intl';
import { Span } from '../../../htmlTags/Span';
// import { slide as BurgerMenu } from 'react-burger-menu';

interface HeaderButtonsProps {
    intl: IntlShape;
    setIsModalVisibleModalLoginSignIn: Dispatch<SetStateAction<boolean>>
    setIsModalVisibleModalLoginSignUp: Dispatch<SetStateAction<boolean>>
}

export const HeaderButtons: React.FC<HeaderButtonsProps> = ({ intl, setIsModalVisibleModalLoginSignIn, setIsModalVisibleModalLoginSignUp }) => {
    return (
        // <div style={{ height: '100%', width: '100%' }}>
        // // <BurgerMenu styles={styles}>
        // //     <a href="/">Пошел в попу</a>
        // // </BurgerMenu>
        // // {/* </div> */}
        <div className='headerButton'>
            <Span classNameSpan='headerButton__button' onClickSpan={() => setIsModalVisibleModalLoginSignIn(true)} text={intl.formatMessage({ id: 'header.signIn' })} />
            <Span classNameSpan='headerButton__button' onClickSpan={() => setIsModalVisibleModalLoginSignUp(true)} text={intl.formatMessage({ id: 'header.signUp' })} />
        </div>

    )
};