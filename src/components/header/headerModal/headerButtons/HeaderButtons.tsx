import { Dispatch, SetStateAction } from "react";
import { useIntl } from "react-intl";
import { nameButtonsHeader } from "../../../constants"
import { HeaderButtonsDetails } from "./headerButtonsDetails/HeaderButtonsDetails";

interface HeaderButtonsProps {
    setVisibleModalLogin: Dispatch<SetStateAction<boolean>>;
    setNameModalLogin: Dispatch<SetStateAction<string>>;
}

export const HeaderButtons: React.FC<HeaderButtonsProps> = ({ setVisibleModalLogin, setNameModalLogin }) => {
    const intl = useIntl();
    return (
        <div className='headerButton'>
            {nameButtonsHeader(intl).map(({ nameButton, textButton }, index) => <HeaderButtonsDetails
                setVisibleModalLogin={setVisibleModalLogin}
                setNameModalLogin={setNameModalLogin}
                nameButton={nameButton}
                textButton={textButton}
                index={index} />)}
        </div>
    )
}

// <div style={{ height: '100%', width: '100%' }}>
    // // <BurgerMenu styles={styles}>
    // //     <a href="/">!!!</a>
    // // </BurgerMenu>
    // // {/* </div> */}
    // <div className='headerButton'>