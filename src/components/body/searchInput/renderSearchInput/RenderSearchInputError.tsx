import { IntlShape } from "react-intl";
import { useDispatch } from "react-redux";
import { actionBodySearchCity } from "../../../../redux/bodySearchCity-reducer";
import Span from "../../../htmlTags/Span";

interface RenderSearchInputErrorProps {
    error: number;
    intl: IntlShape;
}

const RenderSearchInputError: React.FC<RenderSearchInputErrorProps> = ({ error, intl }) => {
    const dispatch = useDispatch();

    switch (error) {
        case 404: {
            dispatch(actionBodySearchCity.isActiveError(true));
            return (
                <Span classNameSpan='errorMessage' text={intl.formatMessage({ id: 'body.error' })} />
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