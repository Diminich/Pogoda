import { Dispatch, SetStateAction } from "react";
import { HeaderButtonStyled } from "../../../../styled/header/headerButtonsStyled";

interface HeaderButtonsDetailsProps {
    setVisibleModalLogin: Dispatch<SetStateAction<boolean>>;
    setNameModalLogin: Dispatch<SetStateAction<string>>;
    nameButton: string;
    textButton: string;
    index: number;
}

export const HeaderButtonsDetails: React.FC<HeaderButtonsDetailsProps> = ({ setVisibleModalLogin, setNameModalLogin, nameButton, textButton, index }) => {
    const activeModalWindow = () => {
        setVisibleModalLogin(true);
        setNameModalLogin(nameButton)
    }

    return (
        <HeaderButtonStyled  key={index} onClick={() => activeModalWindow()} variant="contained">{textButton}</HeaderButtonStyled>
    )
}