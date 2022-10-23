interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
    classNameSpan?: string;
    specialCharacters?: string;
    text?: string | number;
    onClickSpan?: () => void;
}

export const Span: React.FC<SpanProps> = ({ classNameSpan, text, onClickSpan, specialCharacters = null }) => {
    return (
        <span className={classNameSpan} onClick={onClickSpan}>
            {text}{specialCharacters}
        </span>
    )
};