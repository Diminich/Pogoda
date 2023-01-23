import { ModalButtonsStyled } from "../../../../../styled/header/headerModalStyled";

interface ModalLoginButtonsProps {
    nameButton: string;
    textButton: string;
    typeButton: "submit" | "button" | "reset" | undefined;
    index: number;
    onCloseModalWindow: (event: boolean) => void;
}

export const ModalSignInButtons: React.FC<ModalLoginButtonsProps> = ({ nameButton, textButton, typeButton, index, onCloseModalWindow }) => {
    return (
        <ModalButtonsStyled
            key={index}
            type={typeButton}
            onClick={() => {nameButton === 'cancel' && onCloseModalWindow(false)}}
            variant="text">{textButton}</ModalButtonsStyled>
    )
}