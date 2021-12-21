import { Dispatch, SetStateAction } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    classNameButton: string;
    text: string;
    setIsModalVisibleModalLogin: Dispatch<SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({classNameButton, text, setIsModalVisibleModalLogin}) => {
    return (
        <button className={classNameButton} onClick={() => setIsModalVisibleModalLogin(true)}>{text}</button>
    )
}

export default Button;