import { Dispatch, SetStateAction } from 'react';
import { IntlShape } from 'react-intl';
import Span from '../../../htmlTags/Span';
// import { slide as BurgerMenu } from 'react-burger-menu';

interface HeaderButtonsProps {
    intl: IntlShape;
    setIsModalVisibleModalLoginSignIn: Dispatch<SetStateAction<boolean>>
    setIsModalVisibleModalLoginSignUp: Dispatch<SetStateAction<boolean>>
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({ intl, setIsModalVisibleModalLoginSignIn, setIsModalVisibleModalLoginSignUp }) => {

    // let styles = {
    //     bmBurgerButton: {
    //         position: 'fixed',
    //         width: '36px',
    //         height: '30px',
    //         left: '36px',
    //         top: '36px'
    //     },
    //     bmBurgerBars: {
    //         background: '#373a47'
    //     },
    //     bmBurgerBarsHover: {
    //         background: '#a90000'
    //     },
    //     bmCrossButton: {
    //         height: '24px',
    //         width: '24px'
    //     },
    //     bmCross: {
    //         background: '#bdc3c7'
    //     },
    //     bmMenuWrap: {
    //         position: 'fixed',
    //         height: '100%'
    //     },
    //     bmMenu: {
    //         background: '#373a47',
    //         padding: '2.5em 1.5em 0',
    //         fontSize: '1.15em'
    //     },
    //     bmMorphShape: {
    //         fill: '#373a47'
    //     },
    //     bmItemList: {
    //         color: '#b8b7ad',
    //         padding: '0.8em'
    //     },
    //     bmItem: {
    //         display: 'inline-block'
    //     },
    //     bmOverlay: {
    //         background: 'rgba(0, 0, 0, 0.3)'
    //     }
    // }
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
}

export default HeaderButtons;