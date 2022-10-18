interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
    classNameSpan?: string;
    text?: string | number;
    onClickSpan?: () => void;
}

export const Span: React.FC<SpanProps> = ({ classNameSpan, text, onClickSpan }) => {
    return (
        <span className={classNameSpan} onClick={onClickSpan}>
            {text}
        </span>
    )
};