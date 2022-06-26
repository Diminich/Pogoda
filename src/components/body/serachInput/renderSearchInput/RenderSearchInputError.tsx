import { IntlShape } from "react-intl";
import { useDispatch } from "react-redux";
import { actionBodySearchCity } from "../../../../redux/bodySearchCity-reducer";
import Span from "../../../htmlTags/Span";

interface RenderSearchInputErrorProps {
    classNameRenderSearchInputError: { readonly [key: string]: string; };
    error: number;
    intl: IntlShape;
}

const RenderSearchInputError: React.FC<RenderSearchInputErrorProps> = ({ classNameRenderSearchInputError, error, intl }) => {
    const styles = classNameRenderSearchInputError;
    const dispatch = useDispatch();

    switch (error) {
        case 404: {
            dispatch(actionBodySearchCity.isActiveError(true));
            return (
                <Span classNameSpan={styles.errorMessage} text={intl.formatMessage({ id: 'body.error' })} />
            )
        }

        default: {
            dispatch(actionBodySearchCity.isActiveError(false));
            return (
                <></>
            )
        }
    }
}

export default RenderSearchInputError;