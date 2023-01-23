import { ModalButtonsStyled } from "../../../../../styled/header/headerModalStyled";

interface ModalSignUpButtonsProps {
    nameButton: string;
    textButton: string;
    typeButton: "submit" | "button" | "reset" | undefined;
    index: number;
    onCloseModalWindow: (event: boolean) => void;
}

export const ModalSignUpButtons: React.FC<ModalSignUpButtonsProps> = ({ nameButton, textButton, typeButton, index, onCloseModalWindow }) => {
    return (
        <ModalButtonsStyled
        key={index}
        type={typeButton}
        onClick={() => {nameButton === 'cancel' && onCloseModalWindow(false)}}
        variant="text">{textButton}</ModalButtonsStyled>
    )
}