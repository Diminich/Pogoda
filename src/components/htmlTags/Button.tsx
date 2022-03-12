interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    classNameButton: string;
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({classNameButton, text, onClick}) => {
    return (
        <button className={classNameButton} onClick={() => onClick()}>{text}</button>
    )
}

export default Button;