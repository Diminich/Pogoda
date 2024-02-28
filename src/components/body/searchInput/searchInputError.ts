import { Dispatch } from "redux";
import { isActiveErrorAction } from "../../../redux/actions/bodySearchCityActions";

export const searchInputError = (dispatch: Dispatch, error: number) => {
    switch (error) {
        case 404: {
            dispatch(isActiveErrorAction(true));
            break;
        }

        default: {
            dispatch(isActiveErrorAction(false));

        }
    }
}