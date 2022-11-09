interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: string;
    specialCharacters?: string;
    text?: string | number;
    onClickSpan?: () => void;
}

export const Span: React.FC<SpanProps> = ({ className, text, onClickSpan, specialCharacters = null }) => {
    return (
        <span className={className} onClick={onClickSpan}>
            {text}{specialCharacters}
        </span>
    )
};