interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
    classNameSpan?: string;
    text?: string | number;
    onClickSpan?: () => void;
}

const Span: React.FC<SpanProps> = ({ classNameSpan, text, onClickSpan }) => {
    return (
        <span className={classNameSpan} onClick={onClickSpan}>
            {text}
        </span>
    )
}

export default Span;