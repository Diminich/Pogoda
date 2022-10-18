import { Dispatch } from "redux";
import { actionBodySearchCity } from "../../../redux/bodySearchCity-reducer";

export const searchInputError = (dispatch: Dispatch, error: number) => {
    switch (error) {
        case 404: {
            dispatch(actionBodySearchCity.isActiveError(true));
            break;
        }

        default: {
            dispatch(actionBodySearchCity.isActiveError(false));

        }
    }
}