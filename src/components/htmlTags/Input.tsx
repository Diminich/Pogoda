interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    classNameInput?: string;
    placeholderText?: string;
}


export const Input: React.FC<InputProps> = ({ classNameInput, placeholderText }) => {

    return (
        <input className={classNameInput} placeholder={placeholderText} />
    )
};